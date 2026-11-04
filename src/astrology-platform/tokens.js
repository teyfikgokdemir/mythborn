// Mythborn Design System Tokens & Global Shared Styles
export const SHARED_CSS = `
:root {
  --bg: #05070e;
  --bg-gradient: radial-gradient(circle at 50% -20%, #151a30 0%, #080a14 60%, #04050a 100%);
  --card: rgba(14, 18, 34, 0.65);
  --card-elevated: rgba(20, 26, 48, 0.85);
  --border: rgba(212, 175, 55, 0.18);
  --border-hover: rgba(212, 175, 55, 0.45);
  --gold: #d4af37;
  --gold-bright: #f3cf7a;
  --gold-dark: #8c7322;
  --gold-gradient: linear-gradient(135deg, #f5d78e 0%, #d4af37 50%, #997a26 100%);
  --cream: #f8f6f0;
  --muted: #a6abbd;
  --dim: #6b7280;
  --font-serif: "Cinzel", "Playfair Display", Georgia, "Times New Roman", serif;
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: var(--font-sans);
  background: var(--bg);
  color: var(--cream);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  scroll-snap-type: y proximity;
}

body {
  min-height: 100vh;
  background: var(--bg-gradient);
  background-attachment: fixed;
  color: var(--cream);
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

button, input, select, textarea {
  font: inherit;
}

.astro-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
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
  background: rgba(5, 7, 14, 0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  transition: all 0.25s ease;
}
.astro-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px 0;
}
.astro-brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-serif);
  font-size: 21px;
  letter-spacing: 0.2em;
  color: #fff;
  font-weight: 600;
  flex-shrink: 0;
  text-decoration: none;
  transition: opacity 0.2s ease;
}
.astro-brand:hover {
  opacity: 0.9;
}
.astro-brand-logo-img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.5));
}
.astro-brand-name {
  background: linear-gradient(135deg, #ffffff 30%, #f3cf7a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.astro-nav-desktop {
  display: flex;
  align-items: center;
  gap: 26px;
  font-size: 13.5px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--muted);
  flex-shrink: 0;
}
.astro-nav-desktop > a {
  transition: color 0.2s ease;
  position: relative;
  padding: 8px 0;
  white-space: nowrap !important;
  font-weight: 500;
}
.astro-nav-desktop > a:hover,
.astro-nav-desktop > a[aria-current="page"] {
  color: var(--gold-bright);
}
.astro-nav-desktop > a[aria-current="page"]::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gold);
  border-radius: 2px;
}

/* Nav Dropdown */
.astro-nav-dropdown {
  position: relative;
  display: inline-flex;
  align-items: center;
}
.astro-nav-dropdown-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: transparent;
  border: none;
  color: var(--muted);
  font-family: inherit;
  font-size: 13.5px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 8px 0;
  cursor: pointer;
  white-space: nowrap !important;
  transition: color 0.2s ease;
}
.astro-nav-dropdown:hover .astro-nav-dropdown-btn,
.astro-nav-dropdown:focus-within .astro-nav-dropdown-btn {
  color: var(--gold-bright);
}
.astro-nav-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  width: 260px;
  background: rgba(9, 12, 24, 0.96);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(212, 175, 55, 0.26);
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.75), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  padding: 8px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 150;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.astro-nav-dropdown:hover .astro-nav-dropdown-menu,
.astro-nav-dropdown:focus-within .astro-nav-dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(4px);
}
.astro-nav-dropdown-menu a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  color: #d1d5db;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: none;
  border-radius: 10px;
  white-space: nowrap !important;
  transition: all 0.18s ease;
}
.astro-nav-dropdown-menu a:hover {
  background: rgba(212, 175, 55, 0.14);
  color: var(--gold-bright);
  transform: translateX(3px);
}

.astro-header-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
}
.astro-cta-gold {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #e5c38c 0%, #c49952 50%, #9c7331 100%);
  color: #05070e;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.02em;
  padding: 9px 20px;
  border-radius: 999px;
  white-space: nowrap !important;
  box-shadow: 0 4px 18px rgba(212, 175, 55, 0.35);
  transition: all 0.22s ease;
}
.astro-cta-gold:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 24px rgba(212, 175, 55, 0.5);
}

.astro-lang-pills {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 3px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
}
.astro-lang-pills a {
  padding: 5px 9px;
  border-radius: 999px;
  color: var(--muted);
  white-space: nowrap !important;
  transition: all 0.2s ease;
}
.astro-lang-pills a:hover {
  color: #fff;
}
.astro-lang-pills a.is-active,
.astro-lang-pills a[aria-current="page"] {
  background: var(--gold-gradient);
  color: #05070e;
  font-weight: 800;
}

.astro-menu-btn {
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--cream);
  font-size: 18px;
  cursor: pointer;
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
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(10px);
}
.astro-drawer-panel {
  position: relative;
  z-index: 2;
  width: min(340px, 86%);
  height: 100%;
  background: #090c16;
  border-right: 1px solid var(--border);
  padding: 26px 22px;
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
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}
.astro-drawer-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.astro-drawer-links a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--cream);
  font-size: 14.5px;
}
.astro-drawer-links a:hover,
.astro-drawer-links a[aria-current="page"] {
  border-color: var(--gold);
  background: rgba(212, 175, 55, 0.1);
  color: var(--gold-bright);
}

/* Hero Section with Celestial Art Background */
.astro-hero {
  position: relative;
  padding: clamp(36px, 6vh, 68px) 0 clamp(24px, 4vh, 48px);
  text-align: center;
  overflow: hidden;
  background: radial-gradient(circle at 75% 35%, rgba(13, 18, 36, 0.3) 0%, rgba(5, 7, 14, 0.92) 65%),
              linear-gradient(180deg, rgba(8, 9, 14, 0.88) 0%, rgba(5, 7, 14, 0.98) 100%),
              url('/images/astrology/hero-celestial-cosmos.jpg') right center / cover no-repeat;
  border-bottom: 1px solid var(--border);
}
.astro-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.06) 0%, transparent 60%);
  pointer-events: none;
}
.astro-hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: var(--gold-bright);
  margin-bottom: 14px;
  padding: 6px 16px;
  border: 1px solid rgba(212, 175, 55, 0.32);
  border-radius: 999px;
  background: rgba(212, 175, 55, 0.08);
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}
.astro-hero h1 {
  font-family: var(--font-serif);
  font-size: clamp(28px, 3.8vw, 52px);
  line-height: 1.15;
  letter-spacing: -0.015em;
  color: #fff;
  margin-bottom: 14px;
  font-weight: 400;
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.7);
}
.astro-hero-lead {
  max-width: 680px;
  margin: 0 auto 22px;
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(14.5px, 1.2vw, 17px);
  line-height: 1.62;
  font-weight: 300;
}
.astro-hero-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}
.astro-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #e5c38c 0%, #c49952 50%, #9c7331 100%);
  color: #06080e;
  font-weight: 700;
  padding: 13px 28px;
  border-radius: 999px;
  font-size: 14px;
  letter-spacing: 0.02em;
  box-shadow: 0 8px 28px rgba(212, 175, 55, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.4);
  transition: all 0.25s ease;
}
.astro-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 36px rgba(212, 175, 55, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.6);
}
.astro-btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(14, 18, 32, 0.6);
  color: #fff;
  border: 1px solid rgba(212, 175, 55, 0.35);
  padding: 13px 24px;
  border-radius: 999px;
  font-size: 14px;
  backdrop-filter: blur(16px);
  transition: all 0.25s ease;
}
.astro-btn-ghost:hover {
  border-color: var(--gold-bright);
  background: rgba(212, 175, 55, 0.12);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

/* Quick Natal Instrument Box */
.astro-quick-box {
  max-width: 860px;
  margin: 0 auto;
  background: rgba(11, 15, 28, 0.82);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  border: 1px solid rgba(212, 175, 55, 0.28);
  border-radius: 20px;
  padding: 22px 28px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  text-align: left;
}
html[dir="rtl"] .astro-quick-box {
  text-align: right;
}
.astro-quick-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 14px;
}
.astro-quick-field label {
  display: block;
  font-size: 11.5px;
  color: var(--cream);
  font-weight: 500;
  margin-bottom: 5px;
  letter-spacing: 0.04em;
}
.astro-quick-field input {
  width: 100%;
  padding: 10px 12px;
  background: rgba(5, 7, 14, 0.7);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: #fff;
  font-size: 13.5px;
  transition: all 0.2s ease;
}
.astro-quick-field input:focus {
  outline: none;
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
}
.astro-quick-btn {
  background: var(--gold-gradient);
  color: #05070e;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  padding: 11px 24px;
  font-size: 13.5px;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(212, 175, 55, 0.3);
  transition: all 0.2s ease;
}
.astro-quick-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(212, 175, 55, 0.45);
}

/* 24-Hour Custom Dual Time Picker (Strict 24h, zero native AM/PM popups) */
.astro-time-24h {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
}
.astro-time-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.astro-time-select {
  width: 100%;
  padding: 10px 8px;
  background: rgba(5, 7, 14, 0.85);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.04em;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23c49952' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  padding-right: 22px;
  transition: all 0.2s ease;
}
html[dir="rtl"] .astro-time-select {
  background-position: left 8px center;
  padding-right: 8px;
  padding-left: 22px;
}
.astro-time-select:focus {
  outline: none;
  border-color: var(--gold-bright);
  box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.25);
}
.astro-time-select:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.astro-time-select option {
  background: #090c16;
  color: #fff;
  font-size: 13px;
  padding: 4px;
}
.astro-time-colon {
  color: var(--gold);
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  padding-bottom: 10px;
}
.astro-time-sub {
  font-size: 9.5px;
  color: var(--dim);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: center;
}

.astro-section {
  padding: clamp(36px, 5vh, 60px) 0;
  scroll-snap-align: start;
  scroll-margin-top: 76px;
}
.astro-section-viewport {
  min-height: calc(100vh - 76px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-snap-align: start;
  scroll-margin-top: 76px;
}
.astro-section-head {
  text-align: center;
  margin-bottom: 28px;
}
.astro-section-head h2 {
  font-family: var(--font-serif);
  font-size: clamp(28px, 3.2vw, 44px);
  color: #fff;
  margin: 10px 0 12px;
  font-weight: 400;
}
.astro-section-head p {
  color: var(--muted);
  max-width: 640px;
  margin: 0 auto;
  font-size: 15.5px;
  line-height: 1.65;
}

/* Archetype Art Cards (Foundational Triad) */
.archetype-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  margin: 18px 0 0;
}
.archetype-card {
  background: linear-gradient(180deg, rgba(16, 21, 38, 0.8) 0%, rgba(9, 12, 22, 0.98) 100%);
  border: 1px solid rgba(212, 175, 55, 0.22);
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
}
.archetype-card:hover {
  transform: translateY(-4px);
  border-color: rgba(212, 175, 55, 0.55);
  box-shadow: 0 20px 44px rgba(0, 0, 0, 0.65), 0 0 20px rgba(212, 175, 55, 0.18);
}
.archetype-art-wrap {
  width: 100%;
  height: 190px;
  aspect-ratio: auto;
  overflow: hidden;
  position: relative;
  background: #05070e;
  border-bottom: 1px solid rgba(212, 175, 55, 0.16);
}
.archetype-art-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 38%;
  transition: transform 0.6s ease;
  display: block;
}
.archetype-card:hover .archetype-art-img {
  transform: scale(1.05);
}
.archetype-art-wrap::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 55%, rgba(9, 12, 22, 0.95) 100%);
}
.archetype-card-body {
  padding: 16px 20px 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.archetype-card-glyph {
  font-size: 22px;
  color: var(--gold-bright);
  margin-bottom: 4px;
  display: inline-block;
}
.archetype-card-title {
  font-family: var(--font-serif);
  font-size: 18px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 6px;
}
.archetype-card-desc {
  color: var(--muted);
  font-size: 13.5px;
  line-height: 1.55;
  margin: 0;
}

/* Zodiac Celestial Tapestry Showcase Banner */
.zodiac-tapestry-wrap {
  width: 100%;
  max-height: 180px;
  border-radius: 18px;
  overflow: hidden;
  margin-bottom: 24px;
  position: relative;
  border: 1px solid rgba(212, 175, 55, 0.25);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.55);
}
.zodiac-tapestry-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  object-position: center 30%;
  display: block;
}
.zodiac-tapestry-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(5, 7, 14, 0.2) 0%, rgba(5, 7, 14, 0.9) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 24px;
}
.zodiac-tapestry-title {
  font-family: var(--font-serif);
  font-size: clamp(20px, 2.2vw, 26px);
  color: #fff;
  font-weight: 500;
  margin-bottom: 4px;
}
.zodiac-tapestry-sub {
  color: rgba(255, 255, 255, 0.78);
  font-size: 13.5px;
  max-width: 650px;
  line-height: 1.5;
}

/* Zodiac Natural Cards Grid */
.zodiac-natural-card {
  background: linear-gradient(180deg, rgba(16, 21, 38, 0.65) 0%, rgba(10, 13, 24, 0.9) 100%);
  border: 1px solid rgba(212, 175, 55, 0.18);
  border-radius: 16px;
  padding: 18px 18px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;
}
.zodiac-natural-card:hover {
  transform: translateY(-3px);
  border-color: rgba(212, 175, 55, 0.5);
  background: linear-gradient(180deg, rgba(22, 28, 50, 0.8) 0%, rgba(14, 18, 34, 0.98) 100%);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.55), 0 0 20px rgba(212, 175, 55, 0.14);
}
.zodiac-natural-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.zodiac-icon-badge {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(212, 175, 55, 0.08);
  border: 1px solid rgba(212, 175, 55, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}
.zodiac-icon-badge img {
  width: 28px;
  height: 28px;
  filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.45));
}
.zodiac-element-tag {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px 12px;
  border-radius: 999px;
  font-weight: 700;
}
.element-fire { background: rgba(229, 107, 85, 0.15); color: #f28b77; border: 1px solid rgba(229, 107, 85, 0.35); }
.element-earth { background: rgba(95, 168, 117, 0.15); color: #7ecb94; border: 1px solid rgba(95, 168, 117, 0.35); }
.element-air { background: rgba(107, 168, 229, 0.15); color: #8ec2f7; border: 1px solid rgba(107, 168, 229, 0.35); }
.element-water { background: rgba(136, 117, 229, 0.15); color: #aca0f7; border: 1px solid rgba(136, 117, 229, 0.35); }

.zodiac-natural-title {
  font-family: var(--font-serif);
  font-size: 20px;
  color: #fff;
  font-weight: 400;
  margin-top: 4px;
}
.zodiac-natural-ruler {
  font-size: 12.5px;
  color: var(--dim);
}
.zodiac-natural-dates {
  font-size: 12px;
  color: var(--gold);
  letter-spacing: 0.04em;
  font-weight: 600;
}

/* Card Grids */
.astro-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}
.astro-grid-4 {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}
.astro-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;
}
.astro-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-3px);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45), 0 0 20px rgba(212, 175, 55, 0.1);
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
  font-size: 14.5px;
  line-height: 1.62;
  margin-bottom: 18px;
  flex-grow: 1;
}
.astro-card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--gold);
  font-size: 13.5px;
  font-weight: 600;
}

/* Gözde Tarot & Video Spotlight Bridge */
.astro-bridge-card {
  display: flex;
  align-items: center;
  gap: 36px;
  background: linear-gradient(135deg, rgba(20, 26, 48, 0.8) 0%, rgba(10, 14, 28, 0.95) 100%);
  border: 1px solid rgba(212, 175, 55, 0.28);
  border-radius: 24px;
  padding: 36px 40px;
  margin: 40px 0;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55);
}
.astro-bridge-copy {
  flex: 1;
}
.astro-bridge-copy h3 {
  font-family: var(--font-serif);
  font-size: 26px;
  color: #fff;
  margin: 8px 0 12px;
  font-weight: 400;
}
.astro-bridge-copy p {
  color: var(--muted);
  font-size: 15px;
  line-height: 1.65;
  margin-bottom: 22px;
}
.astro-bridge-media {
  width: 220px;
  height: 220px;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(212, 175, 55, 0.35);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
  flex-shrink: 0;
}
.astro-bridge-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Footer */
.astro-footer {
  border-top: 1px solid var(--border);
  background: #04050a;
  padding: 72px 0 36px;
  color: var(--muted);
}
.astro-footer-grid {
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: 48px;
  margin-bottom: 48px;
}
.astro-footer-brand p {
  margin-top: 14px;
  font-size: 14px;
  line-height: 1.68;
  max-width: 380px;
}
.astro-footer-col h4 {
  font-family: var(--font-serif);
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #fff;
  margin-bottom: 18px;
}
.astro-footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
}
.astro-footer-col a:hover {
  color: var(--gold-bright);
}
.astro-footer-disclaimer {
  padding: 24px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 12.5px;
  line-height: 1.7;
  color: var(--dim);
  text-align: center;
}
.astro-footer-bottom {
  padding-top: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  flex-wrap: wrap;
  gap: 16px;
}
.astro-qct-sig {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--gold);
  font-size: 12px;
  letter-spacing: 0.05em;
}

@media (max-width: 1100px) {
  .astro-nav-desktop { display: none; }
  .astro-menu-btn { display: inline-flex; }
  .astro-grid-4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .archetype-grid { grid-template-columns: 1fr; }
  .astro-bridge-card { flex-direction: column; text-align: center; }
  .astro-bridge-copy { display: flex; flex-direction: column; align-items: center; }
}

@media (max-width: 768px) {
  .astro-grid-3,
  .astro-grid-4 { grid-template-columns: 1fr; }
  .astro-quick-grid { grid-template-columns: 1fr; }
  .astro-footer-grid { grid-template-columns: 1fr; gap: 32px; }
  .astro-cta-gold { display: none; }
}
`;
