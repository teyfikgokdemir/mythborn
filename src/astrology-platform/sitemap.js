// Astrology Platform Sitemap Generator
import { ASTROLOGY_LOCALES } from './i18n.js';
import { getRouteHref } from './layout.js';
import { GUIDE_SLUGS } from './pages/guides.js';

export const ASTROLOGY_SITEMAP_ROUTES = [
  'sanctuary',
  'jung',
  'guides',
  'natal',
  'zodiac',
  'calendar',
  'synastry',
  'approach',
  'contact'
];

export function generateAstrologySitemapEntries(origin = 'https://mythborn.co') {
  const locales = ['tr', 'en', 'el', 'es', 'ar'];
  let xml = '';

  for (const routeKey of ASTROLOGY_SITEMAP_ROUTES) {
    const defaultUrl = `${origin}${getRouteHref('tr', routeKey)}`;
    const alts = locales
      .map((loc) => {
        const langCode = loc === 'el' ? 'el' : loc;
        const href = `${origin}${getRouteHref(loc, routeKey)}`;
        return `<xhtml:link rel="alternate" hreflang="${langCode}" href="${href}"/>`;
      })
      .join('') + `<xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}"/>`;

    for (const loc of locales) {
      const locUrl = `${origin}${getRouteHref(loc, routeKey)}`;
      xml += `<url><loc>${locUrl}</loc><lastmod>2026-11-20</lastmod>${alts}</url>`;
    }
  }

  for (const slug of GUIDE_SLUGS) {
    const defaultUrl = `${origin}${getRouteHref('tr', 'guides')}/${slug}`;
    const alts = locales
      .map((loc) => {
        const langCode = loc === 'el' ? 'el' : loc;
        const href = `${origin}${getRouteHref(loc, 'guides')}/${slug}`;
        return `<xhtml:link rel="alternate" hreflang="${langCode}" href="${href}"/>`;
      })
      .join('') + `<xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}"/>`;

    for (const loc of locales) {
      const locUrl = `${origin}${getRouteHref(loc, 'guides')}/${slug}`;
      xml += `<url><loc>${locUrl}</loc><lastmod>2026-11-20</lastmod>${alts}</url>`;
    }
  }

  return xml;
}
