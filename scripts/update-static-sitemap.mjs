import fs from 'node:fs';
import { culturalSitemapEntries } from '../src/cultural-platform.js';
import { generateAstrologySitemapEntries } from '../src/astrology-platform/sitemap.js';

const SITE = 'https://mythborn.co';

const fullXml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${culturalSitemapEntries()}${generateAstrologySitemapEntries(SITE)}</urlset>`;

fs.writeFileSync('public/sitemap.xml', fullXml);
console.log('public/sitemap.xml written. Length:', fullXml.length);
