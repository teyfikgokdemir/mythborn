# Measurement Test Design

## Intent

Keep Mythborn measurable through 31 December 2026 without weakening a visitor's rejection choice. Anonymous first-party, Umami, GA4 Consent Mode denied, and Clarity no-consent signals run without analytics consent; cookies, cross-page Clarity sessions, GTM, attribution, ads, and conversions require explicit consent.

## Scope

- Ensure every HTML response loads the existing `/refinement.js` consent/measurement controller exactly once.
- Preserve the existing site, routes, content, styling, and Cloudflare Worker architecture.
- Do not add identifiers, cookies, or conversion events before consent.
- Do not automate the post-test policy change; review and standardize after 31 December 2026.

## Approach

The chosen approach is to repair the Worker HTML-response decorator because all live routes already pass through it and the existing controller already implements the approved consent states. Re-implementing analytics in the router or adding a new vendor loader would duplicate logic and increase privacy and regression risk.
