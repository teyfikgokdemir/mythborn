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
  ['ar', '/ar', '/ar/ebced', 'اكتشف القيم']
];

for (const [locale, pathname, ebcedUrl, heading] of languages) {
  assert.equal(getRouteHref(locale, 'ebced'), ebcedUrl, `${locale} ebced URL`);
  const liveHome = renderHomeView({ locale, isPreview: false });
  assert.match(liveHome,/id="frequency-studio"/,`${locale} production must show studio`);
  const previewHome = renderHomeView({ locale, isPreview: true });
  assert.match(previewHome,/id="frequency-studio"/,`${locale} preview should show frequency promo`);
  const desktopPreview=renderAstrologyLayout({locale,isPreview:true,contentHtml:previewHome});
  assert.doesNotMatch(desktopPreview,/<a class="astro-cta-gold"[^>]*>/,`${locale} header CTA should not duplicate home hero`);
  assert.ok(desktopPreview.includes(getRouteHref(locale, 'sanctuary')), `${locale} unified meditation-frequency nav link`);
  const desktopProd=renderAstrologyLayout({locale,isPreview:false,contentHtml:liveHome});
  assert.ok(desktopProd.includes(getRouteHref(locale, 'sanctuary')), `${locale} production nav must show unified studio link`);
  const home = renderHomeView({ locale });
  assert.ok(home.includes(`href="${ebcedUrl}"`), `${locale} homepage links to ebced tool`);
  assert.ok(home.includes('data-cymatics-canvas'), `${locale} homepage includes live cymatics canvas`);
  assert.ok(home.includes('Carl Gustav Jung'), `${locale} homepage includes Carl Jung quote`);
  assert.ok(home.includes('Sigmund Freud'), `${locale} homepage includes Sigmund Freud quote`);
  assert.ok(home.includes('Alfred Adler'), `${locale} homepage includes Alfred Adler quote`);

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
  }
  const response = handleAstrologyRequest(
    new Request(`https://mythborn.co${pathname}`),
    { ENVIRONMENT: 'preview' }
  );
  assert.equal(response.status, 200, `${locale} homepage returns 200`);
  assert.equal(response.headers.get('x-robots-tag'), 'noindex, nofollow');
  assert.ok((await response.text()).includes('mb27-home'), `${locale} response contains 2027 homepage`);
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
