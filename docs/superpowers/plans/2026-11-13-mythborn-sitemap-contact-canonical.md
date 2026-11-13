# Mythborn Contact Sitemap Canonical Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove non-canonical legacy contact aliases from the generated sitemap while preserving all routes, localized contact pages, analytics, and consent behavior.

**Architecture:** Keep the new astrology-platform contact route set as the single sitemap owner for contact pages. The older cultural sitemap continues to own its remaining editorial pages but no longer emits its superseded contact entries.

**Tech Stack:** Cloudflare Workers, Node.js ES modules, repository audit scripts.

**Spec:** `docs/audits/mythborn-premium-quality-audit-2026-11-13.md`

## Global Constraints

- Do not change production, analytics, consent, cookies, D1, or deployment configuration.
- Preserve the five live contact routes and all legacy route handling.
- Make one minimal, reversible source change.
- Report build, test, CI, preview, deployment, and live verification separately.

## Review Focus

- The sitemap must contain each canonical localized contact URL exactly once.
- `/gr/contact`, `/es/contact`, and `/ar/contact` must not remain as sitemap `<loc>` entries.
- Legacy alias requests must continue to resolve without a runtime regression.
- Contact hreflang alternatives must remain reciprocal across TR, EN, EL, ES, and AR.
- The change must not touch analytics or consent behavior.

---

### Task 1: Remove superseded contact entries from the cultural sitemap

**Files:**
- Modify: `src/cultural-platform.js`
- Test: `scripts/seo-verification-audit.mjs`
- Test: `scripts/contact-page-audit.mjs`

**Interfaces:**
- Consumes: `culturalSitemapEntries()` and `generateAstrologySitemapEntries()` in the root sitemap composition.
- Produces: a sitemap whose contact entries come only from `generateAstrologySitemapEntries()`.

- [ ] **Step 1: Verify the existing regression test fails**

Run: `npm run seo:audit`
Expected: FAIL with canonical mismatches for `/gr/contact`, `/es/contact`, and `/ar/contact`.

- [ ] **Step 2: Remove `contact` from the page keys emitted by `culturalSitemapEntries()`**

Keep route rendering unchanged; change only the sitemap page-key list.

- [ ] **Step 3: Run focused SEO and contact verification**

Run: `npm run seo:audit && node scripts/contact-page-audit.mjs`
Expected: both commands exit 0.

- [ ] **Step 4: Run the complete repository verification**

Run: `npm test && npm run audit && npm run build && npm audit --audit-level=high`
Expected: every command exits 0; build remains a dry run.

### Task 2: Record the full audit evidence

Before recording the report, repair the verified astrology-footer legal-link regression:

- Add a current-router regression check that extracts the four legal-column links for every supported astrology locale and requires every destination to return HTTP 200.
- Map EN/EL/ES links to their existing localized legal documents, whose canonical slugs remain `/gizlilik`, `/kvkk`, and `/kullanim-kosullari` beneath the locale prefix.
- Because no reviewed Arabic legal copy exists, point Arabic labels to the existing English documents as an explicit fallback instead of inventing legal translations. Record the missing Arabic legal localization as an open content risk.
- Add a CSS regression assertion for the live-observed 390 px natal calculator clipping. Stack the natal hero grid at tablet/mobile widths and stack its date/time form row at narrow-phone widths, without changing desktop presentation.
- Render a deterministic natal-chart result in the regression audit and reject literal `undefined` output. Use the locale's existing reviewed disclaimer field in the result panel.
- Require every core astrology route to expose a keyboard-first skip link targeting `#main-content`; localize its label without changing page hierarchy.

**Files:**
- Create: `docs/audits/mythborn-premium-quality-audit-2026-11-13.md`
- Modify: `scripts/seo-verification-audit.mjs`
- Modify: `src/astrology-platform/layout.js`
- Modify: `src/astrology-platform/tokens.js`
- Modify: `scripts/astrology-regression-audit.mjs`
- Modify: `src/astrology-platform/pages/natal-chart.js`

**Interfaces:**
- Consumes: repository, browser, live HTTP, Lighthouse, accessibility, security, and functional-test evidence.
- Produces: the requested 15-section evidence-led Markdown report.

- [ ] **Step 1: Record findings with priority, affected pages, evidence, cause, recommendation, status, and verification result**

- [ ] **Step 2: Separate local build, local tests, GitHub CI, preview, deployment, and live-production evidence**

- [ ] **Step 3: Verify the report contains all requested sections and no unsupported claims**
