# Mythborn Tarot art sources

Last updated: 2026-07-28

## Production record

The production deck contains 78 independently generated, project-original masters:

- 22 Major Arcana
- 14 Wands
- 14 Cups
- 14 Swords
- 14 Pentacles
- 0 fallback cards

Every card was generated as its own complete vertical composition with OpenAI's built-in image generation tool. No external image, stock library, scraped asset, commercial deck, or Rider–Waite–Smith reproduction was used. No third-party URL or uncertain licence is present. The work is recorded as project-original AI-assisted visual production intended for Mythborn's commercial product use.

The generated source for each accepted card was normalized to a high-quality 1600 × 2800 WebP master under `docs/assets/tarot-masters/<canonical-asset-path>/master.webp`. Production derivatives live at the matching path under `public/images/tarot/`.

## Art-direction reference

`docs/assets/mythborn-major-arcana-quality-gate.png` was generated with OpenAI's built-in image generation tool on 2026-07-28 as an original Mythborn concept sheet. It was used only to establish palette, frame and material direction. No panel from that sheet was cropped or reused as a production card.

All 78 production cards were generated independently after the quality gate. Group review sheets are documentation-only:

- `docs/assets/mythborn-major-arcana-final-review.jpg`
- `docs/assets/mythborn-wands-final-review.jpg`
- `docs/assets/mythborn-cups-final-review.jpg`
- `docs/assets/mythborn-swords-final-review.jpg`
- `docs/assets/mythborn-pentacles-final-review.jpg`

## Quality and provenance gates

`docs/assets/tarot-asset-registry.json` records each canonical asset path, master SHA-256, 256-bit perceptual difference hash, dimensions, production derivative hashes and byte sizes. The automated audit fails unless:

- all 78 canonical entries are `final`;
- 78 unique 1600 × 2800 masters exist;
- every card has 480 × 840 and 960 × 1680 AVIF and WebP grid/detail outputs;
- no exact duplicate exists;
- no perceptual pair falls below the configured 32/256 Hamming-distance floor;
- every derivative matches its recorded hash, dimensions and 4:7 ratio;
- daily card, library grid and detail renderer use canonical asset paths.

The closest accepted pair in the completed deck is still separated by 63/256 perceptual-hash bits, comfortably above the rejection threshold.

## Editorial review

The five group review sheets were inspected for card count, canonical mapping, frame consistency, suit identity, rank narrative, unwanted text, visual quality and scene duplication. Wands Page and Wands King initially contained unwanted English title plaques; both were rejected, independently corrected with the built-in image editing workflow, reprocessed and reviewed again. The accepted 78-card set contains no embedded card titles, pseudo-writing, logos or watermarks.

