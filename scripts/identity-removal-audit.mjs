import assert from 'node:assert/strict';
import {access} from 'node:fs/promises';
import app from '../src/app-router.js';

const domain='https://mythborn.co';
const env={ENVIRONMENT:'production',ASSETS:{fetch:()=>new Response('',{status:404})}};
const removedPerson=[String.fromCharCode(71,246,122,100,101),'go'+'zde','go'+'zdeli_'];
const lacksIndividualBranding=body=>!removedPerson.some(token=>body.toLocaleLowerCase('tr').includes(token.toLocaleLowerCase('tr')));
const pages=[['/','tr'],['/en','en'],['/gr','el'],['/es','es'],['/ar','ar']];
for(const [path,lang] of pages){
 const result=await app.fetch(new Request(domain+path),env,{});
 assert.equal(result.status,200,path+' must serve the independent editorial platform');
 const html=await result.text();
 assert(html.includes('lang="'+lang+'"'),path+' must retain locale');
 assert(lacksIndividualBranding(html),path+' must not contain a retired personal identity');
 if(lang==='ar')assert(html.includes('dir="rtl"'),'Arabic must retain RTL');
}
for(const path of ['/videolar','/en/videos','/yorumcu-basvuru','/en/apply','/blog/merkur-ve-gezegen-retrolari-rehberi','/es/blog/merkur-ve-gezegen-retrolari-rehberi']){
 const result=await app.fetch(new Request(domain+path),env,{});
 assert.equal(result.status,410,path+' should be permanently retired');
 assert.equal(result.headers.get('x-robots-tag'),'noindex',path+' must not be indexed');
}
for(const path of ['/llms.txt','/llms.en.txt','/llms.gr.txt','/llms.es.txt','/llms.ar.txt','/llms-full.txt','/ai-catalog.json','/ai-fact-sheet.json','/.well-known/ai-plugin.json','/sitemap-video.xml','/sitemap.xml']){
 const result=await app.fetch(new Request(domain+path),env,{});
 assert.equal(result.status,200,path+' metadata must be available');
 const text=await result.text();
 assert(lacksIndividualBranding(text),path+' must not reference the retired identity');
 if(path==='/sitemap-video.xml')assert(!text.includes('<video:video>'),'no retired video entries');
}
for(const path of ['/images/gozde-salon-portrait.jpg','/images/gozde-tarot-hero.webp','/images/gozde-astrology-concept.jpg','/images/gozde-coffee-concept.jpg','/videos/28-ekim-5-kasim-tarot.mp4','/images/Mistik%20Mum%20I%C5%9F%C4%B1%C4%9F%C4%B1nda%20Tarot%20Ak%C5%9Fam%C4%B1.webp']){
 const response=await app.fetch(new Request(domain+path),env,{});
 assert.equal(response.status,410,path+' must have a clean gone response instead of a server error');
 assert.equal(response.headers.get('x-robots-tag'),'noindex');
}
for(const path of [
 'src/gozde-landing.js','src/gozde-pages.js','src/gozde-blog-data.js',
 'public/images/gozde-tarot-hero.webp','public/images/gozde-salon-portrait.jpg',
 'public/images/gozde-astrology-concept.jpg','public/images/gozde-coffee-concept.jpg',
 'public/videos/28-ekim-5-kasim-tarot.mp4',
 'public/images/Mistik Mum Işığında Tarot Akşamı.webp']){
 let exists=true;
 try{await access(new URL('../'+path,import.meta.url));}catch{exists=false;}
 assert.equal(exists,false,path+' must be deleted');
}
console.log('Identity removal, blog retirement, localized routes, assets, and discovery metadata passed.');
