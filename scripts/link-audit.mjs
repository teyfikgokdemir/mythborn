import worker from '../src/app-router.js';
import {readFile} from 'node:fs/promises';

const env={ASSETS:{fetch:async request=>{const pathname=new URL(request.url).pathname;try{return new Response(await readFile(new URL(`../public${pathname}`,import.meta.url)),{status:200})}catch{return new Response('',{status:200})}}}};
const fetchPath=path=>worker.fetch(new Request(`https://mythborn.co${path}`),env,{});
const sitemapResponse=await fetchPath('/sitemap.xml');
if(sitemapResponse.status!==200)throw new Error(`Sitemap returned ${sitemapResponse.status}`);
const sitemap=await sitemapResponse.text();
const paths=[...new Set([...sitemap.matchAll(/<loc>https:\/\/mythborn\.co([^<]*)<\/loc>/g)].map(match=>match[1]||'/'))];
for(const path of paths){
  const response=await fetchPath(path);
  if(response.status>=400)throw new Error(`Sitemap link ${path} returned ${response.status}`);
}
for(const localeRoot of ['/','/en','/gr','/es']){
  const html=await (await fetchPath(localeRoot)).text();
  const internal=[...new Set([...html.matchAll(/href="(\/[^"#?]*)/g)].map(match=>match[1]))];
  for(const path of internal){
    const response=await fetchPath(path);
    if(response.status>=400)throw new Error(`${localeRoot} link ${path} returned ${response.status}`);
  }
}
console.log(`Link audit passed for ${paths.length} sitemap URLs and localized home-page navigation.`);
