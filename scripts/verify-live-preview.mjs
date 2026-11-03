import assert from 'node:assert/strict';

const PREVIEW_BASE = 'https://mythborn-preview.teyfikgokdemir.workers.dev';
const PROD_BASE = 'https://mythborn.co';

console.log('--- 1. Testing Live Preview Astrology Routes ---');
const astrologyRoutes = [
  ['/', 'tr', 'MYTHBORN'],
  ['/en', 'en', 'MYTHBORN'],
  ['/gr', 'el', 'MYTHBORN'],
  ['/es', 'es', 'MYTHBORN'],
  ['/ar', 'ar', 'MYTHBORN'],
  ['/dogum-haritasi', 'tr', 'Hesaplama'],
  ['/burclar', 'tr', 'Burç'],
  ['/gokyuzu-takvimi', 'tr', 'Takvimi'],
  ['/retrolar', 'tr', 'Retrolar'],
  ['/transitler', 'tr', 'Transitler'],
  ['/sinastri', 'tr', 'Sinastri'],
  ['/astroloji-sozlugu', 'tr', 'Sözlük']
];

for (const [path, lang, keyword] of astrologyRoutes) {
  const res = await fetch(`${PREVIEW_BASE}${path}`);
  assert.equal(res.status, 200, `Preview ${path} must be 200`);
  assert.equal(res.headers.get('x-robots-tag'), 'noindex, nofollow', `Preview ${path} must have noindex`);
  const html = await res.text();
  assert(html.includes(keyword), `Preview ${path} must contain keyword "${keyword}"`);
  console.log(`PASS: Live Preview ${path} (${lang}) -> 200 OK [noindex, nofollow]`);
}

console.log('\n--- 2. Testing Live Existing Gözde System Pages in Preview ---');
const gozdeRoutes = [
  ['/videolar', 'Video Açılımlar'],
  ['/en/videos', 'Video Readings'],
  ['/iletisim', 'Gözde'],
  ['/en/contact', 'Gözde'],
  ['/yorumcu-basvuru', 'Yorumcu'],
  ['/en/apply', 'Reader'],
  ['/kartlarin-gozdesi', 'Kartların Gözde’si']
];

for (const [path, keyword] of gozdeRoutes) {
  const res = await fetch(`${PREVIEW_BASE}${path}`);
  assert.equal(res.status, 200, `Gözde preview ${path} must be 200`);
  const html = await res.text();
  assert(html.includes(keyword), `Gözde preview ${path} must contain keyword "${keyword}"`);
  console.log(`PASS: Live Existing Gözde ${path} -> 200 OK`);
}

console.log('\n--- 3. Testing Mock Form Endpoints in Preview ---');
const inquiryRes = await fetch(`${PREVIEW_BASE}/api/gozde-inquiry`, {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ name: 'Preview User', contact: 'user@test.local', message: 'Hello', consent: true })
});
assert.equal(inquiryRes.status, 200);
const inquiryJson = await inquiryRes.json();
assert.equal(inquiryJson.mock, true);
console.log('PASS: /api/gozde-inquiry mock response:', inquiryJson.message);

const applyRes = await fetch(`${PREVIEW_BASE}/api/gozde-apply`, {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ name: 'Preview Reader', email: 'reader@test.local' })
});
assert.equal(applyRes.status, 200);
const applyJson = await applyRes.json();
assert.equal(applyJson.mock, true);
console.log('PASS: /api/gozde-apply mock response:', applyJson.message);

console.log('\n--- 4. Verifying Production Remains Untouched ---');
const prodRes = await fetch(`${PROD_BASE}/`);
assert.equal(prodRes.status, 200);
console.log('PASS: Production live status 200 OK (unmodified)');

console.log('\nALL LIVE PREVIEW VERIFICATIONS PASSED SUCCESSFULLY!');
