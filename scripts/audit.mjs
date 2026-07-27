import worker from '../src/router.js';

async function check(path, expectedStatus, includes = [], init = {}) {
  const response = await worker.fetch(new Request(`https://mythborn.co${path}`, init), { ASSETS: { fetch: () => new Response('', { status: 200 }) } }, {});
  if (response.status !== expectedStatus) throw new Error(`${path} returned ${response.status}; expected ${expectedStatus}`);
  const body = await response.text();
  for (const value of includes) if (!body.includes(value)) throw new Error(`${path} is missing required value: ${value}`);
  return response;
}

await check('/', 200, ['lang="tr"', 'On soru. Kırk ihtimal. Sekiz arketip.', 'SİMYACI', '115 TL', 'og:title']);
await check('/deneyim', 200, ['data-result', 'İÇGÜDÜSEL SEÇ', 'Doğru cevap yok']);
await check('/arketipler', 200, ['Sekiz arzu. Sekiz gölge.', 'HÜKÜMDAR', 'KAÇAK', 'TAÇ', 'YANKI', 'MİMAR', 'GEZGİN', 'ATEŞ', 'SİMYACI']);
await check('/manifesto', 200, ['İnsan istediği şeyi satın almaz.', 'Arzu bir kusur değildir.']);
await check('/uyelik', 200, ['MYTHBORN ÜYELİĞİ', '115 TL', 'Tüm mevcut ve yeni deneyimler']);
await check('/kayit', 200, ['data-auth-form="kayit"', 'KVKK']);
await check('/giris', 200, ['data-auth-form="giris"']);
await check('/hesabim', 200, ['data-account', 'SONUÇ GEÇMİŞİ']);
await check('/llms.txt', 200, ['# Mythborn', 'Dil: Türkçe']);
await check('/robots.txt', 200, ['Sitemap: https://mythborn.co/sitemap.xml']);
await check('/sitemap.xml', 200, ['<loc>https://mythborn.co/uyelik</loc>']);
await check('/api/auth/me', 503, ['veritabanı']);
await check('/api/auth/register', 503, ['veritabanı'], { method: 'POST', headers: {'content-type':'application/json'}, body: JSON.stringify({email:'test@example.com',password:'guvenli-sifre-123'}) });
await check('/api/auth/request-verification', 503, ['veritabanı'], { method: 'POST' });
await check('/api/auth/request-password-reset', 503, ['veritabanı'], { method: 'POST' });
await check('/api/account/cancel-membership', 503, ['veritabanı'], { method: 'POST' });
await check('/api/account/delete', 503, ['veritabanı'], { method: 'DELETE' });
await check('/api/webhooks/payment', 503, ['veritabanı'], { method: 'POST' });
await check('/not-a-real-page', 404, ['Bu kapı henüz açılmadı.']);

console.log('Mythborn Türkçe ürün, arketip, üyelik ve API audit’i geçti.');