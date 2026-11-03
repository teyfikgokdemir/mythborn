// Live verification for Mythborn's independent brand after a controlled deployment.
const origin='https://mythborn.co';
const noReaderReference=content=>!/Gözde|gozdeli_|gozde-tarot-hero/i.test(content);
for(const [pathname,lang] of [['/','tr'],['/en','en'],['/gr','el'],['/es','es'],['/ar','ar']]){
  const response=await fetch(origin+pathname,{headers:{'cache-control':'no-cache'}});
  if(response.status!==200)throw new Error(pathname+' expected 200, got '+response.status);
  const html=await response.text();
  if(!html.includes('lang="'+lang+'"')||!noReaderReference(html))throw new Error(pathname+' language/reader branding regression');
  if(lang==='ar'&&!html.includes('dir="rtl"'))throw new Error('Arabic RTL missing');
  console.log('PASS: independent Mythborn page '+pathname);
}
for(const pathname of ['/videolar','/en/videos','/yorumcu-basvuru','/es/apply',
  '/blog/merkur-ve-gezegen-retrolari-rehberi','/ar/blog/katina-ask-acilimi-ve-iliski-dinamikleri',
  '/api/gozde-inquiry','/api/gozde-apply']){
  const response=await fetch(origin+pathname,{redirect:'manual',headers:{'cache-control':'no-cache'}});
  if(response.status!==410)throw new Error(pathname+' must be removed (410); got '+response.status);
  console.log('PASS: retired reader route '+pathname);
}
for(const pathname of ['/images/gozde-salon-portrait.jpg','/images/gozde-tarot-hero.webp','/videos/28-ekim-5-kasim-tarot.mp4']){
  const response=await fetch(origin+pathname,{redirect:'manual',headers:{'cache-control':'no-cache'}});
  if(response.status!==404&&response.status!==410)throw new Error(pathname+' media still public; status '+response.status);
  console.log('PASS: retired media '+pathname);
}
for(const pathname of ['/llms.txt','/llms.en.txt','/llms.ar.txt','/ai-catalog.json','/ai-fact-sheet.json','/sitemap.xml']){
  const response=await fetch(origin+pathname,{headers:{'cache-control':'no-cache'}});
  const body=await response.text();
  if(!response.ok||!noReaderReference(body))throw new Error(pathname+' still contains retired branding');
  if(pathname==='/sitemap.xml'&&(body.includes('/videolar')||body.includes('/yorumcu-basvuru')))
    throw new Error('sitemap still publishes retired routes');
  console.log('PASS: independent discovery endpoint '+pathname);
}
console.log('PASS: Mythborn independent brand production verification');
