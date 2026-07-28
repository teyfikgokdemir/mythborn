import {readFile} from 'node:fs/promises';
import worker from '../src/app-router.js';

const env={ASSETS:{fetch:()=>new Response('',{status:200})}};
const fetchPath=path=>worker.fetch(new Request(`https://mythborn.co${path}`),env,{});
const sitemap=await (await fetchPath('/sitemap.xml')).text();
const paths=[...new Set([...sitemap.matchAll(/<loc>https:\/\/mythborn\.co([^<]*)<\/loc>/g)].map(match=>match[1]||'/'))];
const failures=[];
const count=(html,pattern)=>(html.match(pattern)||[]).length;

for(const path of paths){
  const response=await fetchPath(path);
  const html=await response.text();
  const checks={
    header:count(html,/<header\b/g)===1,
    footer:count(html,/<footer class="site-footer"/g)===1,
    locale:count(html,/<details class="header-language"/g)===1,
    mobileNav:count(html,/<nav class="mobile-nav"/g)===1,
    mobileClosed:html.includes('class="mobile-nav" id="mobile-nav"')&&html.includes('aria-hidden="true"'),
    noLegacyLocale:!/<nav class="(?:language-switcher|lang)"/.test(html),
    localeColumns:html.includes('<span>TR</span> <small>Türkçe</small>')&&html.includes('<span>EN</span> <small>English</small>')&&html.includes('<span>GR</span> <small>Ελληνικά</small>'),
    refinement:html.includes('/refinement.css')&&html.includes('/refinement.js'),
    emblemRatio:[...html.matchAll(/<img src="\/images\/mythborn-emblem\.png"[^>]*>/g)].every(match=>match[0].includes('width="275"')&&match[0].includes('height="257"')&&!match[0].includes('loading="lazy"'))
  };
  const failed=Object.entries(checks).filter(([,passed])=>!passed).map(([name])=>name);
  if(failed.length)failures.push({path,failed});
}

for(const path of ['/ruya-sembolleri','/astroloji-sozlugu']){
  const html=await (await fetchPath(path)).text();
  if(html.includes('← Mythborn'))failures.push({path,failed:['legacyBackLink']});
}

const home=await (await fetchPath('/')).text();
if(count(home,/<h1\b/g)!==1)failures.push({path:'/',failed:['homeHeadingCount']});
const auth=await (await fetchPath('/giris')).text();
if(count(auth,/<h1\b/g)!==1||/<div class="membership-gate auth-gate"[\s\S]*?<h2>/.test(auth))failures.push({path:'/giris',failed:['authSingleHeading']});
const tarot=await (await fetchPath('/tarot-kartlari')).text();
const tarotSlugs=[...tarot.matchAll(/data-card-slug="([^"]+)"/g)].map(match=>match[1]);
const tarotArtPaths=new Set([...tarot.matchAll(/src="(\/images\/tarot\/[^"]+\/grid-480\.webp)"/g)].map(match=>match[1]));
if(new Set(tarotSlugs).size!==78||tarotArtPaths.size!==78)failures.push({path:'/tarot-kartlari',failed:['distinctTarotArt']});
if(count(tarot,/data-art-status="final"/g)!==78||count(tarot,/<img[^>]+alt="[^"]+"[^>]+width="480" height="840"/g)!==78||tarot.includes('data-art-status="fallback"'))failures.push({path:'/tarot-kartlari',failed:['completeAccessibleTarotArt']});

const css=await readFile(new URL('../public/refinement.css',import.meta.url),'utf8');
for(const token of ['prefers-reduced-motion','100dvh','safe-area-inset-top','safe-area-inset-bottom','.mobile-nav,.mobile-menu-backdrop,.mobile-menu-button{display:none!important}','.hero-sky-card>p:not(.eyebrow){display:block!important']){
  if(!css.includes(token))failures.push({path:'public/refinement.css',failed:[token]});
}
const refinement=await readFile(new URL('../public/refinement.js',import.meta.url),'utf8');
const legacyConsent=await readFile(new URL('../public/account-menu.js',import.meta.url),'utf8');
for(const token of ["dialog.setAttribute('role','dialog')","dialog.setAttribute('aria-modal','true')","dialog.setAttribute('aria-labelledby','consent-title')","dialog.setAttribute('aria-describedby','consent-description')",'node.inert=true',"if(event.key==='Escape'&&read())"]){
  if(!refinement.includes(token))failures.push({path:'public/refinement.js',failed:[token]});
}
if(/createElement\(['"]aside['"]\)|setAttribute\(['"]role['"],['"]dialog['"]\)/.test(legacyConsent))failures.push({path:'public/account-menu.js',failed:['legacyConsentDialog']});

if(paths.length!==723)failures.push({path:'/sitemap.xml',failed:[`expected 723 unique URLs, received ${paths.length}`]});
if(failures.length)throw new Error(`UI shell audit failed:\n${JSON.stringify(failures.slice(0,30),null,2)}`);
console.log(`UI shell audit passed for ${paths.length} public URLs with one header, footer and locale control.`);
