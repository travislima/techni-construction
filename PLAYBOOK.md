# Local Business Website Rescue — Playbook

A repeatable framework for auditing, rebuilding and pitching improved websites
to local businesses. First applied to: Techni Construction (see `audit/`).

The product you are selling is **not a website**. It is: (1) an objective
before/after report, (2) a site that solves a named business problem, and
(3) a lower monthly bill. The report does the selling.

---

## Phase 0 — Qualify (30 min, before any work)

- [ ] Does the business make money per customer such that ONE extra job pays
      for the site many times over? (Contractors, attorneys, medical: yes.
      Corner café: harder.)
- [ ] Is the current site absent, or measurably poor? ("I don't like it" is
      not a pitch; a 34/100 PageSpeed score is.)
- [ ] Can you find out what they currently pay? **Never pitch price until you
      know their number.** (Hosting + domain + any "webmaster retainer".)
- [ ] Who are the site's real users? Write one sentence:
      *"When ___ is deciding whether to hire/buy from ___, they check the site
      for ___."* If you can't fill that in, you don't understand the business
      yet — and the rebuild will be decoration.

## Phase 1 — Objective before-snapshot (2–3 hours)

Capture everything BEFORE touching anything. Screenshots with visible dates/URLs.

**Performance (free, no login):**
- [ ] Google PageSpeed — https://pagespeed.web.dev — mobile + desktop:
      4 scores, LCP/FCP/TBT/CLS, screenshot each. (API script: `audit/tools/run-psi.sh`.)
- [ ] GTmetrix — https://gtmetrix.com — save the PDF.
- [ ] Page weight & request count (PageSpeed "diagnostics" or browser DevTools → Network).

**Traffic & visibility:**
- [ ] SimilarWeb — for most local sites there is NO data. That IS the finding:
      "traffic too low for industry tools to register (≈ under 5k visits/month)".
      Never fabricate numbers; absence of data is the data.
- [ ] Google the business's category + town ("«trade» «town»"). Note where
      the site ranks vs directories and competitors. Screenshot page 1.
- [ ] `site:theirdomain.co.za` in Google — page count, junk pages in the
      index (author/tag archives, test pages), title tags as Google shows them.
- [ ] Google Business Profile: exists? claimed? review count + rating?
- [ ] Social pages: last post date, engagement, duplicate pages.
- [ ] Directory listings (Procompare/SA Yellow/etc.): consistent name-address-phone?

**Build forensics:**
- [ ] Platform & theme (view-source; wappalyzer browser extension).
- [ ] Copyright year / newest content date = "last touched".
- [ ] Mobile walk-through on a real phone: can you call in one tap? Find the
      address? Send an enquiry? Time yourself.
- [ ] HTTPS, broken links, forms actually deliver?
- [ ] Full-page screenshots, mobile + desktop, of every page (these become
      the "before" gallery in the pitch).

**Fill the report template** (copy `audit/before-report.md` structure):
business facts → verified build findings → performance table → traffic/visibility
→ what it does well → the core problem in one paragraph → what "better" means,
ranked by business impact. Always include the "does well" section — it makes
the criticism credible and the meeting friendly.

## Phase 2 — Utility-first design (the thinking step)

Answer on paper before opening an editor:

1. **What problem does the site solve first?** (For a contractor: vetting by
   professionals. For a restaurant: menu + booking. For a plumber: emergency
   call NOW.) The answer dictates the homepage.
2. What are the 5–7 pages, and what is each page's single job?
3. What is the ONE conversion action per page (call, form, download, directions)?
4. What content must the owner supply, and what's the fallback if they're slow?
   (Content is always the critical path — request it in week 1.)
5. What proof assets exist? (Photos, reviews, certificates, numbers like
   "since 1993", "R200M projects", "50+ staff".) Proof beats prose.

## Phase 3 — Build (1–3 weeks of evenings)

- Static site (Astro/Eleventy on Cloudflare Pages/Netlify) unless the owner
  genuinely needs to self-edit → then lightweight WordPress or a headless CMS.
  Static = ~R0/month, near-100 PageSpeed, nothing to hack or update — this is
  what makes the "cheaper monthly" offer profitable.
- Keep their domain always. Find out where their **email** lives before
  planning any DNS change — breaking email kills the relationship.
- Performance budget from day 1: mobile LCP < 2s, pages < 1MB.
- SEO: keyword-bearing titles («Trade» «Town» | Brand), unique descriptions,
  LocalBusiness schema, sitemap, noindex junk archives, 301-map every old
  indexed URL.
- Install Search Console + lightweight analytics **on the new site at launch**
  — the 3-month follow-up report is your retention and referral engine.
- Off-site (often more valuable than the site): claim Google Business Profile,
  seed 5–10 reviews, fix duplicate/dormant social, correct directory listings.

## Phase 4 — After-snapshot & pitch (half a day)

- [ ] Re-run the exact same captures on the staging URL. Same tools, same
      order, same table. The delta is the product.
- [ ] Build the pitch doc: before-report → one-paragraph problem → live demo →
      after-report → offer. Lead with their business, not your tech.
- [ ] Offer structure: monthly below their current spend (you learned it in
      Phase 0), optional once-off build fee, small scope of monthly updates
      ("up to N content changes/month"). Put the boundary in writing.
- [ ] Close with the 3-month promise: "we'll show you Google's own numbers
      for calls, clicks and searches — something your current site has never
      given you."

## Phase 5 — Launch & the follow-up report

- [ ] DNS cutover with email verified; 301s live; GSC verified; uptime monitor
      (free tier of UptimeRobot) so *you* know before the client does.
- [ ] Calendar reminder: 3 months post-launch, pull GSC + analytics into a
      one-page results note. This is what earns referrals to the next local
      business — the flywheel of this whole venture.

---

## Per-client artefact checklist (what lives in each client repo)

```
audit/
  before-report.md          ← objective baseline (template: this repo)
  data-capture-checklist.md ← what to capture from a browser + where it goes
  rebuild-plan.md           ← utility-first plan + timeline + pricing logic
  tools/run-psi.sh          ← PageSpeed API capture script
site/                       ← the build itself
PLAYBOOK.md                 ← this framework (copy forward, improve each time)
```

## Hard rules learned so far

1. Never quote a price before knowing their current spend.
2. Never fabricate traffic numbers; absence of data is presented as data.
3. Never break email; verify mail hosting before DNS changes.
4. Never migrate off their domain.
5. Always include a "what the current site does well" section.
6. Always capture before-data before touching anything — you can't re-shoot
   the "before" photo after the makeover.
7. The site solves ONE problem first; everything else is secondary.
8. Measurement installed at launch, follow-up report at 3 months — that's the
   referral engine, not the launch itself.
