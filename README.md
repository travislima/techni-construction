# Techni Construction — Website Rescue Project

Client #1 of the local-business website venture. Target site:
[techniconstruction.co.za](https://www.techniconstruction.co.za) — a
Gqeberha (Port Elizabeth) construction firm, est. 1993, CIDB 7 GB.

## What's here

| File | Purpose |
|---|---|
| [`audit/before-report.md`](audit/before-report.md) | Objective "before" snapshot of the current site — the baseline for the before/after pitch |
| [`audit/report.html`](audit/report.html) | Client-facing report dashboard — plain-language findings, every number sourced |
| [`audit/gbp-audit.md`](audit/gbp-audit.md) | Google Business Profile audit — scorecard, competitive benchmark, action plan |
| [`audit/design-brief.md`](audit/design-brief.md) | Self-contained brief for the rebuild — paste into a Claude design session as-is |
| [`audit/data-capture-checklist.md`](audit/data-capture-checklist.md) | ~45 min of browser captures that fill the report's remaining `[TO CAPTURE]` slots |
| [`audit/rebuild-plan.md`](audit/rebuild-plan.md) | Utility-first rebuild plan, timeline, pricing logic, pitch narrative |
| [`audit/tools/run-psi.sh`](audit/tools/run-psi.sh) | Scripted Google PageSpeed capture (mobile + desktop) |
| [`site/`](site/) | **The production site** — Astro static build implementing the design handoff (see `site/README.md`) |
| [`design/design_handoff_techni_site/`](design/design_handoff_techni_site/) | The design handoff: 9 high-fidelity HTML references + asset manifest |
| [`PLAYBOOK.md`](PLAYBOOK.md) | The reusable framework for every future client |

## Status

- [x] Remote audit from public sources complete
- [x] PageSpeed baseline captured (9 Aug 2026: mobile 65 / desktop 89, mobile LCP 8.0 s, 3.2–4.5 MB pages)
- [x] Real-browser Core Web Vitals capture (FCP/LCP 9.26 s, TTFB 2.83 s — both "Poor")
- [x] Google Business Profile audit (unclaimed, 4.1★/11, ranks 8th of 8 locally — see `audit/gbp-audit.md`)
- [ ] Remaining browser captures (SERP screenshots, phone walk-through)
- [x] Design handoff received (`design/`)
- [x] Production site built (`site/` — Astro, 8 pages, builds clean with placeholder images)
- [ ] `npm run fetch-assets` on a networked machine → commit real photos
- [ ] Owner inputs: current monthly cost, email hosting, logins, content pack (more projects, certificates, profile PDF)
- [ ] Deploy to staging (Cloudflare Pages/Netlify) → after-report → pitch
