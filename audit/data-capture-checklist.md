# Data Capture Checklist — Techni Construction "Before" Snapshot

Everything below is free, needs ~45 minutes in a normal browser, and fills the
**[TO CAPTURE]** slots in `before-report.md`. Save every screenshot with the
date visible into `audit/evidence/` (create the folder; keep originals unedited).

## 1. PageSpeed (10 min) — ✅ DONE 9 Aug 2026, numbers in `before-report.md` §3
- Still to do: save the pagespeed.web.dev result **screenshots** (mobile +
  desktop, scores visible) into the evidence folder for the client pack.
- Re-run at pitch time if more than ~a month has passed, so the "before" is fresh.

## 2. GTmetrix (5 min)
- https://gtmetrix.com → run → download PDF → save to evidence folder.
- Note total page size and request count.

## 3. Google SERP evidence (10 min)
- Search (normal + incognito): `construction companies port elizabeth`,
  `builders port elizabeth`, `construction company gqeberha`.
  Screenshot page 1 of each; note where (if anywhere) techniconstruction.co.za appears.
- Search `site:techniconstruction.co.za` — screenshot; count results; note the
  duplicated homepage title and the `/author/techni/` entry.

## 4. Google Business Profile (5 min)
- Google Maps → "Techni Construction Port Elizabeth".
- Exists? Claimed ("Own this business?" link = unclaimed)? Stars? Review count?
  Photos? Screenshot.

## 5. Site walk-through on a phone (10 min)
- Load the site on an actual phone. Screenshot: homepage, projects page,
  one project, contact page.
- Time two tasks: (a) place a call in as few taps as possible,
  (b) submit/attempt an enquiry. Note friction (no click-to-call? no form?).
- Desktop full-page screenshots of every page (browser DevTools →
  Ctrl+Shift+P → "Capture full size screenshot").

## 6. Build forensics (5 min, desktop)
- View source of the homepage: note `wp-content/themes/«THEME-NAME»`,
  any page-builder markers (elementor/divi/wpbakery), `generator` meta tag
  (WordPress version).
- Footer copyright year. Newest project/post date anywhere on the site.
- https://www.wappalyzer.com/lookup/ → the domain → screenshot the stack.

## 7. From the owner (ask once, in one message)
- Current monthly cost + who invoices it (hosting? "web guy" retainer?).
- Where email (`admin@techniconstruction.co.za`) is hosted.
- WordPress/hosting/domain (registrar) logins, or at least confirmation of who holds them.
- Google Search Console access if it exists (adds real Google traffic numbers to the report).
- The content pack (see `rebuild-plan.md` → "Content is the critical path").

## Evidence folder naming

```
audit/evidence/2026-08-XX-psi-mobile.png
audit/evidence/2026-08-XX-psi-desktop.png
audit/evidence/2026-08-XX-gtmetrix.pdf
audit/evidence/2026-08-XX-serp-construction-companies-pe.png
audit/evidence/2026-08-XX-gbp.png
audit/evidence/2026-08-XX-mobile-home.png
...
```
