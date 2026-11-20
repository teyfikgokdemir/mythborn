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

// 1. Verify unified Meditation & Frequency Studio across all 5 locales
const sanctuaryRoutes = [
  ['/meditasyon-ve-frekans', 'tr'],
  ['/en/meditation-and-frequencies', 'en'],
  ['/gr/dialogismos-kai-sychnotites', 'el'],
  ['/es/meditacion-y-frecuencias', 'es'],
  ['/ar/altaamul-waltaraddudat', 'ar']
];
for (const [path, lang] of sanctuaryRoutes) {
  const res = await app.fetch(new Request(`https://mythborn.co${path}`), env, {});
  assert.equal(res.status, 200, `${path} must return 200`);
  const html = await res.text();
  assert(html.includes(`lang="${lang}"`), `${path} lang parity`);
  assert(html.includes('data-sanctuary-app'), `${path} must mount sanctuary app`);
  assert(html.includes('track:432hz'), `${path} must expose real 432hz studio track`);
  assert(html.includes('track:alpha-10hz'), `${path} must expose real alpha-10hz studio track`);
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

// 3. Verify 301 redirects for consolidated pages & legacy aliases
const redirects = [
  ['/siginak', 'https://mythborn.co/meditasyon-ve-frekans'],
  ['/en/sanctuary', 'https://mythborn.co/en/meditation-and-frequencies'],
  ['/frekans-studyo', 'https://mythborn.co/meditasyon-ve-frekans'],
  ['/frequency-studio', 'https://mythborn.co/meditasyon-ve-frekans'],
  ['/meditasyon', 'https://mythborn.co/meditasyon-ve-frekans'],
  ['/en/meditation', 'https://mythborn.co/en/meditation-and-frequencies'],
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
  ['/carl-jung', 'https://mythborn.co/jung']
];
for (const [from, expectedLocation] of redirects) {
  const res = await app.fetch(new Request(`https://mythborn.co${from}`), env, {});
  assert.equal(res.status, 301, `${from} must 301 redirect`);
  assert.equal(res.headers.get('location'), expectedLocation, `${from} redirect target`);
}

// 4. Sitemap & AI/GEO/AEO/AIO Manifests verification
const smRes = await app.fetch(new Request('https://mythborn.co/sitemap.xml'), env, {});
assert.equal(smRes.status, 200);
const sm = await smRes.text();
assert(sm.includes('https://mythborn.co/meditasyon-ve-frekans'), 'sitemap must include /meditasyon-ve-frekans');
assert(sm.includes('https://mythborn.co/en/meditation-and-frequencies'), 'sitemap must include /en/meditation-and-frequencies');
assert(sm.includes('https://mythborn.co/jung'), 'sitemap must include /jung');
assert(sm.includes('https://mythborn.co/rehber/rezonans-kanunu-nedir'), 'sitemap must include /rehber/rezonans-kanunu-nedir');
assert(!sm.includes('https://mythborn.co/frekans-studyo'), 'sitemap must not include 301 /frekans-studyo');
assert(!sm.includes('https://mythborn.co/retrolar'), 'sitemap must not include 301 /retrolar');

const llmsRes = await app.fetch(new Request('https://mythborn.co/llms.txt'), env, {});
assert.equal(llmsRes.status, 200);
const llmsTxt = await llmsRes.text();
assert(llmsTxt.includes('/meditasyon-ve-frekans'), 'llms.txt must reference /meditasyon-ve-frekans');
assert(llmsTxt.includes('/jung'), 'llms.txt must reference /jung');
assert(llmsTxt.includes('/rehber/rezonans-kanunu-nedir'), 'llms.txt must reference /rehber/rezonans-kanunu-nedir');

const catRes = await app.fetch(new Request('https://mythborn.co/.well-known/ai-catalog.json'), env, {});
assert.equal(catRes.status, 200);
const catTxt = await catRes.text();
assert(catTxt.includes('/meditasyon-ve-frekans'), 'ai-catalog.json must reference /meditasyon-ve-frekans');

// 5. Verify fixed ebced.js dictionary entries
const ebcedSrc = readFileSync(new URL('../public/ebced.js', import.meta.url), 'utf8');
assert(ebcedSrc.includes("'murat': 'مراد'"), 'ebced murat typo must be fixed');
assert(ebcedSrc.includes("'güneş': 'گونش'"), 'ebced güneş typo must be fixed');

// 6. Verify sanctuary-audio.js syntax & safety
const audioSrc = readFileSync(new URL('../public/sanctuary-audio.js', import.meta.url), 'utf8');
new vm.Script(audioSrc, { filename: 'public/sanctuary-audio.js' });
assert(audioSrc.includes('STUDIO_TRACKS'), 'studio tracks must be wired');
assert(!/\.getUserMedia\(/.test(audioSrc), 'no microphone access');
assert(!/autoplay/i.test(audioSrc), 'no autoplay');

// 7. Verify /rehber hub & all 5 guides
const guidePaths = [
  '/rehber',
  '/en/guides',
  '/rehber/rezonans-kanunu-nedir',
  '/en/guides/rezonans-kanunu-nedir',
  '/rehber/spirituel-yasam-nedir',
  '/rehber/carl-jung-golge-ve-arketip',
  '/rehber/meditasyon-ve-nefes-rehberi',
  '/rehber/frekans-rezonans-ve-beyin-dalgalari',
  '/en/guides/spirituel-yasam-nedir'
];
for (const gp of guidePaths) {
  const res = await app.fetch(new Request(`https://mythborn.co${gp}`), env, {});
  assert.equal(res.status, 200, `${gp} must return 200`);
  const html = await res.text();
  assert(html.includes('"@type":"FAQPage"'), `${gp} must include FAQPage schema`);
  assert(!/\bundefined\b/i.test(html), `${gp} must not contain undefined`);
}

console.log('sanctuary-jung-audit: unified /meditasyon-ve-frekans, 17x 301s, /jung, /rehber + 5 guides, sitemap, llms.txt & ai-catalog PASS');
