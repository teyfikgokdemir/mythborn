import worker from '../src/router.js';

async function check(path, expectedStatus, includes = []) {
  const response = await worker.fetch(new Request(`https://mythborn.co${path}`), {}, {});
  if (response.status !== expectedStatus) {
    throw new Error(`${path} returned ${response.status}; expected ${expectedStatus}`);
  }
  const body = await response.text();
  for (const value of includes) {
    if (!body.includes(value)) throw new Error(`${path} is missing required value: ${value}`);
  }
}

await check('/', 200, [
  '<link rel="canonical" href="https://mythborn.co/">',
  'application/ld+json',
  'og:title',
  'twitter:card'
]);
await check('/llms.txt', 200, ['# Mythborn', 'https://teyfikgokdemir.com/']);
await check('/products/legacy-item', 410);
await check('/collections/legacy', 410);
await check('/not-a-real-page', 404, ['noindex,follow']);

console.log('Mythborn SEO, AI identity and legacy-route audit passed.');
