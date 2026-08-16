# Sky background and card layout check

Date: 2026-08-16

The active Worker route was identified as `src/discovery-core.js`, not the legacy `src/discover.js` route. The active `/kadim-gokyuzu` page now renders its first four cards inside `.ancient-hub-grid`, with four columns on wide desktop, two columns at the medium breakpoint, and one column on mobile. Local browser verification at a 1280 CSS-pixel viewport measured four cards in one row; after the compact heading override, the cards visibly reduced in height and the first section fit substantially more content within one scroll.

The approved 1+3 hybrid visual was added to the homepage `home-today-primary` and the active `.sky-tool` component. The WebP observatory plate is served successfully at `/images/cinematic/home/home-today-observatory.webp` and is approximately 152 KB. The restrained constellation/star-map SVG is served successfully at `/images/cinematic/home/sky-map.svg`. The background keeps the left side dark for text, places the observatory on the right, and uses a low-opacity map layer rather than a repeating grid.

The local API returned the existing fallback message for the live sky card during preview, but this is an environment/API response issue and does not prevent the visual background from loading. Static typecheck and the full Mythborn audit passed before the active-route correction; the audit will be rerun after the final active-route changes.
