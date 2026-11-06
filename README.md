# SKY Society website (static)

The Simplified Kundalini Yoga Society website as a fully static site, hosted
free on GitHub Pages. Built with Next.js (static export), in English and Tamil.

There is no server and no database: every page is pre-built as plain HTML
when you push to `main`, and GitHub Pages serves the files.

## Commands

```bash
npm ci            # install
npm run dev       # edit with live reload at http://localhost:3000/en/
npm run build     # build the static site into out/
npm run preview   # serve out/ like GitHub Pages does, at http://localhost:3000/
npm run lint
```

## Deploying to GitHub Pages

1. Create a GitHub repository and push the **contents of this folder** as the
   repository root (the workflow lives in `.github/workflows/deploy.yml`).
2. In the repository: **Settings → Pages → Build and deployment → Source:
   GitHub Actions**.
3. Push to `main` (or run the workflow from the **Actions** tab). The site is
   published at `https://<user>.github.io/<repo>/`.

The workflow works out the URL prefix (`/<repo>`) by itself, so nothing needs
changing for a project site.

**Custom domain (e.g. skysociety.org.sg):** add it under **Settings → Pages →
Custom domain** and create the DNS records GitHub shows there. The next
deployment automatically switches to serving from the domain root.

## Contact form and newsletter

These used to be sent by the server. They now go through
[Web3Forms](https://web3forms.com), which emails each submission to you:

1. Create an access key on web3forms.com using the email address that should
   receive the messages.
2. In the repository: **Settings → Secrets and variables → Actions →
   Variables → New repository variable**, name `WEB3FORMS_ACCESS_KEY`, value =
   the key. (The key is designed to be public, so a variable is fine.)
3. Re-run the deployment.

Until a key is set, both forms open a pre-filled email to
`info@skysociety.org.sg` in the visitor's mail app instead. To change that
address, add a repository variable `CONTACT_EMAIL`.

Subscribers and contact messages are no longer stored in a database; your
inbox is the record.

## Content

| What                        | Where                                              |
| --------------------------- | -------------------------------------------------- |
| Page text (English / Tamil) | `locales/en/*.json`, `locales/ta/*.json`           |
| Notifications page          | `locales/*/notifications.json`                     |
| Videos page                 | `locales/*/videos.json`                            |
| Images                      | `public/images/` (reference them as `/images/...`) |
| Short links to Google Forms | `redirects.json`                                   |

Commit and push to `main`; the site rebuilds in a few minutes.

## How it works

- **Languages:** pages live at `/en/...` and `/ta/...`. The home page `/`
  sends visitors to the language they last picked, otherwise their browser
  language. Old addresses without a language (`/our-guru`) redirect the same
  way, so existing links keep working.
- **Short links:** each entry in `redirects.json` (e.g. `/agm2026`) becomes a
  page that forwards to the Google Form, at `/agm2026`, `/en/agm2026` and
  `/ta/agm2026`.
- **Images:** GitHub Pages can't resize images on request, so
  `scripts/postbuild.mjs` makes 384/640/1280/1920px WebP copies of everything
  in `public/images/` at build time, and `lib/imageLoader.ts` points
  `next/image` at them. Original photos stay in the repository but are left
  out of the published site. Show images with `next/image` (or the existing
  `ImageSkeleton` component) rather than a plain `<img>`, which would request
  the original.
- **404s:** `app/not-found.tsx` becomes `404.html`, which GitHub Pages serves
  for unknown addresses.
