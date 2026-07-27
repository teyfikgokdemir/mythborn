const enc=new TextEncoder();
const hex=b=>[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');
const sha256=async v=>hex(await crypto.subtle.digest('SHA-256',enc.encode(v)));
const json=(data,status=200,headers={})=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store',...headers}});

function clientKey(request){
  return request.headers.get('cf-connecting-ip')||request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()||'unknown';
}

export async function rateLimit(request,env,{scope,limit,windowSeconds}){
  if(!env.DB)return null;
  const now=Math.floor(Date.now()/1000);
  const windowStart=Math.floor(now/windowSeconds)*windowSeconds;
  const keyHash=await sha256(`${scope}:${clientKey(request)}`);
  const expiresAt=windowStart+windowSeconds*2;
  const row=await env.DB.prepare(`INSERT INTO rate_limits(scope,key_hash,window_start,count,expires_at)
    VALUES(?,?,?,?,?) ON CONFLICT(scope,key_hash,window_start)
    DO UPDATE SET count=count+1 RETURNING count`).bind(scope,keyHash,windowStart,1,expiresAt).first();
  const count=Number(row?.count||1);
  if(Math.random()<0.02)env.DB.prepare('DELETE FROM rate_limits WHERE expires_at<?').bind(now).run().catch(()=>{});
  if(count<=limit)return null;
  const retryAfter=Math.max(1,windowStart+windowSeconds-now);
  await env.DB.prepare('INSERT INTO security_events(id,event_type,key_hash,route,metadata_json) VALUES(?,?,?,?,?)')
    .bind(crypto.randomUUID(),'rate_limit_exceeded',keyHash,new URL(request.url).pathname,JSON.stringify({scope,count,limit,retryAfter})).run().catch(()=>{});
  return json({error:'Çok fazla deneme yapıldı. Lütfen biraz sonra tekrar dene.'},429,{'retry-after':String(retryAfter)});
}

export async function verifyTurnstile(request,env){
  if(!env.TURNSTILE_SECRET)return null;
  let data;try{data=await request.clone().json()}catch{return json({error:'İnsan doğrulaması gerekli.'},400)}
  const token=data?.turnstileToken;
  if(typeof token!=='string'||!token)return json({error:'İnsan doğrulaması gerekli.'},400);
  const form=new FormData();form.set('secret',env.TURNSTILE_SECRET);form.set('response',token);form.set('remoteip',clientKey(request));
  let result;try{result=await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify',{method:'POST',body:form}).then(r=>r.json())}catch{return json({error:'Doğrulama servisine ulaşılamadı.'},503)}
  if(!result?.success){
    const keyHash=await sha256(`turnstile:${clientKey(request)}`);
    await env.DB?.prepare('INSERT INTO security_events(id,event_type,key_hash,route,metadata_json) VALUES(?,?,?,?,?)')
      .bind(crypto.randomUUID(),'turnstile_failed',keyHash,new URL(request.url).pathname,JSON.stringify({codes:result?.['error-codes']||[]})).run().catch(()=>{});
    return json({error:'İnsan doğrulaması başarısız oldu.'},403);
  }
  return null;
}
