import { currentUser } from './auth.js';

const enc=new TextEncoder();
const hex=b=>[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');
const randomHex=(n=32)=>{const b=new Uint8Array(n);crypto.getRandomValues(b);return hex(b)};
const sha256=async v=>hex(await crypto.subtle.digest('SHA-256',enc.encode(v)));
const json=(data,status=200,headers={})=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store',...headers}});
const input=async r=>{try{return await r.json()}catch{return null}};
const validEmail=v=>typeof v==='string'&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)&&v.length<=254;

async function issueToken(env,userId,purpose,ttlMinutes){
  const token=randomHex(32),hash=await sha256(token),expires=new Date(Date.now()+ttlMinutes*60000).toISOString();
  await env.DB.batch([
    env.DB.prepare('DELETE FROM action_tokens WHERE user_id=? AND purpose=? AND used_at IS NULL').bind(userId,purpose),
    env.DB.prepare('INSERT INTO action_tokens (id,user_id,purpose,token_hash,expires_at) VALUES (?,?,?,?,?)').bind(crypto.randomUUID(),userId,purpose,hash,expires)
  ]);
  return token;
}

export async function requestVerification(request,env){
  const user=await currentUser(request,env);if(!user)return json({error:'Giriş gerekli.'},401);
  if(user.email_verified_at)return json({ok:true,alreadyVerified:true});
  const token=await issueToken(env,user.id,'verify_email',60*24);
  if(env.EMAIL?.send)await env.EMAIL.send({to:user.email,subject:'Mythborn e-posta doğrulaması',text:`E-postanı doğrula: https://mythborn.co/dogrula?token=${token}`});
  return json({ok:true,delivery:env.EMAIL?.send?'sent':'pending_provider'});
}

export async function verifyEmail(request,env){
  const data=await input(request),token=data?.token;if(typeof token!=='string')return json({error:'Geçersiz doğrulama bağlantısı.'},400);
  const row=await env.DB.prepare("SELECT id,user_id FROM action_tokens WHERE token_hash=? AND purpose='verify_email' AND used_at IS NULL AND expires_at>CURRENT_TIMESTAMP").bind(await sha256(token)).first();
  if(!row)return json({error:'Bağlantı geçersiz veya süresi dolmuş.'},400);
  await env.DB.batch([
    env.DB.prepare('UPDATE users SET email_verified_at=CURRENT_TIMESTAMP,updated_at=CURRENT_TIMESTAMP WHERE id=?').bind(row.user_id),
    env.DB.prepare('UPDATE action_tokens SET used_at=CURRENT_TIMESTAMP WHERE id=?').bind(row.id)
  ]);
  return json({ok:true});
}

export async function requestPasswordReset(request,env){
  const data=await input(request),email=data?.email?.trim().toLowerCase();
  if(!validEmail(email))return json({ok:true});
  const user=await env.DB.prepare('SELECT id,email FROM users WHERE email=? AND deleted_at IS NULL').bind(email).first();
  if(user){const token=await issueToken(env,user.id,'reset_password',30);if(env.EMAIL?.send)await env.EMAIL.send({to:user.email,subject:'Mythborn şifre yenileme',text:`Şifreni yenile: https://mythborn.co/sifre-yenile?token=${token}`});}
  return json({ok:true});
}

export async function cancelMembership(request,env){
  const user=await currentUser(request,env);if(!user)return json({error:'Giriş gerekli.'},401);
  await env.DB.prepare("UPDATE subscriptions SET cancel_at_period_end=1,updated_at=CURRENT_TIMESTAMP WHERE user_id=? AND status IN ('active','trialing','past_due')").bind(user.id).run();
  return json({ok:true,cancelAtPeriodEnd:true});
}

export async function deleteAccount(request,env){
  const user=await currentUser(request,env);if(!user)return json({error:'Giriş gerekli.'},401);
  const data=await input(request);if(data?.confirmation!=='HESABIMI SİL')return json({error:'Silme onayı gerekli.'},400);
  await env.DB.batch([
    env.DB.prepare("UPDATE subscriptions SET cancel_at_period_end=1,status=CASE WHEN status='active' THEN 'cancelled' ELSE status END,updated_at=CURRENT_TIMESTAMP WHERE user_id=?").bind(user.id),
    env.DB.prepare('DELETE FROM sessions WHERE user_id=?').bind(user.id),
    env.DB.prepare("UPDATE users SET email='deleted+'||id||'@mythborn.invalid',deleted_at=CURRENT_TIMESTAMP,updated_at=CURRENT_TIMESTAMP WHERE id=?").bind(user.id)
  ]);
  return json({ok:true},{status:200,'set-cookie':'mythborn_session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0'});
}

export async function paymentWebhook(request,env){
  if(!env.PAYMENT_WEBHOOK_SECRET)return json({error:'Webhook yapılandırılmadı.'},503);
  const signature=request.headers.get('x-mythborn-signature')||'';const raw=await request.text();
  const expected=await sha256(`${env.PAYMENT_WEBHOOK_SECRET}.${raw}`);if(signature!==expected)return json({error:'Geçersiz imza.'},401);
  let event;try{event=JSON.parse(raw)}catch{return json({error:'Geçersiz veri.'},400)}
  if(!event?.id||!event?.type||!event?.userId)return json({error:'Eksik webhook verisi.'},400);
  const exists=await env.DB.prepare('SELECT id FROM webhook_events WHERE provider_event_id=?').bind(event.id).first();if(exists)return json({ok:true,duplicate:true});
  const statusMap={subscription_active:'active',subscription_past_due:'past_due',subscription_paused:'paused',subscription_cancelled:'cancelled'};const status=statusMap[event.type];
  await env.DB.batch([
    env.DB.prepare('INSERT INTO webhook_events (id,provider,provider_event_id,event_type,payload_hash) VALUES (?,?,?,?,?)').bind(crypto.randomUUID(),event.provider||'generic',event.id,event.type,await sha256(raw)),
    ...(status?[env.DB.prepare('UPDATE subscriptions SET provider=?,provider_customer_id=?,provider_subscription_id=?,status=?,current_period_end=?,cancel_at_period_end=?,updated_at=CURRENT_TIMESTAMP WHERE user_id=?').bind(event.provider||'generic',event.customerId||null,event.subscriptionId||null,status,event.currentPeriodEnd||null,event.cancelAtPeriodEnd?1:0,event.userId)]:[])
  ]);
  return json({ok:true});
}
