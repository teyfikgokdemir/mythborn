import {readdir} from 'node:fs/promises';
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
