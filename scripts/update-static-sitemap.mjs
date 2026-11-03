import fs from 'node:fs';
import { generateGozdeSitemapEntries } from '../src/ai-manifests.js';
import { culturalSitemapEntries } from '../src/cultural-platform.js';
import { generateAstrologySitemapEntries } from '../src/astrology-platform/sitemap.js';

const SITE = 'https://mythborn.co';
const applyRoutes = ['/yorumcu-basvuru', '/en/apply', '/gr/apply', '/es/apply', '/ar/apply'];
const applyAlts = `<xhtml:link rel="alternate" hreflang="tr" href="${SITE}/yorumcu-basvuru"/><xhtml:link rel="alternate" hreflang="en" href="${SITE}/en/apply"/><xhtml:link rel="alternate" hreflang="el" href="${SITE}/gr/apply"/><xhtml:link rel="alternate" hreflang="es" href="${SITE}/es/apply"/><xhtml:link rel="alternate" hreflang="ar" href="${SITE}/ar/apply"/><xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/yorumcu-basvuru"/>`;
const applyEntries = applyRoutes.map(p => `<url><loc>${SITE}${p}</loc>${applyAlts}</url>`).join('');

const fullXml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${generateGozdeSitemapEntries()}${applyEntries}${culturalSitemapEntries()}${generateAstrologySitemapEntries(SITE)}</urlset>`;

fs.writeFileSync('public/sitemap.xml', fullXml);
console.log('public/sitemap.xml written. Length:', fullXml.length);
