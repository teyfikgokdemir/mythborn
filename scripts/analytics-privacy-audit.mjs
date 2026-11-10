import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

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
