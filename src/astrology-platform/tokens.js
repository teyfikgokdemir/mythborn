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
  max-width: 1060px;
  margin: 28px auto 0;
  padding: 28px 30px;
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
.seo-answer-block p,
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
  .astro-ebced-orbit { animation: none !important; }
}
`;
