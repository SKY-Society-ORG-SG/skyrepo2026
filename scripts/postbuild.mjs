// Runs after `next build` (which exports the site to out/) and finishes the
// static site for GitHub Pages:
//   1. resized WebP copies of public/images for the custom image loader
//   2. redirect pages: "/" and every un-prefixed URL ("/our-guru/") send the
//      visitor to /en/... or /ta/... (saved choice, then browser language)
//   3. redirect pages for the short links in redirects.json (Google Forms)
//   4. drops the full-size originals from out/ unless a page links to them
//   5. .nojekyll so GitHub Pages serves the _next/ folder as-is
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

import i18nConfig from '../i18nConfig.js';
import { IMAGE_WIDTHS } from '../image-widths.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'out');
const imagesDir = path.join(root, 'public', 'images');
const cacheDir = path.join(root, '.cache', 'images');
const basePath = process.env.PAGES_BASE_PATH || '';
const { locales, defaultLocale } = i18nConfig;

const IMAGE_EXT = /\.(png|jpe?g|webp)$/i;
const toPosix = (p) => p.split(path.sep).join('/');

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((e) => {
      const full = path.join(dir, e.name);
      return e.isDirectory() ? walk(full) : [full];
    }),
  );
  return files.flat();
}

async function exists(file) {
  return fs
    .stat(file)
    .then(() => true)
    .catch(() => false);
}

async function writeFile(file, content) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, content);
}

// 1. Resized images ---------------------------------------------------------
// Cached in .cache/images (kept between CI runs) so unchanged photos are not
// re-encoded on every build.
async function buildImages() {
  const sources = (await walk(imagesDir)).filter((f) => IMAGE_EXT.test(f));
  let generated = 0;

  const processOne = async (src) => {
    const rel = path.relative(imagesDir, src).replace(IMAGE_EXT, '.webp');
    const srcTime = (await fs.stat(src)).mtimeMs;
    const image = sharp(src).rotate();
    for (const width of IMAGE_WIDTHS) {
      const cached = path.join(cacheDir, String(width), 'images', rel);
      const cachedTime = await fs
        .stat(cached)
        .then((s) => s.mtimeMs)
        .catch(() => 0);
      if (cachedTime < srcTime) {
        await fs.mkdir(path.dirname(cached), { recursive: true });
        await image
          .clone()
          .resize({ width, withoutEnlargement: true })
          .webp({ quality: 78 })
          .toFile(cached);
        generated++;
      }
    }
  };

  // A few at a time: the originals are large and sharp is memory hungry.
  const queue = [...sources];
  await Promise.all(
    Array.from({ length: 4 }, async () => {
      while (queue.length) await processOne(queue.shift());
    }),
  );

  await fs.cp(cacheDir, path.join(outDir, '_img'), { recursive: true });
  console.log(
    `images: ${sources.length} sources x ${IMAGE_WIDTHS.length} widths (${generated} newly generated)`,
  );
  return sources;
}

// 2 + 3. Redirect pages -------------------------------------------------------
const escapeHtml = (s) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        c
      ],
  );

function redirectPage({ target, script, links }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Simplified Kundalini Yoga Society</title>
<link rel="canonical" href="${escapeHtml(target)}">
<script>${script}</script>
<noscript><meta http-equiv="refresh" content="0; url=${escapeHtml(target)}"></noscript>
</head>
<body style="font-family: system-ui, sans-serif; text-align: center; padding: 3rem">
<p>${links}</p>
</body>
</html>
`;
}

function localeRedirectPage(pathname) {
  const target = (locale) => `${basePath}/${locale}${pathname}`;
  // Same order as the old middleware: saved choice, then browser language.
  const script = `(function(){var L=${JSON.stringify(locales)},p;try{p=localStorage.getItem("NEXT_LOCALE")}catch(e){}if(L.indexOf(p)<0){var m=document.cookie.match(/(?:^|; )NEXT_LOCALE=([^;]+)/);p=m&&m[1]}if(L.indexOf(p)<0){var n=((navigator.languages&&navigator.languages[0])||navigator.language||"").slice(0,2).toLowerCase();p=L.indexOf(n)>=0?n:${JSON.stringify(defaultLocale)}}location.replace(${JSON.stringify(basePath + '/')}+p+${JSON.stringify(pathname)}+location.search+location.hash)})();`;
  const links = [
    `<a href="${escapeHtml(target('en'))}">English</a>`,
    `<a href="${escapeHtml(target('ta'))}">தமிழ்</a>`,
  ].join(' · ');
  return redirectPage({ target: target(defaultLocale), script, links });
}

function externalRedirectPage(url) {
  const script = `location.replace(${JSON.stringify(url)});`;
  const links = `Redirecting to <a href="${escapeHtml(url)}">${escapeHtml(url)}</a>`;
  return redirectPage({ target: url, script, links });
}

async function buildRedirects() {
  const redirects = JSON.parse(
    await fs.readFile(path.join(root, 'redirects.json'), 'utf8'),
  );
  for (const [from, url] of Object.entries(redirects)) {
    const route = from.replace(/^\/+|\/+$/g, '');
    for (const prefix of ['', ...locales]) {
      await writeFile(
        path.join(outDir, prefix, route, 'index.html'),
        externalRedirectPage(url),
      );
    }
  }

  // Every page under the default locale gets an un-prefixed twin that redirects,
  // so old links like /our-guru keep working.
  const localePages = (await walk(path.join(outDir, defaultLocale)))
    .filter((f) => path.basename(f) === 'index.html')
    .map((f) => toPosix(path.relative(path.join(outDir, defaultLocale), f)));
  let count = 0;
  for (const page of localePages) {
    const dir = path.dirname(page) === '.' ? '' : path.dirname(page);
    const target = path.join(outDir, dir, 'index.html');
    if (await exists(target)) continue;
    await writeFile(target, localeRedirectPage(dir ? `/${dir}/` : '/'));
    count++;
  }
  console.log(
    `redirects: ${Object.keys(redirects).length} short links, ${count} language redirects`,
  );
}

// 4. Drop unreferenced originals ---------------------------------------------
// Pages request images through the loader (/_img/...), so the multi-MB
// originals are only kept when an HTML/CSS file points at them directly
// (e.g. the favicon).
async function pruneOriginals(sources) {
  const texts = (await walk(outDir)).filter((f) => /\.(html|css)$/.test(f));
  const referenced = new Set();
  const base = basePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(
    `(?:src|href|content)=["']${base}/images/([^"'?#]+)|url\\(["']?${base}/images/([^"')?#]+)`,
    'g',
  );
  for (const file of texts) {
    const text = await fs.readFile(file, 'utf8');
    for (const m of text.matchAll(pattern)) {
      referenced.add(decodeURI(m[1] || m[2]));
    }
  }

  let removed = 0;
  for (const src of sources) {
    const rel = toPosix(path.relative(imagesDir, src));
    if (referenced.has(rel)) continue;
    await fs.rm(path.join(outDir, 'images', rel), { force: true });
    removed++;
  }
  console.log(
    `originals: kept ${referenced.size} referenced directly, removed ${removed}`,
  );
}

const start = Date.now();
if (!(await exists(outDir))) {
  throw new Error('out/ not found - run `next build` first');
}
const sources = await buildImages();
await buildRedirects();
await pruneOriginals(sources);
await writeFile(path.join(outDir, '.nojekyll'), '');
console.log(`postbuild done in ${((Date.now() - start) / 1000).toFixed(1)}s`);
