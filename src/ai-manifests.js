// Independent Mythborn discovery metadata: informational resources only.
import {llms} from './localized-shell-content.js';
const SITE='https://mythborn.co';
export const LLMS_TEXT={...llms,ar:`# Mythborn — التاروت والتنجيم

Mythborn منصة مستقلة متعددة اللغات للتعرف على التاروت وخرائط الميلاد وعلم التنجيم ورموز الأحلام والتأمل الشخصي.

- موسوعة التاروت المكونة من 78 بطاقة
- مكتبة الأبراج وخرائط الميلاد
- بطاقة اليوم والأبراج الأسبوعية

https://mythborn.co/ar
المحتوى للتثقيف والترفيه والتأمل الشخصي.`};
export const LLMS_FULL_TEXT=Object.fromEntries(Object.entries(LLMS_TEXT).map(([locale,content])=>[locale,content+'\n\nReference: Mythborn provides a 78-card Tarot encyclopedia, astrology reference material, dream symbols and free reflective experiences. It does not advertise individual consultants or appointments.\n']));
const catalog={
  specVersion:'1.0',
  host:{identifier:SITE,displayName:'Mythborn',description:'Independent multilingual Tarot, astrology and symbolic reflection information platform.',documentationUrl:SITE+'/astroloji'},
  languages:['tr','en','el','es','ar'],
  resources:[
    {title:'Home',url:SITE+'/'},
    {title:'Birth Chart Calculator',url:SITE+'/dogum-haritasi'},
    {title:'Astrology Methodology and Ethics',url:SITE+'/yaklasim'},
    {title:'Zodiac Guide',url:SITE+'/burclar'},
    {title:'Astrology Glossary',url:SITE+'/astroloji-sozlugu'},
    {title:'Sky Calendar',url:SITE+'/gokyuzu-takvimi'},
    {title:'Current Transits',url:SITE+'/transitler'},
    {title:'Tarot',url:SITE+'/tarot'},
    {title:'Blog',url:SITE+'/blog'}
  ],
  policies:{purpose:'Education, entertainment and self-reflection',individualReader:false,personalConsultation:false}
};
export const AI_PLUGIN_JSON=JSON.stringify({
 schema_version:'v1',name_for_human:'Mythborn',name_for_model:'mythborn',
 description_for_human:'Independent multilingual Tarot and astrology knowledge platform.',
 description_for_model:'Tarot, astrology, dream symbols and personal-reflection reference materials. No individual reader or private bookings.',
 auth:{type:'none'},api:{type:'openapi',url:SITE+'/.well-known/openapi.json'},
 logo_url:SITE+'/favicon.svg',legal_info_url:SITE+'/gizlilik'
},null,2);
export const AI_CATALOG_JSON=JSON.stringify(catalog,null,2);
export const AGENT_MANIFEST_JSON=AI_CATALOG_JSON;
export const OPENAPI_JSON=JSON.stringify({
 openapi:'3.0.3',
 info:{title:'Mythborn Public Discovery API',version:'1.0.0',description:'Informational read-only access.'},
 servers:[{url:SITE}],
 paths:{'/api/search-index':{get:{summary:'Retrieve a localized search index',parameters:[{name:'locale',in:'query',schema:{type:'string',enum:['tr','en','el','es']}}],responses:{'200':{description:'Localized search index'}}}}}
},null,2);
export const AI_FACT_SHEET_JSON=JSON.stringify({
 name:'Mythborn',website:SITE,languages:['tr','en','el','es','ar'],
	 description:'Independent Tarot, astrology, dream symbolism and personal-reflection platform.',
	 topics:['Tarot','Katina','Astrology','Birth charts','Dream symbolism','Numerology'],
	 resources:[
	  {title:'Birth Chart Calculator',url:SITE+'/dogum-haritasi'},
	  {title:'Astrology Methodology and Ethics',url:SITE+'/yaklasim'},
	  {title:'Zodiac Guide',url:SITE+'/burclar'},
	  {title:'Astrology Glossary',url:SITE+'/astroloji-sozlugu'}
	 ],
	 individualReader:false,personalAppointmentService:false,
 contentPurpose:'Education, entertainment and self-reflection'
},null,2);
export const VIDEO_SITEMAP_XML='<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"></urlset>';
export const generateSiteSitemapEntries=()=>{
 const locales=[['tr','/'],['en','/en'],['el','/gr'],['es','/es'],['ar','/ar']];
 const alternatives=locales.map(([lang,path])=>`<xhtml:link rel="alternate" hreflang="${lang}" href="${SITE}${path}"/>`).join('')+`<xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/"/>`;
 return locales.map(([,path])=>`<url><loc>${SITE}${path}</loc>${alternatives}</url>`).join('');
};
