# Production migration runbook: skysociety.org.sg → GitHub Pages

Moves the live site from the current Next.js server to the static site in this
repository. See [ACTION_ITEMS.md](ACTION_ITEMS.md) for just the GitHub and DNS
settings, [MIGRATION_CHECKLIST.md](MIGRATION_CHECKLIST.md) for what
changed and [README.md](README.md) for day-to-day use.

## Current setup (checked 2026-10-25)

| What                           | Currently                                         |
| ------------------------------ | ------------------------------------------------- |
| Domain DNS                     | Vodien (`ns1–3.vodien.com`)                       |
| Website                        | Own server at `128.199.147.199` (nginx + Next.js) |
| `www.skysociety.org.sg`        | CNAME to `skysociety.org.sg`                      |
| Email (info@skysociety.org.sg) | ImprovMX forwarding — MX records + SPF TXT record |

## What you need before starting

- [ ] **Vodien login** — to change DNS records.
- [ ] **SSH access to the current server** (`128.199.147.199`) — to export the
      database — and the hosting account, to shut it down later.
- [ ] **A GitHub account for the society**, ideally a free organisation (e.g.
      `skysociety-sg`) so the site isn't tied to one person. Add the code owners
      as members.
- [ ] **A Web3Forms access key** (web3forms.com), created with the address that
      should receive form messages, e.g. info@skysociety.org.sg.
- [ ] **The Google account** that owns the Gmail app password used by the old
      site, and the Google Cloud project with the old YouTube API key.

## Phase 1 — Prepare (no visitor impact)

- [ ] **Export the live data.** On the server, in the app folder (check
      `DATABASE_URL` in the server's `.env` if the database is elsewhere):

  ```bash
  sqlite3 -header -csv prisma/dev.db "select email, createdAt from subscriber where isSubscribed = 1;" > subscribers.csv
  ```

  ```bash
  sqlite3 -header -csv prisma/dev.db "select name, email, phone, message, createdAt from contactForm;" > contact-messages.csv
  ```

  These contain personal data — store them privately, never in the repository.

- [ ] **Create the GitHub repository** and push this folder as its root.
- [ ] **Settings → Pages → Build and deployment → Source: GitHub Actions.**
- [ ] **Settings → Secrets and variables → Actions → Variables:** add
      `WEB3FORMS_ACCESS_KEY` (and optionally `CONTACT_EMAIL`).
- [ ] **Run the workflow** (Actions → Deploy to GitHub Pages → Run workflow).
- [ ] **Test on `https://<org>.github.io/<repo>/`** using the checklist. Send one
      real contact message and one newsletter sign-up; confirm both arrive.
- [ ] **Content decisions:** names of the two renamed YouTube channels, whether
      `/agm2025` is still needed (`redirects.json`), and whether the 2024
      notifications need updating (`locales/*/notifications.json`).

## Phase 2 — Switch over

- [ ] **A day before:** in Vodien, lower the TTL of the `@` A record and the
      `www` record to about 300 seconds, so the switch (or a rollback) takes
      effect quickly.
- [ ] **GitHub first, DNS second:** in the repository, **Settings → Pages →
      Custom domain** → `skysociety.org.sg` → Save. Doing this before changing
      DNS stops anyone else from claiming the domain on GitHub.
- [ ] **Verify the domain** in the organisation's settings (**Settings → Pages
      → Add a domain**); it gives you one TXT record to add in Vodien.
- [ ] **Re-run the deploy workflow.** The earlier build was made for the
      `/<repo>/` address and would load without styles or images at the
      domain root.
- [ ] **Change these records in Vodien:**

  | Record      | Change from         | Change to                                                                                  |
  | ----------- | ------------------- | ------------------------------------------------------------------------------------------ |
  | `@` A       | `128.199.147.199`   | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`                 |
  | `@` AAAA    | _(none)_            | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |
  | `www` CNAME | `skysociety.org.sg` | `<org>.github.io` (no repository name)                                                     |

  **Do not touch the MX records or the SPF (TXT) record** — they deliver
  info@skysociety.org.sg email. Don't add wildcard (`*`) records.

- [ ] **Wait** for DNS to update (minutes, up to 24 hours), then tick **Enforce
      HTTPS** under Settings → Pages once GitHub offers it (can also take up to
      24 hours).

## Phase 3 — Check the live site

- [ ] `https://skysociety.org.sg` opens the English home page (`/en/`)
- [ ] `/ta/` opens the Tamil home page; the language switch works both ways
- [ ] `https://www.skysociety.org.sg` redirects to `https://skysociety.org.sg`
- [ ] Padlock shows (valid HTTPS certificate)
- [ ] Old links work: `/our-guru`, `/contact-us`, `/media/gallery`
- [ ] Short links work: `/agm2026`, `/skycourse`, `/kayakalpayoga`
- [ ] One real contact message and newsletter sign-up arrive in the inbox
- [ ] info@skysociety.org.sg still receives email

**Rollback:** put the `@` A record back to `128.199.147.199` (remove the AAAA
records) and the `www` CNAME back to `skysociety.org.sg`. Keep the old server
running for 1–2 weeks so this stays possible.

## Phase 4 — Shut down the old setup

- [ ] Export the database again (anything submitted during the switch).
- [ ] Stop the old app, delete its `.env` and database from the server, then
      delete the server.
- [ ] **Revoke the old Gmail app password and YouTube API key.** Both are
      exposed in the old repository. If that repository is public, do this in
      Phase 1 instead — the old forms then stop emailing, but submissions are
      still saved in its database and get exported here.
- [ ] Make the old repository private or archive it.

## Also worth doing

- [ ] **Fix the SPF record:** it currently has a non-breaking space before
      `~all`, which mail checkers can reject. Retype it in Vodien as
      `v=spf1 include:spf.improvmx.com ~all`.
- [ ] **Privacy notice** (if the society has one): mention that GitHub logs
      visitor IP addresses and that form messages are delivered by Web3Forms.
