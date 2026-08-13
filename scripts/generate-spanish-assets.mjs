import {mkdir,readFile,writeFile,access} from 'node:fs/promises';
import {join} from 'node:path';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {spanishContentRoutes,spanishAssetName} from '../src/spanish-edition.js';

const SITE='https://mythborn.co';
const OUT='/home/ubuntu/mythborn/public/es-content';
const BATCH_SIZE=2;
const MODEL='gpt-5-mini';
const headers={'Authorization':`Bearer ${process.env.OPENAI_API_KEY}`,'Content-Type':'application/json'};
const run=promisify(execFile);
const curlText=async url=>{
  const {stdout}=await run('curl',['-fsSL','--connect-timeout','10','--max-time','45','-A','Mythborn Spanish Editor/1.0',url],{maxBuffer:12*1024*1024});
  return stdout;
};

const esc=(value='')=>value.replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&#39;',"'").replaceAll('&lt;','<').replaceAll('&gt;','>');
const assetName=spanishAssetName;
const exists=async path=>access(path).then(()=>true).catch(()=>false);
const extract=(html,path)=>{
  const title=esc(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim()||'Mythborn');
  const description=esc(html.match(/<meta name="description" content="([^"]*)"/i)?.[1]?.trim()||'');
  const main=html.match(/<main\b[\s\S]*?<\/main>/i)?.[0];
  if(!main)throw new Error(`Missing main on ${path}`);
  return {path,title,description,main};
};
const schema={
  type:'object',
  properties:{items:{type:'array',items:{type:'object',properties:{path:{type:'string'},title:{type:'string'},description:{type:'string'},main:{type:'string'}},required:['path','title','description','main'],additionalProperties:false}}},
  required:['items'],additionalProperties:false
};
async function translate(items){
  const content=`Translate the supplied public astrology, Tarot and symbolic-reflection page payloads from English to neutral, editorial Spanish suitable for a global Spanish-speaking audience. Preserve every HTML tag, attribute name, data attribute, image URL, script hook, class, ID, aria attribute, route path and external URL exactly; translate only human-readable English text and title/description values. Preserve “Mythborn”, “Tarot”, “Katina”, “Astronomy Engine”, “Tzolk’in” and “Haab” as appropriate. Do not add medical, financial, legal, deterministic or stronger claims. Keep the original information, paragraph order and FAQ structure. Return only the requested JSON object.\n\nINPUT:\n${JSON.stringify(items)}`;
  const payload={
    model:MODEL,
    messages:[
      {role:'system',content:'You are an expert Spanish editor and localization specialist. Produce natural, accurate Spanish with an editorial—not machine-translated—voice.'},
      {role:'user',content}
    ],
    response_format:{type:'json_schema',json_schema:{name:'spanish_page_payloads',strict:true,schema}},
    max_completion_tokens:14000
  };
  let lastError;
  for(let attempt=1;attempt<=3;attempt++){
    try{
      const response=await fetch(`${process.env.OPENAI_API_BASE}/chat/completions`,{method:'POST',headers,body:JSON.stringify(payload)});
      if(!response.ok)throw new Error(`Model HTTP ${response.status}: ${await response.text()}`);
      const data=await response.json();
      const parsed=JSON.parse(data.choices?.[0]?.message?.content||'{}');
      if(!Array.isArray(parsed.items)||parsed.items.length!==items.length)throw new Error('Unexpected translation result shape');
      for(const item of parsed.items){
        if(!item.main.startsWith('<main')||!item.main.includes('</main>'))throw new Error(`Invalid translated main for ${item.path}`);
      }
      return parsed.items;
    }catch(error){
      lastError=error;
      await new Promise(resolve=>setTimeout(resolve,attempt*1500));
    }
  }
  throw lastError;
}

await mkdir(OUT,{recursive:true});
const paths=spanishContentRoutes;
console.log(`Preparing ${paths.length} Spanish launch routes.`);
const missing=[];
for(const path of paths){
  const target=join(OUT,`${assetName(path)}.json`);
  if(!await exists(target))missing.push(path);
}
const pending=[];
for(let index=0;index<missing.length;index+=6){
  const batch=missing.slice(index,index+6);
  const fetched=await Promise.all(batch.map(async path=>extract(await curlText(`${SITE}/en${path}`),path)));
  pending.push(...fetched);
  console.log(`Downloaded ${Math.min(index+batch.length,missing.length)} of ${missing.length} source routes.`);
}
console.log(`${pending.length} routes require Spanish assets.`);
for(let index=0;index<pending.length;index+=BATCH_SIZE){
  const batch=pending.slice(index,index+BATCH_SIZE);
  console.log(`Translating ${index+1}-${index+batch.length} of ${pending.length}: ${batch.map(item=>item.path).join(', ')}`);
  const translated=await translate(batch);
  for(const item of translated){
    await writeFile(join(OUT,`${assetName(item.path)}.json`),`${JSON.stringify(item)}\n`);
  }
}
const manifest={version:1,scope:'Spanish launch edition',generatedAt:new Date().toISOString(),routes:Object.fromEntries(paths.map(path=>[path,`/es-content/${assetName(path)}.json`]))};
await writeFile(join(OUT,'manifest.json'),`${JSON.stringify(manifest,null,2)}\n`);
console.log(`Spanish assets ready: ${paths.length} routes.`);
