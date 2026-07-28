import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import worker from '../src/app-router.js';
import {
  ALWAYS_PUBLIC_ROUTES,
  PROTECTED_ROUTES,
  earlyAccessBanner,
  paywallPage,
  premiumState,
  routeRequiresPremium
} from '../src/premium-access.js';
import {angularDistance,longitudePoint,strongestAspect} from '../public/live-sky-model.js';

const before=premiumState({PREMIUM_STARTS_AT:'2026-09-01T00:00:00+03:00',PREMIUM_GATE_ENABLED:'false'},new Date('2026-08-01T00:00:00Z'));
const afterOff=premiumState({PREMIUM_STARTS_AT:'2026-09-01T00:00:00+03:00',PREMIUM_GATE_ENABLED:'false'},new Date('2026-09-02T00:00:00Z'));
const afterOn=premiumState({PREMIUM_STARTS_AT:'2026-09-01T00:00:00+03:00',PREMIUM_GATE_ENABLED:'true'},new Date('2026-09-02T00:00:00Z'));
assert.equal(before.showEarlyAccessBanner,true);
assert.equal(before.isPremiumRequired,false);
assert.equal(afterOff.isPremiumRequired,false);
assert.equal(afterOn.isPremiumRequired,true);
assert.equal(await routeRequiresPremium('/sinastri',afterOff),false);
assert.equal(await routeRequiresPremium('/sinastri',afterOn),true);
for(const route of ALWAYS_PUBLIC_ROUTES)assert.equal(await routeRequiresPremium(route,afterOn),false,`${route} must stay public`);
assert(PROTECTED_ROUTES.has('/sinastri'));
assert(PROTECTED_ROUTES.has('/advanced-astrology'));

for(const locale of ['tr','en','el']){
  const banner=earlyAccessBanner(locale,before),paywall=paywallPage(locale,'/sinastri');
  assert(banner.includes('data-dismiss-until'));
  assert(!/₺|\$|€|£|aylık|monthly price/i.test(banner+paywall));
  assert(paywall.includes('disabled'));
}
assert.equal(earlyAccessBanner('tr',afterOff),'');

assert.equal(angularDistance(359,1),2);
assert.deepEqual(longitudePoint(0),{x:160,y:60});
assert.deepEqual(longitudePoint(360),{x:160,y:60});
const exact=strongestAspect([
  {name:'A',longitude:0},{name:'B',longitude:120.7}
]);
assert.equal(exact.key,'trine');
assert.equal(exact.from.name,'A');
assert.equal(strongestAspect([{name:'A',longitude:0},{name:'B',longitude:45}]),null);
const tie=strongestAspect([{name:'A',longitude:0},{name:'B',longitude:4},{name:'C',longitude:176}]);
assert.equal(tie.key,'conjunction');

const source=await readFile(new URL('../public/home-sky.js',import.meta.url),'utf8');
assert(source.includes('data-zodiac-sector'));
assert(source.includes('Array')===false||source.includes('signs.map'));
assert(source.includes('aria-hidden="true" focusable="false"'));
assert(source.includes("fetch('/api/astrology/current-sky'"));
assert(!source.includes('calculateCurrentSky('));

const env={
  PREMIUM_STARTS_AT:'2026-09-01T00:00:00+03:00',
  PREMIUM_GATE_ENABLED:'false',
  ASSETS:{fetch:request=>fetch(request)}
};
for(const [path,lang] of [['/','tr'],['/en','en'],['/gr','el']]){
  const response=await worker.fetch(new Request(`https://mythborn.co${path}`),env,{});
  assert.equal(response.status,200);
  const html=await response.text();
  assert(html.includes(`lang="${lang}"`));
  assert(html.includes('data-home-sky'));
  assert(html.includes('sky-skeleton-wheel'));
  assert(html.includes('home-today-layout'));
  assert(html.includes('featured-list'));
  assert(html.includes('ancient-editorial'));
  assert(html.includes('data-early-access'));
  assert(!html.includes('Gökyüzü hesaplanıyor'));
  assert(!html.includes('EN ÇOK İLGİ GÖRENLER'));
  assert(!html.includes('MOST EXPLORED'));
  assert(!html.includes('ΔΗΜΟΦΙΛΕΙΣ ΕΜΠΕΙΡΙΕΣ'));
}

console.log('Live sky, asymmetric home and premium-access audit passed.');
