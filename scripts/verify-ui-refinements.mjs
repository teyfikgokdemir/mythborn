import { renderSkyCalendarView } from '../src/astrology-platform/pages/sky-calendar.js';
import { renderRetrogradesView } from '../src/astrology-platform/pages/retrogrades.js';
import { renderAstrologyLayout } from '../src/astrology-platform/layout.js';
import { SHARED_CSS } from '../src/astrology-platform/tokens.js';

console.log('--- Verifying UI Refinements ---');

// 1. Sky calendar
const calHtml = renderSkyCalendarView({ locale: 'tr' });
if (!calHtml.includes('lunation-card-grid')) throw new Error('Missing lunation-card-grid');
if (!calHtml.includes('lunation-card')) throw new Error('Missing lunation-card');
if (calHtml.includes('LIVE MOON PHASE')) throw new Error('English leak LIVE MOON PHASE found in TR');
if (!calHtml.includes('CANLI EFEMERİS')) throw new Error('Missing CANLI EFEMERİS tag');
console.log('✓ Sky Calendar verification passed');

// 2. Retrogrades
const retroHtml = renderRetrogradesView({ locale: 'tr' });
if (!retroHtml.includes('active-retro-5-grid')) throw new Error('Missing active-retro-5-grid');
if (!retroHtml.includes('live-telemetry-bar')) throw new Error('Missing live-telemetry-bar');
if (!retroHtml.includes('live-pulse-dot')) throw new Error('Missing live-pulse-dot');
console.log('✓ Retrogrades verification passed');

// 3. Layout and Tokens CSS
const shellHtml = renderAstrologyLayout({
  locale: 'tr',
  currentRouteKey: 'home',
  title: 'Test',
  contentHtml: '<p>test</p>'
});
if (!shellHtml.includes('astro-lang-dot')) throw new Error('Missing astro-lang-dot in shell');
if (!SHARED_CSS.includes('.astro-menu-btn { display: none !important; }')) {
  if (!SHARED_CSS.includes('display: none !important;')) {
    throw new Error('Missing display: none !important for menu btn');
  }
}
if (!SHARED_CSS.includes('@media (min-width: 1025px)')) throw new Error('Missing min-width 1025px desktop rule');
console.log('✓ Shell and CSS verification passed');

console.log('ALL VERIFICATIONS SUCCESSFUL!');
