import assert from 'node:assert/strict';
import worker from '../src/app-router.js';

const previewEnv = {
  ENVIRONMENT: 'preview',
  ASTROLOGY_PREVIEW_ENABLED: 'true',
  GOZDE_LAUNCH_ENABLED: 'true',
  DB: {}
};

console.log('--- 1. Testing Preview Astrology Platform 5-Language Home ---');
const locales = [
  ['/', 'tr', 'ltr', 'MYTHBORN'],
  ['/en', 'en', 'ltr', 'MYTHBORN'],
  ['/gr', 'el', 'ltr', 'MYTHBORN'],
  ['/es', 'es', 'ltr', 'MYTHBORN'],
  ['/ar', 'ar', 'rtl', 'MYTHBORN']
];

for (const [path, lang, dir, brand] of locales) {
  const req = new Request(`https://mythborn-preview.tevfikgokdemir.workers.dev${path}`);
  const res = await worker.fetch(req, previewEnv, {});
  assert.equal(res.status, 200, `Preview ${path} must return 200`);
  assert.equal(res.headers.get('content-language'), lang, `Header content-language must match ${lang}`);
  assert.equal(res.headers.get('x-robots-tag'), 'noindex, nofollow', 'Preview must set noindex header');

  const html = await res.text();
  assert(html.includes(`lang="${lang}"`), `${path} must have lang="${lang}"`);
  assert(html.includes(`dir="${dir}"`), `${path} must have dir="${dir}"`);
  assert(html.includes(brand), `${path} must contain brand ${brand}`);
  assert(html.includes('<meta name="robots" content="noindex, nofollow">'), `${path} must include noindex meta tag`);
  assert(html.includes('id="astro-mobile-drawer" class="astro-drawer" hidden inert'), `${path} drawer must be accessible hidden inert`);
  console.log(`PASS: Preview Home ${path} [${lang}] (dir: ${dir})`);
}

console.log('\n--- 2. Testing Preview Astrology Subpages Across 5 Languages ---');
const subpages = [
  ['/dogum-haritasi', 'tr', 'Hesaplama'],
  ['/en/birth-chart', 'en', 'Calculate'],
  ['/gr/genethlios-chartis', 'el', 'Χάρτης'],
  ['/es/carta-natal', 'es', 'Calcular'],
  ['/ar/kharitat-almilad', 'ar', 'خريطة'],
  ['/burclar', 'tr', 'Burç'],
  ['/en/zodiac-signs', 'en', 'Zodiac'],
  ['/gokyuzu-takvimi', 'tr', 'Takvimi'],
  ['/retrolar', 'tr', 'Retrolar'],
  ['/transitler', 'tr', 'Transitler'],
  ['/sinastri', 'tr', 'Sinastri'],
  ['/astroloji-sozlugu', 'tr', 'Sözlük']
];

for (const [path, lang, keyword] of subpages) {
  const req = new Request(`https://mythborn-preview.tevfikgokdemir.workers.dev${path}`);
  const res = await worker.fetch(req, previewEnv, {});
  assert.equal(res.status, 200, `${path} must return 200`);
  const html = await res.text();
  assert(html.includes(keyword), `${path} must contain keyword "${keyword}"`);
  console.log(`PASS: Preview Subpage ${path} [${lang}]`);
}

console.log('\n--- 3. Testing Mock Form Behavior in Preview ---');
const formReq = new Request('https://mythborn-preview.teyfikgokdemir.workers.dev/api/gozde-inquiry', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ name: 'Test', contact: 'test@example.com', message: 'Hello', consent: true })
});
const formRes = await worker.fetch(formReq, previewEnv, {});
assert.equal(formRes.status, 200);
const formJson = await formRes.json();
assert.equal(formJson.mock, true, 'Preview form must be mocked');
console.log('PASS: Preview inquiry form mock response verified:', formJson.message);

const applyReq = new Request('https://mythborn-preview.teyfikgokdemir.workers.dev/api/gozde-apply', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ name: 'Reader Test', email: 'reader@example.com' })
});
const applyRes = await worker.fetch(applyReq, previewEnv, {});
assert.equal(applyRes.status, 200);
const applyJson = await applyRes.json();
assert.equal(applyJson.mock, true, 'Preview apply form must be mocked');
console.log('PASS: Preview apply form mock response verified:', applyJson.message);

console.log('\n--- 4. Verifying Existing Gözde System Pages in Preview ---');
const gozdeRoutes = [
  ['/videolar', 'Video Açılımlar'],
  ['/en/videos', 'Video Readings'],
  ['/iletisim', 'Gözde'],
  ['/en/contact', 'Gözde'],
  ['/yorumcu-basvuru', 'Yorumcu'],
  ['/en/apply', 'Reader'],
  ['/kartlarin-gozdesi', 'Kartların Gözde’si']
];

for (const [path, expected] of gozdeRoutes) {
  const req = new Request(`https://mythborn-preview.teyfikgokdemir.workers.dev${path}`);
  const res = await worker.fetch(req, previewEnv, {});
  assert.equal(res.status, 200, `${path} must return 200 in preview`);
  const html = await res.text();
  assert(html.includes(expected), `${path} must contain "${expected}"`);
  console.log(`PASS: Gözde route ${path} intact in preview`);
}

console.log('\n--- 5. Verifying Production Remains Untouched ---');
const prodEnv = { ENVIRONMENT: 'production', GOZDE_LAUNCH_ENABLED: 'true' };
const prodReq = new Request('https://mythborn.co/');
const prodRes = await worker.fetch(prodReq, prodEnv, {});
assert.equal(prodRes.status, 200);
const prodHtml = await prodRes.text();
assert(prodHtml.includes('Gözde'), 'Production must continue serving Gözde launch');
console.log('PASS: Production launch isolation verified.');

console.log('\nALL ASTROLOGY PREVIEW TESTS PASSED SUCCESSFULLY!');
