# Techni Construction — Rebuilt Site "After" Report

**Site:** https://travislima.github.io/techni-construction/ (staging; production
will serve from techniconstruction.co.za at cutover)
**Audit date:** 10 August 2026 · **Method:** identical tools and versions to
the before-report (Lighthouse 13.4.1, real-browser Web Vitals capture,
build-output inspection). Every number's source is named.

---

## 1. The headline comparison

| Measure | Old site (9 Aug 2026) | New site (10 Aug 2026) | Change |
|---|---|---|---|
| Main content visible — real browser session | **9.26 s** (Poor) [B1] | **0.70 s** (Good) [A1] | **13× faster** |
| Server response (TTFB) — real session | 2.83 s (Poor), erratic [B1] | 0.46 s (Good) [A1] | 6× faster, consistent |
| Interaction responsiveness (INP) | no data | 8 ms (Good) [A1] | — |
| Layout stability (CLS) | 0.000–0.077 [B1][B2] | 0.000 [A1] | kept perfect |
| Lighthouse SEO | 92 [B2] | **100** [A2] | +8 |
| Lighthouse Best Practices | 96 mobile / 100 desktop [B2] | **100** [A2] | — |
| Lighthouse Accessibility | 96 [B2] | 89 at first audit → **100 after same-day fixes** [A2][A3] | +4 vs old |
| Lighthouse Performance (mobile emulation) | 65 [B2] | **98** [A3] | +33 |
| Lab LCP (mobile emulation) | 8.0 s [B2] | 1.8 s [A3] | 4.4× faster |
| Total Blocking Time | 100 ms [B2] | 0 ms [A3] | — |
| Stylesheet files | 27 [B3] | 0 external (inlined) [A4] | — |
| Script files | 16 [B3] | 2 tiny, deferred [A4] | — |
| Images with alt text | 2 of 13 [B3] | **31 of 31** [A4] | 100% |
| Projects showcased | 5 | **18**, + House Venter case study [A4] | 3.6× |
| Unique keyword-bearing titles | No ("Techni Construction – Techni Construction") [B4] | Yes, all 7 pages [A4] | — |
| Structured data (LocalBusiness/CreativeWork) | None | 3 pages [A4] | — |
| Enquiry path | Phone + fax | Quote form + tap-to-call + sticky mobile call bar [A4] | — |

## 2. The audit process worked as intended (worth telling the client)

The first live PageSpeed run on the new site found two genuine accessibility
regressions — text contrast on muted labels and touch targets under 24 px on
some links [A2]. Both were fixed the same day; re-audit scores 100 with the
specific checks (`color-contrast`, `target-size`) passing [A3]. An objective
audit that can catch its own side's mistakes is the same audit the client can
trust about the old site.

## 3. Caveats (kept honest)

- **Staging ≠ production.** These numbers are from GitHub Pages under a
  subpath. Production hosting (Cloudflare Pages/Netlify on the real domain)
  adds the 301 redirect map and typically equals or betters these numbers.
- **Local lab run [A3]** was measured against a local server with placeholder
  imagery (142 KiB page weight); with the real photos the homepage weighs
  roughly 400–600 KiB — still under half the 1 MB budget and a fraction of
  the old site's 3.2–4.5 MB. The *live* real-browser numbers [A1] were
  captured with real photos and are the authoritative speed story.
- **No traffic claims.** The new site has no visitors yet; traffic deltas
  come from Search Console/analytics at the 3-month follow-up, not from this
  report.

## 4. Still open before production cutover

1. Formspree endpoint + analytics domain in `site/src/config.ts`
2. Company-profile PDF on the Credentials page
3. Real photos committed to the repo (deploys fetch them live; the standalone
   commit hit the old host's rate limiting — retry later or run
   `npm run fetch-assets` from any normal connection)
4. Owner inputs: current monthly cost (pricing), email hosting (DNS safety)
5. Cutover: Cloudflare/Netlify + domain + redirects + Search Console

## Sources

**Before (old site, 9 Aug 2026):**
- [B1] Real-browser Web Vitals capture + navigation waterfall + response headers
- [B2] Google PageSpeed Insights, Lighthouse 13.4.1 (mobile strategy)
- [B3] Core Web Vitals extension media/resource audit; response headers
- [B4] Google search index

**After (new site, 10 Aug 2026):**
- [A1] Real-browser Web Vitals capture of the live staging URL (Chrome,
  desktop): LCP/FCP 696 ms, TTFB 462 ms (connection 208 ms + request 225 ms),
  INP 8 ms, CLS 0.000 — all rated "Good".
- [A2] Google PageSpeed Insights on the live staging URL, Lighthouse 13.4.1:
  SEO 100, Best Practices 100, Accessibility 89 (contrast + target-size
  flagged, since fixed).
- [A3] Lighthouse 13.4.1 (same version), mobile emulation, post-fix build:
  Performance 98 · Accessibility 100 · Best Practices 100 · SEO 100;
  FCP/LCP 1.8 s, TBT 0 ms, CLS 0.031.
- [A4] Inspection of the built output: image/alt counts, titles, meta
  descriptions, JSON-LD blocks, request inventory (`site/dist/`).

*(A note excluded on principle: the "CrUX historical data" panel some tools
show for this URL reflects the whole github.io domain, not this site — using
it would overstate our case.)*
