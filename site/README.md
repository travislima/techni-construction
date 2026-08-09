# Techni Construction — production site

Astro static site implementing `design_handoff_techni_site/` (see `../design/`)
to the spec in `../audit/design-brief.md`.

## First run

```bash
cd site
npm install
npm run fetch-assets   # downloads real photos from the old site (needs normal internet)
npm run dev            # http://localhost:4321
```

The repo ships with solid-grey **placeholder images** so the build always
works; `npm run fetch-assets` overwrites them with the real photos from the
old site (manifest: `scripts/asset-manifest.mjs`). Astro/sharp re-encodes
everything to responsive AVIF/WebP at build time — never commit originals
larger than needed, just let the pipeline do the work.

## Before launch (checklist)

- [ ] `npm run fetch-assets` run and real photos committed
- [ ] `src/config.ts` → `formspreeEndpoint` set (free form at formspree.io,
      delivering to admin@techniconstruction.co.za; until set, the form falls
      back to a pre-filled mailto:)
- [ ] `src/config.ts` → `plausibleDomain` set (or swap in GA4 in `Base.astro`)
- [ ] Company-profile PDF added to `public/downloads/` and the Credentials
      page button pointed at it
- [ ] Static map image swapped into the Contact page placeholder
- [ ] `public/_redirects` re-checked against a fresh `site:` search of the
      old site
- [ ] Deploy to Cloudflare Pages / Netlify: build command `npm run build`,
      output `dist/`, root directory `site/`
- [ ] Verify PageSpeed ≥ 95 mobile on the preview URL (this is the
      after-report number)
- [ ] DNS cutover **only after confirming where email (MX) lives** — the
      brief's hard rule: never break admin@techniconstruction.co.za

## Adding a project

Copy any file in `src/content/projects/`, edit the fields, put the photo in
`src/assets/photos/`, reference it as `../../assets/photos/<name>` in
`thumb`. Only `name`, `sector`, `thumb`, `alt`, `order` are required. Add a
`caseStudy` block (see `house-venter.json`) to give it a detail page.

## Structure

- `src/pages/` — 7 pages + dynamic `projects/[slug]` for case studies + 404
- `src/content/projects/` — one JSON per project (18 at launch)
- `src/components/` — Header, Footer, ProjectCard, CTABand
- `src/styles/global.css` — the design tokens from the handoff README
- `scripts/` — asset manifest, fetcher, placeholder generator
- `public/_redirects` — 301 map from the old WordPress URLs
