// Mythborn Astrology Platform — Design Tokens & Cosmic Luxury Styling

export const TOKENS = {
  colors: {
    bg: '#08080c',
    bgStage: '#0d0b13',
    card: '#13101b',
    cardElevated: '#191524',
    border: 'rgba(212, 174, 117, 0.22)',
    borderHover: 'rgba(212, 174, 117, 0.55)',
    gold: '#d4ae75',
    goldBright: '#edd09e',
    goldMuted: '#9e8156',
    cream: '#f4eadc',
    muted: '#c3b6a9',
    dim: '#7c7283',
    ok: '#38b77a',
    fire: '#e56b55',
    earth: '#5fa875',
    air: '#6ba8e5',
    water: '#8875e5'
  },
  typography: {
    fontBody: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    fontSerif: 'Georgia, "Times New Roman", serif',
    fontArabic: 'system-ui, -apple-system, Tahoma, "Segoe UI", sans-serif'
  }
};

export const SHARED_CSS = `
:root {
  color-scheme: dark;
  --bg: #08080c;
  --bg-stage: #0d0b13;
  --card: #13101b;
  --card-elevated: #191524;
  --border: rgba(212, 174, 117, 0.22);
  --border-hover: rgba(212, 174, 117, 0.55);
  --gold: #d4ae75;
  --gold-bright: #edd09e;
  --gold-muted: #9e8156;
  --cream: #f4eadc;
  --muted: #c3b6a9;
  --dim: #7c7283;
  --fire: #e56b55;
  --earth: #5fa875;
  --air: #6ba8e5;
  --water: #8875e5;
  --font-sans: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --font-serif: Georgia, "Times New Roman", serif;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { min-height: 100%; background: var(--bg); scroll-behavior: smooth; }
body {
  margin: 0;
  color: var(--cream);
  font-family: var(--font-sans);
  background: var(--bg);
  line-height: 1.6;
  overflow-x: clip;
}
html[dir="rtl"] body {
  font-family: system-ui, -apple-system, Tahoma, sans-serif;
  line-height: 1.7;
}

a { color: inherit; text-decoration: none; }
img { max-width: 100%; height: auto; display: block; }
button { font-family: inherit; cursor: pointer; border: none; background: none; }

.astro-shell {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  position: relative;
  isolation: isolate;
  background: radial-gradient(circle at 50% 0%, #171124 0%, #08080c 60%);
}

.astro-container {
  width: min(1320px, calc(100% - 48px));
  margin: 0 auto;
}

/* Header & Navigation */
.astro-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(8, 8, 12, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  transition: all 0.25s ease;
}
.astro-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 16px 0;
}
.astro-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-serif);
  font-size: 20px;
  letter-spacing: 0.14em;
  color: var(--gold-bright);
  font-weight: 500;
}
.astro-brand-emblem {
  color: var(--gold);
  font-size: 18px;
}
.astro-nav-desktop {
  display: flex;
  align-items: center;
  gap: 22px;
  font-size: 14px;
  color: var(--muted);
}
.astro-nav-desktop a {
  transition: color 0.2s ease;
  position: relative;
  padding: 6px 0;
}
.astro-nav-desktop a:hover,
.astro-nav-desktop a[aria-current="page"] {
  color: var(--gold-bright);
}
.astro-nav-desktop a[aria-current="page"]::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gold);
  border-radius: 2px;
}

.astro-header-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}
.astro-cta-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #d4ae75 0%, #aa8447 100%);
  color: #08080c;
  font-weight: 600;
  font-size: 13px;
  padding: 9px 18px;
  border-radius: 999px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.astro-cta-pill:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(212, 174, 117, 0.35);
}

.astro-langs {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
}
.astro-langs a {
  padding: 4px 8px;
  border-radius: 999px;
  color: var(--muted);
  transition: all 0.2s ease;
}
.astro-langs a:hover {
  color: var(--cream);
}
.astro-langs a[aria-current="page"] {
  background: var(--gold);
  color: #08080c;
}

.astro-menu-btn {
  display: none;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--cream);
  font-size: 13px;
}

/* Mobile Drawer */
.astro-drawer {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  visibility: hidden;
}
.astro-drawer.is-open {
  visibility: visible;
}
.astro-drawer[hidden] {
  display: none !important;
}
.astro-drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
}
.astro-drawer-panel {
  position: relative;
  z-index: 2;
  width: min(340px, 86%);
  height: 100%;
  background: #0f0c18;
  border-right: 1px solid var(--border);
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
}
html[dir="rtl"] .astro-drawer-panel {
  border-right: none;
  border-left: 1px solid var(--border);
}
.astro-drawer-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.astro-drawer-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.astro-drawer-links a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--cream);
  font-size: 14px;
}
.astro-drawer-links a:hover,
.astro-drawer-links a[aria-current="page"] {
  border-color: var(--gold);
  background: rgba(212, 174, 117, 0.08);
  color: var(--gold-bright);
}

/* Page Components & Sections */
.astro-hero {
  padding: 68px 0 48px;
  text-align: center;
  position: relative;
}
.astro-hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--gold);
  margin-bottom: 16px;
  padding: 6px 16px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: rgba(212, 174, 117, 0.06);
}
.astro-hero h1 {
  font-family: var(--font-serif);
  font-size: clamp(34px, 4.4vw, 58px);
  line-height: 1.15;
  color: #fff;
  margin-bottom: 18px;
  font-weight: 400;
}
.astro-hero-lead {
  max-width: 680px;
  margin: 0 auto 32px;
  color: var(--muted);
  font-size: clamp(15px, 1.3vw, 18px);
  line-height: 1.68;
}
.astro-hero-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}
.astro-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #d4ae75 0%, #aa8447 100%);
  color: #08080c;
  font-weight: 600;
  padding: 13px 26px;
  border-radius: 999px;
  font-size: 14px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.astro-btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(212, 174, 117, 0.35);
}
.astro-btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--cream);
  border: 1px solid var(--border);
  padding: 13px 24px;
  border-radius: 999px;
  font-size: 14px;
  transition: all 0.2s ease;
}
.astro-btn-ghost:hover {
  border-color: var(--gold);
  background: rgba(212, 174, 117, 0.08);
}

.astro-section {
  padding: 48px 0;
}
.astro-section-head {
  text-align: center;
  margin-bottom: 36px;
}
.astro-section-head h2 {
  font-family: var(--font-serif);
  font-size: clamp(26px, 2.8vw, 38px);
  color: #fff;
  margin: 8px 0 10px;
  font-weight: 400;
}
.astro-section-head p {
  color: var(--muted);
  max-width: 600px;
  margin: 0 auto;
  font-size: 15px;
}

/* Card Grids */
.astro-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}
.astro-grid-4 {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}
.astro-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 26px 22px;
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}
.astro-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
}
.astro-card-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--gold);
  margin-bottom: 12px;
}
.astro-card h3 {
  font-family: var(--font-serif);
  font-size: 21px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: 400;
}
.astro-card p {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
  flex-grow: 1;
}
.astro-card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--gold);
  font-size: 13px;
  font-weight: 600;
}

/* Form Shell Placeholder */
.astro-form-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 32px 28px;
  max-width: 640px;
  margin: 0 auto;
}
.astro-form-group {
  margin-bottom: 18px;
}
.astro-form-group label {
  display: block;
  font-size: 13px;
  color: var(--cream);
  margin-bottom: 6px;
  font-weight: 500;
}
.astro-form-group input,
.astro-form-group select {
  width: 100%;
  padding: 12px 14px;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: #fff;
  font-family: inherit;
  font-size: 14px;
}
.astro-form-group input:focus,
.astro-form-group select:focus {
  outline: none;
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(212, 174, 117, 0.18);
}
.astro-form-note {
  font-size: 12px;
  color: var(--dim);
  margin-top: 6px;
}

/* Big Three & Natural Zodiac Components */
.big-three-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin: 36px 0;
}
.big-three-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 28px 24px;
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease;
}
.big-three-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
}
.big-three-card:hover {
  transform: translateY(-2px);
  border-color: var(--border-hover);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
}
.big-three-glyph {
  font-size: 28px;
  margin-bottom: 12px;
  display: inline-block;
  color: var(--gold-bright);
}
.big-three-card h3 {
  font-family: var(--font-serif);
  font-size: 20px;
  color: #fff;
  margin-bottom: 8px;
  font-weight: 400;
}
.big-three-card p {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
}

/* Zodiac Natural Card */
.zodiac-natural-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: all 0.2s ease;
  position: relative;
}
.zodiac-natural-card:hover {
  border-color: var(--gold);
  transform: translateY(-2px);
  background: var(--card-elevated);
}
.zodiac-natural-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.zodiac-natural-symbol {
  font-size: 24px;
  color: var(--gold);
}
.zodiac-element-tag {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 3px 10px;
  border-radius: 999px;
  font-weight: 700;
}
.element-fire { background: rgba(229, 107, 85, 0.15); color: #f28b77; border: 1px solid rgba(229, 107, 85, 0.3); }
.element-earth { background: rgba(95, 168, 117, 0.15); color: #7ecb94; border: 1px solid rgba(95, 168, 117, 0.3); }
.element-air { background: rgba(107, 168, 229, 0.15); color: #8ec2f7; border: 1px solid rgba(107, 168, 229, 0.3); }
.element-water { background: rgba(136, 117, 229, 0.15); color: #aca0f7; border: 1px solid rgba(136, 117, 229, 0.3); }

.zodiac-natural-title {
  font-family: var(--font-serif);
  font-size: 19px;
  color: #fff;
  font-weight: 400;
  margin-top: 4px;
}
.zodiac-natural-ruler {
  font-size: 12px;
  color: var(--dim);
}
.zodiac-natural-dates {
  font-size: 12px;
  color: var(--muted);
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

/* Sky Calendar Snapshot */
.sky-snapshot-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-top: 24px;
}
.sky-snapshot-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 20px 18px;
  text-align: center;
}
.sky-snapshot-phase {
  font-size: 26px;
  margin-bottom: 8px;
  color: var(--gold);
}
.sky-snapshot-card h4 {
  font-size: 15px;
  color: #fff;
  margin-bottom: 6px;
  font-weight: 500;
}
.sky-snapshot-card time {
  display: block;
  font-size: 13px;
  color: var(--gold-bright);
  font-weight: 600;
  margin-bottom: 4px;
}
.sky-snapshot-card small {
  font-size: 11px;
  color: var(--dim);
}

/* Quick Natal Box in Hero */
.astro-quick-box {
  background: rgba(19, 16, 27, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 32px 28px;
  max-width: 680px;
  margin: 36px auto 0;
  text-align: start;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
}
.astro-quick-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin: 18px 0;
}
.astro-quick-field label {
  display: block;
  font-size: 12px;
  color: var(--muted);
  margin-bottom: 6px;
  font-weight: 500;
}
.astro-quick-field input {
  width: 100%;
  padding: 10px 12px;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: #fff;
  font-size: 13px;
}
.astro-quick-field input:focus {
  outline: none;
  border-color: var(--gold);
}
.astro-quick-btn {
  width: 100%;
  padding: 12px 20px;
  background: linear-gradient(135deg, #d4ae75 0%, #aa8447 100%);
  color: #08080c;
  font-weight: 600;
  border-radius: 8px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
}
.astro-quick-btn:hover {
  box-shadow: 0 4px 16px rgba(212, 174, 117, 0.35);
  transform: translateY(-1px);
}

/* SVG Natal Wheel Container */
.natal-wheel-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 28px auto;
  max-width: 520px;
}
.natal-wheel-svg {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 10px 24px rgba(0, 0, 0, 0.6));
}

/* Tables for Transits & Aspects */
.astro-table-wrap {
  overflow-x: auto;
  margin: 24px 0;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--card);
}
.astro-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  text-align: start;
}
.astro-table th {
  background: rgba(255, 255, 255, 0.04);
  color: var(--gold);
  padding: 12px 16px;
  font-weight: 600;
  border-bottom: 1px solid var(--border);
  white-space: nowrap;
}
.astro-table td {
  padding: 12px 16px;
  color: var(--cream);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  white-space: nowrap;
}
.astro-table tr:hover td {
  background: rgba(212, 174, 117, 0.05);
}

@media (max-width: 980px) {
  .big-three-grid { grid-template-columns: 1fr; }
  .sky-snapshot-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .astro-quick-grid { grid-template-columns: 1fr; }
}

/* Footer */
.astro-footer {
  margin-top: auto;
  border-top: 1px solid var(--border);
  background: #060609;
  padding: 56px 0 32px;
}
.astro-footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.2fr;
  gap: 40px;
  margin-bottom: 40px;
}
.astro-footer-brand p {
  color: var(--muted);
  font-size: 14px;
  max-width: 320px;
  margin: 12px 0 18px;
}
.astro-footer-col h4 {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--gold);
  margin-bottom: 16px;
  font-weight: 600;
}
.astro-footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.astro-footer-col a {
  color: var(--muted);
  font-size: 13px;
  transition: color 0.2s ease;
}
.astro-footer-col a:hover {
  color: var(--cream);
}
.astro-footer-disclaimer {
  padding: 20px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  font-size: 12px;
  color: var(--dim);
  line-height: 1.6;
  margin-bottom: 24px;
}
.astro-footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-size: 12px;
  color: var(--dim);
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  flex-wrap: wrap;
}
.astro-qct-sig {
  color: var(--gold);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

@media (max-width: 980px) {
  .astro-nav-desktop,
  .astro-cta-pill { display: none; }
  .astro-menu-btn { display: inline-flex; }
  .astro-grid-3,
  .astro-grid-4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .astro-footer-grid { grid-template-columns: 1fr 1fr; gap: 30px; }
}
@media (max-width: 640px) {
  .astro-grid-3,
  .astro-grid-4 { grid-template-columns: 1fr; }
  .astro-footer-grid { grid-template-columns: 1fr; gap: 26px; }
  .astro-hero { padding: 48px 0 32px; }
}
`;
