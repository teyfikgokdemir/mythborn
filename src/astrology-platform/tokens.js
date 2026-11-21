// Mythborn Design System Tokens & Global Shared Styles
export const SHARED_CSS = `
:root {
  --bg: #080b12;
  --bg-gradient: radial-gradient(circle at 50% -18%, #151e34 0%, #0b101b 55%, #080b12 100%);
  --card: rgba(15, 21, 34, 0.72);
  --card-elevated: rgba(21, 29, 46, 0.88);
  --border: rgba(214, 190, 146, 0.18);
  --border-hover: rgba(214, 190, 146, 0.46);
  --gold: #d6be92;
  --gold-bright: #ead7b2;
  --gold-dark: #937d55;
  --gold-gradient: linear-gradient(135deg, #efe0c0 0%, #d6be92 52%, #a68c5e 100%);
  --moon-mist: #94a9c9;
  --cream: #f4f1ea;
  --muted: #a6b0c4;
  --dim: #6f7a90;
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
  color-scheme: dark;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  scroll-snap-type: y proximity;
  scroll-padding-top: 76px;
  overflow-x: hidden !important;
  max-width: 100vw !important;
  width: 100% !important;
}

body {
  min-height: 100vh;
  background: var(--bg-gradient);
  background-attachment: fixed;
  color: var(--cream);
  overflow-x: hidden !important;
  max-width: 100vw !important;
  width: 100% !important;
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.astro-skip-link {
  position: fixed;
  inset-block-start: 12px;
  inset-inline-start: 16px;
  z-index: 2000;
  padding: 11px 16px;
  border-radius: 12px;
  background: var(--cream);
  color: var(--bg);
  font-weight: 700;
  transform: translateY(-160%);
  transition: transform 0.2s ease-out;
}

.astro-skip-link:focus-visible {
  transform: translateY(0);
  outline: 2px solid var(--gold-bright);
  outline-offset: 3px;
}

button, input, select, textarea {
  font: inherit;
}

/* Universal Ultra-Luxury Form Inputs — Site-Wide Default */
input[type="text"],
input[type="date"],
input[type="time"],
input[type="email"],
input[type="number"],
input[type="search"],
select,
textarea {
  font-family: inherit;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  padding: 11px 14px;
  background: rgba(10, 14, 26, 0.85) !important;
  color: var(--cream) !important;
  border: 1px solid rgba(212, 175, 55, 0.28) !important;
  border-radius: 12px !important;
  outline: none;
  color-scheme: dark;
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
}

input[type="text"]::placeholder,
textarea::placeholder {
  color: rgba(166, 171, 189, 0.55);
}

input[type="text"]:focus,
input[type="date"]:focus,
input[type="time"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
input[type="search"]:focus,
select:focus,
textarea:focus {
  border-color: var(--gold-bright) !important;
  background: rgba(14, 20, 38, 0.95) !important;
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.22), 0 0 16px rgba(212, 175, 55, 0.15), inset 0 1px 2px rgba(0, 0, 0, 0.4) !important;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(0.85) sepia(0.5) saturate(2) hue-rotate(5deg);
  cursor: pointer;
  opacity: 0.85;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

input[type="date"]::-webkit-calendar-picker-indicator:hover {
  opacity: 1;
  transform: scale(1.1);
}

input[type="checkbox"] {
  accent-color: var(--gold);
  cursor: pointer;
}

/* Site-Wide Form Container & Group Cards */
.astro-form-card {
  background: linear-gradient(165deg, rgba(14, 18, 34, 0.85) 0%, rgba(8, 10, 20, 0.95) 100%);
  border: 1px solid rgba(212, 175, 55, 0.25);
  border-radius: 20px;
  padding: clamp(20px, 3.5vw, 36px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

.astro-form-group {
  margin-bottom: 16px;
}

.astro-form-group label {
  display: block;
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--muted);
  margin-bottom: 6px;
  text-transform: uppercase;
}

/* Universal Haute Horlogerie Form Elements — Eliminates Browser Default White Inputs */
input[type="text"],
input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="email"],
input[type="number"],
input[type="search"],
select,
textarea,
.astro-form-group input,
.astro-form-card input,
.synastry-person-card input,
.natal-form-field input {
  width: 100%;
  padding: 11px 14px;
  background: rgba(8, 12, 22, 0.88) !important;
  border: 1px solid rgba(212, 175, 55, 0.3) !important;
  border-radius: 10px;
  color: #ffffff !important;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.4;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  color-scheme: dark;
}

input[type="text"]:focus,
input[type="date"]:focus,
input[type="time"]:focus,
input[type="datetime-local"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
input[type="search"]:focus,
select:focus,
textarea:focus,
.astro-form-group input:focus,
.astro-form-card input:focus,
.synastry-person-card input:focus,
.natal-form-field input:focus {
  outline: none;
  border-color: var(--gold-bright) !important;
  background: rgba(14, 20, 36, 0.96) !important;
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.25), inset 0 2px 4px rgba(0, 0, 0, 0.4);
}

input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(0.85) sepia(60%) saturate(300%) hue-rotate(5deg);
  cursor: pointer;
}

.synastry-person-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(212, 175, 55, 0.18);
  border-radius: 16px;
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.25s ease;
}

.synastry-person-card:hover {
  border-color: rgba(212, 175, 55, 0.4);
  background: rgba(212, 175, 55, 0.03);
}

.synastry-person-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  padding-bottom: 10px;
  margin-bottom: 6px;
}

.synastry-person-title {
  font-family: var(--font-serif);
  font-size: 17px;
  color: var(--gold-bright);
  margin: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.synastry-person-badge {
  font-size: 10.5px;
  letter-spacing: 0.08em;
  padding: 3px 8px;
  border-radius: 999px;
  background: rgba(212, 175, 55, 0.12);
  color: var(--gold);
  border: 1px solid rgba(212, 175, 55, 0.25);
  font-weight: 600;
}

.astro-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 100vw !important;
  width: 100% !important;
  position: relative;
  padding-top: 68px;
  overflow-x: clip !important;
}

main {
  flex-grow: 1;
  max-width: 100vw !important;
  width: 100% !important;
  overflow-x: clip !important;
}

.astro-container {
  width: min(1320px, calc(100% - 36px));
  margin: 0 auto;
}

/* Header & Navigation — Ultra-Luxury Editorial Language (Always Fixed Floating Header) */
.astro-header {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  width: 100% !important;
  max-width: 100vw !important;
  z-index: 1000 !important;
  background: rgba(5, 7, 14, 0.92);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.18);
  box-shadow: 0 4px 28px rgba(0, 0, 0, 0.65);
  overflow-x: clip !important;
  transition: all 0.25s ease;
}
.astro-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 13px 0;
}
.astro-brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-serif);
  font-size: 19px;
  letter-spacing: 0.26em;
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
  width: 28px;
  height: 28px;
  border-radius: 50%;
  filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.55));
}
.astro-brand-name {
  background: linear-gradient(135deg, #ffffff 40%, #f3cf7a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.astro-nav-desktop {
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(248, 246, 240, 0.72);
  flex-shrink: 0;
}
.astro-nav-desktop > a {
  transition: all 0.2s ease;
  position: relative;
  padding: 6px 0;
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
  bottom: -2px;
  left: 0;
  right: 0;
  height: 1.5px;
  background: var(--gold-gradient);
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
  color: rgba(248, 246, 240, 0.72);
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 6px 0;
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
  font-size: 12.5px;
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
  gap: 12px;
  flex-shrink: 0;
}
.astro-cta-gold {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.16) 0%, rgba(180, 140, 30, 0.08) 100%);
  border: 1px solid rgba(212, 175, 55, 0.5);
  color: var(--gold-bright);
  font-weight: 600;
  font-size: 11.5px;
  letter-spacing: 0.06em;
  padding: 7px 16px;
  border-radius: 8px;
  white-space: nowrap !important;
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.12);
  transition: all 0.22s ease;
}
.astro-cta-gold:hover {
  background: var(--gold-gradient);
  color: #05070e;
  border-color: transparent;
  transform: translateY(-1px);
  box-shadow: 0 4px 18px rgba(212, 175, 55, 0.45);
}

.astro-lang-pills {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 3px 8px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(212, 175, 55, 0.22);
  border-radius: 8px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
}
.astro-lang-pills a {
  padding: 2px 6px;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.5);
  white-space: nowrap !important;
  transition: all 0.2s ease;
  text-decoration: none;
}
.astro-lang-pills a:hover {
  color: #fff;
}
.astro-lang-pills a.is-active,
.astro-lang-pills a[aria-current="page"] {
  color: var(--gold-bright);
  background: rgba(212, 175, 55, 0.16);
  font-weight: 700;
  box-shadow: inset 0 0 8px rgba(212, 175, 55, 0.25);
}
.astro-lang-dot {
  color: rgba(212, 175, 55, 0.35);
  font-size: 10px;
  margin: 0 1px;
  user-select: none;
}

.astro-menu-btn {
  display: none !important;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--cream);
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.astro-menu-btn:hover {
  border-color: var(--gold);
  color: var(--gold-bright);
}

/* Mobile Drawer */
.astro-drawer {
  position: fixed;
  inset: 0;
  z-index: 1100 !important;
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
  scroll-snap-stop: always;
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
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(12, 16, 30, 0.85) 100%);
  border: 1px solid rgba(212, 175, 55, 0.35);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
}
.zodiac-glyph-mark {
  font-size: 20px;
  line-height: 1;
  color: var(--gold-bright);
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.65);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.zodiac-icon-badge img {
  width: 26px;
  height: 26px;
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

/* Celestial Archetype Bridge Card */
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

/* ==========================================================================
   DAILY HOROSCOPES & CELESTIAL WEATHER JOURNAL (/burc-yorumlari)
   Distinct visual architecture from encyclopedic /burclar
   ========================================================================== */
.horoscope-weather-ribbon {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding: 16px 22px;
  background: linear-gradient(135deg, rgba(20, 26, 48, 0.75) 0%, rgba(9, 12, 22, 0.95) 100%);
  border: 1px solid rgba(212, 175, 55, 0.32);
  border-radius: 16px;
  margin-bottom: 28px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
}
.horoscope-weather-cluster {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.horoscope-weather-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(212, 175, 55, 0.2);
  font-size: 12px;
  color: var(--cream);
  font-weight: 500;
}
.horoscope-weather-pill strong {
  color: var(--gold-bright);
}

/* 12-Zodiac Horizontal Interactive Ribbon */
.horoscope-selector-ribbon {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 8px 4px 18px 4px;
  scrollbar-width: thin;
  scrollbar-color: rgba(212, 175, 55, 0.4) transparent;
  -webkit-overflow-scrolling: touch;
  margin-bottom: 32px;
}
.horoscope-selector-chip {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 12px;
  background: rgba(14, 18, 34, 0.75);
  border: 1px solid rgba(212, 175, 55, 0.22);
  color: var(--cream);
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;
}
.horoscope-selector-chip:hover {
  border-color: var(--gold);
  background: rgba(212, 175, 55, 0.16);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}
.horoscope-selector-chip.is-active {
  border-color: var(--gold-bright);
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.28) 0%, rgba(14, 18, 34, 0.95) 100%);
  color: var(--gold-bright);
  font-weight: 600;
  box-shadow: 0 0 16px rgba(212, 175, 55, 0.25);
}
.horoscope-selector-glyph {
  font-size: 16px;
  color: var(--gold-bright);
}

/* Featured Daily Spotlight Card */
.horoscope-spotlight-card {
  padding: 28px 32px;
  background: linear-gradient(145deg, rgba(18, 24, 46, 0.92) 0%, rgba(8, 11, 20, 0.98) 100%);
  border: 1px solid rgba(212, 175, 55, 0.4);
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.65), 0 0 30px rgba(212, 175, 55, 0.12);
  margin-bottom: 36px;
  position: relative;
  overflow: hidden;
}
.horoscope-spotlight-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--gold-bright), transparent);
}
.horoscope-spotlight-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 12px;
}
.horoscope-spotlight-title {
  font-family: var(--font-serif);
  font-size: clamp(22px, 3.5vw, 28px);
  color: #fff;
  margin: 0;
}
.horoscope-spotlight-body {
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  gap: 28px;
  align-items: start;
}
.horoscope-spotlight-narrative {
  font-size: 15px;
  line-height: 1.75;
  color: rgba(248, 246, 240, 0.9);
}
.horoscope-spotlight-meters {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 14px;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.meter-row {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.meter-label-row {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--muted);
}
.meter-label-row strong {
  color: var(--gold-bright);
}
.meter-track {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  overflow: hidden;
}
.meter-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--gold-dark), var(--gold-bright));
  border-radius: 999px;
}

/* 12 Daily Chronicle Cards */
.daily-chronicle-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}
.daily-chronicle-card {
  background: linear-gradient(165deg, rgba(14, 18, 34, 0.88) 0%, rgba(7, 9, 18, 0.96) 100%);
  border: 1px solid rgba(212, 175, 55, 0.22);
  border-left: 3px solid var(--gold);
  border-radius: 16px;
  padding: 24px 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.25s ease;
  position: relative;
}
.daily-chronicle-card:hover {
  transform: translateY(-4px);
  border-color: rgba(212, 175, 55, 0.55);
  border-left-color: var(--gold-bright);
  background: linear-gradient(165deg, rgba(20, 26, 48, 0.95) 0%, rgba(10, 13, 26, 1) 100%);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6), 0 0 24px rgba(212, 175, 55, 0.16);
}
.daily-chronicle-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
.daily-sign-badge {
  display: flex;
  align-items: center;
  gap: 10px;
}
.daily-sign-glyph {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(12, 16, 30, 0.9) 100%);
  border: 1px solid rgba(212, 175, 55, 0.35);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 19px;
  color: var(--gold-bright);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
}
.daily-sign-name {
  font-size: 17px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.02em;
}
.daily-sign-dates {
  font-size: 11px;
  color: var(--dim);
}
.daily-transit-resonance {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  color: var(--gold);
  letter-spacing: 0.03em;
  font-weight: 500;
}
.daily-chronicle-headline {
  font-family: var(--font-serif);
  font-size: 18px;
  color: #fff;
  margin: 0;
  line-height: 1.35;
}
.daily-chronicle-theme {
  font-size: 13.5px;
  line-height: 1.7;
  color: rgba(248, 246, 240, 0.85);
  margin: 0;
  flex-grow: 1;
}
.daily-chronicle-advice-box {
  padding: 12px 14px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(212, 175, 55, 0.2);
  font-size: 12px;
  line-height: 1.6;
}
.daily-chronicle-advice-box strong {
  color: var(--gold-bright);
  display: block;
  margin-bottom: 4px;
}
.daily-chronicle-advice-box span {
  color: #f8f6f0;
}
.daily-dossier-link {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 12.5px;
  color: var(--gold);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}
.daily-dossier-link:hover {
  color: var(--gold-bright);
  transform: translateX(3px);
}
html[dir="rtl"] .daily-dossier-link:hover {
  transform: translateX(-3px);
}

/* ==========================================================================
   ULTRA-ELITE HAUTE HORLOGERIE FOOTER
   4-Column architectural elegance, telemetry ribbon, mobile-optimized touch
   ========================================================================== */
.astro-footer {
  background: radial-gradient(circle at 50% 0%, rgba(20, 26, 48, 0.45) 0%, #030408 70%);
  border-top: 1px solid rgba(212, 175, 55, 0.25);
  padding: 48px 0 32px 0;
  color: var(--muted);
  position: relative;
  overflow: hidden;
}
.astro-footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent);
}

/* Telemetry Status Bar */
.astro-footer-telemetry {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  padding: 14px 20px;
  background: rgba(14, 18, 34, 0.6);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 12px;
  margin-bottom: 40px;
}
.astro-footer-telemetry-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--cream);
  font-weight: 500;
}
.astro-footer-telemetry-pill strong {
  color: var(--gold-bright);
}

/* Main 4-Column Grid */
.astro-footer-grid {
  display: grid;
  grid-template-columns: 2.2fr repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 40px;
}
.astro-footer-brand-elite {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.astro-footer-brand-elite .astro-brand {
  gap: 10px;
  margin-bottom: 2px;
}
.astro-footer-brand-elite .astro-brand-name {
  font-size: 18px;
  letter-spacing: 0.18em;
}
.astro-footer-manifesto {
  font-size: 13.5px;
  line-height: 1.7;
  color: rgba(248, 246, 240, 0.78);
  max-width: 380px;
  margin: 0;
}
.astro-footer-engine-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: rgba(212, 175, 55, 0.08);
  border: 1px solid rgba(212, 175, 55, 0.25);
  border-radius: 999px;
  font-size: 11px;
  color: var(--gold-bright);
  font-weight: 600;
  letter-spacing: 0.06em;
  width: fit-content;
}
.astro-back-to-top {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 10px;
  padding: 8px 16px;
  color: var(--gold-bright);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  cursor: pointer;
  text-decoration: none;
  width: fit-content;
  transition: all 0.2s ease;
  margin-top: 4px;
}
.astro-back-to-top:hover {
  background: rgba(212, 175, 55, 0.15);
  border-color: var(--gold);
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(212, 175, 55, 0.2);
}

/* Footer Nav Columns */
.astro-footer-col h4 {
  font-family: var(--font-serif);
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--gold-bright);
  margin-bottom: 18px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
  display: flex;
  align-items: center;
  gap: 6px;
}
.astro-footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.astro-footer-col ul li a {
  font-size: 13.5px;
  color: var(--muted);
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  line-height: 1.4;
}
.astro-footer-col ul li a:hover {
  color: var(--gold-bright);
  transform: translateX(3px);
}
html[dir="rtl"] .astro-footer-col ul li a:hover {
  transform: translateX(-3px);
}

/* Luxury Disclaimer Card */
.astro-footer-disclaimer-card {
  padding: 18px 24px;
  background: rgba(10, 14, 26, 0.8);
  border: 1px solid rgba(212, 175, 55, 0.22);
  border-radius: 12px;
  margin-bottom: 32px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
}
.astro-footer-disclaimer-icon {
  font-size: 16px;
  color: var(--gold);
  flex-shrink: 0;
  margin-top: 2px;
}
.astro-footer-disclaimer-card p {
  font-size: 12px;
  line-height: 1.65;
  color: var(--dim);
  margin: 0;
}

/* Bottom Bar */
.astro-footer-bottom-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  font-size: 12.5px;
}
.astro-footer-lang-badges {
  display: flex;
  align-items: center;
  gap: 8px;
}
.astro-footer-lang-badge {
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 6px;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--muted);
  transition: all 0.15s ease;
}
.astro-footer-lang-badge:hover,
.astro-footer-lang-badge.is-active {
  background: rgba(212, 175, 55, 0.15);
  border-color: rgba(212, 175, 55, 0.4);
  color: var(--gold-bright);
}
.astro-qct-sig {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--gold);
  font-size: 12px;
  letter-spacing: 0.05em;
  text-decoration: none;
  transition: color 0.2s ease;
}
.astro-qct-sig:hover {
  color: var(--gold-bright);
}

/* ==========================================================================
   FLOATING BACK TO TOP ORB (Haute Horlogerie Celestial Arrow)
   Hidden when at page top / idle, smoothly reveals on scroll
   ========================================================================== */
.astro-scroll-top-btn {
  position: fixed;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 24px);
  right: 24px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(22, 28, 52, 0.92) 0%, rgba(8, 11, 24, 0.96) 100%);
  border: 1px solid rgba(212, 175, 55, 0.45);
  color: var(--gold-bright);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 990;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.65), 0 0 20px rgba(212, 175, 55, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  opacity: 0;
  visibility: hidden;
  transform: translateY(16px) scale(0.9);
  transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              visibility 0.3s,
              background 0.2s ease,
              border-color 0.2s ease,
              box-shadow 0.2s ease;
  outline: none;
}

html[dir="rtl"] .astro-scroll-top-btn {
  right: auto;
  left: 24px;
}

.astro-scroll-top-btn.is-visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}

.astro-scroll-top-btn:hover {
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.28) 0%, rgba(14, 18, 36, 0.98) 100%);
  border-color: var(--gold-bright);
  transform: translateY(-3px) scale(1.06);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.75), 0 0 28px rgba(212, 175, 55, 0.45);
  color: #fff;
}

.astro-scroll-top-btn:active {
  transform: translateY(0) scale(0.96);
}

.astro-scroll-top-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.2s ease;
  filter: drop-shadow(0 0 4px rgba(212, 175, 55, 0.5));
}

.astro-scroll-top-btn:hover .astro-scroll-top-icon {
  transform: translateY(-2px);
  stroke: #ffffff;
}

@media (max-width: 768px) {
  .astro-scroll-top-btn {
    bottom: calc(env(safe-area-inset-bottom, 0px) + 18px);
    right: 18px;
    width: 44px;
    height: 44px;
  }
  html[dir="rtl"] .astro-scroll-top-btn {
    left: 18px;
  }
}

/* Retrograde Curated Layout & Elite Cards */
.retro-group-container {
  margin-bottom: 40px;
}
.retro-group-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
  flex-wrap: wrap;
  gap: 10px;
}
.retro-group-title {
  font-family: var(--font-serif);
  font-size: 18px;
  color: #fff;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
}
.retro-group-badge {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--gold-bright);
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.25);
}
.retro-grid-triad {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}
.retro-grid-quad {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}
.retro-elite-card {
  background: linear-gradient(180deg, rgba(16, 21, 38, 0.78) 0%, rgba(9, 12, 22, 0.98) 100%);
  border: 1px solid rgba(212, 175, 55, 0.22);
  border-radius: 18px;
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
}
.retro-elite-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.6), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.retro-elite-card:hover {
  transform: translateY(-4px);
  border-color: rgba(212, 175, 55, 0.55);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(212, 175, 55, 0.15);
}
.retro-elite-card:hover::before {
  opacity: 1;
}
.retro-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 10px;
}
.retro-glyph-badge {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, rgba(212, 175, 55, 0.22) 0%, rgba(10, 14, 28, 0.9) 75%);
  border: 1px solid rgba(212, 175, 55, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: var(--gold-bright);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
}
.retro-sign-pill {
  font-size: 11px;
  font-weight: 600;
  color: var(--gold-bright);
  background: rgba(212, 175, 55, 0.08);
  border: 1px solid rgba(212, 175, 55, 0.28);
  padding: 4px 9px;
  border-radius: 999px;
  letter-spacing: 0.03em;
  white-space: nowrap;
}
.retro-planet-title {
  font-family: var(--font-serif);
  font-size: 17px;
  color: #fff;
  font-weight: 500;
  margin: 0 0 3px 0;
}
.retro-cycle-tag {
  font-size: 10.5px;
  color: var(--dim);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: block;
  margin-bottom: 10px;
}
.retro-date-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(5, 7, 14, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 8px 10px;
  margin-bottom: 12px;
}
.retro-date-text {
  font-size: 12px;
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
}
.retro-duration-badge {
  font-size: 10px;
  color: var(--gold);
  background: rgba(212, 175, 55, 0.12);
  padding: 2px 6px;
  border-radius: 5px;
  font-weight: 700;
}
.retro-phase-track {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 12px;
}
.retro-phase-step {
  flex: 1;
  height: 3px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.1);
}
.retro-phase-step.is-active {
  background: var(--gold-gradient);
  box-shadow: 0 0 6px rgba(212, 175, 55, 0.6);
}
.retro-theme-desc {
  font-size: 12.5px;
  color: var(--muted);
  line-height: 1.5;
  margin: 0 0 10px 0;
  flex-grow: 1;
}
.retro-guidance-box {
  background: rgba(212, 175, 55, 0.05);
  border-left: 2px solid var(--gold);
  padding: 7px 9px;
  border-radius: 0 6px 6px 0;
  font-size: 11.5px;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.45;
}
html[dir="rtl"] .retro-guidance-box {
  border-left: none;
  border-right: 2px solid var(--gold);
  border-radius: 6px 0 0 6px;
}

/* Natal Stage Integrated Viewport (Hero + Astrolabe Console in 1 Viewport) */
.natal-stage-viewport {
  min-height: calc(100vh - 76px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(24px, 4vh, 48px) 0;
  background: radial-gradient(circle at 80% 30%, rgba(13, 18, 36, 0.45) 0%, rgba(5, 7, 14, 0.95) 70%),
              linear-gradient(180deg, rgba(8, 9, 14, 0.9) 0%, rgba(5, 7, 14, 0.98) 100%),
              url('/images/astrology/hero-celestial-cosmos.jpg') right center / cover no-repeat;
  border-bottom: 1px solid var(--border);
  box-sizing: border-box;
  scroll-snap-align: start;
}
.natal-console-grid {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: clamp(24px, 4vw, 54px);
  align-items: center;
}
.natal-editorial-side {
  display: flex;
  flex-direction: column;
}
.natal-main-title {
  font-family: var(--font-serif);
  font-size: clamp(30px, 3.2vw, 46px);
  line-height: 1.16;
  color: #fff;
  margin: 12px 0 16px;
  font-weight: 400;
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.7);
}
.natal-main-lead {
  color: rgba(255, 255, 255, 0.78);
  font-size: 15px;
  line-height: 1.65;
  margin-bottom: 22px;
}
.natal-triad-pills {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 22px;
  flex-wrap: wrap;
}
.natal-triad-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  background: rgba(16, 21, 38, 0.7);
  border: 1px solid rgba(212, 175, 55, 0.25);
  border-radius: 12px;
  backdrop-filter: blur(12px);
}
.pill-glyph {
  font-size: 20px;
  color: var(--gold-bright);
}
.natal-triad-pill strong {
  display: block;
  font-size: 13px;
  color: #fff;
  line-height: 1.2;
}
.natal-triad-pill small {
  display: block;
  font-size: 11px;
  color: var(--dim);
}
.natal-standards-box {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--muted);
  letter-spacing: 0.03em;
}

/* Astrolabe Console Box */
.natal-astrolabe-box {
  background: rgba(11, 15, 28, 0.88);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  border: 1px solid rgba(212, 175, 55, 0.32);
  border-radius: 22px;
  padding: 26px 30px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.12);
  position: relative;
  overflow: hidden;
}
.natal-astrolabe-box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gold-gradient);
}
.natal-box-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.natal-box-tag {
  font-size: 10.5px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--gold);
  display: block;
  margin-bottom: 4px;
  font-weight: 700;
}
.natal-box-title {
  font-family: var(--font-serif);
  font-size: 19px;
  color: #fff;
  font-weight: 500;
  margin: 0;
}
.natal-box-badge {
  font-size: 11px;
  font-weight: 700;
  color: var(--gold-bright);
  background: rgba(212, 175, 55, 0.12);
  border: 1px solid rgba(212, 175, 55, 0.3);
  padding: 4px 10px;
  border-radius: 999px;
  letter-spacing: 0.04em;
}
.natal-form-inner {
  display: flex;
  flex-direction: column;
  gap: 13px;
}
.natal-form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.natal-form-field label {
  display: block;
  font-size: 11.5px;
  color: var(--cream);
  font-weight: 500;
  margin-bottom: 5px;
  letter-spacing: 0.04em;
}
.natal-form-field input[type="text"],
.natal-form-field input[type="date"] {
  width: 100%;
  padding: 10px 12px;
  background: rgba(5, 7, 14, 0.8);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: #fff;
  font-size: 13.5px;
  transition: all 0.2s ease;
}
.natal-form-field input:focus {
  outline: none;
  border-color: var(--gold-bright);
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
}
.natal-city-quick-picks {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  flex-wrap: wrap;
}
.natal-city-quick-picks button {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(212, 175, 55, 0.2);
  color: var(--muted);
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.18s ease;
}
.natal-city-quick-picks button:hover {
  background: rgba(212, 175, 55, 0.15);
  color: var(--gold-bright);
  border-color: var(--gold);
}
.natal-options-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2px 0 4px;
}
.natal-check-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--muted);
  cursor: pointer;
}
.natal-check-label input {
  width: auto;
  accent-color: var(--gold);
}
.natal-submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(135deg, #e5c38c 0%, #c49952 50%, #9c7331 100%);
  color: #05070e;
  font-weight: 700;
  font-size: 14.5px;
  letter-spacing: 0.02em;
  padding: 13px 24px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(212, 175, 55, 0.35);
  transition: all 0.22s ease;
  width: 100%;
}
.natal-submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(212, 175, 55, 0.5);
}

@media (max-width: 900px) {
  .natal-stage-viewport {
    align-items: flex-start;
  }
  .natal-console-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 540px) {
  .natal-stage-viewport {
    padding-block: 28px;
  }
  .natal-astrolabe-box {
    padding: 22px 18px;
  }
  .natal-form-row {
    grid-template-columns: 1fr;
  }
}

/* Haute Horlogerie Lunation Showcase Corridor */
.lunation-card-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-top: 24px;
}
.lunation-card {
  position: relative;
  background: linear-gradient(165deg, rgba(14, 18, 32, 0.9) 0%, rgba(8, 10, 18, 0.95) 100%);
  border: 1px solid rgba(212, 175, 55, 0.22);
  border-radius: 18px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.lunation-card:hover {
  transform: translateY(-3px);
  border-color: rgba(212, 175, 55, 0.5);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.7), 0 0 24px rgba(212, 175, 55, 0.15);
}
.lunation-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.lunation-card-icon {
  width: 48px;
  height: 48px;
  filter: drop-shadow(0 0 12px rgba(212, 175, 55, 0.45));
}
.lunation-illum-badge {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: var(--gold-bright);
}
.lunation-card-title {
  font-family: var(--font-serif);
  font-size: 20px;
  color: #fff;
  margin: 0;
  letter-spacing: 0.02em;
}
.lunation-zodiac-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--cream);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
  padding: 4px 10px;
  border-radius: 6px;
  width: fit-content;
}
.lunation-time-box {
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: 12px;
}
.lunation-time-tsi {
  color: #fff;
  font-weight: 600;
}
.lunation-time-utc {
  color: var(--muted);
  font-size: 11px;
}
.lunation-guide-text {
  font-size: 12.5px;
  color: rgba(248, 246, 240, 0.72);
  line-height: 1.55;
  margin: 0;
  flex-grow: 1;
}

/* Active Retrogrades Balanced Grid & Live Telemetry */
.live-telemetry-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 12px;
}
.live-pulse-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 11.5px;
  color: #f87171;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.live-pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #f87171;
  box-shadow: 0 0 0 rgba(248, 113, 113, 0.7);
  animation: livePulseAnim 2s infinite cubic-bezier(0.66, 0, 0, 1);
}
@keyframes livePulseAnim {
  0% { box-shadow: 0 0 0 0 rgba(248, 113, 113, 0.7); }
  70% { box-shadow: 0 0 0 8px rgba(248, 113, 113, 0); }
  100% { box-shadow: 0 0 0 0 rgba(248, 113, 113, 0); }
}
.live-telemetry-meta {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 12px;
  color: var(--gold-bright);
  letter-spacing: 0.03em;
}
.active-retro-5-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
}
.active-retro-card {
  padding: 18px 16px;
  background: rgba(0, 0, 0, 0.55);
  border-radius: 14px;
  border: 1px solid rgba(248, 113, 113, 0.3);
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: all 0.22s ease;
}
.active-retro-card:hover {
  border-color: rgba(248, 113, 113, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.6), 0 0 16px rgba(248, 113, 113, 0.15);
}
.active-retro-glyph-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.active-retro-glyph {
  font-size: 24px;
  color: var(--gold-bright);
}
.active-retro-pill {
  font-size: 10.5px;
  color: #f87171;
  border: 1px solid rgba(248, 113, 113, 0.5);
  background: rgba(248, 113, 113, 0.08);
  padding: 2px 7px;
  border-radius: 999px;
  font-weight: 700;
  letter-spacing: 0.04em;
}
.active-retro-name {
  margin: 0;
  color: #fff;
  font-family: var(--font-serif);
  font-size: 17px;
  letter-spacing: 0.02em;
}
.active-retro-sign {
  font-size: 12px;
  color: var(--muted);
  margin: 0;
}
.active-retro-speed {
  font-size: 11px;
  color: var(--gold);
  background: rgba(212, 175, 55, 0.08);
  border: 1px solid rgba(212, 175, 55, 0.2);
  padding: 4px 8px;
  border-radius: 6px;
  display: inline-block;
  margin-top: 4px;
  letter-spacing: 0.02em;
}

/* Zodiac Interactive Selector & Deep Dossier */
.zodiac-selector-scroll {
  display: flex;
  align-items: center;
  gap: 10px;
  overflow-x: auto;
  padding: 14px 4px;
  margin-top: 20px;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}
.zodiac-selector-scroll::-webkit-scrollbar {
  display: none;
}
.zodiac-pill-item {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(212, 175, 55, 0.25);
  color: var(--cream);
  font-size: 12.5px;
  font-weight: 600;
  white-space: nowrap !important;
  text-decoration: none;
  transition: all 0.22s ease;
  flex-shrink: 0;
}
.zodiac-pill-item:hover {
  border-color: var(--gold-bright);
  background: rgba(212, 175, 55, 0.1);
  color: #fff;
  transform: translateY(-1px);
}
.zodiac-pill-item.is-active {
  background: var(--gold-gradient);
  color: #05070e;
  border-color: transparent;
  font-weight: 700;
  box-shadow: 0 4px 16px rgba(212, 175, 55, 0.4);
}
.zodiac-pill-glyph {
  font-size: 14px;
}

.zodiac-dossier-card {
  background: linear-gradient(165deg, rgba(14, 18, 34, 0.95) 0%, rgba(6, 8, 16, 0.98) 100%);
  border: 1px solid rgba(212, 175, 55, 0.35);
  border-radius: 22px;
  padding: clamp(24px, 4vw, 40px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.75), inset 0 1px 0 rgba(255, 255, 255, 0.08);
}
.zodiac-dossier-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 24px;
  margin-bottom: 24px;
}
.zodiac-dossier-icon-box {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  background: rgba(212, 175, 55, 0.08);
  border: 1px solid rgba(212, 175, 55, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
}
.zodiac-dossier-img {
  width: 48px;
  height: 48px;
  filter: drop-shadow(0 0 14px rgba(212, 175, 55, 0.45));
}
.zodiac-quality-tag,
.zodiac-ruler-tag {
  font-size: 11px;
  padding: 3px 9px;
  border-radius: 999px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--muted);
}
.zodiac-dossier-title {
  font-family: var(--font-serif);
  font-size: clamp(22px, 3vw, 32px);
  color: #fff;
  margin: 4px 0;
  letter-spacing: 0.02em;
}
.zodiac-dossier-dates {
  font-size: 13px;
  color: var(--gold-bright);
}
.zodiac-dossier-block {
  padding: 22px 24px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  margin-bottom: 20px;
}
.zodiac-dossier-block-title {
  font-family: var(--font-serif);
  font-size: 18px;
  color: var(--gold);
  margin: 0 0 12px 0;
}
.zodiac-dossier-lead-text {
  font-size: 15px;
  color: rgba(248, 246, 240, 0.88);
  line-height: 1.75;
  margin: 0;
}
.zodiac-light-shadow-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}
.zodiac-light-box {
  padding: 22px;
  background: rgba(74, 222, 128, 0.04);
  border: 1px solid rgba(74, 222, 128, 0.28);
  border-radius: 14px;
}
.zodiac-light-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-serif);
  font-size: 17px;
  color: #4ade80;
  margin: 0 0 14px 0;
}
.zodiac-shadow-box {
  padding: 22px;
  background: rgba(248, 113, 113, 0.04);
  border: 1px solid rgba(248, 113, 113, 0.28);
  border-radius: 14px;
}
.zodiac-shadow-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-serif);
  font-size: 17px;
  color: #f87171;
  margin: 0 0 14px 0;
}
.zodiac-bullet-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 13.5px;
  line-height: 1.6;
  color: rgba(248, 246, 240, 0.85);
}
.zodiac-bullet-list li {
  position: relative;
  padding-left: 18px;
}
.zodiac-bullet-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--gold);
}
.zodiac-theme-box {
  padding: 22px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 14px;
}
.zodiac-theme-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-serif);
  font-size: 17px;
  color: var(--gold-bright);
  margin: 0 0 12px 0;
}
.zodiac-theme-text {
  font-size: 14px;
  line-height: 1.7;
  color: rgba(248, 246, 240, 0.82);
  margin: 0;
}
.zodiac-big3-role-box {
  padding: 24px;
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(212, 175, 55, 0.25);
  border-radius: 14px;
  margin-top: 20px;
}
.zodiac-big3-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}
.zodiac-big3-col {
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  font-size: 13px;
  line-height: 1.65;
  color: rgba(248, 246, 240, 0.8);
}
.zodiac-big3-col strong {
  display: block;
  font-size: 14px;
  margin-bottom: 6px;
}
.zodiac-archetype-subtitle {
  font-size: 12.5px;
  color: var(--gold-bright);
  margin: 2px 0 8px 0;
  font-weight: 600;
}
.zodiac-card-desc {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.65;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 10px 0;
}
.zodiac-card-footer {
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  justify-content: flex-end;
}
.zodiac-deep-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: var(--gold-bright);
  text-decoration: none;
  transition: all 0.2s ease;
}
.zodiac-deep-link:hover {
  color: #fff;
  transform: translateX(2px);
}
.is-featured-border {
  border-color: rgba(212, 175, 55, 0.6) !important;
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.15);
}

@media (max-width: 900px) {
  .zodiac-light-shadow-grid { grid-template-columns: 1fr; }
  .zodiac-big3-grid { grid-template-columns: 1fr; }
}

/* Responsive Breakpoints & Desktop Header Guarantee */
@media (min-width: 1025px) {
  .astro-nav-desktop { display: flex !important; }
  .astro-menu-btn { display: none !important; }
}

@media (max-width: 1024px) {
  .astro-nav-desktop { display: none !important; }
  .astro-menu-btn { display: inline-flex !important; }
  .astro-cta-gold { display: none !important; }
  .astro-lang-pills { display: none !important; }
  .astro-grid-4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .archetype-grid { grid-template-columns: 1fr; }
  .retro-grid-triad { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .retro-grid-quad { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .astro-bridge-card { flex-direction: column; text-align: center; }
  .astro-bridge-copy { display: flex; flex-direction: column; align-items: center; }
  .lunation-card-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .active-retro-5-grid { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
  .astro-footer-grid { grid-template-columns: 1.5fr 1fr 1fr; gap: 32px; }
  .horoscope-spotlight-body { grid-template-columns: 1fr; gap: 20px; }
}

@media (max-width: 768px) {
  /* Strict Mobile Header Containment — ZERO Horizontal Overflow */
  .astro-header-actions .astro-lang-pills { display: none !important; }
  .astro-header-actions .astro-cta-gold { display: none !important; }
  .astro-header-inner { padding: 10px 0 !important; gap: 8px !important; }
  .astro-brand { font-size: 14px !important; letter-spacing: 0.12em !important; gap: 8px !important; }
  .astro-brand-logo-img { width: 24px !important; height: 24px !important; }
  .astro-menu-btn { width: 38px !important; height: 38px !important; min-width: 38px !important; padding: 6px !important; }
  .astro-container { width: calc(100% - 24px) !important; padding: 0 !important; }

  /* Mobile Hero & Quick Calc */
  .astro-hero { min-height: auto !important; padding: 32px 0 24px 0 !important; }
  .astro-hero h1 { font-size: clamp(24px, 6.5vw, 34px) !important; line-height: 1.25 !important; }
  .astro-hero-lead { font-size: 14px !important; }
  .astro-hero-actions { flex-direction: column !important; width: 100% !important; gap: 10px !important; }
  .astro-hero-actions a { width: 100% !important; justify-content: center !important; }
  .astro-quick-box { padding: 18px 14px !important; border-radius: 14px !important; }
  .astro-quick-grid { grid-template-columns: 1fr !important; }

  /* Grids to single column */
  .astro-grid-3,
  .astro-grid-4,
  .retro-grid-triad,
  .retro-grid-quad { grid-template-columns: 1fr !important; }
  .active-retro-5-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
  .daily-chronicle-grid { grid-template-columns: 1fr !important; }

  /* Ultra-Elite Mobile Footer — Haute Horlogerie 2-Column Luxury Layout */
  .astro-footer {
    padding: 32px 0 24px 0 !important;
    background: radial-gradient(circle at 50% 0%, rgba(24, 32, 60, 0.35) 0%, #030408 75%) !important;
  }

  /* Micro Telemetry Grid: 3 Sleek Compact Pills */
  .astro-footer-telemetry {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 6px !important;
    padding: 8px 10px !important;
    background: rgba(12, 16, 32, 0.75) !important;
    border: 1px solid rgba(212, 175, 55, 0.22) !important;
    border-radius: 12px !important;
    margin-bottom: 22px !important;
  }
  .astro-footer-telemetry-pill {
    font-size: 10px !important;
    line-height: 1.3 !important;
    text-align: center !important;
    justify-content: center !important;
    padding: 6px 4px !important;
    background: rgba(255, 255, 255, 0.02) !important;
    border: 1px solid rgba(212, 175, 55, 0.12) !important;
    border-radius: 8px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    gap: 2px !important;
  }

  /* 2-Column Responsive Haute Architecture */
  .astro-footer-grid {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 16px 14px !important;
    margin-bottom: 22px !important;
  }

  /* Centered Brand Lockup spanning 2 cols */
  .astro-footer-brand-elite {
    grid-column: span 2 !important;
    text-align: center !important;
    align-items: center !important;
    padding: 18px 14px !important;
    background: linear-gradient(165deg, rgba(14, 18, 36, 0.7) 0%, rgba(8, 11, 22, 0.9) 100%) !important;
    border: 1px solid rgba(212, 175, 55, 0.22) !important;
    border-radius: 14px !important;
    gap: 10px !important;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4) !important;
  }
  .astro-footer-brand-elite .astro-brand {
    justify-content: center !important;
  }
  .astro-footer-manifesto {
    font-size: 12.5px !important;
    line-height: 1.6 !important;
    max-width: 100% !important;
    color: rgba(248, 246, 240, 0.72) !important;
    text-align: center !important;
    margin: 0 !important;
  }
  .astro-footer-engine-badge {
    font-size: 10px !important;
    padding: 4px 10px !important;
    letter-spacing: 0.04em !important;
  }
  .astro-back-to-top {
    margin-top: 4px !important;
    padding: 7px 18px !important;
    font-size: 11.5px !important;
    border-radius: 999px !important;
  }

  /* Compact 2-Column Navigation Cards */
  .astro-footer-col {
    padding: 14px 12px !important;
    background: rgba(10, 14, 28, 0.6) !important;
    border: 1px solid rgba(212, 175, 55, 0.15) !important;
    border-radius: 12px !important;
  }
  .astro-footer-col h4 {
    font-size: 11px !important;
    letter-spacing: 0.1em !important;
    margin-bottom: 10px !important;
    padding-bottom: 6px !important;
    border-bottom: 1px solid rgba(212, 175, 55, 0.18) !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
  }
  .astro-footer-col ul {
    gap: 7px !important;
  }
  .astro-footer-col ul li a {
    font-size: 12px !important;
    min-height: 26px !important;
    line-height: 1.3 !important;
    color: rgba(248, 246, 240, 0.78) !important;
    display: flex !important;
    align-items: center !important;
  }

  /* Full-width Legal Strip */
  .astro-footer-col-legal {
    grid-column: span 2 !important;
    padding: 12px 14px !important;
    background: rgba(8, 11, 24, 0.55) !important;
    border: 1px solid rgba(212, 175, 55, 0.12) !important;
    text-align: center !important;
  }
  .astro-footer-col-legal h4 {
    justify-content: center !important;
    margin-bottom: 8px !important;
  }
  .astro-footer-col-legal ul {
    flex-direction: row !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
    gap: 8px !important;
  }
  .astro-footer-col-legal ul li a {
    font-size: 11.5px !important;
    padding: 4px 10px !important;
    background: rgba(255, 255, 255, 0.03) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 6px !important;
    color: var(--muted) !important;
  }

  /* Disclaimer Card */
  .astro-footer-disclaimer-card {
    padding: 12px 14px !important;
    margin-bottom: 18px !important;
    gap: 10px !important;
  }
  .astro-footer-disclaimer-card p {
    font-size: 11px !important;
    line-height: 1.55 !important;
  }

  /* Bottom Bar */
  .astro-footer-bottom-bar {
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    gap: 12px !important;
    padding-top: 16px !important;
  }
  .astro-footer-lang-badges {
    justify-content: center !important;
    flex-wrap: wrap !important;
    gap: 6px !important;
  }
  .astro-footer-lang-badge {
    font-size: 11px !important;
    padding: 4px 10px !important;
  }

  /* Daily Horoscopes Mobile Overrides */
  .horoscope-weather-ribbon { padding: 14px 16px; flex-direction: column; align-items: flex-start; gap: 10px; }
  .horoscope-spotlight-card { padding: 20px 18px; }
}

@media (max-width: 540px) {
  .lunation-card-grid { grid-template-columns: 1fr !important; }
  .active-retro-5-grid { grid-template-columns: 1fr !important; }
}

/* Learning Center Haute Horlogerie Stack */
.learning-cards-stack {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 980px;
  margin: 0 auto;
}
.learning-elite-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  padding: 22px 28px;
  background: linear-gradient(135deg, rgba(14, 18, 34, 0.78) 0%, rgba(8, 10, 20, 0.9) 100%);
  border: 1px solid rgba(212, 175, 55, 0.22);
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transition: all 0.26s cubic-bezier(0.16, 1, 0.3, 1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
.learning-elite-card:hover {
  border-color: rgba(212, 175, 55, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 16px 44px rgba(0, 0, 0, 0.65), 0 0 24px rgba(212, 175, 55, 0.16);
  background: linear-gradient(135deg, rgba(20, 26, 48, 0.85) 0%, rgba(10, 14, 26, 0.95) 100%);
}
.learning-elite-badge {
  width: 52px;
  height: 52px;
  min-width: 52px;
  border-radius: 14px;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.22) 0%, rgba(10, 14, 28, 0.95) 100%);
  border: 1px solid rgba(212, 175, 55, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: var(--gold-bright);
  box-shadow: 0 0 16px rgba(212, 175, 55, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
}
.learning-elite-body {
  flex: 1;
  min-width: 0;
}
.learning-elite-title {
  font-family: var(--font-serif);
  font-size: 20px;
  color: #fff;
  margin: 0 0 5px 0;
  font-weight: 500;
  letter-spacing: 0.02em;
}
.learning-elite-desc {
  font-size: 13.5px;
  color: rgba(248, 246, 240, 0.72);
  line-height: 1.5;
  margin: 0;
  white-space: normal;
}
.learning-elite-action {
  flex-shrink: 0;
}
.learning-elite-btn {
  font-size: 12.5px;
  padding: 10px 18px;
  white-space: nowrap !important;
}

/* Approach & Ethics Haute Horlogerie Grid */
.approach-elite-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  max-width: 1060px;
  margin: 0 auto;
}
.approach-elite-card {
  padding: 28px 26px;
  background: linear-gradient(145deg, rgba(14, 18, 34, 0.78) 0%, rgba(6, 8, 16, 0.9) 100%);
  border: 1px solid rgba(212, 175, 55, 0.22);
  border-radius: 18px;
  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.07);
  display: flex;
  flex-direction: column;
  transition: all 0.26s cubic-bezier(0.16, 1, 0.3, 1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
.approach-elite-card:hover {
  border-color: rgba(212, 175, 55, 0.6);
  transform: translateY(-3px);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.7), 0 0 24px rgba(212, 175, 55, 0.18);
}
.approach-elite-head {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}
.approach-elite-icon {
  font-size: 20px;
  color: var(--gold-bright);
}
.approach-elite-tag {
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold);
  font-weight: 700;
}
.approach-elite-title {
  font-family: var(--font-serif);
  font-size: 21px;
  color: #fff;
  margin: 0 0 12px 0;
  line-height: 1.3;
}
.approach-elite-text {
  font-size: 13.5px;
  color: rgba(248, 246, 240, 0.72);
  line-height: 1.65;
  margin: 0 0 20px 0;
  flex-grow: 1;
}
.approach-elite-footer {
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.approach-elite-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: var(--gold-bright);
  background: rgba(212, 175, 55, 0.09);
  border: 1px solid rgba(212, 175, 55, 0.25);
  padding: 4px 10px;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.03em;
}
.approach-engine-banner {
  margin-top: 28px;
  max-width: 1060px;
  margin-left: auto;
  margin-right: auto;
  padding: 14px 20px;
  background: rgba(5, 7, 14, 0.7);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 12px;
  color: var(--muted);
  text-align: center;
}
.seo-answer-block,
.seo-faq-block,
.seo-related-block {
  max-width: 1240px;
  margin: 28px auto 0;
  padding: 28px 32px;
  background: linear-gradient(145deg, rgba(14, 18, 34, 0.7) 0%, rgba(6, 8, 16, 0.88) 100%);
  border: 1px solid rgba(212, 175, 55, 0.18);
  border-radius: 18px;
}
.seo-answer-block h2,
.seo-faq-block h2 {
  font-family: var(--font-serif);
  color: #fff;
  margin: 8px 0 12px;
  font-size: clamp(22px, 3vw, 30px);
}
.seo-answer-block p {
  color: rgba(248, 246, 240, 0.78);
  line-height: 1.75;
  font-size: 14px;
  margin: 0;
}
@media(min-width: 1080px){
  .seo-answer-block p {
    white-space: nowrap !important;
    font-size: clamp(12px, 0.86vw, 13.5px) !important;
  }
}
.seo-faq-item p {
  color: rgba(248, 246, 240, 0.78);
  line-height: 1.75;
  font-size: 14px;
  margin: 0 0 12px;
}
.seo-faq-block .astro-section-head {
  margin-bottom: 18px;
  text-align: left;
}
.seo-faq-list {
  display: grid;
  gap: 10px;
}
.seo-faq-item {
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.025);
  padding: 14px 16px;
}
.seo-faq-item summary {
  cursor: pointer;
  color: var(--gold-bright);
  font-weight: 700;
  line-height: 1.45;
}
.seo-faq-item p {
  margin: 14px 0 0;
}
.seo-related-block {
  padding: 16px 20px;
  color: var(--muted);
  font-size: 13px;
}
.seo-related-block a {
  color: var(--gold-bright);
  text-decoration: none;
}
.seo-related-block a:hover { text-decoration: underline; }
.seo-updated {
  display: block;
  margin-top: 8px;
  color: var(--dim);
  font-size: 11px;
}

@media (max-width: 900px) {
  .approach-elite-grid { grid-template-columns: 1fr; }
  .learning-elite-card { flex-direction: column; align-items: flex-start; gap: 14px; }
  .learning-elite-action { width: 100%; }
  .learning-elite-btn { width: 100%; justify-content: center; }
}

/* Ebced discovery: one compact viewport below the main hero */
.astro-ebced-feature {
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
  background: radial-gradient(ellipse at 78% 50%, rgba(116, 84, 36, .18), transparent 55%), #070a12;
}
.astro-ebced-feature-inner {
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(260px, .88fr);
  align-items: center;
  gap: clamp(24px, 5vw, 72px);
  width: 100%;
  min-height: min(690px, calc(100svh - 76px));
  padding-top: clamp(24px, 4vh, 48px);
  padding-bottom: clamp(24px, 4vh, 48px);
}
.astro-ebced-feature-copy { max-width: 650px; }
.astro-ebced-feature h2 {
  font-family: var(--font-serif);
  font-size: clamp(32px, 3.6vw, 54px);
  line-height: 1.16;
  font-weight: 400;
  color: var(--cream);
  margin: 18px 0;
}
.astro-ebced-lead {
  max-width: 560px;
  line-height: 1.7;
  font-size: clamp(15px, 1.4vw, 18px);
  color: var(--muted);
  margin: 0 0 25px;
}
.astro-ebced-action { display: inline-flex; gap: 12px; }
.astro-ebced-caption { color: var(--gold-bright); margin: 19px 0 7px; font-size: 12px; letter-spacing: .04em; }
.astro-ebced-disclaimer { color: var(--dim); font-size: 12px; line-height: 1.6; margin: 0; }
.astro-ebced-art {
  width: min(100%, 410px);
  aspect-ratio: 1;
  justify-self: center;
  position: relative;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212,175,55,.10) 0 22%, transparent 62%);
}
.astro-ebced-orbit {
  position: absolute;
  inset: 12%;
  border-radius: 50%;
  border: 1px solid rgba(212,175,55,.34);
  box-shadow: inset 0 0 50px rgba(212,175,55,.035), 0 0 42px rgba(212,175,55,.06);
}
.astro-ebced-orbit-outer { inset: 3%; border-style: dashed; opacity: .55; }
.astro-ebced-orbit-inner { inset: 24%; opacity: .7; }
.astro-ebced-art-core { display: grid; gap: 5px; text-align: center; color: var(--gold-bright); z-index: 1; }
.astro-ebced-art-core > span { font-family: Georgia, serif; font-size: clamp(43px, 7vw, 76px); line-height: 1.2; }
.astro-ebced-art-core small { font-size: 12px; letter-spacing: .18em; }
.astro-ebced-glyph { position: absolute; font: 48px Georgia,serif; color: #cdaa63; text-shadow: 0 0 15px rgba(212,175,55,.23); }
.astro-ebced-glyph-a { top: 8%; left: 43%; }
.astro-ebced-glyph-b { bottom: 21%; left: 9%; }
.astro-ebced-glyph-c { bottom: 21%; right: 9%; }
@media (min-width: 901px) and (max-height: 710px) {
  .astro-ebced-feature-inner { min-height: calc(100svh - 76px); }
  .astro-ebced-art { width: min(35vh, 340px); }
}
@media (max-width: 900px) {
  .astro-ebced-feature { min-height: 0; scroll-snap-align: none; }
  .astro-ebced-feature-inner { min-height: 0; grid-template-columns: 1fr; text-align: center; gap: 20px; }
  .astro-ebced-feature-copy { margin-inline: auto; }
  .astro-ebced-lead { margin-inline: auto; }
  .astro-ebced-art { width: min(54vw, 270px); }
}
@media (max-width: 440px) {
  .astro-ebced-feature-inner { padding-top: 44px; padding-bottom: 36px; }
  .astro-ebced-art { width: min(52vw, 200px); }
  .astro-ebced-glyph { font-size: 27px; }
}
/* Header language picker: compact, keyboard accessible native details menu */
.astro-lang-select { position: relative; z-index: 30; flex: 0 0 auto; }
.astro-lang-select > summary {
  list-style: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 10px 12px;
  border: 1px solid rgba(212,175,55,.33);
  border-radius: 9px;
  background: rgba(255,255,255,.025);
  color: var(--gold-bright);
  font-size: 12px;
  white-space: nowrap;
}
.astro-lang-select > summary::-webkit-details-marker { display: none; }
.astro-lang-select > summary:hover, .astro-lang-select[open] > summary { border-color: var(--gold); background: rgba(212,175,55,.10); }
.astro-lang-select > summary:focus-visible, .astro-lang-select a:focus-visible { outline: 2px solid var(--gold-bright); outline-offset: 3px; }
.astro-lang-options {
  position: absolute;
  top: calc(100% + 8px);
  inset-inline-end: 0;
  width: 190px;
  padding: 7px;
  border: 1px solid rgba(212,175,55,.35);
  border-radius: 12px;
  background: #10131d;
  box-shadow: 0 24px 65px rgba(0,0,0,.64);
  display: grid;
  gap: 2px;
  max-height: min(350px, 65vh);
  overflow-y: auto;
}
.astro-lang-options a {
  display: flex;
  gap: 12px;
  align-items: center;
  border-radius: 7px;
  padding: 10px;
  color: var(--cream);
  font-size: 13px;
}
.astro-lang-options a span:first-child { width: 26px; color: var(--gold-bright); font-weight: 700; }
.astro-lang-options a:hover, .astro-lang-options a[aria-current="page"] { background: rgba(212,175,55,.13); }
.astro-nav-desktop { gap: clamp(8px, 1.25vw, 22px); }
.astro-header-inner { gap: clamp(8px, 1vw, 18px); }
@media (max-width: 1120px) {
  .astro-lang-current { display: none; }
  .astro-lang-select > summary { padding: 9px 10px; }
}
@media (max-width: 680px) {
  .astro-header-actions .astro-lang-select { margin-inline-start: auto; }
  .astro-lang-options { width: 185px; }
}
@media (prefers-reduced-motion: no-preference) {
  .astro-ebced-orbit-outer { animation: mythborn-ebced-orbit 65s linear infinite; }
  @keyframes mythborn-ebced-orbit { to { transform: rotate(360deg); } }
}
@media (prefers-reduced-motion: reduce) {
  .astro-skip-link { transition: none; }
  .astro-ebced-orbit { animation: none !important; }
}

/* Keep header within viewport after adding a fifth primary link. */
@media (min-width: 1181px) and (max-width: 1480px) {
  .astro-header-actions .astro-cta-gold { display: none !important; }
}
@media (min-width: 1025px) and (max-width: 1180px) {
  .astro-nav-desktop { display: none !important; }
  .astro-menu-btn { display: inline-flex !important; }
  .astro-header-actions .astro-cta-gold { display: none !important; }
}

/* User-supplied original Mythborn image assets: premium astrolabe editorial treatment. */
.astro-ebced-feature .astro-ebced-photo-frame{
 width:min(100%,390px);height:clamp(340px,37vw,470px);aspect-ratio:auto;
 position:relative;display:block;overflow:hidden;margin:0;isolation:isolate;
 border-radius:16px;border:1px solid rgba(224,184,108,.3);
 background:linear-gradient(145deg,#151822,#0a0c12);
 box-shadow:0 24px 78px rgba(0,0,0,.34),0 0 65px rgba(160,111,50,.08);
}
.astro-ebced-photo-frame::before{
 content:'';position:absolute;inset:0;pointer-events:none;z-index:1;
 background:linear-gradient(180deg,rgba(6,8,15,.03) 48%,rgba(5,7,11,.72) 100%),radial-gradient(ellipse at center,transparent 22%,rgba(6,7,13,.2) 90%);
}
.astro-ebced-photo{width:100%;height:100%;object-fit:cover;display:block;filter:sepia(.22) saturate(.93) contrast(1.09) brightness(.93);transition:transform .55s ease,filter .55s ease}
@media(hover:hover) and (prefers-reduced-motion:no-preference){.astro-ebced-photo-frame:hover .astro-ebced-photo{transform:scale(1.035);filter:sepia(.25) saturate(.88) contrast(1.14) brightness(.85)}}
.astro-ebced-photo-frame figcaption{position:absolute;bottom:18px;left:20px;right:12px;z-index:2;color:#d7bf88;font-size:10px;letter-spacing:.11em;line-height:1.6;text-shadow:0 2px 8px #000}
@media(max-width:900px){.astro-ebced-feature .astro-ebced-photo-frame{width:min(100%,380px);height:350px;margin-inline:auto;}}
@media(max-width:440px){.astro-ebced-feature .astro-ebced-photo-frame{width:min(100%,340px);height:300px}}


/* Original cinematic artwork: fill the right-hand editorial canvas rather than a small abstract symbol. */
@media(min-width:901px){
 .astro-ebced-feature-inner{grid-template-columns:minmax(0,1fr) minmax(350px,.94fr);gap:clamp(30px,4vw,64px)}
 .astro-ebced-feature .astro-ebced-photo-frame{width:100%;max-width:510px;height:clamp(340px,32vw,455px);margin-inline:auto}
}
.astro-ebced-photo{object-position:54% 50%;filter:saturate(.9) contrast(1.06) brightness(.91)}
.astro-ebced-photo-frame figcaption{font-size:9px;letter-spacing:.13em}
@media(max-width:900px){.astro-ebced-photo{object-position:55% 50%}}

/* Mythborn layout refinement · compact premium header + centered discovery */
.astro-header { overflow:visible !important; }
.astro-nav-desktop { font-size:12.5px; letter-spacing:.065em; gap:clamp(14px,1.6vw,27px); }
.astro-nav-dropdown-btn { font-size:12.5px; letter-spacing:.065em; }
.astro-header-inner { min-height:70px; padding-block:12px; max-width:1320px; }
.astro-brand { letter-spacing:.20em; font-size:20px; }
.astro-cta-gold { font-size:12px; }
.astro-lang-select { isolation:isolate; }
.astro-lang-select > summary { min-height:40px; }
.astro-lang-options { z-index:1200; }
.astro-ebced-feature {
  min-height:unset !important;
  scroll-snap-stop:normal;
  background:
    radial-gradient(ellipse at 66% 50%,rgba(164,118,45,.12),transparent 48%),
    linear-gradient(135deg,#0c101a 0%,#080a11 55%,#0b0c16 100%);
}
.astro-ebced-feature-inner {
  width:min(1160px,calc(100% - 64px)) !important;
  max-width:1160px !important;
  margin-inline:auto !important;
  min-height:clamp(460px,76svh,650px) !important;
  padding-block:clamp(58px,7vh,90px) !important;
  grid-template-columns:minmax(0,1.14fr) minmax(0,.86fr);
  align-items:center;
  gap:clamp(32px,5vw,88px);
}
.astro-ebced-feature-copy { max-width:590px; position:relative; z-index:1; }
.astro-ebced-feature .astro-card-tag { display:inline-block;color:var(--gold-bright);letter-spacing:.16em;font-size:11px; }
.astro-ebced-feature h2 {
  font-size:clamp(36px,3.8vw,57px);
  line-height:1.11;
  letter-spacing:-.025em;
  max-width:580px;
  margin:20px 0;
  text-wrap:balance;
}
.astro-ebced-lead { font-size:clamp(16px,1.3vw,18px);line-height:1.66;max-width:520px; margin-bottom:28px; }
.astro-ebced-actions { display:flex;align-items:center;gap:13px;flex-wrap:wrap; }
.astro-ebced-secondary {
  display:inline-flex; align-items:center;justify-content:center;gap:9px;
  min-height:45px; padding:12px 20px;color:var(--gold-bright);
  border:1px solid rgba(212,175,55,.36);border-radius:10px;
  background:rgba(212,175,55,.035);font-weight:600;font-size:13px;
  transition:background .2s,border-color .2s;
}
.astro-ebced-secondary:hover { background:rgba(212,175,55,.12);border-color:var(--gold); }
.astro-ebced-art { width:min(100%,360px);background:radial-gradient(circle,rgba(212,175,55,.09),transparent 65%); }
.astro-ebced-caption { font-size:12px; margin:24px 0 7px; }
@media (max-width:900px) {
  .astro-ebced-feature-inner { width:min(100% - 34px,660px) !important;grid-template-columns:1fr;min-height:0 !important;padding-block:58px 47px !important;gap:26px; }
  .astro-ebced-feature-copy { margin-inline:auto; }
  .astro-ebced-feature h2 { font-size:clamp(33px,7vw,46px);margin:16px 0; }
  .astro-ebced-actions {justify-content:center; }
  .astro-ebced-art {width:min(54vw,230px);}
}
@media (max-width:420px) {
  .astro-ebced-feature-inner {padding-block:44px 36px !important;}
  .astro-ebced-actions a { flex:1 1 100%; }
  .astro-ebced-art {width:min(49vw,190px);}
}
/* Approved immersive Ebced direction: uninterrupted visual with readable copy overlay.
   No separate framed image, no extra spacing, RTL-safe and mobile-safe. */
.astro-ebced-feature{isolation:isolate;background:#080b12!important;min-height:clamp(520px,72svh,730px);display:flex;align-items:center}
.astro-ebced-feature-inner{position:static!important;display:flex!important;align-items:center!important;justify-content:flex-start!important;width:min(100% - 80px,1300px)!important;min-height:clamp(520px,72svh,730px)!important;padding:clamp(62px,8vw,100px) 0!important;margin-inline:auto!important}
.astro-ebced-feature .astro-ebced-feature-copy{position:relative;z-index:2;max-width:690px;width:min(58%,690px);padding:clamp(12px,2vw,30px) 0}
.astro-ebced-feature h2{font-size:clamp(42px,4.8vw,74px);line-height:1.07;max-width:660px;text-shadow:0 3px 27px #05070fd9}
.astro-ebced-feature .astro-ebced-lead{color:#e0d7ce;max-width:600px;font-size:clamp(16px,1.4vw,19px);text-shadow:0 2px 14px #000b}
.astro-ebced-feature .astro-ebced-caption{color:#f1c878}
.astro-ebced-feature .astro-ebced-disclaimer{color:#a7a6af}
.astro-ebced-feature .astro-ebced-photo-frame{position:absolute!important;z-index:0!important;inset:0!important;display:block!important;width:100%!important;max-width:none!important;height:100%!important;min-height:100%!important;margin:0!important;padding:0!important;overflow:hidden!important;border:0!important;border-radius:0!important;box-shadow:none!important;background:#080b12}
.astro-ebced-feature .astro-ebced-photo-frame::before{content:'';z-index:1;position:absolute;inset:0;background:linear-gradient(90deg,#070a12 0%,rgba(7,10,18,.97) 21%,rgba(7,10,18,.77) 43%,rgba(7,10,18,.26) 70%,rgba(7,10,18,.05) 100%),linear-gradient(0deg,rgba(7,10,18,.75),transparent 29%,transparent 80%,rgba(7,10,18,.3));pointer-events:none}
.astro-ebced-feature .astro-ebced-photo{width:100%;height:100%;object-fit:cover;object-position:68% 50%;filter:saturate(.92) brightness(.88) contrast(1.06);transition:none}
.astro-ebced-feature .astro-ebced-photo-frame figcaption{display:none}
@media(hover:hover){.astro-ebced-feature .astro-ebced-photo-frame:hover .astro-ebced-photo{transform:none;filter:saturate(.92) brightness(.88) contrast(1.06)}}
@media(min-width:1400px){.astro-ebced-feature .astro-ebced-feature-copy{width:57%}}
@media(max-width:900px){.astro-ebced-feature,.astro-ebced-feature-inner{min-height:610px!important}.astro-ebced-feature-inner{width:calc(100% - 54px)!important}.astro-ebced-feature .astro-ebced-feature-copy{width:min(100%,630px)}.astro-ebced-feature .astro-ebced-photo-frame::before{background:linear-gradient(90deg,rgba(7,10,18,.98),rgba(7,10,18,.88) 48%,rgba(7,10,18,.4)),linear-gradient(0deg,#070a12 0%,transparent 25%)}}
@media(max-width:600px){.astro-ebced-feature,.astro-ebced-feature-inner{min-height:620px!important}.astro-ebced-feature-inner{width:calc(100% - 36px)!important;padding:60px 0 78px!important}.astro-ebced-feature .astro-ebced-feature-copy{width:100%}.astro-ebced-feature h2{font-size:clamp(37px,9.5vw,51px)}.astro-ebced-feature .astro-ebced-lead{font-size:15px}.astro-ebced-feature .astro-ebced-photo{object-position:74% 50%}.astro-ebced-feature .astro-ebced-photo-frame::before{background:linear-gradient(90deg,rgba(6,9,17,.96),rgba(6,9,17,.83) 65%,rgba(6,9,17,.54)),linear-gradient(0deg,rgba(6,9,17,.88),transparent 28%)}}
@media(prefers-reduced-motion:reduce){.astro-ebced-feature .astro-ebced-photo{transition:none}}
[dir="rtl"] .astro-ebced-feature .astro-ebced-photo-frame::before{background:linear-gradient(270deg,#070a12 0%,rgba(7,10,18,.95) 33%,rgba(7,10,18,.23) 75%,rgba(7,10,18,.07)),linear-gradient(0deg,rgba(7,10,18,.75),transparent 29%)}


/* Frequency Studio: preview-only discoverability; no global design changes. */
.astro-nav-desktop > .astro-nav-frequency{color:#e4c588!important;font-weight:700;letter-spacing:.075em}
.astro-nav-desktop > .astro-nav-frequency:hover{color:#ffe2a0!important}
.astro-frequency-preview{position:relative;isolation:isolate;overflow:hidden;min-height:clamp(480px,68svh,690px);display:flex;align-items:center;background:#080b12;border-top:1px solid rgba(221,178,107,.2);border-bottom:1px solid rgba(221,178,107,.2)}
.astro-frequency-preview-visual{position:absolute;inset:0;z-index:-1}
.astro-frequency-preview-visual img{width:100%;height:100%;object-fit:cover;object-position:70% center;display:block;filter:saturate(.92) contrast(1.06) brightness(.83)}
.astro-frequency-preview-visual:after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(5,8,15,.98),rgba(5,8,15,.85) 31%,rgba(5,8,15,.38) 68%,rgba(5,8,15,.09)),linear-gradient(0deg,rgba(5,8,15,.7),transparent 30%,transparent 77%,rgba(5,8,15,.16))}
.astro-frequency-preview-inner{width:min(100% - 80px,1320px);margin:auto;padding:80px 0;position:relative}
.astro-frequency-preview-copy{width:min(660px,64%);position:relative}
.astro-frequency-preview h2{font:400 clamp(49px,6vw,90px)/1.03 Georgia,serif;letter-spacing:-.044em;color:#f6ecdd;margin:20px 0 23px;text-shadow:0 2px 27px #020409}
.astro-frequency-preview h2 em{color:#e1bb77;font-style:italic;font-weight:400}
.astro-frequency-preview-copy>p{font-size:clamp(15px,1.4vw,19px);max-width:560px;color:#d1cbd0;line-height:1.85;margin:0 0 28px}
.astro-frequency-preview-cta{display:inline-flex;align-items:center;justify-content:space-between;gap:26px;min-height:54px;padding:13px 22px;border-radius:100px;background:linear-gradient(110deg,#edcf8e,#bb8b3d);box-shadow:0 9px 34px rgba(205,153,75,.19);font-size:13px;font-weight:700;color:#111318!important;text-decoration:none}
.astro-frequency-preview-cta:hover{filter:brightness(1.08);transform:translateY(-1px)}
.astro-frequency-preview-cta:focus-visible{outline:2px solid #ffe3a8;outline-offset:4px}
.astro-frequency-preview-copy>small{display:block;margin-top:20px;color:#d3b77b;font-size:11px;letter-spacing:.08em;line-height:1.5}
[dir="rtl"] .astro-frequency-preview-visual:after{background:linear-gradient(270deg,rgba(5,8,15,.98),rgba(5,8,15,.86) 34%,rgba(5,8,15,.34) 72%,rgba(5,8,15,.09))}
@media(max-width:1000px){.astro-frequency-preview-inner{width:calc(100% - 54px)}.astro-frequency-preview-copy{width:min(100%,620px)}.astro-frequency-preview-visual:after{background:linear-gradient(90deg,rgba(5,8,15,.94),rgba(5,8,15,.72) 58%,rgba(5,8,15,.3))}}
@media(max-width:600px){.astro-frequency-preview{min-height:580px}.astro-frequency-preview-inner{width:calc(100% - 36px);padding:65px 0}.astro-frequency-preview h2{font-size:clamp(47px,12vw,68px)}.astro-frequency-preview-copy>p{font-size:15px}.astro-frequency-preview-visual img{object-position:76% center}.astro-frequency-preview-visual:after{background:linear-gradient(90deg,rgba(5,8,15,.96),rgba(5,8,15,.82) 65%,rgba(5,8,15,.51))}.astro-frequency-preview-cta{min-height:48px}.astro-frequency-preview-copy>small{max-width:280px}}
@media(prefers-reduced-motion:reduce){.astro-frequency-preview-cta{transition:none;transform:none!important}}


/* Dedicated contact page, using the existing Mythborn visual tokens. */
.astro-contact-page{padding:clamp(35px,6vw,85px) 0 clamp(75px,9vw,140px);max-width:1200px}
.astro-contact-breadcrumb{display:flex;gap:12px;align-items:center;color:#9da2ae;font-size:12px}
.astro-contact-breadcrumb a{color:#d5bd8b;text-decoration:none}
.astro-contact-heading{max-width:860px;margin:clamp(45px,7vw,85px) auto clamp(34px,5vw,65px);text-align:center}
.astro-contact-eyebrow,.astro-contact-kicker{font-size:11px;font-weight:700;letter-spacing:.16em;color:#d5b876}
.astro-contact-heading h1{font:400 clamp(41px,6vw,80px)/1.1 Georgia,serif;letter-spacing:-.035em;color:#f4ecdf;margin:18px 0}
.astro-contact-heading p{font-size:clamp(15px,1.5vw,19px);color:#bdbac5;line-height:1.8;max-width:640px;margin:0 auto}
.astro-contact-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}
.astro-contact-card{padding:clamp(23px,3vw,45px);min-width:0;border:1px solid rgba(220,176,95,.27);background:linear-gradient(140deg,rgba(24,25,37,.86),rgba(10,12,21,.97));border-radius:13px}
.astro-contact-card-top{display:flex;gap:13px;align-items:center}
.astro-contact-mark{color:#edc77e;font-size:26px}
.astro-contact-card p{min-height:66px;color:#b9bbc5;line-height:1.8;font-size:14px;margin:22px 0}
.astro-contact-email{display:flex;justify-content:space-between;gap:10px;align-items:center;text-decoration:none;color:#f1d18b;font-size:clamp(17px,2vw,27px);overflow-wrap:anywhere;border-top:1px solid rgba(220,176,95,.15);padding-top:20px}
.astro-contact-action{display:inline-flex;gap:18px;padding:12px 20px;margin-top:26px;border:1px solid #ba934f;border-radius:7px;color:#e7cb91;text-decoration:none;font-weight:650;font-size:13px}
.astro-contact-card a:hover{color:#fff1c6}.astro-contact-card a:focus-visible,.astro-contact-foot a:focus-visible{outline:2px solid #e4c382;outline-offset:3px}
.astro-contact-foot{display:flex;gap:20px;justify-content:space-between;align-items:center;border-top:1px solid rgba(220,176,95,.14);margin-top:34px;padding-top:22px;color:#9095a0;font-size:12px;line-height:1.7}
.astro-contact-foot a{color:#d7b97c;white-space:nowrap}
@media(max-width:700px){.astro-contact-page{padding:30px 0 70px}.astro-contact-heading{margin:45px auto 35px}.astro-contact-grid{grid-template-columns:1fr;gap:14px}.astro-contact-card p{min-height:0}.astro-contact-foot{flex-direction:column;align-items:flex-start}}


/* Contact 2026 refinement: refined editorial surfaces, single action, restrained negative space. */
.astro-contact-page{max-width:1160px;padding-top:clamp(26px,4vw,56px);padding-bottom:clamp(55px,7vw,100px)}
.astro-contact-heading{margin:clamp(36px,4.6vw,64px) auto clamp(25px,3.5vw,46px);max-width:790px}
.astro-contact-heading h1{font-size:clamp(40px,5.4vw,69px);line-height:1.12;margin:16px auto 17px}
.astro-contact-heading p{max-width:600px;font-size:clamp(14px,1.2vw,17px);line-height:1.75}
.astro-contact-grid{gap:clamp(13px,1.7vw,24px);align-items:stretch}
.astro-contact-card{position:relative;isolation:isolate;display:flex;flex-direction:column;min-height:265px;padding:clamp(23px,2.65vw,37px);border:1px solid rgba(224,186,118,.21);border-radius:14px;background:linear-gradient(137deg,rgba(29,29,39,.93),rgba(10,12,20,.97) 68%);box-shadow:0 15px 47px rgba(0,0,0,.14);overflow:hidden;transition:border-color .25s ease,transform .25s ease,box-shadow .25s ease}
.astro-contact-card:before{content:'';position:absolute;left:27px;right:27px;top:0;height:1px;background:linear-gradient(90deg,rgba(233,199,137,.7),rgba(233,199,137,.1) 70%,transparent);pointer-events:none}
.astro-contact-card:after{content:'';position:absolute;inset:-36% -29% auto auto;width:68%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle,rgba(192,144,67,.08),transparent 67%);pointer-events:none}
.astro-contact-card-head{display:flex;align-items:center;gap:16px}
.astro-contact-icon{display:grid;place-items:center;flex:0 0 58px;width:58px;height:58px;color:#ebc987;border:1px solid rgba(227,188,115,.3);border-radius:13px;background:linear-gradient(145deg,rgba(225,184,107,.11),rgba(225,184,107,.025))}
.astro-contact-icon svg{width:35px;height:35px}
.astro-contact-kicker{font-size:clamp(12px,1.02vw,14px);letter-spacing:.065em;color:#f2e4c6;text-transform:none}
.astro-contact-description{min-height:0!important;margin:18px 0 20px!important;max-width:430px;color:#bfc0c9!important;font-size:14px!important;line-height:1.75!important}
.astro-contact-card-bottom{margin-top:auto;padding-top:18px;border-top:1px solid rgba(226,190,120,.16)}
.astro-contact-email{display:flex;justify-content:space-between;align-items:center;gap:14px;border:0;padding:0;color:#e9c98a;font-family:Georgia,serif;font-size:clamp(19px,2.15vw,30px);letter-spacing:-.012em;line-height:1.35;transition:color .2s ease}
.astro-contact-email svg{flex:0 0 25px;width:25px;height:25px;color:#e8c680;transition:transform .2s ease}
.astro-contact-email:hover{color:#fff1cd}
.astro-contact-email:hover svg{transform:translate(2px,-2px)}
.astro-contact-email:focus-visible{outline:2px solid #ffe2a1;outline-offset:6px;border-radius:3px}
.astro-contact-action{display:block;margin:13px 0 0;border:0;padding:0;color:#9b9ca6;font-size:11px;letter-spacing:.055em}
.astro-contact-card:hover{border-color:rgba(237,196,121,.55);box-shadow:0 19px 54px rgba(0,0,0,.22);transform:translateY(-2px)}
.astro-contact-foot{margin-top:27px;padding-top:20px}
[dir="rtl"] .astro-contact-card:before{left:27px;right:27px;background:linear-gradient(270deg,rgba(233,199,137,.7),rgba(233,199,137,.1) 70%,transparent)}
@media(max-width:700px){.astro-contact-page{padding-top:24px}.astro-contact-heading{margin:38px auto 31px}.astro-contact-card{min-height:225px;padding:23px}.astro-contact-card-head{gap:13px}.astro-contact-icon{width:52px;height:52px;flex-basis:52px}.astro-contact-description{margin:16px 0 18px!important}.astro-contact-email{font-size:clamp(19px,5.5vw,27px)}}
@media(hover:none){.astro-contact-card:hover{transform:none}}
@media(prefers-reduced-motion:reduce){.astro-contact-card,.astro-contact-email,.astro-contact-email svg{transition:none!important}.astro-contact-card:hover,.astro-contact-email:hover svg{transform:none}}

/* Contact hero: preserve a centered single-line editorial composition on desktop.
   Smaller screens wrap naturally rather than shrinking text beyond readability. */
.astro-contact-heading{width:100%;max-width:1160px;text-align:center}
.astro-contact-heading h1,.astro-contact-heading p{margin-left:auto;margin-right:auto;text-align:center}
@media(min-width:1100px){
  .astro-contact-heading h1{max-width:none;font-size:clamp(39px,3.75vw,55px);letter-spacing:-.045em;white-space:nowrap}
  .astro-contact-heading p{max-width:none;font-size:clamp(14px,1.06vw,16px);line-height:1.65;white-space:nowrap}
}

/* =========================================================================
   2027 Deep Night Indigo (#080b12) & Pale Moon Gold (#d6be92) Sanctuary & Jung
   ========================================================================= */
[data-spotlight]{
  position:relative;
  overflow:hidden;
}
[data-spotlight]::before{
  content:'';
  position:absolute;
  inset:0;
  background:radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), rgba(214, 190, 146, 0.11), transparent 62%);
  opacity:0;
  transition:opacity .35s ease;
  pointer-events:none;
}
[data-spotlight]:hover::before{opacity:1}

.sanc-page{padding-bottom:clamp(64px,8vw,112px)}
.sanc-center{text-align:center}
.sanc-hero{padding:clamp(64px,8vw,108px) 0 clamp(36px,4.5vw,56px);border-bottom:1px solid rgba(214,190,146,.14);background:radial-gradient(ellipse 75% 70% at 50% 0%, rgba(148,169,201,.11), transparent 72%)}
.sanc-eyebrow{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:16px}
.sanc-h1{font-family:var(--font-serif);font-weight:400;font-size:clamp(34px,4.4vw,62px);line-height:1.12;letter-spacing:-.025em;color:var(--cream);margin:0 auto 18px;max-width:980px}
.sanc-lead{font-size:clamp(15px,1.25vw,18px);line-height:1.72;color:var(--muted);max-width:740px;margin:0 auto}
.sanc-section{padding:clamp(44px,5.5vw,76px) 0}
.sanc-head{max-width:860px;margin:0 auto clamp(28px,3.5vw,42px)}
.sanc-head h2{font-family:var(--font-serif);font-weight:400;font-size:clamp(26px,3.1vw,42px);line-height:1.18;color:var(--cream);margin:0 0 12px}
.sanc-head p{font-size:15px;line-height:1.72;color:var(--muted);margin:0 auto;max-width:900px}

.sanc-tabs{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-bottom:26px}
.sanc-tab{padding:11px 20px;border-radius:999px;border:1px solid rgba(214,190,146,.22);background:rgba(15,21,34,.75);color:var(--muted);font-size:13px;font-weight:600;cursor:pointer;transition:border-color .2s,color .2s,background .2s}
.sanc-tab:hover{border-color:rgba(214,190,146,.5);color:var(--cream)}
.sanc-tab.is-active{background:rgba(214,190,146,.16);border-color:var(--gold);color:var(--gold-bright)}

.sanc-room-card{display:grid;grid-template-columns:minmax(260px,.85fr) minmax(0,1.15fr);gap:clamp(24px,4vw,52px);align-items:center;padding:clamp(26px,3.5vw,46px);border-radius:20px;border:1px solid rgba(214,190,146,.22);background:linear-gradient(145deg,rgba(15,21,34,.88),rgba(8,11,18,.96))}
.sanc-room-card[hidden]{display:none}
.sanc-room-wide{grid-template-columns:1fr}
.sanc-room-copy h2{font-family:var(--font-serif);font-weight:400;font-size:clamp(24px,2.5vw,34px);color:var(--cream);margin:0 0 12px}
.sanc-room-sub{font-size:15px;line-height:1.75;color:#cfd6e4;margin:0 0 16px}
.sanc-room-note{font-size:13.5px;line-height:1.72;color:var(--muted);margin:0 0 22px}
.sanc-btn-row{display:flex;flex-wrap:wrap;gap:12px;align-items:center}
.sanc-btn-gold{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 22px;border-radius:10px;border:1px solid var(--gold);background:var(--gold-gradient);color:#0b0e16;font-size:13.5px;font-weight:700;cursor:pointer;text-decoration:none;transition:transform .2s,filter .2s}
.sanc-btn-gold:hover{transform:translateY(-1px);filter:brightness(1.06)}
.sanc-btn-ghost{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:11px 20px;border-radius:10px;border:1px solid rgba(214,190,146,.32);background:rgba(15,21,34,.65);color:var(--gold-bright);font-size:13px;font-weight:600;cursor:pointer;text-decoration:none;transition:border-color .2s,background .2s}
.sanc-btn-ghost:hover{border-color:var(--gold);background:rgba(214,190,146,.12)}

/* Trataka Candle Visual */
.sanc-room-visual{display:grid;place-items:center;min-height:270px;border-radius:16px;background:radial-gradient(circle at 50% 45%, rgba(214,190,146,.10), rgba(8,11,18,.9) 70%);border:1px solid rgba(214,190,146,.14);padding:24px}
.trataka-stage{position:relative;width:140px;height:210px;display:flex;flex-direction:column;align-items:center;justify-content:flex-end}
.trataka-halo{position:absolute;top:16px;width:136px;height:136px;border-radius:50%;background:radial-gradient(circle, rgba(246,204,126,.34) 0%, rgba(214,158,76,.12) 45%, transparent 72%);animation:tratakaPulse 4.2s ease-in-out infinite alternate}
.trataka-flame{position:relative;width:30px;height:66px;border-radius:50% 50% 45% 45% / 68% 68% 32% 32%;background:radial-gradient(ellipse at 50% 70%, #fff8dc 0%, #f5c976 48%, rgba(224,132,48,.85) 85%, transparent 100%);box-shadow:0 0 28px rgba(245,201,118,.55);transform-origin:50% 90%;animation:flameSway 3.4s ease-in-out infinite alternate}
.trataka-core{position:absolute;bottom:8px;left:50%;transform:translateX(-50%);width:10px;height:24px;border-radius:50%;background:#ffffff;opacity:.92}
.trataka-wick{width:2px;height:12px;background:#3a322a;margin-top:-2px}
.trataka-wax{width:54px;height:78px;border-radius:8px 8px 4px 4px;background:linear-gradient(180deg,#e9dfc8 0%,#b8a98e 100%);box-shadow:inset 0 6px 12px rgba(255,255,255,.35)}
@keyframes flameSway{0%{transform:scaleY(1) rotate(-1.6deg)}50%{transform:scaleY(1.05) rotate(1.4deg)}100%{transform:scaleY(.97) rotate(-.8deg)}}
@keyframes tratakaPulse{from{opacity:.72;transform:scale(.95)}to{opacity:1;transform:scale(1.07)}}

/* Breath Orb */
.breath-stage{display:grid;place-items:center;width:220px;height:220px}
.breath-orb{width:146px;height:146px;border-radius:50%;border:1px solid rgba(214,190,146,.55);background:radial-gradient(circle at 38% 32%, rgba(214,190,146,.30), rgba(148,169,201,.14) 55%, rgba(8,11,18,.88) 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;transition:transform 4s ease-in-out;box-shadow:0 0 42px rgba(214,190,146,.16)}
.breath-phase{font-size:11px;letter-spacing:.18em;color:var(--gold-bright);font-weight:700}
.breath-count{font-family:var(--font-serif);font-size:32px;color:var(--cream)}
.sanc-inline-ctrl{margin-bottom:18px;max-width:380px}
.sanc-inline-ctrl label{display:block;font-size:12px;color:var(--gold);letter-spacing:.06em;margin-bottom:8px}

/* Theta Stages */
.sanc-stages-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin:22px 0}
.sanc-stage-item{padding:20px 18px;border-radius:14px;border:1px solid rgba(214,190,146,.16);background:rgba(8,11,18,.68)}
.sanc-stage-item h3{font-family:var(--font-serif);font-size:17px;color:var(--gold-bright);margin:0 0 8px}
.sanc-stage-item p{font-size:13px;line-height:1.68;color:var(--muted);margin:0}

/* 108 Mala */
.mala-stage{width:100%;max-width:290px;text-align:center}
.mala-counter-value{font-family:var(--font-serif);font-size:40px;color:var(--gold-bright);margin-bottom:12px}
.mala-bar{height:6px;border-radius:999px;background:rgba(255,255,255,.08);overflow:hidden;margin-bottom:12px}
.mala-bar span{display:block;height:100%;background:var(--gold-gradient);transition:width .25s ease}
.mala-rounds{font-size:12.5px;color:var(--muted)}
.sanc-mantra-list{list-style:none;display:flex;flex-direction:column;gap:10px;margin:0 0 22px;padding:0}
.sanc-mantra-list li{padding:11px 14px;border-left:2px solid var(--gold);background:rgba(8,11,18,.55);border-radius:0 10px 10px 0;font-size:13.5px;color:#e5dfd2;font-style:italic}

/* Hybrid Mixer */
.sanc-mixer{padding:clamp(24px,3.2vw,42px);border-radius:20px;border:1px solid rgba(214,190,146,.24);background:linear-gradient(155deg,rgba(15,21,34,.92),rgba(8,11,18,.98))}
.sanc-mixer-top{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:20px;padding-bottom:24px;border-bottom:1px solid rgba(214,190,146,.15)}
.sanc-player-left{display:flex;align-items:center;gap:18px}
.sanc-play-btn{width:64px;height:64px;border-radius:50%;border:1px solid var(--gold-bright);background:var(--gold-gradient);color:#0b0e16;font-size:20px;display:grid;place-items:center;cursor:pointer;flex:0 0 64px}
.sanc-ring{width:14px;height:14px;border-radius:50%;background:rgba(214,190,146,.35);border:1px solid var(--gold)}
.sanc-ring.is-playing{background:var(--gold-bright);box-shadow:0 0 18px rgba(214,190,146,.7);animation:tratakaPulse 1.6s ease-in-out infinite alternate}
.sanc-state{font-size:11px;letter-spacing:.16em;color:var(--gold);font-weight:700}
.sanc-timer-readout{font-family:var(--font-serif);font-size:28px;color:var(--cream);margin-top:2px}
.sanc-timer-ctrl{min-width:190px}
.sanc-timer-ctrl label{display:block;font-size:11.5px;color:var(--muted);margin-bottom:6px}
.sanc-mixer-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:24px}
.sanc-channel{padding:18px;border-radius:14px;border:1px solid rgba(214,190,146,.16);background:rgba(8,11,18,.65);display:flex;flex-direction:column;gap:12px}
.sanc-channel label{font-size:12.5px;font-weight:600;color:var(--gold-bright)}
.sanc-channel input[type=range]{width:100%;accent-color:#d6be92}
.sanc-mixer-foot{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px;margin-top:24px;padding-top:18px;border-top:1px solid rgba(214,190,146,.14);font-size:12px;color:var(--muted)}
.sanc-link{color:var(--gold-bright);font-weight:600;white-space:nowrap}

/* 4-Column Symmetrical Guide Grid */
.sanc-guide-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}
.sanc-guide-card{padding:26px 22px;border-radius:16px;border:1px solid rgba(214,190,146,.18);background:linear-gradient(160deg,rgba(15,21,34,.84),rgba(8,11,18,.95))}
.sanc-guide-card h3{font-family:var(--font-serif);font-size:18px;font-weight:500;color:var(--gold-bright);margin:0 0 10px}
.sanc-guide-card p{font-size:13.5px;line-height:1.72;color:var(--muted);margin:0}
.sanc-ethics-note{margin:20px auto 0;max-width:740px;font-size:12.5px;line-height:1.7;color:var(--dim)}

/* Carl Jung Archetype & Shadow Mirror */
.jung-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-bottom:24px}
.jung-arch-card{text-align:left;padding:20px 18px;border-radius:14px;border:1px solid rgba(214,190,146,.18);background:rgba(15,21,34,.75);color:var(--cream);cursor:pointer;display:flex;flex-direction:column;gap:8px;transition:border-color .2s,background .2s,transform .2s}
.jung-arch-card strong{font-family:var(--font-serif);font-size:17px;font-weight:500;color:var(--gold-bright)}
.jung-arch-card span{font-size:12.5px;line-height:1.6;color:var(--muted)}
.jung-arch-card:hover{border-color:rgba(214,190,146,.48);transform:translateY(-2px)}
.jung-arch-card.is-active{border-color:var(--gold);background:rgba(214,190,146,.14)}

.jung-dossier{padding:clamp(24px,3.2vw,40px);border-radius:20px;border:1px solid rgba(214,190,146,.28);background:linear-gradient(145deg,rgba(19,27,44,.9),rgba(8,11,18,.98))}
.jung-dossier-head{padding-bottom:20px;margin-bottom:22px;border-bottom:1px solid rgba(214,190,146,.16)}
.jung-dossier-head h3{font-family:var(--font-serif);font-size:clamp(24px,2.4vw,34px);font-weight:400;color:var(--cream);margin:0 0 10px}
.jung-dossier-head blockquote{margin:0;font-style:italic;font-size:15px;line-height:1.7;color:var(--gold-bright)}
.jung-dossier-cols{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.jung-col{padding:18px;border-radius:14px;background:rgba(8,11,18,.68);border:1px solid rgba(214,190,146,.14)}
.jung-col-prompt{border-color:rgba(214,190,146,.34);background:rgba(214,190,146,.07)}
.jung-col-label{display:block;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin-bottom:10px}
.jung-col p{font-size:13.5px;line-height:1.72;color:#dbe1ee;margin:0}

.jung-sync-shell{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:24px;padding:clamp(24px,3vw,38px);border-radius:20px;border:1px solid rgba(214,190,146,.22);background:linear-gradient(150deg,rgba(15,21,34,.88),rgba(8,11,18,.97))}
.jung-sync-form .sanc-inline-ctrl{max-width:none}
.jung-sync-list{display:flex;flex-direction:column;gap:12px;max-height:320px;overflow-y:auto}
.jung-log-item{padding:14px 16px;border-radius:12px;border:1px solid rgba(214,190,146,.16);background:rgba(8,11,18,.72)}
.jung-log-meta{font-size:11px;letter-spacing:.08em;color:var(--gold);margin-bottom:6px;font-weight:600}
.jung-log-item p{font-size:13.5px;line-height:1.65;color:#dce2ef;margin:0}
.jung-empty{font-size:13.5px;color:var(--muted);padding:20px;border:1px dashed rgba(214,190,146,.22);border-radius:12px;text-align:center}

/* Homepage 2027 Sanctuary & Carl Jung Band */
.home-sanctuary-band{padding:clamp(46px,6vw,78px) 0;border-top:1px solid var(--border);background:radial-gradient(ellipse 80% 60% at 50% 0%, rgba(148,169,201,.09), transparent 72%)}
.home-sanctuary-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;margin-top:28px}
.home-sanctuary-card{display:flex;flex-direction:column;justify-content:space-between;gap:18px;padding:clamp(26px,3.2vw,40px);border-radius:18px;border:1px solid rgba(214,190,146,.22);background:linear-gradient(150deg,rgba(15,21,34,.88),rgba(8,11,18,.97));transition:border-color .25s,transform .25s}
.home-sanctuary-card:hover{border-color:rgba(214,190,146,.52);transform:translateY(-2px)}
.home-sanctuary-card h3{font-family:var(--font-serif);font-size:clamp(22px,2.2vw,30px);font-weight:400;color:var(--cream);margin:8px 0 10px}
.home-sanctuary-card p{font-size:14.5px;line-height:1.72;color:var(--muted);margin:0}

@media(max-width:1024px){
  .sanc-guide-grid,.jung-grid,.sanc-stages-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .sanc-mixer-grid,.jung-dossier-cols{grid-template-columns:1fr}
}
@media(max-width:760px){
  .sanc-room-card,.jung-sync-shell,.home-sanctuary-grid{grid-template-columns:1fr}
  .sanc-guide-grid,.jung-grid,.sanc-stages-grid{grid-template-columns:1fr}
}
@media(prefers-reduced-motion:reduce){
  .trataka-flame,.trataka-halo,.sanc-ring.is-playing{animation:none!important}
  .breath-orb{transition:none!important}
}

/* =========================================================================
   FAZ 2 — 2027 ULTRA-ELITE QUIET-LUXURY MASTER LAYER
   Deep Night Indigo (#080b12 / #0f1522) · Pale Moon Gold (#d6be92) · Mist (#94a9c9)
   ========================================================================= */
textarea{resize:none!important}

/* Frosted Deep Indigo Navigation Bar */
.astro-nav{
  background:rgba(8, 11, 18, 0.84)!important;
  backdrop-filter:blur(18px) saturate(130%)!important;
  -webkit-backdrop-filter:blur(18px) saturate(130%)!important;
  border-bottom:1px solid rgba(214, 190, 146, 0.16)!important;
}

/* Zero hazy outer glow on primary buttons — crisp architectural gold finish */
.astro-btn-primary,
.sanc-btn-gold,
.astro-frequency-preview-cta{
  box-shadow:none!important;
  border:1px solid rgba(234, 215, 178, 0.58)!important;
  background:linear-gradient(135deg, #efe0c0 0%, #d6be92 52%, #b09565 100%)!important;
  color:#080b12!important;
  letter-spacing:0.02em;
  transition:transform .22s cubic-bezier(.16,1,.3,1), filter .22s ease!important;
}
.astro-btn-primary:hover,
.sanc-btn-gold:hover,
.astro-frequency-preview-cta:hover{
  transform:translateY(-1px)!important;
  filter:brightness(1.06)!important;
  box-shadow:none!important;
}

/* Ultra-Elite Inner-Page Hero Sanctuary Panel (All inner routes + Sanctuary + Jung) */
main > section.astro-hero:not(.astro-section-viewport),
.sanc-hero{
  padding:clamp(34px, 4.5vw, 56px) 0 clamp(28px, 3.6vw, 44px)!important;
  border-bottom:0!important;
  background:none!important;
}
main > section.astro-hero:not(.astro-section-viewport) > .astro-container,
.sanc-hero > .astro-container{
  position:relative;
  isolation:isolate;
  max-width:1160px;
  padding:clamp(42px, 5.2vw, 72px) clamp(24px, 4vw, 64px)!important;
  border-radius:24px;
  border:1px solid rgba(214, 190, 146, 0.24);
  background:
    radial-gradient(ellipse 75% 65% at 50% 0%, rgba(148, 169, 201, 0.16), transparent 68%),
    radial-gradient(ellipse 55% 45% at 50% 100%, rgba(214, 190, 146, 0.07), transparent 72%),
    linear-gradient(165deg, rgba(16, 23, 38, 0.94) 0%, rgba(8, 11, 18, 0.98) 100%);
  box-shadow:0 28px 72px rgba(0, 0, 0, 0.42), inset 0 1px 0 rgba(234, 215, 178, 0.22);
  text-align:center;
  overflow:hidden;
}
main > section.astro-hero:not(.astro-section-viewport) > .astro-container::before,
.sanc-hero > .astro-container::before{
  content:'';
  position:absolute;
  top:0;
  left:12%;
  right:12%;
  height:1px;
  background:linear-gradient(90deg, transparent, rgba(234, 215, 178, 0.78), transparent);
  pointer-events:none;
}
main > section.astro-hero:not(.astro-section-viewport) .astro-hero-eyebrow,
.sanc-hero .sanc-eyebrow{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:7px 16px;
  border-radius:999px;
  border:1px solid rgba(214, 190, 146, 0.28);
  background:rgba(214, 190, 146, 0.06);
  font-size:10.5px;
  font-weight:700;
  letter-spacing:0.2em;
  color:var(--gold-bright);
  margin-bottom:20px;
}
main > section.astro-hero:not(.astro-section-viewport) h1,
.sanc-hero .sanc-h1{
  font-family:var(--font-serif)!important;
  font-weight:400!important;
  font-size:clamp(32px, 4.1vw, 56px)!important;
  line-height:1.12!important;
  letter-spacing:-0.025em!important;
  color:#f6f2ea!important;
  margin:0 auto 16px!important;
  max-width:960px!important;
  text-align:center!important;
}
main > section.astro-hero:not(.astro-section-viewport) .astro-hero-lead,
.sanc-hero .sanc-lead{
  font-size:clamp(14.5px, 1.18vw, 17px)!important;
  line-height:1.75!important;
  color:#b4bfd4!important;
  max-width:700px!important;
  margin:0 auto!important;
  text-align:center!important;
}

/* Unified Deep Night Indigo Velvet Glass Surfaces */
.astro-card,
.astro-form-card,
.astro-quick-box,
.astro-bridge-card,
.zodiac-natural-card,
.archetype-card{
  border-color:rgba(214, 190, 146, 0.19)!important;
  background:linear-gradient(155deg, rgba(15, 21, 34, 0.88) 0%, rgba(8, 11, 18, 0.96) 100%)!important;
  box-shadow:0 18px 46px rgba(0, 0, 0, 0.28);
}
.astro-card:hover,
.zodiac-natural-card:hover,
.archetype-card:hover{
  border-color:rgba(214, 190, 146, 0.44)!important;
}

/* Centered Section Headers */
.astro-section-head{
  text-align:center!important;
  margin-left:auto!important;
  margin-right:auto!important;
}
.astro-section-head h2{
  font-family:var(--font-serif)!important;
  font-weight:400!important;
  letter-spacing:-0.02em!important;
  color:#f6f2ea!important;
}
.astro-section-head p{
  color:#a8b3c8!important;
  margin-left:auto!important;
  margin-right:auto!important;
}

@media(max-width:680px){
  main > section.astro-hero:not(.astro-section-viewport) > .astro-container,
  .sanc-hero > .astro-container{
    border-radius:18px;
    padding:34px 20px!important;
  }
}

/* =========================================================================
   2027 GROUND-UP REBIRTH — HOMEPAGE, CYMATICS, QUOTES & EDUCATIONAL GUIDES
   ========================================================================= */
.mb27-home{position:relative}
.mb27-hero{
  position:relative;
  isolation:isolate;
  min-height:calc(100svh - 76px);
  max-height:860px;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:clamp(64px, 8vw, 110px) 0 clamp(56px, 7vw, 96px);
  overflow:hidden;
  border-bottom:1px solid rgba(214, 190, 146, 0.14);
}
.mb27-hero-aura{
  position:absolute;
  inset:0;
  pointer-events:none;
  z-index:0;
  background:
    radial-gradient(ellipse 68% 58% at 50% 34%, rgba(148, 169, 201, 0.15), transparent 68%),
    radial-gradient(ellipse 46% 38% at 50% 56%, rgba(214, 190, 146, 0.08), transparent 72%);
}
.mb27-orbit{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  border-radius:50%;
  border:1px solid rgba(214, 190, 146, 0.11);
  pointer-events:none;
}
.mb27-orbit-1{width:min(82vw, 760px);height:min(82vw, 760px)}
.mb27-orbit-2{width:min(60vw, 520px);height:min(60vw, 520px);border-color:rgba(148, 169, 201, 0.12)}
.mb27-hero-inner{position:relative;z-index:2;text-align:center;max-width:960px}
.mb27-h1{
  font-family:var(--font-serif);
  font-weight:400;
  font-size:clamp(40px, 6.2vw, 82px);
  line-height:1.06;
  letter-spacing:-0.03em;
  color:#f6f2ea;
  margin:0 auto 22px;
  max-width:920px;
}
.mb27-lead{
  font-size:clamp(15.5px, 1.35vw, 19px);
  line-height:1.72;
  color:#b4bfd4;
  max-width:740px;
  margin:0 auto 34px;
}
.mb27-hero-actions{display:flex;justify-content:center;flex-wrap:wrap;gap:14px;margin-bottom:40px}
.mb27-telemetry{
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:10px 28px;
  font-size:11px;
  letter-spacing:0.14em;
  text-transform:uppercase;
  color:var(--dim);
}

.mb27-section{padding:clamp(54px, 6.5vw, 92px) 0}
.mb27-grid-4{
  display:grid;
  grid-template-columns:repeat(4, minmax(0, 1fr));
  gap:18px;
}
.mb27-card{
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  gap:22px;
  padding:28px 24px;
  border-radius:18px;
  border:1px solid rgba(214, 190, 146, 0.19);
  background:linear-gradient(160deg, rgba(15, 21, 34, 0.9), rgba(8, 11, 18, 0.98));
  transition:border-color .25s ease, transform .25s ease;
}
.mb27-card:hover{border-color:rgba(214, 190, 146, 0.48);transform:translateY(-2px)}
.mb27-card-tag{
  display:inline-block;
  font-size:10px;
  font-weight:700;
  letter-spacing:0.16em;
  text-transform:uppercase;
  color:var(--gold);
  margin-bottom:12px;
}
.mb27-card h3{
  font-family:var(--font-serif);
  font-weight:400;
  font-size:21px;
  line-height:1.28;
  color:#f5f1e8;
  margin:0 0 10px;
}
.mb27-card p{font-size:13.5px;line-height:1.72;color:var(--muted);margin:0}
.mb27-card-link{
  display:inline-flex;
  align-items:center;
  gap:8px;
  font-size:13px;
  font-weight:600;
  color:var(--gold-bright);
  padding-top:12px;
  border-top:1px solid rgba(214, 190, 146, 0.12);
}

/* Museum-Grade Interlude Quote Bands (Jung / Freud / Adler) */
.mb27-quote-band{
  padding:clamp(34px, 4.5vw, 56px) 0;
  border-top:1px solid rgba(214, 190, 146, 0.12);
  border-bottom:1px solid rgba(214, 190, 146, 0.12);
  background:radial-gradient(ellipse 65% 80% at 50% 50%, rgba(214, 190, 146, 0.055), transparent 75%);
}
.mb27-quote{max-width:1240px;margin:0 auto;text-align:center;padding:0 20px}
.mb27-quote p{
  font-family:var(--font-serif);
  font-style:italic;
  font-weight:400;
  font-size:clamp(18px, 1.8vw, 26px);
  line-height:1.5;
  color:#f0e6d2;
  margin:0 0 14px;
}
@media(min-width:1080px){
  .mb27-quote p{
    white-space:nowrap!important;
    font-size:clamp(17px, 1.6vw, 24px)!important;
  }
}
.mb27-quote cite{
  font-style:normal;
  font-size:11.5px;
  font-weight:700;
  letter-spacing:0.2em;
  text-transform:uppercase;
  color:var(--gold);
}

/* Live Cymatics Canvas + Curated Scene Cards */
.sanc-cymatics-band{
  display:grid;
  grid-template-columns:minmax(260px, 0.9fr) minmax(0, 1.1fr);
  gap:24px;
  align-items:center;
  padding-bottom:26px;
  margin-bottom:24px;
  border-bottom:1px solid rgba(214, 190, 146, 0.14);
}
.sanc-cymatics-wrap{
  position:relative;
  border-radius:16px;
  border:1px solid rgba(214, 190, 146, 0.18);
  background:radial-gradient(circle at 50% 50%, rgba(16, 23, 38, 0.92), rgba(8, 11, 18, 0.99));
  padding:14px;
  text-align:center;
}
.sanc-cymatics-canvas{display:block;width:100%;height:230px}
.sanc-cymatics-caption{
  display:block;
  margin-top:6px;
  font-size:10px;
  letter-spacing:0.16em;
  color:var(--dim);
}
.mb27-mini-player{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:16px;
  margin-top:10px;
  padding-top:12px;
  border-top:1px solid rgba(214, 190, 146, 0.12);
  text-align:left;
}
.sanc-scenes-grid{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:12px}
.sanc-scene-card{
  text-align:left;
  padding:20px 18px;
  border-radius:14px;
  border:1px solid rgba(214, 190, 146, 0.18);
  background:rgba(8, 11, 18, 0.72);
  color:var(--cream);
  cursor:pointer;
  display:flex;
  flex-direction:column;
  gap:8px;
  transition:border-color .22s, background .22s, transform .22s;
}
.sanc-scene-card strong{font-family:var(--font-serif);font-size:17px;font-weight:500;color:var(--gold-bright)}
.sanc-scene-card span{font-size:12px;line-height:1.6;color:var(--muted)}
.sanc-scene-card:hover{border-color:rgba(214, 190, 146, 0.5);transform:translateY(-2px)}
.sanc-scene-card.is-active{border-color:var(--gold);background:rgba(214, 190, 146, 0.14)}

/* Ethics Panel */
.mb27-ethics-panel{
  max-width:920px;
  margin:0 auto;
  text-align:center;
  padding:clamp(32px, 4.2vw, 54px);
  border-radius:22px;
  border:1px solid rgba(214, 190, 146, 0.22);
  background:linear-gradient(155deg, rgba(15, 21, 34, 0.9), rgba(8, 11, 18, 0.98));
}
.mb27-ethics-panel h2{font-family:var(--font-serif);font-weight:400;font-size:clamp(24px, 2.8vw, 38px);color:#f6f2ea;margin:0 0 14px}
.mb27-ethics-panel p{font-size:15px;line-height:1.78;color:var(--muted);max-width:720px;margin:0 auto 24px}

/* Educational Guides Hub & Article */
.guides-hub-grid{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:20px}
.guide-hub-card{
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  gap:22px;
  padding:clamp(26px, 3vw, 38px);
  border-radius:18px;
  border:1px solid rgba(214, 190, 146, 0.2);
  background:linear-gradient(155deg, rgba(15, 21, 34, 0.9), rgba(8, 11, 18, 0.98));
}
.guide-meta-row{display:flex;justify-content:space-between;gap:12px;font-size:10.5px;font-weight:700;letter-spacing:0.15em;color:var(--gold);margin-bottom:12px}
.guide-hub-card h2{font-family:var(--font-serif);font-weight:400;font-size:clamp(22px, 2.1vw, 28px);line-height:1.25;color:#f6f2ea;margin:0 0 12px}
.guide-hub-card p{font-size:14.5px;line-height:1.74;color:var(--muted);margin:0}

.guide-article-shell{
  max-width:860px;
  margin:0 auto;
  padding:clamp(28px, 4vw, 54px);
  border-radius:22px;
  border:1px solid rgba(214, 190, 146, 0.2);
  background:linear-gradient(160deg, rgba(15, 21, 34, 0.9), rgba(8, 11, 18, 0.98));
}
.guide-article-sec{margin-bottom:32px}
.guide-article-sec h2{font-family:var(--font-serif);font-weight:400;font-size:clamp(22px, 2.2vw, 30px);color:var(--gold-bright);margin:0 0 14px}
.guide-article-sec p{font-size:15.5px;line-height:1.82;color:#d6dce8;margin:0}
.guide-article-list{list-style:none;display:flex;flex-direction:column;gap:12px;padding:0;margin:0}
.guide-article-list li{
  padding:14px 16px;
  border-left:2px solid var(--gold);
  border-radius:0 12px 12px 0;
  background:rgba(8, 11, 18, 0.65);
  font-size:14.5px;
  line-height:1.75;
  color:#dce2ef;
}
.guide-article-foot{
  display:flex;
  flex-wrap:wrap;
  gap:14px;
  align-items:center;
  justify-content:space-between;
  padding-top:26px;
  border-top:1px solid rgba(214, 190, 146, 0.16);
}

@media(max-width:1080px){
  .mb27-grid-4{grid-template-columns:repeat(2, minmax(0, 1fr))}
  .sanc-cymatics-band{grid-template-columns:1fr}
}
@media(max-width:720px){
  .mb27-grid-4,.sanc-scenes-grid,.guides-hub-grid{grid-template-columns:1fr}
  .mb27-hero{min-height:auto;max-height:none}
}

/* =========================================================================
   REAL CINEMATIC PHOTOGRAPHY FRAMING — VIBRANT & FULL-BLEED 2027 HEROES
   ========================================================================= */
.mb27-hero{
  min-height:clamp(540px, 78svh, 760px)!important;
  max-height:780px!important;
  padding:clamp(70px, 8vh, 110px) 0 clamp(64px, 7vh, 96px)!important;
}
.mb27-hero-inner{max-width:1120px!important}
.mb27-h1{
  font-size:clamp(34px, 4.4vw, 64px)!important;
  line-height:1.1!important;
  max-width:1120px!important;
  text-shadow:0 4px 28px rgba(4, 7, 14, 0.78);
}
.mb27-lead{
  max-width:860px!important;
  color:#e4e9f2!important;
  text-shadow:0 2px 18px rgba(4, 7, 14, 0.78);
}
.mb27-telemetry{color:#cfd6e4!important;text-shadow:0 2px 12px rgba(4,7,14,.75)}
.mb27-hero-media{
  position:absolute;
  inset:0;
  z-index:0;
  overflow:hidden;
  pointer-events:none;
}
.mb27-hero-media img{
  width:100%;
  height:100%;
  object-fit:cover;
  object-position:center 60%;
  opacity:0.84;
  filter:saturate(1.22) contrast(1.08) brightness(0.96);
}
.mb27-hero-media::after{
  content:'';
  position:absolute;
  inset:0;
  background:
    linear-gradient(180deg, rgba(8, 11, 18, 0.52) 0%, rgba(8, 11, 18, 0.22) 45%, rgba(8, 11, 18, 0.42) 78%, #080b12 100%),
    radial-gradient(ellipse 70% 55% at 50% 42%, rgba(8, 11, 18, 0.34) 0%, rgba(8, 11, 18, 0.12) 68%, rgba(8, 11, 18, 0.55) 100%);
}

/* Full-Bleed Edge-to-Edge Seamless Inner Heroes (NO boxed rectangle!) */
main > section.astro-hero:not(.astro-section-viewport),
.sanc-hero,
.sanc-hero-fullbleed{
  position:relative!important;
  isolation:isolate!important;
  width:100%!important;
  min-height:clamp(340px, 44svh, 470px)!important;
  display:flex!important;
  align-items:center!important;
  padding:clamp(54px, 6.5vw, 88px) 0!important;
  border-bottom:1px solid rgba(214, 190, 146, 0.2)!important;
  background:radial-gradient(ellipse 80% 70% at 50% 20%, rgba(28, 40, 68, 0.55), #080b12 78%)!important;
  overflow:hidden!important;
}
main > section.astro-hero:not(.astro-section-viewport) > .astro-container,
.sanc-hero > .astro-container,
.sanc-hero-fullbleed > .astro-container{
  max-width:1120px!important;
  padding:0 24px!important;
  border:0!important;
  border-radius:0!important;
  background:none!important;
  box-shadow:none!important;
  overflow:visible!important;
}
main > section.astro-hero:not(.astro-section-viewport) > .astro-container::before,
.sanc-hero > .astro-container::before{
  display:none!important;
}
.sanc-hero-bg{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover;
  object-position:center 55%;
  opacity:0.78;
  filter:saturate(1.22) contrast(1.08) brightness(0.94);
  z-index:0;
  pointer-events:none;
}
.sanc-hero-fullbleed::after{
  content:'';
  position:absolute;
  inset:0;
  z-index:1;
  background:
    linear-gradient(180deg, rgba(8, 11, 18, 0.48) 0%, rgba(8, 11, 18, 0.24) 48%, rgba(8, 11, 18, 0.88) 100%),
    radial-gradient(ellipse 68% 60% at 50% 50%, rgba(8, 11, 18, 0.42) 0%, transparent 78%);
  pointer-events:none;
}
.sanc-hero-content{position:relative;z-index:2}
.sanc-hero .sanc-h1,
main > section.astro-hero:not(.astro-section-viewport) h1{
  font-size:clamp(32px, 4vw, 56px)!important;
  max-width:1080px!important;
  text-shadow:0 4px 26px rgba(4, 7, 14, 0.82);
}
.sanc-hero .sanc-lead,
main > section.astro-hero:not(.astro-section-viewport) .astro-hero-lead{
  max-width:1040px!important;
  color:#e4e9f2!important;
  text-shadow:0 2px 16px rgba(4, 7, 14, 0.82);
}
@media(min-width:1120px){
  .sanc-hero .sanc-lead,
  .mb27-lead{
    max-width:none!important;
    white-space:nowrap;
  }
}
.sanc-hero .sanc-eyebrow,
main > section.astro-hero:not(.astro-section-viewport) .astro-hero-eyebrow{
  background:rgba(8, 11, 18, 0.56)!important;
  backdrop-filter:blur(10px);
  border-color:rgba(234, 215, 178, 0.42)!important;
}

/* Vibrant, Crisp, Gallery-Bright Editorial Card Visuals */
.mb27-card-has-media{
  padding:0!important;
  gap:0!important;
  overflow:hidden;
}
.mb27-card-media{
  position:relative;
  aspect-ratio:16 / 10;
  overflow:hidden;
  background:#0a0e18;
  border-bottom:1px solid rgba(214, 190, 146, 0.16);
}
.mb27-card-media img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
  filter:saturate(1.2) contrast(1.07) brightness(1.04);
  transition:transform .55s cubic-bezier(.16,1,.3,1), filter .35s ease;
}
.mb27-card-media::after{
  content:'';
  position:absolute;
  inset:0;
  background:linear-gradient(180deg, transparent 58%, rgba(8, 11, 18, 0.38) 100%);
  pointer-events:none;
}
.mb27-card-has-media:hover .mb27-card-media img{
  transform:scale(1.05);
  filter:saturate(1.28) contrast(1.1) brightness(1.08);
}
.mb27-card-body{
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  gap:18px;
  flex:1;
  padding:22px 22px 24px;
}

/* Fix nav active highlight: Frequency Studio must NOT look active on other pages */
.astro-nav-frequency{
  color:var(--muted)!important;
  border-color:transparent!important;
  background:transparent!important;
}
.astro-nav-frequency:hover,
.astro-nav-frequency[aria-current="page"]{
  color:var(--gold-bright)!important;
}
.astro-nav-dropdown-btn.is-active{
  color:var(--gold-bright)!important;
  border-bottom:1px solid var(--gold)!important;
}

/* Ultra-Elite Magazine Layout for /rehber */
.guide-featured-card{
  display:grid;
  grid-template-columns:minmax(0, 1.15fr) minmax(0, 1fr);
  gap:0;
  margin-bottom:28px;
  border-radius:20px;
  border:1px solid rgba(214, 190, 146, 0.24);
  background:linear-gradient(155deg, rgba(16, 23, 38, 0.92), rgba(8, 11, 18, 0.98));
  overflow:hidden;
  transition:border-color .25s ease;
}
.guide-featured-card:hover{border-color:rgba(214, 190, 146, 0.52)}
.guide-featured-media{
  display:block;
  position:relative;
  min-height:310px;
  overflow:hidden;
  background:#0a0e18;
}
.guide-featured-media img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
  filter:saturate(1.2) contrast(1.07) brightness(1.02);
  transition:transform .6s cubic-bezier(.16,1,.3,1);
}
.guide-featured-card:hover .guide-featured-media img{transform:scale(1.04)}
.guide-featured-body{
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  gap:24px;
  padding:clamp(28px, 3.6vw, 46px);
}
.guide-featured-body h2{
  font-family:var(--font-serif);
  font-weight:400;
  font-size:clamp(26px, 2.5vw, 36px);
  line-height:1.2;
  color:#f6f2ea;
  margin:0 0 14px;
}
.guide-featured-body p{font-size:15px;line-height:1.78;color:#bcc6da;margin:0}
.guide-inline-cta{
  display:inline-flex;
  align-items:center;
  gap:10px;
  align-self:flex-start;
  padding-bottom:6px;
  border-bottom:1px solid rgba(214, 190, 146, 0.45);
  color:var(--gold-bright);
  font-size:13.5px;
  font-weight:600;
  letter-spacing:0.03em;
  transition:gap .22s ease, border-color .22s ease, color .22s ease;
}
.guide-inline-cta:hover{gap:14px;border-color:var(--gold-bright);color:#fff6e2}
.guide-hub-card h2 a:hover,.guide-featured-body h2 a:hover{color:var(--gold-bright)}

/* Contact Page 2027 Deep Night Indigo Refinement */
.astro-contact-page{padding-top:clamp(36px, 4.5vw, 58px)!important}
.astro-contact-card{
  background:linear-gradient(155deg, rgba(15, 21, 34, 0.92), rgba(8, 11, 18, 0.98))!important;
  border-color:rgba(214, 190, 146, 0.22)!important;
}
.astro-contact-card:hover{border-color:rgba(214, 190, 146, 0.52)!important}

@media(max-width:900px){
  .guide-featured-card{grid-template-columns:1fr}
  .guide-featured-media{min-height:220px}
}

/* Rich Carl Jung Monograph, 3-School Comparison & FAQ */
.jung-monograph-grid{
  display:grid;
  grid-template-columns:minmax(0, 1.3fr) minmax(280px, 0.9fr);
  gap:clamp(24px, 4vw, 52px);
  align-items:start;
}
.jung-monograph-copy h2{
  font-family:var(--font-serif);
  font-weight:400;
  font-size:clamp(26px, 2.8vw, 38px);
  line-height:1.18;
  color:#f6f2ea;
  margin:0 0 18px;
}
.jung-monograph-copy p{
  font-size:15.5px;
  line-height:1.82;
  color:#cbd3e3;
  margin:0 0 16px;
}
.jung-monograph-facts{
  padding:28px 26px;
  border-radius:18px;
  border:1px solid rgba(214, 190, 146, 0.22);
  background:linear-gradient(155deg, rgba(16, 23, 38, 0.9), rgba(8, 11, 18, 0.98));
  display:flex;
  flex-direction:column;
  gap:18px;
}
.jung-fact-row{padding-bottom:16px;border-bottom:1px solid rgba(214, 190, 146, 0.14)}
.jung-fact-row:last-child{padding-bottom:0;border-bottom:0}
.jung-fact-row strong{display:block;font-family:var(--font-serif);font-size:17px;font-weight:500;color:var(--gold-bright);margin-bottom:6px}
.jung-fact-row span{display:block;font-size:13.5px;line-height:1.68;color:var(--muted)}

.jung-compare-grid{display:grid;grid-template-columns:repeat(3, minmax(0, 1fr));gap:18px}
.jung-trio-title{display:inline-flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:0.35rem 0.65rem}
.jung-trio-name{white-space:nowrap}
.jung-trio-sep{color:var(--gold);opacity:0.45;font-weight:300}
@media(max-width:640px){
  .jung-trio-title{display:flex;flex-direction:column;gap:0.35rem}
  .jung-trio-sep{display:none!important}
}
.jung-compare-card{
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  gap:20px;
  padding:28px 24px;
  border-radius:18px;
  border:1px solid rgba(214, 190, 146, 0.2);
  background:linear-gradient(160deg, rgba(15, 21, 34, 0.9), rgba(8, 11, 18, 0.98));
}
.jung-compare-card h3{font-family:var(--font-serif);font-weight:400;font-size:24px;color:#f6f2ea;margin:0 0 16px}
.jung-compare-dl{margin:0;display:flex;flex-direction:column;gap:12px}
.jung-compare-dl dt{font-size:10.5px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:var(--gold);margin-bottom:3px}
.jung-compare-dl dd{margin:0;font-size:13.5px;line-height:1.68;color:#cdd5e5}
.jung-compare-quote{
  margin:0;
  padding-top:16px;
  border-top:1px solid rgba(214, 190, 146, 0.14);
  font-family:var(--font-serif);
  font-style:italic;
  font-size:clamp(10.5px, 0.82vw, 12.5px);
  line-height:1.5;
  color:var(--gold-bright);
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
@media(max-width:1024px){
  .jung-compare-quote{white-space:normal;overflow:visible;text-overflow:clip;font-size:12.5px}
}

.jung-faq-grid{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:16px;max-width:1080px;margin:0 auto}
.jung-faq-card{
  padding:24px 22px;
  border-radius:16px;
  border:1px solid rgba(214, 190, 146, 0.18);
  background:linear-gradient(160deg, rgba(15, 21, 34, 0.86), rgba(8, 11, 18, 0.97));
}
.jung-faq-card h3{font-family:var(--font-serif);font-weight:500;font-size:18px;color:var(--gold-bright);margin:0 0 10px}
.jung-faq-card p{font-size:13.5px;line-height:1.74;color:var(--muted);margin:0}

@media(max-width:1024px){
  .jung-monograph-grid,.jung-compare-grid{grid-template-columns:1fr}
}
@media(max-width:720px){
  .jung-faq-grid{grid-template-columns:1fr}
}

/* Single-line section H2s on desktop + 4x2 Unified Studio Frequency Grid */
.sanc-head{max-width:1140px!important}
@media(min-width:1080px){
  .sanc-head h2{
    white-space:nowrap;
    font-size:clamp(26px, 2.75vw, 39px)!important;
  }
  /* Subtitle paragraphs: single line on desktop */
  .sanc-head p{
    max-width:none;
    white-space:nowrap;
  }
}
.sanc-track-grid{
  display:grid;
  grid-template-columns:repeat(4, minmax(0, 1fr));
  gap:14px;
  margin-top:24px;
}
.sanc-track-hz{
  font-family:var(--font-serif);
  font-size:28px;
  font-weight:400;
  color:var(--gold-bright);
  line-height:1.1;
}
.sanc-track-hz small{
  font-family:var(--font-sans);
  font-size:12px;
  color:var(--muted);
}
@media(max-width:1024px){.sanc-track-grid{grid-template-columns:repeat(2, minmax(0, 1fr))}}
@media(max-width:600px){.sanc-track-grid{grid-template-columns:1fr}}

/* =========================================================================
   2027 ULTRA-ELITE MOBILE EXPERIENCE, SINGLE LANGUAGE SELECTOR & BOOK LIST
   ========================================================================= */
.mb-nowrap{white-space:nowrap}
h1,h2,h3,.sanc-lead,.mb27-lead{text-wrap:balance}

.jung-book-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:14px}
.jung-book-list li{padding-top:12px;border-top:1px solid rgba(214,190,146,.12)}
.jung-book-list li:first-child{padding-top:0;border-top:0}
.jung-book-list strong{display:block;font-family:var(--font-serif);font-size:16px;font-weight:500;color:var(--gold-bright);margin-bottom:5px}
.jung-book-list span{display:block;font-size:13px;line-height:1.68;color:var(--muted)}

/* Ultra-Elite Mobile Header & Velvet Glass Drawer */
.astro-menu-btn{
  width:44px!important;
  height:44px!important;
  border-radius:12px!important;
  border:1px solid rgba(214,190,146,.28)!important;
  background:rgba(15,21,34,.72)!important;
  color:var(--gold-bright)!important;
  display:none;
  align-items:center;
  justify-content:center;
  cursor:pointer;
}
.astro-drawer-panel{
  background:linear-gradient(175deg, rgba(14,20,34,.98) 0%, rgba(8,11,18,.99) 100%)!important;
  backdrop-filter:blur(28px)!important;
  -webkit-backdrop-filter:blur(28px)!important;
  border-left:1px solid rgba(214,190,146,.22)!important;
  padding:22px 20px max(24px, env(safe-area-inset-bottom))!important;
  width:min(86vw, 350px)!important;
}
.astro-drawer-head{
  padding-bottom:18px!important;
  margin-bottom:16px!important;
  border-bottom:1px solid rgba(214,190,146,.16)!important;
}
.mb-drawer-close{
  width:38px;
  height:38px;
  border-radius:10px;
  border:1px solid rgba(214,190,146,.26);
  background:rgba(214,190,146,.07);
  color:var(--gold-bright);
  font-size:15px;
  display:grid;
  place-items:center;
  cursor:pointer;
}
.astro-drawer-links{
  display:flex!important;
  flex-direction:column!important;
  gap:4px!important;
  overflow-y:auto;
}
.astro-drawer-links a{
  min-height:46px!important;
  padding:11px 14px!important;
  border-radius:12px!important;
  font-size:14.5px!important;
  letter-spacing:.02em!important;
  border:1px solid transparent!important;
  color:#dce2ef!important;
  display:flex!important;
  align-items:center!important;
  justify-content:space-between!important;
  transition:background .2s, border-color .2s, color .2s;
}
.astro-drawer-links a[aria-current="page"],
.astro-drawer-links a:hover{
  background:rgba(214,190,146,.12)!important;
  border-color:rgba(214,190,146,.28)!important;
  color:var(--gold-bright)!important;
}
.mb-drawer-footer{
  margin-top:auto;
  padding-top:18px;
  border-top:1px solid rgba(214,190,146,.16);
  display:flex;
  flex-direction:column;
  gap:14px;
}
.mb-drawer-lang-bar{
  display:grid;
  grid-template-columns:repeat(5, minmax(0, 1fr));
  gap:6px;
}
.mb-drawer-lang-pill{
  display:grid;
  place-items:center;
  min-height:38px;
  border-radius:9px;
  font-size:11px;
  font-weight:700;
  letter-spacing:.08em;
  border:1px solid rgba(214,190,146,.2);
  background:rgba(255,255,255,.03);
  color:var(--muted);
  text-decoration:none;
}
.mb-drawer-lang-pill.is-active{
  border-color:var(--gold);
  background:rgba(214,190,146,.18);
  color:var(--gold-bright);
}

@media(max-width:1180px){
  /* Single language selector on mobile: hide header dropdown, keep clean 5-pill bar in drawer */
  .astro-header-actions .astro-lang-select{display:none!important}
  .astro-menu-btn{display:inline-flex!important}
}

@media(max-width:760px){
  .astro-container{padding-left:18px!important;padding-right:18px!important}
  .astro-header-inner{height:66px!important}
  .mb27-hero{min-height:auto!important;padding:54px 0 48px!important}
  .mb27-h1{font-size:clamp(30px, 8.2vw, 42px)!important;line-height:1.12!important;margin-bottom:16px!important}
  .mb27-lead{font-size:15px!important;line-height:1.68!important;margin-bottom:24px!important}
  .mb27-hero-actions{flex-direction:column;align-items:stretch;gap:10px;margin-bottom:24px}
  .mb27-hero-actions a{width:100%;justify-content:center}
  .mb27-telemetry{gap:8px 16px;font-size:10px}
  .mb27-section,.sanc-section{padding:38px 0!important}
  .sanc-hero,.sanc-hero-fullbleed{min-height:280px!important;padding:46px 0!important}
  .sanc-hero .sanc-h1{font-size:clamp(28px, 7.6vw, 38px)!important;line-height:1.14!important}
  .sanc-hero .sanc-lead{font-size:14.5px!important;line-height:1.68!important}
  .sanc-head h2{font-size:clamp(23px, 6.4vw, 30px)!important;line-height:1.22!important;white-space:normal!important}
  .sanc-head p{white-space:normal!important;max-width:600px!important}
  .sanc-tabs{display:grid!important;grid-template-columns:repeat(2, minmax(0, 1fr))!important;gap:8px!important}
  .sanc-tab{padding:11px 10px!important;font-size:12.5px!important;text-align:center}
  .sanc-mixer,.sanc-room-card,.jung-dossier,.jung-sync-shell{padding:20px 16px!important;border-radius:16px!important}
  .sanc-cymatics-canvas{height:175px!important}
  .sanc-play-btn{width:56px!important;height:56px!important;flex-basis:56px!important}
  .sanc-timer-readout{font-size:24px!important}
  .mb27-quote p{font-size:18px!important;line-height:1.55!important}
}

/* ==========================================================================
   2027 ULTRA-ELITE EDITORIAL GUIDES & LEGAL MONOGRAPH SYSTEM
   ========================================================================== */
.sanc-hero-compact{
  min-height:240px!important;
  padding:clamp(44px, 5.5vw, 68px) 0!important;
  background:radial-gradient(ellipse at 50% 0%, rgba(212, 175, 55, 0.11), transparent 65%), #080b12;
  border-bottom:1px solid rgba(214, 190, 146, 0.14);
}
.sanc-meta-strip{
  display:inline-flex;
  align-items:center;
  gap:10px;
  margin-top:18px;
  padding:7px 16px;
  border-radius:999px;
  border:1px solid rgba(214, 190, 146, 0.24);
  background:rgba(12, 16, 28, 0.7);
  font-size:11.5px;
  letter-spacing:0.1em;
  text-transform:uppercase;
  color:var(--gold-bright);
}

.guides-hero-telemetry{
  display:inline-flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  gap:10px 14px;
  margin-top:22px;
  padding:9px 20px;
  border-radius:999px;
  border:1px solid rgba(214, 190, 146, 0.28);
  background:rgba(8, 12, 22, 0.72);
  backdrop-filter:blur(12px);
  -webkit-backdrop-filter:blur(12px);
  font-size:11.5px;
  font-weight:600;
  letter-spacing:0.1em;
  text-transform:uppercase;
  color:#e9d6ae;
}
.guides-tel-dot{color:rgba(214, 190, 146, 0.5)}

.guides-toolbar{
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  gap:20px;
  flex-wrap:wrap;
  margin-bottom:32px;
  padding-bottom:22px;
  border-bottom:1px solid rgba(214, 190, 146, 0.14);
}
.guides-section-h2{
  font-family:var(--font-serif);
  font-weight:400;
  font-size:clamp(24px, 2.6vw, 34px);
  line-height:1.18;
  color:#f6f2ea;
  margin:8px 0 0;
}
.guides-filter-bar{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
.guides-filter-pill{
  appearance:none;
  padding:9px 16px;
  border-radius:999px;
  border:1px solid rgba(214, 190, 146, 0.22);
  background:rgba(14, 19, 32, 0.72);
  color:#c2cadc;
  font-size:12.5px;
  font-weight:600;
  letter-spacing:0.03em;
  cursor:pointer;
  transition:all .22s ease;
}
.guides-filter-pill:hover{
  border-color:rgba(214, 190, 146, 0.55);
  color:#fff6e2;
}
.guides-filter-pill.is-active{
  background:linear-gradient(135deg, rgba(214, 190, 146, 0.24), rgba(14, 19, 32, 0.92));
  border-color:var(--gold-bright);
  color:var(--gold-bright);
  box-shadow:0 6px 20px rgba(0, 0, 0, 0.35), 0 0 18px rgba(212, 175, 55, 0.14);
}

.guide-elite-featured{
  position:relative;
  background:linear-gradient(150deg, rgba(17, 24, 40, 0.95), rgba(8, 11, 20, 0.99))!important;
  border:1px solid rgba(214, 190, 146, 0.26)!important;
  border-radius:22px!important;
  box-shadow:0 28px 75px -12px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  margin-bottom:32px;
  overflow:hidden;
  transition:all .35s cubic-bezier(.16,1,.3,1);
}
.guide-elite-featured:hover{
  border-color:rgba(214, 190, 146, 0.52)!important;
  box-shadow:0 36px 90px -10px rgba(0, 0, 0, 0.8), 0 0 35px rgba(214, 190, 146, 0.12)!important;
  transform:translateY(-3px);
}
.guide-featured-media{
  position:relative;
  min-height:330px;
  overflow:hidden;
  background:#090d18;
}
.guide-featured-media::after{
  content:'';
  position:absolute;
  inset:0;
  pointer-events:none;
  background:linear-gradient(90deg, transparent 72%, rgba(9, 12, 22, 0.92) 100%),
             radial-gradient(ellipse at 50% 50%, transparent 60%, rgba(0,0,0,0.35) 100%);
}
.guide-featured-kicker{
  color:var(--gold-bright)!important;
  font-weight:700;
  letter-spacing:0.14em;
  text-transform:uppercase;
  font-size:11px;
}
.guide-read-pill{
  padding:4px 12px;
  border-radius:999px;
  border:1px solid rgba(214, 190, 146, 0.24);
  background:rgba(214, 190, 146, 0.08);
  color:#e4d8be;
  font-size:11.5px;
  letter-spacing:0.04em;
  white-space:nowrap;
  backdrop-filter:blur(6px);
  -webkit-backdrop-filter:blur(6px);
}
.guide-gold-rule{
  width:54px;
  height:1px;
  background:linear-gradient(90deg, var(--gold-bright), transparent);
  margin:16px 0 18px;
}
.guide-featured-actions{
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  gap:18px 24px;
}

.guides-elite-grid{
  display:grid;
  grid-template-columns:repeat(2, minmax(0, 1fr));
  gap:26px;
}
.guide-elite-card{
  display:flex;
  flex-direction:column;
  background:linear-gradient(160deg, rgba(16, 22, 38, 0.94), rgba(8, 11, 20, 0.99))!important;
  border:1px solid rgba(214, 190, 146, 0.2)!important;
  border-radius:20px!important;
  overflow:hidden;
  box-shadow:0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition:all .35s cubic-bezier(.16,1,.3,1);
}
.guide-elite-card:hover{
  transform:translateY(-6px);
  border-color:rgba(214, 190, 146, 0.52)!important;
  box-shadow:0 30px 75px rgba(0, 0, 0, 0.7), 0 0 30px rgba(214, 190, 146, 0.12)!important;
}
.guide-elite-card .mb27-card-media{
  position:relative;
  display:block;
  aspect-ratio:16/9.8;
  overflow:hidden;
  background:#090d18;
}
.guide-elite-card .mb27-card-media::after{
  content:'';
  position:absolute;
  inset:0;
  pointer-events:none;
  background:linear-gradient(180deg, transparent 55%, rgba(8, 11, 20, 0.94) 100%),
             radial-gradient(ellipse at 50% 50%, transparent 65%, rgba(0,0,0,0.35) 100%);
}
.guide-elite-card .mb27-card-media img{
  width:100%;
  height:100%;
  object-fit:cover;
  filter:saturate(1.15) contrast(1.06);
  transition:transform .7s cubic-bezier(.16,1,.3,1);
}
.guide-elite-card:hover .mb27-card-media img{transform:scale(1.055)}
.guide-elite-card .mb27-card-body{
  padding:26px 26px 28px!important;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  flex:1;
  gap:16px;
}
.guide-elite-card h3{
  font-family:var(--font-serif);
  font-weight:400;
  font-size:clamp(20px, 1.7vw, 24px);
  line-height:1.28;
  color:#f6f2ea;
  margin:10px 0 12px;
}
.guide-elite-card h3 a{color:inherit;text-decoration:none;transition:color .2s}
.guide-elite-card h3 a:hover{color:var(--gold-bright)}
.guide-elite-card p{
  font-size:14px;
  line-height:1.72;
  color:#a9b5cc;
  margin:0 0 16px;
  display:-webkit-box;
  -webkit-line-clamp:3;
  -webkit-box-orient:vertical;
  overflow:hidden;
}

/* 3-Step Curated Reading Path */
.guides-path-section{
  border-top:1px solid rgba(214, 190, 146, 0.12);
  background:radial-gradient(ellipse at 50% 0%, rgba(212, 175, 55, 0.06), transparent 60%);
}
.guides-path-grid{
  display:grid;
  grid-template-columns:repeat(3, minmax(0, 1fr));
  gap:24px;
  margin-top:36px;
}
.guides-path-card{
  position:relative;
  padding:32px 28px;
  border-radius:20px;
  background:linear-gradient(155deg, rgba(16, 23, 38, 0.94), rgba(9, 12, 22, 0.99));
  border:1px solid rgba(214, 190, 146, 0.22);
  box-shadow:0 18px 48px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  gap:12px;
  transition:all .32s cubic-bezier(.16,1,.3,1);
}
.guides-path-card:hover{
  border-color:rgba(214, 190, 146, 0.55);
  transform:translateY(-5px);
  box-shadow:0 28px 70px rgba(0, 0, 0, 0.7), 0 0 25px rgba(214, 190, 146, 0.1);
}
.guides-path-tag{
  font-size:11px;
  font-weight:700;
  letter-spacing:0.18em;
  color:var(--gold-bright);
  text-transform:uppercase;
  margin-bottom:2px;
}
.guides-path-card h3{
  font-family:var(--font-serif);
  font-weight:400;
  font-size:22px;
  line-height:1.24;
  color:#f6f2ea;
  margin:0;
}
.guides-path-card p{
  font-size:14px;
  line-height:1.72;
  color:#a9b5cc;
  margin:0 0 16px;
  flex:1;
}
.guides-path-link{
  display:inline-flex;
  align-items:center;
  gap:8px;
  color:var(--gold-bright);
  font-size:13.5px;
  font-weight:600;
  letter-spacing:0.04em;
  text-decoration:none;
  padding-bottom:4px;
  border-bottom:1px solid rgba(214, 190, 146, 0.35);
  align-self:flex-start;
  transition:all .22s ease;
}
.guides-path-link:hover{
  color:#fff6e2;
  border-color:var(--gold-bright);
  gap:12px;
}
  line-height:1.7;
  color:#b8c2d6;
  margin:0 0 12px;
  flex:1;
}

/* Guides FAQ Accordion */
.guides-faq-list{
  max-width:860px;
  margin:28px auto 0;
  display:grid;
  gap:12px;
}
.guides-faq-item{
  border-radius:14px;
  background:rgba(13, 18, 32, 0.85);
  border:1px solid rgba(214, 190, 146, 0.18);
  padding:0 22px;
  transition:border-color .22s ease, background .22s ease;
}
.guides-faq-item[open]{
  border-color:rgba(214, 190, 146, 0.45);
  background:rgba(17, 23, 40, 0.95);
}
.guides-faq-item summary{
  list-style:none;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
  padding:18px 0;
  font-family:var(--font-serif);
  font-size:17px;
  color:#f5efe3;
}
.guides-faq-item summary::-webkit-details-marker{display:none}
.guides-faq-plus{
  color:var(--gold-bright);
  font-size:20px;
  line-height:1;
  transition:transform .22s ease;
}
.guides-faq-item[open] .guides-faq-plus{transform:rotate(45deg)}
.guides-faq-item p{
  margin:0 0 18px;
  font-size:14.5px;
  line-height:1.75;
  color:#bcc6da;
}

/* Article Reading Progress Bar, Breadcrumb, Numbered Sections & Related */
.guide-read-progress-track{
  position:fixed;
  top:0;
  left:0;
  right:0;
  height:3px;
  background:rgba(255, 255, 255, 0.04);
  z-index:1001;
  pointer-events:none;
}
.guide-read-progress-bar{
  height:100%;
  width:0;
  background:linear-gradient(90deg, #b8913a, #f3cf7a);
  box-shadow:0 0 12px rgba(243, 207, 122, 0.65);
  transition:width 0.08s linear;
}
.guide-breadcrumb{
  display:inline-flex;
  align-items:center;
  gap:8px;
  font-size:12px;
  color:#a8b2c7;
  margin-bottom:14px;
}
.guide-breadcrumb a{color:#d8c193;text-decoration:none}
.guide-breadcrumb a:hover{color:#fff3d4}
.guide-article-elite{
  max-width:860px;
  margin:0 auto;
}
.guide-sec-num{
  display:inline-block;
  font-family:var(--font-serif);
  font-size:11.5px;
  letter-spacing:0.18em;
  color:var(--gold-bright);
  margin-bottom:6px;
}
.guides-related-wrap{
  margin-top:52px;
  padding-top:40px;
  border-top:1px solid rgba(214, 190, 146, 0.14);
}
.guides-related-head{
  margin-bottom:24px;
}
.guides-related-head h2{
  font-family:var(--font-serif);
  font-weight:400;
  font-size:clamp(22px, 2.4vw, 30px);
  color:#f6f2ea;
  margin:8px 0 0;
}

@media(max-width:900px){
  .guides-elite-grid,.guides-path-grid{grid-template-columns:1fr}
  .guides-toolbar{align-items:flex-start}
}
@media(max-width:640px){
  .guides-filter-pill{padding:8px 13px;font-size:12px}
  .guide-featured-actions{flex-direction:column;align-items:stretch}
  .guide-featured-actions .sanc-btn-gold{justify-content:center}
}

`;
