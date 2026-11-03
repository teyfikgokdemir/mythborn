import assert from 'node:assert';

const BASE = 'https://mythborn-preview.teyfikgokdemir.workers.dev';

async function testAll() {
  console.log('🌐 Testing live preview at:', BASE);

  // 1. 5 Languages Homepage
  for (const [lang, path] of [['tr', '/'], ['en', '/en'], ['el', '/gr'], ['es', '/es'], ['ar', '/ar']]) {
    const res = await fetch(BASE + path);
    assert.strictEqual(res.status, 200, `${path} must be 200 OK`);
    const robots = res.headers.get('x-robots-tag') || '';
    assert(robots.includes('noindex'), `${path} must have noindex in preview`);
    const html = await res.text();
    assert(!html.includes('Koç 12 Burç'), `${path} must not have repetitive Koç 12 Burç`);
    assert(!html.includes('AM') && !html.includes('PM') && !html.includes('a.m.') && !html.includes('p.m.'), `${path} must not contain AM/PM in timestamps`);
    if (lang === 'ar') {
      assert(html.includes('dir="rtl"'), 'Arabic must have dir="rtl"');
    }
    console.log(`✓ Home ${lang} passed`);
  }

  // 2. Zodiac SVG
  const svgRes = await fetch(BASE + '/assets/astrology/zodiac-wheel.svg');
  assert.strictEqual(svgRes.status, 200, 'Zodiac wheel SVG must return 200');
  assert(svgRes.headers.get('content-type').includes('svg'), 'Zodiac wheel must be image/svg+xml');
  console.log('✓ Zodiac wheel SVG passed');

  // 3. Natal Chart with params
  const natalRes = await fetch(BASE + '/dogum-haritasi?date=1995-03-21&time=14:30&city=Istanbul');
  assert.strictEqual(natalRes.status, 200, 'Natal chart must return 200');
  const natalHtml = await natalRes.text();
  assert(natalHtml.includes('Güneş Burcu') || natalHtml.includes('Koç') || natalHtml.includes('Akrep'), 'Natal chart must show signs');
  assert(natalHtml.includes('wheel-disc') || natalHtml.includes('Interactive Natal Chart Wheel') || natalHtml.includes('zodiac-wheel'), 'Natal chart must embed dynamic zodiac wheel');
  console.log('✓ Natal chart view passed');

  // 4. Subpages
  for (const page of ['/burclar', '/gokyuzu-takvimi', '/retrolar', '/transitler', '/sinastri', '/astroloji-sozlugu']) {
    const res = await fetch(BASE + page);
    assert.strictEqual(res.status, 200, `${page} must return 200`);
    console.log(`✓ Subpage ${page} passed`);
  }

  // 5. Daily Horoscope API Pilot
  const pilotRes = await fetch(BASE + '/api/astrology/daily-horoscope');
  assert.strictEqual(pilotRes.status, 200, 'Horoscope pilot must return 200');
  const pilotData = await pilotRes.json();
  assert.strictEqual(pilotData.metadata.content_version, '1.0.0-pilot');
  assert.strictEqual(pilotData.horoscopes.tr.signs.length, 12, 'Pilot must have 12 signs in TR');
  assert.strictEqual(pilotData.horoscopes.ar.signs.length, 12, 'Pilot must have 12 signs in AR');
  console.log('✓ Daily Horoscope API pilot passed');

  // 6. Gözde Pages & Mock API
  const gozdeRes = await fetch(BASE + '/kartlarin-gozdesi');
  assert.strictEqual(gozdeRes.status, 200, 'Gözde landing must return 200');
  
  const mockApiRes = await fetch(BASE + '/api/gozde-inquiry', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ name: 'Test', email: 'test@example.com' })
  });
  assert.strictEqual(mockApiRes.status, 200, 'Mock API must return 200');
  const mockJson = await mockApiRes.json();
  assert.strictEqual(mockJson.mock, true, 'Mock API must confirm mock: true');
  console.log('✓ Gözde fallback and mock API passed');

  console.log('🎉 ALL LIVE PREVIEW TESTS PASSED SUCCESSFULLY!');
}

testAll().catch(err => {
  console.error('❌ Test failed:', err);
  process.exit(1);
});
