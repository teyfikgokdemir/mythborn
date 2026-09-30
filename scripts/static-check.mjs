import {readdir,readFile} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';

async function javascriptFiles(directory){
  const entries=await readdir(new URL(`../${directory}/`,import.meta.url),{withFileTypes:true});
  return entries.filter(entry=>entry.isFile()&&entry.name.endsWith('.js')).map(entry=>`${directory}/${entry.name}`);
}
const files=[...await javascriptFiles('src'),...await javascriptFiles('public')];
for(const file of files){
  const result=spawnSync(process.execPath,['--check',file],{cwd:new URL('..',import.meta.url),encoding:'utf8'});
  if(result.status!==0)throw new Error(`${file}\n${result.stderr}`);
}
console.log(`Static JavaScript syntax check passed for ${files.length} files.`);


const wrangler=await readFile(new URL('../wrangler.jsonc',import.meta.url),'utf8');
if(!/"ENVIRONMENT"\s*:\s*"production"/.test(wrangler))throw new Error('wrangler.jsonc must declare ENVIRONMENT=production at top level');
if(/"ENVIRONMENT"\s*:\s*"preview"/.test(wrangler))throw new Error('wrangler.jsonc must not ship preview environment flags to production');
for(const endpoint of ['/llms.txt','/llms.en.txt','/llms.gr.txt','/llms.es.txt','/llms.el.txt']){
  if(!wrangler.includes(`"${endpoint}"`))throw new Error(`wrangler assets.run_worker_first missing ${endpoint}`);
}

const previewConfig=await readFile(new URL('../wrangler.preview.jsonc',import.meta.url),'utf8');
if(!/"ENVIRONMENT"\s*:\s*"preview"/.test(previewConfig))throw new Error('wrangler.preview.jsonc must declare ENVIRONMENT=preview');
if(!previewConfig.includes('"mythborn-membership-preview"'))throw new Error('Preview config must bind mythborn-membership-preview');
const previewWorkflow=await readFile(new URL('../.github/workflows/preview.yml',import.meta.url),'utf8');
if(!previewWorkflow.includes('--config wrangler.preview.jsonc'))throw new Error('Preview workflow must use wrangler.preview.jsonc');

const deployWorkflow=await readFile(new URL('../.github/workflows/deploy.yml',import.meta.url),'utf8');
if(!deployWorkflow.includes('npx wrangler deploy'))throw new Error('Production workflow must deploy the canonical Worker config');
console.log('Production/preview environment separation audit passed.');
