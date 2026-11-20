import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import app from '../src/app-router.js';

const env = {
  ENVIRONMENT: 'production',
  ASTROLOGY_PLATFORM_ENABLED: 'true',
  COMING_SOON_ENABLED: 'false',
  ASSETS: { fetch: () => new Response('', { status: 404 }) }
};

// 1. Verify /sanctuary across all 5 locales
const sanctuaryRoutes = [
  ['/siginak', 'tr'],
  ['/en/sanctuary', 'en'],
  ['/gr/katafygio', 'el'],
  ['/es/santuario', 'es'],
  ['/ar/al-maladh', 'ar']
];
for (const [path, lang] of sanctuaryRoutes) {
  const res = await app.fetch(new Request(`https://mythborn.co${path}`), env, {});
  assert.equal(res.status, 200, `${path} must return 200`);
  const html = await res.text();
  assert(html.includes(`lang="${lang}"`), `${path} lang parity`);
  assert(html.includes('data-sanctuary-app'), `${path} must mount sanctuary app`);
  assert(html.includes('/sanctuary-audio.js'), `${path} must include sanctuary-audio.js`);
  assert(html.includes('"@type":"FAQPage"'), `${path} must include FAQPage schema`);
  assert(!/\bundefined\b/i.test(html), `${path} must not contain undefined`);
}

// 2. Verify /jung across all 5 locales
const jungRoutes = [
  ['/jung', 'tr'],
  ['/en/jung', 'en'],
  ['/gr/jung', 'el'],
  ['/es/jung', 'es'],
  ['/ar/jung', 'ar']
];
for (const [path, lang] of jungRoutes) {
  const res = await app.fetch(new Request(`https://mythborn.co${path}`), env, {});
  assert.equal(res.status, 200, `${path} must return 200`);
  const html = await res.text();
  assert(html.includes(`lang="${lang}"`), `${path} lang parity`);
  assert(html.includes('data-jung-app'), `${path} must mount jung mirror`);
  assert(html.includes('data-sync-form'), `${path} must include local synchronicity journal`);
  assert(html.includes('"@type":"FAQPage"'), `${path} must include FAQPage schema`);
  assert(!/\bundefined\b/i.test(html), `${path} must not contain undefined`);
}

// 3. Verify 301 redirects for consolidated filler pages & aliases
const redirects = [
  ['/retrolar', 'https://mythborn.co/gokyuzu-takvimi'],
  ['/en/retrogrades', 'https://mythborn.co/en/sky-calendar'],
  ['/transitler', 'https://mythborn.co/gokyuzu-takvimi'],
  ['/en/transits', 'https://mythborn.co/en/sky-calendar'],
  ['/burc-yorumlari', 'https://mythborn.co/burclar'],
  ['/en/horoscopes', 'https://mythborn.co/en/zodiac-signs'],
  ['/astroloji-sozlugu', 'https://mythborn.co/yaklasim'],
  ['/en/astrology-glossary', 'https://mythborn.co/en/approach'],
  ['/ogrenme-merkezi', 'https://mythborn.co/jung'],
  ['/en/learning-center', 'https://mythborn.co/en/jung'],
  ['/meditasyon', 'https://mythborn.co/siginak'],
  ['/en/meditation', 'https://mythborn.co/en/sanctuary'],
  ['/carl-jung', 'https://mythborn.co/jung']
];
for (const [from, expectedLocation] of redirects) {
  const res = await app.fetch(new Request(`https://mythborn.co${from}`), env, {});
  assert.equal(res.status, 301, `${from} must 301 redirect`);
  assert.equal(res.headers.get('location'), expectedLocation, `${from} redirect target`);
}

// 4. Sitemap includes new flagship routes and excludes 301-redirected routes
const smRes = await app.fetch(new Request('https://mythborn.co/sitemap.xml'), env, {});
assert.equal(smRes.status, 200);
const sm = await smRes.text();
assert(sm.includes('https://mythborn.co/siginak'), 'sitemap must include /siginak');
assert(sm.includes('https://mythborn.co/en/sanctuary'), 'sitemap must include /en/sanctuary');
assert(sm.includes('https://mythborn.co/jung'), 'sitemap must include /jung');
assert(!sm.includes('https://mythborn.co/retrolar'), 'sitemap must not include 301 /retrolar');
assert(!sm.includes('https://mythborn.co/burc-yorumlari'), 'sitemap must not include 301 /burc-yorumlari');

// 5. Verify fixed ebced.js dictionary entries
const ebcedSrc = readFileSync(new URL('../public/ebced.js', import.meta.url), 'utf8');
assert(ebcedSrc.includes("'murat': 'مراد'"), 'ebced murat typo must be fixed');
assert(ebcedSrc.includes("'güneş': 'گونش'"), 'ebced güneş typo must be fixed');
assert(!ebcedSrc.includes("'zeynep:':"), 'ebced stray zeynep: key must be removed');
assert(!ebcedSrc.includes('Kişisel Yıl (2026)'), 'ebced personal year must be dynamic');

// 6. Verify sanctuary-audio.js syntax & safety
const audioSrc = readFileSync(new URL('../public/sanctuary-audio.js', import.meta.url), 'utf8');
new vm.Script(audioSrc, { filename: 'public/sanctuary-audio.js' });
assert(!/\.getUserMedia\(/.test(audioSrc), 'no microphone access');
assert(!/autoplay/i.test(audioSrc), 'no autoplay');

console.log('sanctuary-jung-audit: 5-locale sanctuary & jung pages, 13x 301 redirects, sitemap, ebced fixes, and sanctuary-audio.js PASS');
