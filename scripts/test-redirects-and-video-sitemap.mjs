import assert from 'node:assert';
import fs from 'node:fs';

console.log('Testing 301 redirects and Video Sitemap...');

// 1. Check Video Sitemap file directly
const videoSitemapXml = fs.readFileSync('public/sitemap-video.xml', 'utf8');
assert.ok(!videoSitemapXml.includes('player_loc'), 'public/sitemap-video.xml must NOT include player_loc');
assert.ok(videoSitemapXml.includes('<video:content_loc>https://mythborn.co/videos/28-ekim-5-kasim-tarot.mp4</video:content_loc>'), 'Must include video:content_loc');
assert.ok(videoSitemapXml.includes('<loc>https://mythborn.co/videolar</loc>'), 'Must include loc for /videolar');
assert.ok(videoSitemapXml.includes('<loc>https://mythborn.co/en/videos</loc>'), 'Must include loc for /en/videos');
assert.ok(videoSitemapXml.includes('<loc>https://mythborn.co/gr/videos</loc>'), 'Must include loc for /gr/videos');
assert.ok(videoSitemapXml.includes('<loc>https://mythborn.co/es/videos</loc>'), 'Must include loc for /es/videos');
assert.ok(videoSitemapXml.includes('<loc>https://mythborn.co/ar/videos</loc>'), 'Must include loc for /ar/videos');
console.log('✅ Video Sitemap XML verification passed (no player_loc, correct content_loc across 5 languages)');

// 2. Test analytics-router fetch
import router from '../src/analytics-router.js';

const mockEnv = {
  ENVIRONMENT: 'production',
  ASTROLOGY_PLATFORM_ENABLED: 'true',
  GOZDE_LAUNCH_ENABLED: 'true'
};

const testCases = [
  // Legacy astronomy and astrology URLs redirecting to relevant targets (areas / videos)
  { path: '/astroloji', expectedStatus: 301, expectedLocation: 'https://mythborn.co/kesif-alanlari' },
  { path: '/en/astroloji', expectedStatus: 301, expectedLocation: 'https://mythborn.co/en/areas' },
  { path: '/gr/astroloji', expectedStatus: 301, expectedLocation: 'https://mythborn.co/gr/areas' },
  { path: '/es/astroloji', expectedStatus: 301, expectedLocation: 'https://mythborn.co/es/areas' },
  { path: '/ar/astroloji', expectedStatus: 301, expectedLocation: 'https://mythborn.co/ar/areas' },
  
  // Weekly horoscopes redirecting to videos
  { path: '/haftalik-burc', expectedStatus: 301, expectedLocation: 'https://mythborn.co/videolar#burclar' },
  { path: '/en/weekly-horoscope', expectedStatus: 301, expectedLocation: 'https://mythborn.co/en/videos#burclar' },
  
  // Moon calendar and transits
  { path: '/ay-takvimi', expectedStatus: 301, expectedLocation: 'https://mythborn.co/kesif-alanlari' },
  { path: '/bugunun-gokyuzu', expectedStatus: 301, expectedLocation: 'https://mythborn.co/kesif-alanlari' },
  { path: '/burc-uyumu', expectedStatus: 301, expectedLocation: 'https://mythborn.co/kesif-alanlari' },
  
  // Tarot and Katina redirecting to Gözde Kesif Alanlari
  { path: '/tarot', expectedStatus: 301, expectedLocation: 'https://mythborn.co/kesif-alanlari' },
  { path: '/en/tarot', expectedStatus: 301, expectedLocation: 'https://mythborn.co/en/areas' },
  { path: '/gr/tarot', expectedStatus: 301, expectedLocation: 'https://mythborn.co/gr/areas' },
  { path: '/es/tarot', expectedStatus: 301, expectedLocation: 'https://mythborn.co/es/areas' },
  { path: '/ar/tarot', expectedStatus: 301, expectedLocation: 'https://mythborn.co/ar/areas' },
  { path: '/katina', expectedStatus: 301, expectedLocation: 'https://mythborn.co/kesif-alanlari' },
  { path: '/gunluk-kart', expectedStatus: 301, expectedLocation: 'https://mythborn.co/kesif-alanlari' },
  
  // Ancient routes redirecting to blog
  { path: '/maya-zaman-donguleri', expectedStatus: 301, expectedLocation: 'https://mythborn.co/blog' },
  { path: '/mezopotamya-astrolojisi', expectedStatus: 301, expectedLocation: 'https://mythborn.co/blog' },
  
  // Shopify products returning 410 Gone
  { path: '/products/some-tarot-ring', expectedStatus: 410 }
];

for (const tc of testCases) {
  const req = new Request(`https://mythborn.co${tc.path}`);
  const res = await router.fetch(req, mockEnv, {});
  assert.strictEqual(res.status, tc.expectedStatus, `Expected status ${tc.expectedStatus} for ${tc.path}, got ${res.status}`);
  if (tc.expectedLocation) {
    const loc = res.headers.get('location');
    assert.strictEqual(loc, tc.expectedLocation, `Expected location ${tc.expectedLocation} for ${tc.path}, got ${loc}`);
  }
}
console.log(`✅ All ${testCases.length} 301 legacy redirects and 410 gone status codes tested and verified!`);

// 3. Test active routes are NOT redirected (Status 200)
const activeRoutes = [
  '/',
  '/en',
  '/gr',
  '/es',
  '/ar',
  '/dogum-haritasi',
  '/en/birth-chart',
  '/gr/genethlios-chartis',
  '/es/carta-natal',
  '/ar/kharitat-almilad',
  '/burclar',
  '/gokyuzu-takvimi',
  '/retrolar',
  '/transitler',
  '/sinastri',
  '/astroloji-sozlugu',
  '/ogrenme-merkezi',
  '/burc-yorumlari',
  '/yaklasim',
  '/videolar',
  '/en/videos',
  '/kesif-alanlari',
  '/en/areas',
  '/sitemap-video.xml',
  '/sitemap.xml',
  '/robots.txt'
];

for (const path of activeRoutes) {
  const req = new Request(`https://mythborn.co${path}`);
  const res = await router.fetch(req, mockEnv, {});
  assert.strictEqual(res.status, 200, `Active route ${path} should return 200, but got ${res.status}`);
}
console.log(`✅ All ${activeRoutes.length} active routes verified returning 200 OK without any redirect loop!`);

// 4. Test /sitemap-video.xml response body from router
const sitemapVideoReq = new Request('https://mythborn.co/sitemap-video.xml');
const sitemapVideoRes = await router.fetch(sitemapVideoReq, mockEnv, {});
const xmlContent = await sitemapVideoRes.text();
assert.ok(xmlContent.includes('<video:content_loc>'), 'Router must serve video:content_loc in sitemap-video.xml');
assert.ok(!xmlContent.includes('player_loc'), 'Router must NOT serve player_loc in sitemap-video.xml');
console.log('✅ sitemap-video.xml endpoint verified returning clean XML with content_loc and zero player_loc!');
