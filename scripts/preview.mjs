// Serves out/ the way GitHub Pages does, to check a build before deploying:
// directory URLs serve index.html (adding the trailing slash), unknown URLs
// get 404.html. Respects PAGES_BASE_PATH, so you can preview a project-site
// build at http://localhost:3000/<repo-name>/.
import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'out');
const basePath = process.env.PAGES_BASE_PATH || '';
const port = Number(process.env.PORT) || 3000;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const isFile = (p) =>
  fs
    .stat(p)
    .then((s) => s.isFile())
    .catch(() => false);
const isDir = (p) =>
  fs
    .stat(p)
    .then((s) => s.isDirectory())
    .catch(() => false);

async function send(res, file, status = 200) {
  res.writeHead(status, {
    'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream',
  });
  res.end(await fs.readFile(file));
}

http
  .createServer(async (req, res) => {
    const url = new URL(req.url, 'http://localhost');
    let pathname = decodeURIComponent(url.pathname);

    if (basePath && !pathname.startsWith(basePath)) {
      return send(res, path.join(outDir, '404.html'), 404);
    }
    pathname = pathname.slice(basePath.length) || '/';

    const file = path.join(outDir, pathname);
    if (!file.startsWith(outDir)) {
      res.writeHead(400);
      return res.end();
    }

    if (await isFile(file)) return send(res, file);
    if (await isDir(file)) {
      if (!pathname.endsWith('/')) {
        res.writeHead(301, { Location: `${url.pathname}/${url.search}` });
        return res.end();
      }
      if (await isFile(path.join(file, 'index.html'))) {
        return send(res, path.join(file, 'index.html'));
      }
    }
    if (await isFile(`${file}.html`)) return send(res, `${file}.html`);
    return send(res, path.join(outDir, '404.html'), 404);
  })
  .listen(port, () => {
    console.log(`Previewing out/ at http://localhost:${port}${basePath}/`);
  });
