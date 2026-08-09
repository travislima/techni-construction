# Design & Build Brief — Techni Construction website rebuild

**Prepared:** 9 August 2026 · **For:** a Claude design/build session — this
brief is self-contained; no other context is required.
**Domain (kept):** techniconstruction.co.za · **Deliverable:** a complete,
production-ready static website that dramatically outperforms the current one.

---

## 1. The one-liner

Build a fast, credibility-first website for a 33-year-old South African
construction firm whose buyers — architects, quantity surveyors, developers
and serious private clients — currently find a slow, thin brochure site when
they vet the company. The new site is a **capability statement that loads in
under two seconds and captures enquiries**, not a brochure.

## 2. Why (the numbers the new site must beat)

The current site's audited baseline, all measured 9 Aug 2026:

| Measure | Current site | New site must hit |
|---|---|---|
| Main content visible, mobile (LCP) | 8.0 s (lab); 9.26 s (real desktop session) | **< 2.0 s** |
| Google PageSpeed score, mobile | 65/100 | **≥ 95** |
| Homepage weight | 3.2–4.5 MB | **< 1 MB** |
| Server response (TTFB) | up to 2.8 s, erratic | < 0.3 s, consistent (static hosting + CDN) |
| Stylesheets / scripts | 27 CSS files, 16 JS | 1 CSS, ≤ 2 small JS (or none) |
| Images with alt text | 2 of 13 | 100% |
| Projects showcased | 5 | 15–25 (structure for it; launch with what content allows) |
| Homepage title tag | "Techni Construction – Techni Construction" | "Construction Company Port Elizabeth (Gqeberha) \| Techni Construction" |
| Avg visit duration (SimilarWeb, Jun 2026) | 5 seconds, 1.61 pages | Give visitors somewhere to go: clear next step on every page |
| Monthly visits (SimilarWeb, Jun 2026) | 530 | Growth comes post-launch via SEO/GBP; site must be ready to convert it |

Layout stability is the one thing already good (CLS 0.000) — keep it perfect:
explicit width/height on every image, no late-loading layout shifts.

## 3. The business (verified facts — use these, don't invent)

- **Techni Construction** (legal: Smart and Botha Construction CC t/a Techni
  Construction), established **1993** by Wayne Smart and Johan Botha.
- Current leadership: Gregg Clarke, Leon Janse van Rensburg, Everard Smith,
  Sameera Lorgat.
- **Credentials: CIDB rating 7 GB** (top-tier regional contractor), **BEE
  Level 4**, member of the Master Builders Association (ECMBA), ISO-9001
  registration in progress.
- Scale: 50+ site employees, 6 site managers, 4 office staff; specialised
  works via SMME labour-only subcontractors (they highlight developing
  historically disadvantaged individuals and SMMEs — this matters to public
  and corporate clients; give it a real home on the About page).
- Market: residential, commercial and industrial construction, private
  sector focus, **projects up to R200 million**; public-sector work completed.
- Service area: Nelson Mandela Bay (Gqeberha / Port Elizabeth) and the
  wider Eastern Cape (e.g. a completed lodge project in Greater Addo).
- **Head office:** 6 & 8 Giulietti Road, Walmer Dunes Industrial, Walmer,
  Gqeberha (Port Elizabeth), 6070.
- **Second location (give it a page or clear section):** Gqeberha Sales
  Centre — bricks & pavers — Unit 3, 25 Kwaford Rd, Struandale, Gqeberha,
  6390 · +27 41 271 0077.
- **Contact:** 041 581 7765 · admin@techniconstruction.co.za ·
  Mon–Fri 07:30–16:30. (Drop the fax number everywhere.)
- Tagline in current brand material: **"Teamwork. Built on excellence."**
- Vision statement: to be the leading construction company in Nelson Mandela
  Bay in terms of quality, product delivery, health & safety, equality and
  customer satisfaction.

### Known projects (launch content — structure supports more)

| Project | Type | Details known |
|---|---|---|
| House Venter | Residential | Upmarket double-storey dwelling, ±550 m², contract value R9 M |
| Thorndale Lodge | Residential/hospitality | Private hunting lodge, Greater Addo, ±600 m² |
| Nanaga Farm Stall | Commercial | Fuel station & food store, ±400 m² |
| South City Office Block | Commercial | Office development |
| Steinbuild Walker Drive (BUCO) | Industrial | Retail/industrial build |

Owner will supply 15–25 projects total with photos, m², value band, year,
client/architect credits. Design every project card/page to degrade
gracefully when a field is missing.

## 4. Audiences and what each needs (priority order)

1. **Professional shortlisters** (architects, QSs, developers, corporate
   facilities managers): vetting a tender/shortlist. Need: portfolio depth
   with values and scale, credentials with certificates, years in business,
   safety posture, a downloadable company profile PDF. They decide in
   minutes; the site must answer "are these people real and capable?"
   without a phone call.
2. **Private clients** (R2M+ homes, lodges, farm businesses): emotional +
   trust purchase. Need: beautiful finished work, names/faces, reviews, an
   easy "request a quote."
3. **Job seekers**: the company already ranks for "techni construction
   vacancies" — a simple Careers/Vacancies section captures this free
   traffic and serves the business.

## 5. Sitemap and per-page spec (7 pages + project details)

### Home
- **Job:** 10-second credibility. A shortlister should think "established,
  serious, local" before scrolling.
- Hero: one outstanding full-width project photograph (NOT a slider), the
  tagline, and a proof strip: **"Est. 1993 · CIDB 7 GB · BEE Level 4 ·
  Nelson Mandela Bay"**. Primary CTA "View our work", secondary
  "Request a quote".
- Sections: 3 flagship projects (one per sector) → sectors overview
  (Residential / Commercial / Industrial, each linking to filtered
  projects) → credentials band with logos/ratings → brief "since 1993"
  story teaser → enquiry CTA band with phone number.
- The hero image is the LCP element: preload it, `fetchpriority="high"`,
  never lazy-load above-the-fold media (the current site does — it's why
  it takes 8 s).

### Projects (index)
- Filterable grid: All / Residential / Commercial / Industrial. Filter via
  tiny vanilla JS or CSS-only; no framework.
- Card: photo, name, sector tag, location, m², value band (e.g. "R5–10 M"),
  year. Cards work with missing fields.

### Project detail (template)
- Gallery (3–8 photos), facts panel (location, m², value band, duration,
  year, client/architect if permitted), 2–3 paragraph narrative:
  challenge → what was built → outcome.
- Prev/next project navigation; "Request a quote about a project like this"
  CTA.

### About
- Timeline since 1993, leadership (names above; photos if supplied),
  team scale, the SMME/HDI development commitment, vision & values,
  health & safety approach.

### Credentials
- The tender-vetting page: CIDB 7 GB, BEE Level 4, ECMBA membership,
  ISO-9001 progress, insurances — each with certificate download where
  supplied. **Prominent "Download company profile (PDF)" button.**
- This page is a differentiator; no competitor in their local set has one.

### Contact / Request a quote
- Short form: name, phone, email, project type (select), approximate budget
  band (select, optional), message. Static-compatible handler (Formspree /
  Netlify Forms / Cloudflare equivalent) emailing admin@; success state
  confirms "we respond within one business day."
- Click-to-call phone (tap target, mobile sticky footer CTA), address with
  embedded map (static map image or lazy embed — must not hurt LCP), hours.
- Sales Centre block: address, phone, what's sold (bricks & pavers).

### Careers / Vacancies
- Simple: intro + current openings (or "no openings — leave your details").
  Captures existing "techni construction vacancies" search traffic.

## 6. Design direction

- **Tone:** established, precise, quietly confident. This is a 33-year-old
  firm that builds R200M projects — not a startup, not a handyman service.
  Design cues from the built environment: strong grid, generous photography,
  engineering restraint. No stock-photo hard hats, no generic construction
  clip-art, no sliders, no animation for its own sake.
- **Color:** the existing brand banner is a deep brick red/maroon
  ("Teamwork. Built on excellence." mark) — confirm against the supplied
  logo and build the palette around it: brick red as the single accent,
  warm concrete neutrals, near-black ink. Keep semantic colors (form
  success/error) separate from the accent.
- **Typography:** a confident display face with structural character paired
  with a highly readable body face; tabular figures for project data.
  Self-host fonts or use system stacks — zero third-party font CDNs.
- **Photography is the design.** Full-bleed project images carry the site;
  the layout's job is to frame them. Where owner photos are weak at launch,
  design so a mediocre photo still looks intentional (consistent crops,
  duotone-treated section backgrounds, generous whitespace) — and slots
  upgrade cleanly when professional photos arrive.
- Dark mode: not required for v1; light-only is fine if committed cleanly.

## 7. Technical requirements (non-negotiable)

- **Stack:** static site generator (Astro preferred, Eleventy fine).
  Projects as markdown/JSON content collections so non-developers can add
  one by copying a file. No CMS, no database, no jQuery, no framework
  runtime shipped to the browser.
- **Hosting target:** Cloudflare Pages or Netlify free tier (HTTP/2+,
  global CDN, long-cache immutable assets). Domain stays; DNS cutover is a
  separate later step (email lives on current hosting — do not touch MX).
- **Performance budget (enforced):** LCP < 2.0 s on emulated mid-range
  mobile; total < 1 MB per page; responsive images (`srcset`, AVIF/WebP
  with JPEG fallback, explicit dimensions); one stylesheet; JS optional and
  deferred; hero preloaded; below-fold media lazy-loaded (and ONLY
  below-fold).
- **SEO:**
  - Titles: home per §2; inner pages "«Page/Project» | Techni Construction";
    project pages "«Name» — «sector» construction, «place» | Techni
    Construction". Unique meta descriptions everywhere.
  - Structured data: `LocalBusiness` (+ `ContactPoint`, geo, hours) on
    contact/home; project pages as `CreativeWork`/article with images.
  - XML sitemap; robots.txt; canonical URLs; **301 redirect map from every
    currently-indexed URL** (`/projects/…` slugs, `/author/techni/` →
    home) — generate the list from the old site before cutover.
  - No indexable junk: no author/tag archives, no placeholder pages.
- **Accessibility:** alt text on every image (write real descriptions from
  project context), visible focus states, WCAG AA contrast, semantic
  headings, form labels + error messages.
- **Measurement:** Plausible (preferred, lightweight) or GA4 snippet slot;
  outbound tel: click tracking; form-submit event. Search Console
  verification file/meta slot.

## 8. Copy guidance

- Write real copy from §3's facts — no lorem ipsum anywhere. Short
  declarative sentences; South African English (metres, "programme");
  values in Rand ("R9 M"). Every page ends with a next step.
- Never overclaim: no invented awards, review quotes, client logos or
  statistics. Where a proof asset isn't supplied yet, design the slot and
  leave it out of the rendered page rather than faking it.

## 9. Assets the owner still owes (design defensively around them)

Photos per project (3–8), certificates (CIDB/BEE/ECMBA/insurance), company
profile PDF, leadership photos, logo vector. All layouts must look complete
even if only the 5 known projects and no PDFs arrive by launch day.

## 10. Acceptance checklist

- [ ] PageSpeed mobile ≥ 95 / desktop ≥ 98 on the deployed preview
- [ ] LCP < 2.0 s mobile emulation; CLS < 0.02; page weight < 1 MB
- [ ] All 7 pages + project template built with real copy and real projects
- [ ] Quote form delivers to email with success/error states
- [ ] 100% images with alt text; AA contrast; keyboard navigable
- [ ] Titles/descriptions/schema/sitemap/redirect map in place
- [ ] Looks intentional on a 360 px phone and a 1440 px desktop
- [ ] A new project can be added by copying one content file

---

*Baseline sources for §2: Google PageSpeed Insights (Lighthouse 13.4.1) lab
runs; a real-browser Core Web Vitals capture; live response headers; a
navigation-timing waterfall; SimilarWeb June 2026 — all captured 9 Aug 2026
and documented in `before-report.md` and `report.html` in this repo.*
