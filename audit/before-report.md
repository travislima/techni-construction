# Techni Construction — Website "Before" Report

**Site:** https://www.techniconstruction.co.za
**Audit date:** 9 August 2026
**Prepared as:** the objective baseline for a before/after comparison

> **How this report was compiled.** Findings marked ✅ are verified from public,
> third-party-observable sources (Google's index of the site, public directories,
> Google PageSpeed infrastructure). Items marked **[TO CAPTURE]** are slots for
> data that must be captured from a normal browser — see
> `data-capture-checklist.md`. Nothing in this report is subjective opinion
> unless explicitly labelled as an assessment.

---

## 1. The business behind the site

This matters because a website should be judged against the business it serves.

| Fact | Detail | Source |
|---|---|---|
| Trading name | Techni Construction (legal: Smart and Botha Construction CC t/a Techni Construction) | ECMBA listing |
| Established | 1993 (founders Wayne Smart, Johan Botha; current members Gregg Clarke, Leon Janse van Rensburg, Everard Smith, Sameera Lorgat) | Site content via Google index |
| Location | 6 Giulietti Road, Walmer Dunes Industrial, Gqeberha (Port Elizabeth) | Site + directories |
| Scale | 50+ site employees, 6 site managers, 4 office staff | Site content |
| Market | Private-sector residential, commercial & industrial projects **up to R200 million**; some public-sector work | Site content |
| Credentials | CIDB rating **7 GB**, BEE Level 4, MBA (ECMBA) member, ISO-9001 registration in progress | Site content |
| Contact | Tel 041 581 7765 · admin@techniconstruction.co.za · fax-to-email 086 549 5120 | Site content |

**Assessment:** this is not a bakkie builder — a CIDB 7 GB rating puts them in the
top tier of regional contractors, qualified for public tenders up to ~R130M and
private work well beyond. The website's job is therefore primarily
**credibility and validation**: when an architect, quantity surveyor, developer
or private client shortlists Techni, the site is what they check. Its secondary
job is capturing inbound enquiries. The current site under-serves both — see below.

---

## 2. Site structure & build (verified)

- ✅ **Platform:** WordPress (self-hosted). Evidence: WordPress URL structures,
  including an indexed author archive at `/author/techni/`.
- ✅ **HTTPS:** the site serves over HTTPS.
- ✅ **Known pages in Google's index:**
  - Homepage
  - `/projects/` — portfolio index
  - Project detail pages, e.g.:
    - *Residential – House Venter* (upmarket double-storey, ±550 m², contract value R9M)
    - *Residential – Thorndale Lodge* (private hunting lodge, Greater Addo, ±600 m²)
    - *Commercial – Nanaga* (fuel station & food store, ±400 m², Nanaga Farm Stall)
    - *Commercial – South City Office Block*
    - *Industrial – Steinbuild Walker Drive (BUCO)*
  - `/author/techni/` — a WordPress author archive (should not be indexed)
- ✅ The projects page itself tells visitors these are only "a few select
  projects" and to **contact the company for more** — i.e. the portfolio of a
  R200M-capable contractor is a handful of pages, with the real portfolio
  living offline.

### Verified problems in the build

1. ✅ **Homepage title tag is "Techni Construction – Techni Construction".**
   The single most valuable SEO field on the site contains the brand name twice
   and nothing else — no "construction company", no "Port Elizabeth", no
   "Gqeberha", no service keywords. Google literally displays this duplicated
   title in search results. Anyone searching *"construction companies Port
   Elizabeth"* is far more likely to find Procompare's directory (which ranks
   for that phrase and lists Techni's competitors alongside them) than
   Techni's own site.
2. ✅ **Author archives are indexed** (`/author/techni/` appears in Google) —
   default-WordPress hygiene that leaks thin duplicate pages into the index and
   signals the site was set up without SEO attention.
3. ✅ **Thin portfolio.** Five-ish project pages for a 30-year-old firm with a
   R200M project ceiling. The strongest sales asset the company owns (its built
   work) is mostly invisible online.
4. **[TO CAPTURE]** Theme/page-builder in use, plugin stack, WordPress version
   exposure, last-updated dates, copyright year in footer.

---

## 3. Performance snapshot — Google PageSpeed

The objective "before" numbers for the before/after comparison.

> ✅ **Captured 9 Aug 2026, 21:21 SAST** — Google PageSpeed Insights
> (Lighthouse 13.4.1, emulated Moto G Power / emulated desktop, initial page
> load of the homepage).

| Metric | Mobile | Desktop |
|---|---|---|
| **Performance score (0–100)** | **65** | **89** |
| Accessibility score | 96 | 96 |
| Best Practices score | 96 | 100 |
| SEO score | 92 | 92 |
| First Contentful Paint | 1.4 s | 0.4 s |
| **Largest Contentful Paint** | **8.0 s** | 1.2 s |
| Total Blocking Time | 100 ms | 60 ms |
| Cumulative Layout Shift | 0.077 | 0.042 |
| Speed Index | 9.3 s | 3.5 s |
| **Total page weight** | **3,225 KiB** | **4,505 KiB** |

**Field data (CrUX — Google's real-user measurements): no data for either
form factor.** Google does not record enough real visitors to this site to
publish field metrics — an independent confirmation of the traffic finding
in §4.

### What the numbers mean

- **Mobile is the problem, and the hero image is the culprit.** The main
  content takes **8 seconds** to appear on a mid-range phone (Google's
  "good" threshold is 2.5 s). Lighthouse's LCP breakdown attributes it to
  resource load delay (~2.7 s) plus load duration (~0.9 s) on the hero
  image — not the server, which responds instantly (TTFB 0 ms). The page
  visually completes at 9.3 s (Speed Index).
- **The homepage ships 3.2–4.5 MB**, dominated by images. Lighthouse's own
  opportunities: ~1.8–3 MB recoverable from image delivery (sizing,
  modern formats) and ~3–4.3 MB re-downloaded on every visit because
  **cache lifetimes are missing/inefficient**.
- **The good news to tell the client:** accessibility (96) and best
  practices (96–100) are genuinely solid, and the server itself is fast.
  The failure is concentrated in one fixable place — oversized, uncached
  images — which also means the "after" delta will be dramatic.
- **Caveat on the SEO score of 92:** Lighthouse checks technical basics
  (crawlability, meta tags exist, valid HTML). It does not measure whether
  the site ranks for anything. The duplicated title tag and missing local
  keywords (§2) are invisible to this score — 92 here does not contradict
  the visibility findings in §4.

Also captured for the client pack: **GTmetrix** (https://gtmetrix.com) PDF —
optional but a nice second-source exhibit.

---

## 4. Traffic & visibility data

- ✅ **SimilarWeb: no public report exists for techniconstruction.co.za.**
  This is itself a finding — SimilarWeb generally cannot produce estimates for
  sites under roughly 5,000 visits/month. The honest statement for the client:
  *"your site's traffic is too low for the industry's standard measurement
  tools to even register it."* Do **not** present invented numbers; absence of
  data is the data.
- ✅ **Search visibility:** the site ranks for its own name, but generic
  local queries ("construction companies Port Elizabeth") surface directories
  (Procompare's "Top 19 Construction companies Port Elizabeth" page) and
  competitors instead. Techni is listed *inside* other people's ranking pages.
- ✅ **Facebook:** an active-in-name page (~1,978 likes) with almost no
  engagement ("2 talking about this"), and what appears to be a **second,
  duplicate Techni Construction page** (~1,702 likes) splitting the audience.
- ✅ **Directory footprint (uncontrolled):** listings exist on Procompare,
  SA Yellow, AfricanAdvice, Placedigger, OpenHours-SouthAfrica, ZoomInfo and
  the ECMBA site. These outrank the site for some queries and none link back
  in a managed way.
- **[TO CAPTURE]** Google Business Profile: does one exist? Review count and
  star rating? (Search Google Maps for "Techni Construction Port Elizabeth".)
  For a local contractor this single asset usually drives more enquiries than
  the website itself.
- **[TO CAPTURE]** Google Search Console data (needs owner access — ask your
  friend to add you): actual clicks/impressions per month, which proves the
  traffic story with Google's own numbers rather than estimates.

---

## 5. What the site does well (credit where due)

- The domain is the exact brand name on a .co.za — worth keeping, never migrate away from it.
- It exists, it's on HTTPS, and it's indexed by Google.
- The content that *is* there is factually strong: credentials (CIDB 7 GB,
  BEE L4, MBA), history since 1993, real named projects with sizes and values
  (House Venter: 550 m², R9M) — exactly the raw material a credibility site needs.
- Contact details are present and consistent with third-party directories
  (name/address/phone match across listings — good for local SEO).

---

## 6. The core problem, in one paragraph

The site is an online business card for a company whose buyers need a
**capability statement**. Architects, QSs, developers and serious private
clients vet contractors on: portfolio depth, project values, credentials,
safety record, team, and references. The current site holds a fraction of that
and asks visitors to phone for the rest — every such gap is a moment where a
shortlisted contractor can silently lose the job to a competitor whose site
answers the question. Meanwhile it captures no enquiries in a structured way,
ranks for nothing except its own name, and its measurable traffic is below the
threshold of measurement.

## 7. What "better" means for this business (utility, not looks)

Ordered by expected business impact:

1. **A tender/vetting-ready credentials hub** — CIDB, BEE certificate, MBA
   membership, insurance and H&S accreditations on one page, with a
   downloadable company-profile PDF. Problem solved: shortlisters get to "yes"
   without a phone call.
2. **A real portfolio** — every notable project since the firm cares to
   remember: photos, location, m², value band, client/architect (with
   permission), completion date; filterable residential/commercial/industrial.
   Problem solved: the built work sells the company 24/7.
3. **Structured enquiry capture** — a short quote/tender-invitation form that
   emails the office and confirms receipt, plus click-to-call on mobile.
   Problem solved: enquiries stop depending on office hours and a fax number.
4. **Local search visibility** — correct titles/descriptions ("Construction
   Company Port Elizabeth | Techni Construction"), LocalBusiness structured
   data, a claimed and reviewed Google Business Profile. Problem solved: the
   company appears where Nelson Mandela Bay actually searches.
5. **Speed and mobile experience** — construction clients check sites from
   site offices and bakkies; the after-report shows this with PageSpeed deltas.

These five are the spine of the rebuild plan (`rebuild-plan.md`).

---

## Appendix: sources

- Google index of techniconstruction.co.za (homepage, /projects/, project pages, author archive)
- SimilarWeb (absence of report for the domain)
- Facebook pages 100057326985682 and 337027756506698
- Procompare (provider listing + "Top 19 Construction companies Port Elizabeth")
- ECMBA member listing (legal name), SA Yellow, AfricanAdvice, ZoomInfo, Placedigger, OpenHours-SouthAfrica
