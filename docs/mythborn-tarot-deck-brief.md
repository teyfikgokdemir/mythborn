# Mythborn Tarot Deck — Original Art Production Brief

## Purpose and rights

Create one coherent, original 78-card deck exclusively for Mythborn. No stock composites, copied Rider–Waite–Smith drawings, living-artist imitation, trademarked characters, or third-party generative outputs without documented commercial rights. The commissioned artist or production vendor must deliver a signed worldwide, perpetual digital-use licence and disclose every source asset and tool.

## Art direction

- Tone: contemporary, trustworthy, cinematic and mystical; never horror, fortune-teller cliché, neon, or symbol clutter.
- Palette: midnight blue, aubergine, restrained burgundy, charcoal and controlled antique-gold light.
- System: a consistent border, number position, title-safe area and visual grammar across all 78 cards.
- Variation: each card needs its own silhouette, focal gesture and lighting pattern. Major Arcana may feel monumental; Minor Arcana should retain suit identity without becoming repetitive.
- Motifs: moon phases, celestial maps, mineral textures, graceful botanical forms and historically appropriate symbolic geometry. Every symbol must have a documented reason.
- Accessibility: a strong central subject, readable at 160 px wide, and no meaning communicated by colour alone.

## Composition and mobile-safe area

- Master ratio: 2:3 portrait.
- Master canvas: 2400 × 3600 px, 16-bit or highest available source.
- Keep the essential subject inside the central 72% width and 78% height.
- Reserve the outer 8% for responsive cropping and the lower 12% for optional localized labels.
- Do not bake Turkish, English or Greek text into the art master.

## File contract

Use the canonical slug list already exported by `src/tarot-library.js`.

```text
public/images/tarot/deck/{slug}/
  {slug}-320.avif
  {slug}-320.webp
  {slug}-480.avif
  {slug}-480.webp
  {slug}-720.avif
  {slug}-720.webp
```

Every output keeps the 2:3 ratio:

- 320 × 480 for compact cards
- 480 × 720 for standard gallery and mobile detail
- 720 × 1080 for large detail and high-density screens

AVIF target quality: 48–58. WebP target quality: 74–82. Strip metadata after rights records are archived separately. Do not upscale.

## Delivery manifest

Ship `public/images/tarot/deck/manifest.json` with, for every card:

- canonical slug
- Arcana and suit
- source artwork filename and checksum
- creator, licence and approval date
- palette and symbol notes
- focal point as normalized `x`/`y`
- natural width and height
- TR, EN and GR alt text

Alt text should identify the card and its main visual action naturally, not list decorative symbols. Example structure:

- TR: “Yıldız Tarot kartı; gece göğünün altında suyu toprağa döken sakin bir figür.”
- EN: “The Star Tarot card; a calm figure pours water onto the earth beneath a night sky.”
- GR: “Η κάρτα Ταρώ Το Άστρο· μια ήρεμη μορφή χύνει νερό στη γη κάτω από τον νυχτερινό ουρανό.”

## Review gates

1. Approve six style frames first: The Fool, High Priestess, Lovers, Death, Ace of Cups and Ten of Swords.
2. Review the 22 Major Arcana as one set.
3. Review one complete suit before producing the remaining three.
4. Validate each card at 160, 240 and 480 px widths on dark UI.
5. Run originality and rights review before repository import.
6. Only after all 78 cards pass review should the CSS placeholder frames be replaced with responsive `<picture>` elements.
