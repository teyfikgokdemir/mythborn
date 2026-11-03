// Post-deploy checks for the independent, multilingual Mythborn release.
const site='https://mythborn.co';
const bannedNames=[String.fromCharCode(71,246,122,100,101),'go'+'zde','go'+'zdeli_'];
const isClean=text=>!bannedNames.some(v=>text.toLocaleLowerCase('tr').includes(v.toLocaleLowerCase('tr')));
const fetchFresh=async path=>{
 const response=await fetch(site+path,{headers:{'cache-control':'no-cache','user-agent':'Mythborn-Production-QA/3.0'}});
 return {response,body:await response.text()};
};
const untilVerified=async (name,check)=>{
 let last='not attempted';
 for(let attempt=0;attempt<5;attempt++){
   try{const result=await check();if(result.ok){console.log('PASS:',name);return;}last=result.reason||'invalid response';}catch(error){last=String(error);}
   if(attempt<4)await new Promise(resolve=>setTimeout(resolve,2500));
 }
 throw new Error(name+' failed: '+last);
};
for(const [path,lang] of [['/','tr'],['/en','en'],['/gr','el'],['/es','es'],['/ar','ar']]){
 await untilVerified('clean homepage '+path,async()=>{
   const {response,body}=await fetchFresh(path);
   return {ok:response.status===200&&body.includes('lang="'+lang+'"')&&isClean(body)&&(lang!=='ar'||body.includes('dir="rtl"')),reason:'status='+response.status+', language or identity check failed'};
 });
}
for(const path of ['/llms.txt','/llms.en.txt','/llms.gr.txt','/llms.es.txt','/llms.ar.txt','/llms-full.txt','/ai-fact-sheet.json','/ai-catalog.json','/.well-known/ai-plugin.json','/sitemap.xml','/sitemap-video.xml']){
 await untilVerified('clean discovery '+path,async()=>{
   const {response,body}=await fetchFresh(path);
   return {ok:response.status===200&&isClean(body)&&(path!=='/sitemap-video.xml'||!body.includes('<video:video>')),reason:'status='+response.status+', retired references remain'};
 });
}
for(const path of ['/videolar','/en/videos','/yorumcu-basvuru','/en/apply','/blog/merkur-ve-gezegen-retrolari-rehberi']){
 await untilVerified('retired page '+path,async()=>{
   const {response}=await fetchFresh(path);
   return {ok:response.status===410,reason:'status='+response.status};
 });
}
for(const path of ['/images/gozde-salon-portrait.jpg','/images/gozde-tarot-hero.webp','/images/gozde-astrology-concept.jpg','/images/gozde-coffee-concept.jpg','/videos/28-ekim-5-kasim-tarot.mp4']){
 await untilVerified('deleted media '+path,async()=>{
   const response=await fetch(site+path,{headers:{'cache-control':'no-cache','user-agent':'Mythborn-Production-QA/3.0'}});
   return {ok:response.status===404||response.status===410,reason:'status='+response.status};
 });
}
console.log('All production brand-retirement checks passed.');
