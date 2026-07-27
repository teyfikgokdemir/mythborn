import worker from '../src/router.js';

async function check(path, expectedStatus, includes = [], init = {}) {
  const response = await worker.fetch(new Request(`https://mythborn.co${path}`, init), { ASSETS: { fetch: () => new Response('', { status: 200 }) } }, {});
  if (response.status !== expectedStatus) throw new Error(`${path} returned ${response.status}; expected ${expectedStatus}`);
  const body = await response.text();
  for (const value of includes) if (!body.includes(value)) throw new Error(`${path} is missing required value: ${value}`);
  return response;
}

await check('/', 200, ['lang="tr"', 'Ne istediğini biliyorsun.', '115 TL']);
await check('/uyelik', 200, ['MYTHBORN ÜYELİĞİ', '115 TL']);
await check('/kayit', 200, ['data-auth-form="kayit"', 'KVKK']);
await check('/giris', 200, ['data-auth-form="giris"']);
await check('/hesabim', 200, ['data-account', 'SONUÇ GEÇMİŞİ']);
await check('/llms.txt', 200, ['# Mythborn', 'Dil: Türkçe']);
await check('/robots.txt', 200, ['Sitemap: https://mythborn.co/sitemap.xml']);
await check('/sitemap.xml', 200, ['<loc>https://mythborn.co/uyelik</loc>']);
await check('/api/auth/me', 401, ['authenticated']);
await check('/api/auth/register', 405, ['desteklenmiyor']);
await check('/not-a-real-page', 404, ['Bu kapı henüz açılmadı.']);

console.log('Mythborn Türkçe üyelik platformu route, içerik ve API audit’i geçti.');
