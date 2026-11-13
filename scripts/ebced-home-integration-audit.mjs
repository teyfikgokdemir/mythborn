import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { renderAstrologyLayout, getRouteHref } from '../src/astrology-platform/layout.js';
import { renderHomeView } from '../src/astrology-platform/pages/home.js';
import { handleAstrologyRequest } from '../src/astrology-platform/router.js';

const languages = [
  ['tr', '/', '/ebced', 'İsminin ardındaki'],
  ['en', '/en', '/en/ebced', 'Discover the numbers'],
  ['el', '/gr', '/gr/ebced', 'Ανακάλυψε'],
  ['es', '/es', '/es/ebced', 'Descubre los números'],
  ['ar', '/ar', '/ebced', 'اكتشف القيم']
];

for (const [locale, pathname, ebcedUrl, heading] of languages) {
  assert.equal(getRouteHref(locale, 'ebced'), ebcedUrl, `${locale} ebced URL`);
  const home = renderHomeView({ locale });
  assert.equal((home.match(/id="astro-ebced-title"/g) || []).length, 1, `${locale} feature appears once`);
  assert.equal((home.match(/astro-ebced-feature-inner/g) || []).length, 1, `${locale} feature is single panel`);
  assert.ok(home.includes(heading), `${locale} feature is translated`);
  assert.ok(home.includes('astro-ebced-photo-frame'), `${locale} authentic imagery is present`);
  assert.ok(home.includes('/images/Mythborn_03_Usturlap_ve_Kadim_Kitap.webp'), `${locale} first-party image is used`);
  assert.ok(home.includes('figcaption'), `${locale} image source is identified`);
  assert.ok(home.includes(`href="${ebcedUrl}"`), `${locale} feature links to tool`);
  assert.ok(home.indexOf('<!-- 1. Hero:') < home.indexOf('astro-ebced-feature'), `${locale} feature follows hero`);
  assert.ok(home.indexOf('astro-ebced-feature') < home.indexOf('<!-- 3. Kozmik Büyük Üçlü'), `${locale} feature precedes triad`);

  const layout = renderAstrologyLayout({
    locale, currentRouteKey: 'home', contentHtml: home, isPreview: true
  });
  assert.ok(layout.includes('astro-lang-select'), `${locale} compact language selector`);
  assert.equal((layout.match(/class="astro-lang-select"/g) || []).length, 1, `${locale} single header dropdown`);
  assert.ok(layout.includes(`href="${ebcedUrl}"`), `${locale} desktop/mobile Ebced nav`);
  assert.ok(layout.includes('data-drawer-open'), `${locale} mobile navigation remains`);
  assert.ok(layout.includes('content="noindex, nofollow"'), 'preview robots preserved');
  if (locale === 'ar') {
    assert.ok(layout.includes('dir="rtl"'), 'Arabic remains RTL');
    assert.ok(home.includes('بالتركية'), 'Arabic tool fallback is disclosed');
  }
  const response = handleAstrologyRequest(
    new Request(`https://mythborn.co${pathname}`),
    { ENVIRONMENT: 'preview' }
  );
  assert.equal(response.status, 200, `${locale} homepage returns 200`);
  assert.equal(response.headers.get('x-robots-tag'), 'noindex, nofollow');
  assert.ok((await response.text()).includes('astro-ebced-feature'), `${locale} response contains feature`);
}
const css = readFileSync(new URL('../src/astrology-platform/tokens.js', import.meta.url), 'utf8');
assert.match(css, /\.astro-ebced-feature-inner\s*\{/);
assert.match(css,/\.astro-ebced-photo-frame/);
assert.match(css,/\.astro-ebced-photo/);
assert.match(css,/immersive Ebced direction/);
assert.match(css,/\.astro-ebced-feature \.astro-ebced-photo-frame\{position:absolute!important/);
assert.match(css,/\.astro-ebced-feature \.astro-ebced-feature-copy\{position:relative/);
assert.match(css, /\.astro-lang-options\s*\{/);
assert.match(css, /prefers-reduced-motion:\s*reduce/);
assert.match(css, /max-width:\s*1180px/);
console.log('Ebced homepage feature and language-switcher integration passed for 5 locales.');
