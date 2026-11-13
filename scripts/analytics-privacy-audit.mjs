import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const router = readFileSync('src/analytics-router.js', 'utf8');
const refinement = readFileSync('public/refinement.js', 'utf8');
const sourceBeacon = readFileSync('public/cansu-source-beacon.js', 'utf8');
const staticPages = readFileSync('src/localized-static-pages.js', 'utf8');

assert.match(router, /traffic-counter\.js" data-site="mythborn" defer/,
  'the existing seven-day test counter must remain wired unchanged');
assert.match(router, /privacy-traffic\.js" data-site="mythborn" defer/,
  'a separate permanent anonymous page-view collector must be wired');
assert.match(router, /cansu-umami-loader\.js" data-site="mythborn" defer/,
  'the shared cookieless Umami loader must run independently of consent');
assert.equal((router.match(/privacy-traffic\.js/g) || []).length, 2,
  'the privacy loader must have one duplicate guard and one injected tag');

const decoratorSource = router
  .slice(router.indexOf('const appendSources='), router.indexOf('const cacheStaticAssetResponse='))
  .replace('const secureHtmlResponse=', 'globalThis.secureHtmlResponse=');
const decoratorContext = vm.createContext({ Headers, Response, Set });
vm.runInContext(decoratorSource, decoratorContext);
const decorate = html => decoratorContext.secureHtmlResponse(new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8' } }));
const injectedHtml = await (await decorate('<!doctype html><html><body><main>Mythborn</main></body></html>')).text();
assert.equal((injectedHtml.match(/src="\/refinement\.js"/g) || []).length, 1,
  'every HTML response must load the consent-aware GA4 and Clarity controller');
const guardedHtml = await (await decorate('<!doctype html><html><body><script src="/refinement.js" defer></script></body></html>')).text();
assert.equal((guardedHtml.match(/src="\/refinement\.js"/g) || []).length, 1,
  'the controller must not be injected twice when a page already contains it');
for (const html of [
  '<!doctype html><html><body><script>window.asset="/refinement.js"</script><main>Mythborn</main></BODY></html>',
  '<!doctype html><html><main>Bodyless Mythborn</main></html>',
  '<!doctype html><html><body><script src="/refinement.js"></script><script defer src="/refinement.js"></script></body></html>',
]) {
  const normalized = await (await decorate(html)).text();
  assert.equal((normalized.match(/<script\b[^>]*\bsrc=["']\/refinement\.js["'][^>]*><\/script>/gi) || []).length, 1,
    'text references, body variants, and duplicate tags must normalize to one controller');
}

assert.match(refinement, /window\.gtag\('consent','default',\{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'\}\)/,
  'Consent Mode v2 must default every storage signal to denied');
assert.match(refinement, /loadGa\(false\);\s*loadClarity\(false\);/,
  'GA4 and Clarity limited modes must initialize while consent remains denied');
assert.doesNotMatch(refinement, /ga-disable-/,
  'rejection must retain denied cookieless GA measurement rather than disabling GA');
assert.match(refinement, /if\(analytics&&!adsConfigured\)/,
  'Google Ads configuration must remain gated behind analytics consent');
assert.match(refinement, /if\(analytics\)\{scheduleAnalytics\(true\);loadSourceBeacon\(\);\}/,
  'GTM, attribution and conversion beacons must remain consent gated');
assert.match(refinement, /applyClarityConsent\(analytics\)/,
  'Clarity Consent V2 must follow the explicit recording choice');

assert.doesNotMatch(sourceBeacon, /cansu-umami-loader\.js/,
  'the consented conversion beacon must not create a second Umami bootstrap');
assert.match(staticPages, /anonymous|anonim/i,
  'the public disclosure must distinguish anonymous aggregate measurement');
assert.match(staticPages, /consent|onay|rıza/i,
  'the public disclosure must distinguish consented analytics');

console.log('PASS Mythborn privacy-safe analytics wiring');
