# Techni Construction — Rebuild Plan

The goal is not a prettier site; it is a site that does a **job**: convince the
people who vet contractors, and capture the enquiries that today die at a fax
number. Looks are the finish; utility is the structure.

## The pitch narrative (how to present this to the owner)

1. **Before-report** (`before-report.md`) — objective, sourced, includes
   Google's own PageSpeed numbers and the fact that traffic is too low for
   industry tools to measure. Good / bad / verifiable.
2. **The problem statement** — "Your buyers are architects, QSs, developers
   and serious private clients. When they shortlist you, they check the site.
   Today it answers a fraction of their questions and asks them to phone for
   the rest."
3. **The new site** — demo it live on a staging URL, side by side with the old.
4. **The after-report** — same PageSpeed capture, same format, new numbers.
5. **The offer** — lower monthly cost than current hosting (get the current
   number from him first — do not quote until you know it).

## Site map (7 pages, no more)

| Page | Job it does |
|---|---|
| Home | 10-second credibility: hero project photo, "CIDB 7 GB · est. 1993 · Nelson Mandela Bay", 3 flagship projects, one clear CTA |
| Projects | Filterable grid (Residential / Commercial / Industrial) — target **15–25 projects** at launch, not 5 |
| Project detail | Photos, location, m², value band, duration, client/architect (with permission), completion date |
| About | History since 1993, leadership, team scale, values — the human trust layer |
| Credentials | CIDB 7 GB, BEE L4, MBA membership, ISO-9001 progress, insurances, H&S — plus **downloadable company profile PDF** |
| Contact / Request a quote | Short structured form (name, contact, project type, budget band, message) + click-to-call + map |
| (Optional later) News/Completions | Only if they'll actually feed it; a stale news page is worse than none |

## Content is the critical path — start here

The build is easy; the content gathering is what takes calendar time.

- [ ] Ask the owner for project records: 15–25 projects, each needing 3–8
      photos, location, size, value band, year. (They have this — the current
      site says "contact us for more".)
- [ ] Photo quality decides the site. If archive photos are poor, budget one
      half-day of a local photographer at 2–3 accessible completed projects —
      it will do more for the "after" impression than any design choice.
- [ ] Certificates: CIDB, BEE, MBA, insurance — current copies for the credentials page.
- [ ] Client/architect permission for naming (email is fine).
- [ ] Company profile PDF (they likely have one for tenders — reuse it).

## Build spec

- **Stack:** static site (Astro or Eleventy) or clean WordPress if the client
  must self-edit. For a portfolio site that changes a few times a year, static
  wins: near-perfect PageSpeed scores, ~R0–R50/month hosting (Cloudflare
  Pages/Netlify free tier + domain/DNS), no plugin updates, no hack surface.
  Decide based on who edits: if only you two ever touch it, go static.
- **Keep the domain** — techniconstruction.co.za stays; only hosting/DNS moves.
  Plan the email migration carefully: `admin@techniconstruction.co.za` almost
  certainly rides on the current hosting. **Never break a business's email to
  ship a website.** Establish where mail is hosted before touching DNS.
- **Performance budget:** LCP < 2.0s on mobile, total page weight < 1MB on
  project pages (responsive images, AVIF/WebP, lazy loading below the fold).
- **SEO baseline:**
  - Title pattern: `Construction Company Port Elizabeth | Techni Construction`
    (home); `«Project name» — «type» in «place» | Techni Construction` (projects).
  - Unique meta descriptions; `LocalBusiness` + project structured data;
    XML sitemap; author/tag archives noindexed; 301s from every old URL that
    Google has indexed (the old `/projects/...` slugs) to their new homes.
- **Measurement from day one:** Google Search Console + a lightweight
  analytics tool (Plausible/GA4). Without this there is no honest
  "after" traffic story at the 3- and 6-month marks.
- **Local presence (not the website, but more valuable):** claim/fix the
  Google Business Profile, get the first 5–10 reviews from past clients,
  merge/retire the duplicate Facebook page.

## Timeline (evenings-and-weekends realistic)

| Week | Milestone |
|---|---|
| 1 | Capture all "before" data (checklist), get hosting cost from owner, request content pack |
| 2–3 | Build on staging URL with whatever content has arrived; chase the rest |
| 4 | Content complete, SEO pass, performance pass, after-report captured on staging |
| 5 | Present: before-report → problem → live demo → after-report → offer |
| Launch | DNS cutover (email verified first), 301 redirects live, GSC re-verified |
| +3 months | Pull GSC/analytics numbers → first "results" mini-report to the client |

## Pricing logic (fill in when he reports his current cost)

- Static hosting cost to you: ~R0/month + domain renewal (~R100–150/year for .co.za).
- Typical SA small-business WordPress hosting he's likely paying: R99–R400/month.
- Offer: undercut his current monthly, with a small once-off or monthly that
  still pays you for updates. The margin story writes itself once his number
  arrives — **do not guess it in the pitch.**

## Definition of done for the "after" report

Same template as the before-report, same tools, same order:
PageSpeed mobile+desktop scores and metrics, page weight, portfolio count
(5 → 20+), credentials downloadable (no → yes), structured enquiry path
(no → yes), GBP claimed (? → yes), measurement installed (no → yes).
Side-by-side screenshots, mobile and desktop.
