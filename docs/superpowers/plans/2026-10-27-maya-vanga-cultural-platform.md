# Maya Vanga Cultural Platform Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the public Mythborn entry experience with a premium, five-language cultural and mindfulness platform while keeping commercial, membership, booking, and payment flows unavailable.

**Architecture:** Add an isolated public-platform renderer ahead of the legacy content router. It owns the five new locale roots and editorial pages, metadata, alternate links, sitemap entries, and RTL presentation. Existing Worker, D1 migrations, legacy redirects, and dormant production APIs remain intact.

**Tech Stack:** Cloudflare Workers, ES modules, static CSS, Node audit scripts.

**Spec:** `docs/spiritual-platform-transition-2026-10-27.md` on PR #60 and GitHub Issue #61.

## Global Constraints

- No pricing, payment, checkout, booking, membership, account-panel, or service-sales CTA.
- No unverified email/WhatsApp destination; communication UI is explicitly unavailable pending verification.
- No health-treatment, guaranteed-outcome, or fabricated identity/location/certification claim.
- Preserve existing D1 migrations, legacy redirects, and non-public APIs.
- Keep `main` and production untouched; submit a separate pull request.

## Review Focus

- Arabic documents must set both `lang="ar"` and `dir="rtl"`.
- All five locales must expose reciprocal hreflang and canonical metadata.
- Contact routes must not include `mailto:`, `wa.me`, or sensitive URL query parameters.
- Legacy account, checkout, and payment paths must remain non-public.
- Sitemap must retain the legacy XML and append each new localized public route.

### Task 1: Public cultural-platform renderer

**Files:**
- Create: `src/cultural-platform.js`
- Test: `scripts/maya-vanga-platform-audit.mjs`

- [ ] Write a failing audit for five locale roots, safety constraints, RTL, and metadata.
- [ ] Implement the isolated renderer and locale content.
- [ ] Run the focused audit.

### Task 2: Route and sitemap integration

**Files:**
- Modify: `src/app-router.js`
- Test: `scripts/maya-vanga-platform-audit.mjs`

- [ ] Write route and sitemap assertions.
- [ ] Route new public pages before legacy content and append sitemap entries.
- [ ] Run focused audit and project checks.

### Task 3: Verification and handoff

**Files:**
- Modify: `package.json`
- [ ] Add the focused audit to supported checks.
- [ ] Run `npm run check`, `npm run test`, and `npm run build`.
- [ ] Commit, push branch, open PR without merging or deploying.
