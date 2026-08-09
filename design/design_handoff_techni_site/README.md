# Handoff: Techni Construction — full site rebuild

## Overview
A 7-page credibility-first marketing site for Techni Construction (techniconstruction.co.za), a Gqeberha (Port Elizabeth) construction firm est. 1993, CIDB 7 GB, BEE Level 4. The site's job: pass tender vetting by architects/QSs/developers in minutes, and capture quote enquiries. It replaces a slow WordPress/Elementor site (mobile LCP 8.0 s, 3.2–4.5 MB pages).

## About the design files
The `.dc.html` files in this bundle are **design references created in HTML** — prototypes showing intended look and behaviour, not production code. Recreate them in the target stack below. All styling is inline on each element, so every value is readable directly in the markup.

## Target implementation (from the client brief — non-negotiable)
- **Stack:** Astro (preferred) or Eleventy. Projects as a content collection (one markdown/JSON file per project so a non-developer adds one by copying a file). No CMS, no framework runtime shipped to browser, no jQuery.
- **Hosting:** Cloudflare Pages or Netlify free tier. Domain stays; **do not touch MX records** — email lives on current hosting.
- **Performance budget:** mobile LCP < 2.0 s, page weight < 1 MB, one stylesheet, ≤ 2 small deferred JS files. Hero image preloaded with `fetchpriority="high"`, never lazy-loaded; ALL below-fold media lazy-loaded. Responsive images: `srcset`, AVIF/WebP with JPEG fallback, explicit width/height (CLS must stay ~0).
- **Fonts:** self-host Archivo + IBM Plex Mono (woff2, `font-display: swap`) — no font CDN in production. The prototypes use Google Fonts only for preview.
- **Forms:** Formspree / Netlify Forms / Cloudflare equivalent, delivering to admin@techniconstruction.co.za, with success + error states (success copy is in the prototype).
- **SEO:** titles as coded in each file's `<title>`; unique meta descriptions; `LocalBusiness` schema (+ ContactPoint, geo, hours) on home/contact; project pages as `CreativeWork`; XML sitemap; robots.txt; canonical URLs; **301 redirect map from every currently-indexed URL** (old `/projects/...` slugs → new project URLs, `/author/techni/` → home).
- **Measurement:** Plausible (or GA4) snippet slot, `tel:` click tracking, form-submit event, Search Console verification slot.
- **Accessibility:** alt text on every image (already written in the prototypes — reuse them), visible focus states (`:focus-visible` outline is in each file), WCAG AA contrast, semantic headings, form labels.

## Fidelity
**High-fidelity.** Colors, type, spacing, copy and interactions are final design intent — recreate pixel-perfectly. Exception: images are hotlinked from the old site as placeholders; production re-encodes them (see Assets).

## Design tokens
Colors (warm, low-chroma neutrals + one brick accent):
- Ink (text, dark bands): `#211B16`; ink hover: `#3A322B`
- Paper (page bg): `#F5F2ED`; card bg: `#FFFFFF`; hover wash: `#FAF8F4`
- Border/hairline: `#E2DCD2`; placeholder stripe alt: `#EDE8DF` / `#E4DED5` (also image-loading bg)
- Body secondary text: `#57503F`; muted meta: `#6E655A`; faint meta: `#8C8378`
- Accent brick red: `#8A2B1D`; hover: `#6F2116`; pale accent on dark: `#E8C9BE` / `#F2D5CC`
- Form input border: `#C9C1B4`; placeholder text: `#A89C8D`
- Semantic success (kept separate from accent): border `#3E6B3A`, bg `#EFF4EC`, text `#2E5230` / `#3A4A38`

Typography:
- Display/UI: **Archivo** — 900 for h1 (clamp 38–88px, line-height ~1.0, letter-spacing −.025em), 800 for h2 (clamp 28–44px, −.02em), 700 card titles (19–21px), 600 buttons/links (13.5–15px), 400 body (14.5–18px, line-height 1.6–1.7)
- Data/labels: **IBM Plex Mono** — 600 12–13.5px uppercase kickers with .14–.18em tracking; 400–500 13–15px for project metadata, phone numbers; `font-variant-numeric: tabular-nums` on all figures
- Buttons and cards are **square-cornered** (no border-radius anywhere except the 4px logo image)

Spacing: 1280px max content width, 32px page gutters, section padding 72–96px vertical, card grids `gap: 28px`, stat tiles as 1px-gap grids on `#E2DCD2` (hairline effect).

## Screens (one file per page; every page = SiteHeader + sections + SiteFooter)
- **Home.dc.html** — hero (78vh, min 640px, full-bleed photo, two gradient scrims: vertical `rgba(20,15,12)` .30→.12@38%→.86 plus a left-side 100deg .42→0@55% for headline legibility; kicker, h1 tagline, sub, 2 CTAs) → dark proof strip (5 mono items: EST. 1993 / CIDB 7 GB / BEE LEVEL 4 / MBA MEMBER / PROJECTS TO R200 M) → 3 flagship project cards (4:3 images, mono meta) → 3-column sectors band linking to filtered projects → credentials split (copy + 2×2 stat tiles: 7 GB, L4, 33, R200M) → "Since 1993" photo/story split → brick CTA band with phone.
- **Projects.dc.html** — h1 + intro, 4 filter buttons (All/Residential/Commercial/Industrial with counts; active = ink fill, inactive = ink outline), auto-fill grid (min 300px) of 18 real project cards. Cards degrade gracefully: meta line (m² · value · year) renders only where data exists. Deep-linkable via `#residential` / `#commercial` / `#industrial` hash → preselects filter. Only House Venter has a "View case study →" link at launch.
- **ProjectDetail.dc.html** — the template, populated with House Venter: breadcrumb, kicker (sector · location), h1 + mono meta, asymmetric gallery grid (one 2-row-span lead image + three 4:3 + one dark "more photos" slot tile), then 1.6/1 split: 3-paragraph narrative (challenge → what was built → outcome) + facts panel (`<dl>`: sector, location, size, value, completed, architect) with "Quote a project like this" CTA, prev/next footer nav.
- **About.dc.html** — h1 + intro, 4-tile timeline (1993 / 2000s / 2010s / Today), leadership grid (4 real portraits, 1/1.15 crop), SMME/HDI + Vision & Values split (values as brick left-border rows), dark CTA band.
- **Credentials.dc.html** — h1 + "Download company profile (PDF)" button (slot: PDF not yet supplied), 6 credential tiles (7 GB / Level 4 / ECMBA / ISO 9001 in progress / 1993 / R200 M) each with big numeral, mono label, explainer, and "available on request" line — swap those lines for real certificate download links as the owner supplies them. H&S section, brick CTA band.
- **Contact.dc.html** — 1.25/1 split. Left: quote form (name*, phone*, email*, project type* select, budget select optional, message*) → success state (green panel, "within one business day", phone fallback). Right rail: head office card (big mono phone, address, hours, email), static-map placeholder (striped — replace with a static map image, lazy, must not affect LCP), Sales Centre card (bricks & pavers, Kwaford Rd, +27 41 271 0077). Add a mobile sticky click-to-call bar in production.
- **Careers.dc.html** — narrow (880px) column: intro, "no open positions" card, email-your-CV card (mailto). Exists to capture "techni construction vacancies" search traffic.
- **SiteHeader.dc.html** — sticky, blurred paper bg, logo + stacked wordmark, 5 nav links, mono phone (nowrap), brick "Request a quote" button.
- **SiteFooter.dc.html** — ink bg, 4 columns (brand+tagline / head office / sales centre / site links), legal bar: "© 2026 Smart and Botha Construction CC t/a Techni Construction" + ECMBA line.

## Interactions & behaviour
- Projects filter: client-side show/hide (tiny vanilla JS or CSS-only in production), hash deep-links as above.
- Hover states: links → brick `#8A2B1D`; brick buttons → `#6F2116`; ink buttons → `#3A322B`; white-on-image buttons → `#E8E2D8`; sector cards → `#FAF8F4` wash. All transitions instant (no animation on this site by design).
- Form: HTML5 validation (required + type=email/tel), success replaces the form; add an error state for delivery failure in production.
- `:focus-visible`: 2px solid `#8A2B1D`, offset 2px — everywhere.
- Home hero image is switchable in the prototype (Tweaks prop `heroImage`, 6 candidates) — ship ONE hardcoded choice, preloaded.

## Copy
All copy in the files is final-intent, written from verified facts only (South African English, values in Rand). **Do not invent** awards, reviews, client logos or statistics. Phone: 041 581 7765 (no fax anywhere). Hours Mon–Fri 07:30–16:30.

## Assets
All images currently hotlink `https://www.techniconstruction.co.za/wp-content/uploads/...` — full manifest in `assets.json` (logo, 4 leadership portraits, 18 project thumbnails, 4-photo galleries for 5 flagship projects). For production: download originals from the old site before cutover, re-encode AVIF/WebP + JPEG fallback with `srcset`, keep the alt text already written in the markup. Owner still owes: 15–25 project photo sets, certificates (CIDB/BEE/ECMBA/insurance), company profile PDF, logo vector.

## Files
9 `.dc.html` design references (open in a browser) + `assets.json`. The audit and full client brief live in the repo `travislima/techni-construction` under `audit/` (`design-brief.md` is the authoritative spec; `rebuild-plan.md` has the redirect/SEO/launch checklist).
