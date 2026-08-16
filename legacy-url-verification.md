# Mythborn Legacy URL Verification

Date: 2026-08-16

## Repository findings

The current repository contains no active jewelry/product/collection routes in the public route output. The SEO verification audit intentionally tests legacy commerce paths including `/products`, `/collections`, `/collections/all`, `/products/test-item`, `/cdn/shop/files/asset.png`, `/apps/shop/store`, and `/recommendations/products`.

## Live HTTP findings

The following legacy commerce paths all return HTTP 410 Gone on `https://mythborn.co`: `/products`, `/collections`, `/collections/all`, `/products/test-item`, `/cdn/shop/files/asset.png`, `/apps/shop/store`, and `/recommendations/products`. The live `/robots.txt` returns HTTP 200 and allows the site except `/api/` and `/yonetim`; it references the current sitemap. The live sitemap returns HTTP 200 and has no matches for product, collection, bracelet, necklace, jewelry, or shop.

## Public search finding

A domain-focused public search still returns one historical indexed result: `https://mythborn.co/products/dangle-birthstone-earrings-personalized?...`, titled “Birthstone Dangle Earrings | Personalized Family Gift – MythBorn,” with a snippet describing personalized 925 sterling silver earrings.

## Interpretation

The legacy jewelry routes are not active and are intentionally handled as Gone. The current sitemap is clean. However, at least one stale external search result still exposes the former jewelry identity. This is a residual indexing/brand-memory issue, not an active-route issue. Recommended next step requires approval: inspect response headers and any available canonical/deindex behavior for the exact stale URL, then decide whether to preserve 410 behavior, add targeted removal/meta handling, or leave it to natural reindexing. No changes have been made during this verification phase.

## Sources checked

- https://mythborn.co/robots.txt
- https://mythborn.co/sitemap.xml
- https://mythborn.co/products/dangle-birthstone-earrings-personalized?variant=45054599495862&country=HU&currency=HUF
- Current repository route and SEO audit files

## Status

Read-only verification complete. Awaiting user approval before remediation.
