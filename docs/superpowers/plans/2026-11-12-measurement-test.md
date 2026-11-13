# Mythborn Measurement Test Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore Mythborn's existing consent-aware GA4 and Clarity controller on every HTML response.

**Architecture:** Extend the existing analytics response decorator with a duplicate-guarded local controller tag. Keep provider loading and consent behavior inside `public/refinement.js`.

**Tech Stack:** Cloudflare Workers, JavaScript, Node assertions, Wrangler 4.158.0

**Spec:** `docs/superpowers/specs/2026-11-12-measurement-test-design.md`

## Global Constraints

- No cookies, identifiers, conversion events, or cross-page Clarity recording before consent.
- No content, design, routing, database, or infrastructure changes.
- Test mode is reviewed after 31 December 2026; no automatic policy switch is added.

## Review Focus

- HTML already containing `/refinement.js` must not receive a duplicate tag.
- HTML without the controller must receive it before `</body>`.
- Non-HTML responses must remain untouched.
- Existing anonymous collectors must remain exactly once.
- CSP must continue to allow the existing providers without broadening unrelated directives.

---

### Task 1: Restore the shared controller

**Files:**
- Modify: `scripts/analytics-privacy-audit.mjs`
- Modify: `src/analytics-router.js`

**Interfaces:**
- Consumes: HTML responses from `app.fetch`
- Produces: one deferred `/refinement.js` tag per HTML document

- [x] Add an assertion that the router guards and injects `/refinement.js`.
- [x] Run `npm run check:analytics` and verify the new assertion fails.
- [x] Add the minimal duplicate-guarded tag to `secureHtmlResponse`.
- [x] Run `npm run check:analytics`, `npm run check`, and `npm run build`.
- [x] Commit the focused change.
