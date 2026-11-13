import assert from 'node:assert/strict';
import {getRouteHref,renderAstrologyLayout} from '../src/astrology-platform/layout.js';
import {matchAstrologyRoute,handleAstrologyRequest} from '../src/astrology-platform/router.js';
import {ASTROLOGY_SITEMAP_ROUTES,generateAstrologySitemapEntries} from '../src/astrology-platform/sitemap.js';
const routes={tr:'/iletisim',en:'/en/contact',el:'/gr/epikoinonia',es:'/es/contacto',ar:'/ar/alittisal'};
assert.ok(ASTROLOGY_SITEMAP_ROUTES.includes('contact'));
const map=generateAstrologySitemapEntries();
for(const [locale,path] of Object.entries(routes)){
  assert.equal(getRouteHref(locale,'contact'),path);
  assert.equal(matchAstrologyRoute(path),'contact');
  assert.ok(map.includes('https://mythborn.co'+path));
  const r=handleAstrologyRequest(new Request('https://mythborn.co'+path),{ENVIRONMENT:'preview'});
  assert.equal(r.status,200);
  const html=await r.text();
  assert.match(html,/support@mythborn\.co/);
  assert.match(html,/info@mythborn\.co/);
  assert.match(html,/mailto:support@mythborn\.co\?subject=/);
  assert.match(html,/mailto:info@mythborn\.co\?subject=/);
  assert.match(html,/class="astro-contact-page/);
  assert.match(html,/class="astro-contact-icon"/);
  assert.match(html,/class="astro-contact-card-bottom"/);
  assert.match(html,/class="astro-contact-email"/);
  assert.equal((html.match(/href="mailto:support@mythborn\\.co/g)||[]).length,1,'one clear support action');
  assert.equal((html.match(/href="mailto:info@mythborn\\.co/g)||[]).length,1,'one clear general enquiries action');

  assert.match(html,/href="[^"]*">[^<]*(?:İletişim|Contact|Επικοινωνία|Contacto|اتصل بنا)/);
  assert.match(html,/https:\/\/mythborn\.co/);
  assert.match(html,/noindex/);
  assert.doesNotMatch(html,/<form[^>]*>/);
  const prod=handleAstrologyRequest(new Request('https://mythborn.co'+path),{ENVIRONMENT:'production'});
  assert.doesNotMatch(await prod.text(),/<meta name="robots" content="noindex/);
}
console.log('Contact routes, locale links, mailto, no form collection, sitemap/hreflang: PASS');
