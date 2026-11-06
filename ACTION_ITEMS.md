# Action items: GitHub Pages and domain settings

Settings needed to publish this site at **skysociety.org.sg**. Do them in this
order. Replace `<org>` with the GitHub organisation (or user) name and `<repo>`
with the repository name. Full background:
[PRODUCTION_MIGRATION.md](PRODUCTION_MIGRATION.md).

## A. GitHub

- [ ] **A1. Create the repository** under the society's GitHub organisation,
      **public** (required for free GitHub Pages).
- [ ] **A2. Upload the site:** unzip and push the contents of
      `sky-society-static` as the repository root (`package.json` and
      `.github/` at the top level) to the `main` branch.
- [ ] **A3. Settings → Pages → Build and deployment → Source:** select
      **GitHub Actions**.
- [ ] **A4. Settings → Secrets and variables → Actions → Variables → New
      repository variable:**

  | Name                   | Value                                                                    |
  | ---------------------- | ------------------------------------------------------------------------ |
  | `WEB3FORMS_ACCESS_KEY` | Key from web3forms.com (for the inbox that should receive form messages) |
  | `CONTACT_EMAIL`        | Optional — defaults to `info@skysociety.org.sg`                          |

- [ ] **A5. Actions → Deploy to GitHub Pages → Run workflow.** Wait for the
      green tick.
- [ ] **A6. Test** `https://<org>.github.io/<repo>/` — pages, language switch,
      one contact message and one newsletter sign-up arriving by email.
- [ ] **A7. Settings → Pages → Custom domain:** enter `skysociety.org.sg` →
      **Save**. _(Before step B2.)_
- [ ] **A8. Organisation Settings → Pages → Add a domain:**
      `skysociety.org.sg`. GitHub shows a TXT record — add it in step B1.
- [ ] **A9. Actions → Run workflow** again, so the site is rebuilt for the
      domain root.

## B. Domain DNS (Vodien)

- [ ] **B0. A day before:** lower the TTL of the `@` and `www` records to 300
      seconds.
- [ ] **B1. Add** the TXT record from step A8 (name looks like
      `_github-pages-challenge-<org>`), then click **Verify** in GitHub.
- [ ] **B2. Change the website records:**

  | Type  | Host  | Remove              | Add                   |
  | ----- | ----- | ------------------- | --------------------- |
  | A     | `@`   | `128.199.147.199`   | `185.199.108.153`     |
  | A     | `@`   |                     | `185.199.109.153`     |
  | A     | `@`   |                     | `185.199.110.153`     |
  | A     | `@`   |                     | `185.199.111.153`     |
  | AAAA  | `@`   |                     | `2606:50c0:8000::153` |
  | AAAA  | `@`   |                     | `2606:50c0:8001::153` |
  | AAAA  | `@`   |                     | `2606:50c0:8002::153` |
  | AAAA  | `@`   |                     | `2606:50c0:8003::153` |
  | CNAME | `www` | `skysociety.org.sg` | `<org>.github.io`     |

- [ ] **B3. Leave the email records exactly as they are:**
      MX `mx1.improvmx.com` (10), MX `mx2.improvmx.com` (20). Don't add
      wildcard (`*`) records.
- [ ] **B4. Fix the SPF TXT record** (recommended): it contains a hidden
      non-breaking space. Delete and retype it as
      `v=spf1 include:spf.improvmx.com ~all`.

## C. After DNS updates (minutes, up to 24 hours)

- [ ] **C1. Settings → Pages:** tick **Enforce HTTPS** once it's available
      (up to 24 hours).
- [ ] **C2. Check:** `https://skysociety.org.sg` → English home,
      `https://www.skysociety.org.sg` redirects, padlock shows, `/agm2026`
      opens the Google Form, a test message arrives, and
      info@skysociety.org.sg still receives email.
- [ ] **C3. Keep the old server running for 1–2 weeks.**

**Rollback:** in Vodien, set the `@` A record back to `128.199.147.199`,
remove the four AAAA records, and set `www` back to `skysociety.org.sg`.
