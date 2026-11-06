# Migration checklist: original site → static GitHub Pages site

Compares `sky-society-master` (Next.js server + SQLite + Gmail) with
`sky-society-static` (static export for GitHub Pages). Checked on 2026-10-25 by
running both production builds side by side and testing in a browser.

| Status | Meaning                                           |
| ------ | ------------------------------------------------- |
| ✅     | Same as the original                              |
| 🔄     | Same purpose, different mechanism                 |
| 🛠     | Was wrong in the original, fixed during migration |
| ➖     | Removed on purpose (server-only or unused)        |
| ⚠️     | **Action needed before or after going live**      |

## Summary

- **Content:** all 56 pages (28 pages × English/Tamil) compared — same titles,
  descriptions, keywords, text, images, internal links, maps and video embeds.
  Every difference found is one of the intentional changes listed below.
- **Files:** 197 files identical (including every image), 23 modified,
  9 added, 19 removed.
- **Translations:** 4,054 strings compared — 7 changed, all intentional.
- **67 checks:** 22 ✅ same, 15 🔄 replaced, 21 🛠 fixed, 7 ➖ removed,
  2 ⚠️ need action. Nothing from the original was lost unintentionally.
- **Open items:** 6 (see [Action needed](#action-needed)).

## 1. Pages and content

| Check                                     | Status | Notes                                                                 |
| ----------------------------------------- | :----: | --------------------------------------------------------------------- |
| All 28 pages exist in English and Tamil   |   ✅   | 56/56 return 200                                                      |
| Page titles, descriptions, keywords       |   ✅   | Identical on all 56 pages                                             |
| Page text                                 |   ✅   | Identical apart from the menu-button label below                      |
| Images on each page                       |   ✅   | Same images on every page (served as resized WebP copies, see §5)     |
| Internal links on each page               |   ✅   | Same destinations (now with `/en/` or `/ta/` in front, see §2)        |
| Google Maps and YouTube embeds            |   ✅   | Identical                                                             |
| Articles (12) and article list            |   ✅   | "Read more" opens the article in the current language                 |
| Notifications page                        |   ✅   | Same notifications (read from the translation files in both versions) |
| `<html lang>` on Tamil pages              |   🛠   | Original said `en` on Tamil pages; now `ta`                           |
| Notifications page newsletter placeholder |   🛠   | Original showed the raw text `emailPlaceholder`                       |
| Menu button label for screen readers      |   🛠   | Original read out `nav_toggle_menu`; now "Open menu"                  |

## 2. URLs and redirects

| Check                                                  | Status | Notes                                                                                                       |
| ------------------------------------------------------ | :----: | ----------------------------------------------------------------------------------------------------------- |
| Page addresses                                         |   🔄   | English moved from `/about-sky` to `/en/about-sky/`; Tamil stays `/ta/about-sky/`                           |
| Old English links (`/our-guru` etc.)                   |   🔄   | 27/27 redirect to the same page in the visitor's language (was done by server middleware)                   |
| Home page `/`                                          |   🔄   | Redirects to `/en/` or `/ta/`: saved choice first, then browser language — same order as the old middleware |
| `/agm2025`, `/agm2026`, `/skycourse`, `/kayakalpayoga` |   🔄   | Same 4 Google Forms; now instant redirects (also under `/en/` and `/ta/`), managed in `redirects.json`      |
| Unknown address                                        |   🔄   | Custom bilingual "Page not found" page with links to both home pages                                        |

## 3. Language switching

| Check                                 | Status | Notes                                                                |
| ------------------------------------- | :----: | -------------------------------------------------------------------- |
| English → Tamil, Tamil → English      |   ✅   | Desktop menu bar and mobile menu, on every page tested               |
| Stays on the same page when switching |   ✅   | e.g. `/ta/our-guru/` ↔ `/en/our-guru/`                              |
| Choice is remembered                  |   ✅   | Cookie (as before) plus browser storage, used by the redirects in §2 |
| Works under a GitHub project path     |   ✅   | Tested at `/<repo-name>/en/...`                                      |

## 4. Forms

| Check                            | Status | Notes                                                                                                                                         |
| -------------------------------- | :----: | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Contact form delivery            |   🔄   | Was: server saved to database + sent Gmail. Now: Web3Forms emails it. Tested with the request intercepted: all fields sent, same subject line |
| Newsletter delivery              |   🔄   | Same change; same "New Subscriber Alert" subject                                                                                              |
| Success / failure messages       |   ✅   | Success clears the form; failure keeps the text so the visitor can retry                                                                      |
| Contact form field validation    |   🛠   | Red border now appears on the field that's wrong (original never showed it)                                                                   |
| Double submit / stuck spinner    |   🛠   | Button disabled while sending; network errors no longer leave it spinning                                                                     |
| Spam protection                  |   🛠   | Hidden honeypot field added (original had none)                                                                                               |
| Newsletter confirmation text     |   🛠   | Was leftover template text ("added you to our waitlist… when we launch")                                                                      |
| Submissions stored in a database |   ➖   | No database any more; the inbox is the record                                                                                                 |
| Forms work before setup          |   ⚠️   | Until a Web3Forms key is added, both forms open a pre-filled email in the visitor's mail app instead                                          |

## 5. Images and media

| Check                                     | Status | Notes                                                                                  |
| ----------------------------------------- | :----: | -------------------------------------------------------------------------------------- |
| All image files carried over              |   ✅   | `public/` identical (89 images)                                                        |
| Image resizing                            |   🔄   | Was resized by the server on each first request; now resized once at build time (WebP) |
| Published size                            |   🛠   | 42 MB instead of 142 MB of originals; full gallery ≈ 5.7 MB on a high-DPI screen       |
| Gallery lightbox (open, prev/next, close) |   ✅   | Larger copy in full-screen view (original capped at 1200 px)                           |
| YouTube video thumbnails                  |   ✅   | All 25 load                                                                            |
| YouTube channel pictures                  |   🛠   | 3 of 5 were dead links in the original; all 5 updated                                  |
| YouTube channel links                     |   🛠   | 3 of 5 went to "page not found"; now use permanent channel IDs                         |

## 6. Navigation and interactive parts

| Check                                  | Status | Notes                                                           |
| -------------------------------------- | :----: | --------------------------------------------------------------- |
| Desktop dropdown menu links            |   ✅   | Open in the current language                                    |
| Mobile menu links                      |   ✅   | All 16 links in the current language                            |
| Mobile menu: Course Schedule, Forms    |   🛠   | Removed — both went to pages that never existed (404)           |
| Header logo, footer "Contact Us"       |   ✅   | Current language                                                |
| Home page course cards                 |   ✅   | Open the course page in the current language                    |
| Course sign-up buttons                 |   ✅   | English shows "Course Unavailable"; Tamil opens its Google Form |
| Accessibility warnings (menu, gallery) |   🛠   | Missing dialog titles added                                     |

## 7. Server features

| Feature                              | Status | Notes                                                               |
| ------------------------------------ | :----: | ------------------------------------------------------------------- |
| `POST /api/submitContactForm`        |   🔄   | Replaced by Web3Forms (§4)                                          |
| `POST /api/subscribe`                |   🔄   | Replaced by Web3Forms (§4)                                          |
| `GET /api/youtubeChannel`            |   ➖   | Not used by any page; also contained a hardcoded API key            |
| `GET /api/[locale]/getNotifications` |   ➖   | Not used by any page (notifications come from translation files)    |
| Language middleware                  |   🔄   | Replaced by `/en/` + `/ta/` pages and generated redirect pages (§2) |
| SQLite database + Prisma             |   ➖   | Only stored form submissions                                        |
| Gmail sending (nodemailer)           |   🔄   | Web3Forms sends the emails                                          |
| Log files (winston)                  |   ➖   | No server to log                                                    |
| Firebase hosting config              |   ➖   | Was never compatible with the server version                        |

## 8. Translations (all 7 changes)

| File                    | Key                             | Change                              |
| ----------------------- | ------------------------------- | ----------------------------------- |
| `en/notifications.json` | `emailPlaceholder`              | Added (was missing)                 |
| `ta/notifications.json` | `emailPlaceholder`              | Added (was missing)                 |
| `en/videos.json`        | `channels[0..4].channelPicture` | Updated to current YouTube pictures |

## 9. Security

| Check                               | Status | Notes                                                                                                                                    |
| ----------------------------------- | :----: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Gmail app password                  |   🛠   | Not in the static project (was in `.env` and `README.md`)                                                                                |
| YouTube API key                     |   🛠   | Not in the static project                                                                                                                |
| Subscriber / contact personal data  |   🛠   | `dev.db` and the Excel export are not carried over                                                                                       |
| `.env` files ignored by git         |   🛠   | `.gitignore` now covers all `.env*` files                                                                                                |
| Dependency vulnerabilities          |   🛠   | 10 (1 critical, 7 high) → 6 (1 high, 5 moderate); the rest are in PostCSS, which only runs during the build and doesn't ship to visitors |
| Secrets still in the old repository |   ⚠️   | Revoke and replace both keys; they remain in the old repo's history                                                                      |

## 10. Build, tooling and deployment

| Check                                  | Status | Notes                                                              |
| -------------------------------------- | :----: | ------------------------------------------------------------------ |
| Hosting                                |   🔄   | Node server → GitHub Pages (no server to maintain)                 |
| Deployment                             |   🔄   | GitHub Actions builds and publishes on every push to `main`        |
| Every page pre-built                   |   🛠   | Original rendered every page on each request                       |
| Custom domain or `/<repo>/` path       |   ✅   | Both tested                                                        |
| Type check / lint                      |   🛠   | Both pass; lint was crashing in the original                       |
| Local preview                          |   🔄   | `npm run preview` serves the build like GitHub Pages               |
| `npm run dev` alongside a build        |   🛠   | Dev now uses its own folder, so a build can't break the dev server |
| `excel:export`, `seed`, Prisma scripts |   ➖   | No database                                                        |
| `CODEOWNERS`                           |   🛠   | Fixed syntax so GitHub actually assigns owners                     |

## Action needed

1. ⚠️ **Create the GitHub repository**, push this folder, and set
   **Settings → Pages → Source: GitHub Actions** (see README).
2. ⚠️ **Add the Web3Forms key** as repository variable `WEB3FORMS_ACCESS_KEY`
   so the forms send email instead of opening a mail app.
3. ⚠️ **Custom domain** (if moving skysociety.org.sg): add it under
   Settings → Pages and update DNS.
4. ⚠️ **Export existing records** from the live server's database (newsletter
   subscribers and contact messages) before shutting it down — they are not
   carried over.
5. ⚠️ **Revoke the Gmail app password and YouTube API key** exposed in the old
   repository.
6. ⚠️ **Decide on two renamed YouTube channels**: "VeWa Vethathiri" is now
   "Param Mei Waves", and "Vethathiri Kundalini Yoga" is now "Simplified
   Kundalini Yoga"; the site still shows the old names.

## Not covered by this check

- Real email delivery through Web3Forms (needs your key; the request itself was verified).
- The live GitHub Pages URL (not deployed yet); the same build was tested locally.
- Older browsers and screen readers beyond the checks above.
