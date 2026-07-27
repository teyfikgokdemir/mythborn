import { currentUser } from './auth.js';

const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}});
const PREVIEW_ADMIN='teyfikgokdemir@gmail.com';
const PRODUCTION_WORKER_HOST='mythborn.teyfikgokdemir.workers.dev';
const parseAdmins=env=>String(env.ADMIN_EMAILS||'').split(',').map(x=>x.trim().toLowerCase()).filter(Boolean);
const isPreviewRequest=request=>{
  const host=new URL(request.url).hostname.toLowerCase();
  return host.endsWith('.workers.dev')&&host!==PRODUCTION_WORKER_HOST;
};
const isAdmin=(user,env,request)=>{
  const email=String(user?.email||'').toLowerCase();
  if((env.ENVIRONMENT==='preview'||isPreviewRequest(request))&&email===PREVIEW_ADMIN)return true;
  return parseAdmins(env).includes(email);
};

async function requireAdmin(request,env){
  const user=await currentUser(request,env);
  if(!user)return {response:json({error:'Giriş gerekli.'},401)};
  if(!isAdmin(user,env,request))return {response:json({error:'Bu alan için yetkin yok.'},403)};
  return {user};
}

export async function adminOverview(request,env){
  const auth=await requireAdmin(request,env);if(auth.response)return auth.response;
  const [users,subscriptions,results,revenue,recent]=await Promise.all([
    env.DB.prepare("SELECT COUNT(*) total, SUM(CASE WHEN deleted_at IS NULL THEN 1 ELSE 0 END) active_accounts, SUM(CASE WHEN email_verified_at IS NOT NULL AND deleted_at IS NULL THEN 1 ELSE 0 END) verified FROM users").first(),
    env.DB.prepare("SELECT status,COUNT(*) count FROM subscriptions GROUP BY status").all(),
    env.DB.prepare("SELECT COUNT(*) total FROM results").first(),
    env.DB.prepare("SELECT COALESCE(SUM(CASE WHEN status IN ('active','trialing') THEN amount_kurus ELSE 0 END),0) monthly_kurus FROM subscriptions").first(),
    env.DB.prepare("SELECT u.id,u.email,u.created_at,u.email_verified_at,s.status,s.current_period_end,s.cancel_at_period_end,(SELECT COUNT(*) FROM results r WHERE r.user_id=u.id) result_count FROM users u LEFT JOIN subscriptions s ON s.user_id=u.id WHERE u.deleted_at IS NULL ORDER BY u.created_at DESC LIMIT 20").all()
  ]);
  return json({admin:auth.user.email,metrics:{users,subscriptions:subscriptions.results||[],results:results?.total||0,monthlyKurus:revenue?.monthly_kurus||0},recentUsers:recent.results||[]});
}

export async function adminUsers(request,env){
  const auth=await requireAdmin(request,env);if(auth.response)return auth.response;
  const url=new URL(request.url),q=(url.searchParams.get('q')||'').trim(),status=(url.searchParams.get('status')||'').trim();
  const where=['u.deleted_at IS NULL'];const binds=[];
  if(q){where.push('u.email LIKE ?');binds.push(`%${q}%`)}
  if(status){where.push('s.status=?');binds.push(status)}
  const statement=`SELECT u.id,u.email,u.created_at,u.email_verified_at,s.status,s.current_period_end,s.cancel_at_period_end,s.amount_kurus,(SELECT COUNT(*) FROM results r WHERE r.user_id=u.id) result_count FROM users u LEFT JOIN subscriptions s ON s.user_id=u.id WHERE ${where.join(' AND ')} ORDER BY u.created_at DESC LIMIT 100`;
  const rows=await env.DB.prepare(statement).bind(...binds).all();
  return json({users:rows.results||[]});
}

export async function adminSetSubscription(request,env){
  const auth=await requireAdmin(request,env);if(auth.response)return auth.response;
  let data;try{data=await request.json()}catch{return json({error:'Geçersiz veri.'},400)}
  const allowed=new Set(['inactive','trialing','active','past_due','paused','cancelled']);
  if(!data?.userId||!allowed.has(data?.status))return json({error:'Kullanıcı ve geçerli durum gerekli.'},400);
  await env.DB.batch([
    env.DB.prepare('UPDATE subscriptions SET status=?,cancel_at_period_end=?,updated_at=CURRENT_TIMESTAMP WHERE user_id=?').bind(data.status,data.cancelAtPeriodEnd?1:0,data.userId),
    env.DB.prepare('INSERT INTO admin_audit_log (id,admin_user_id,action,target_user_id,metadata_json) VALUES (?,?,?,?,?)').bind(crypto.randomUUID(),auth.user.id,'subscription_status_changed',data.userId,JSON.stringify({status:data.status,cancelAtPeriodEnd:!!data.cancelAtPeriodEnd}))
  ]);
  return json({ok:true});
}

export async function adminReadiness(request,env){
  const auth=await requireAdmin(request,env);if(auth.response)return auth.response;
  const requiredTables=['users','sessions','subscriptions','results','consents','action_tokens','webhook_events','admin_audit_log','rate_limits','security_events'];
  let existing=[];
  try{
    const rows=await env.DB.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
    existing=(rows.results||[]).map(x=>x.name);
  }catch{}
  const missingTables=requiredTables.filter(name=>!existing.includes(name));
  const adminReady=parseAdmins(env).length>0||env.ENVIRONMENT==='preview'||isPreviewRequest(request);
  const checks=[
    {key:'database',label:'D1 veritabanı',ready:!!env.DB&&missingTables.length===0,detail:missingTables.length?`Eksik tablolar: ${missingTables.join(', ')}`:'Tüm zorunlu tablolar hazır.'},
    {key:'admin',label:'Yönetici yetkisi',ready:adminReady,detail:adminReady?'Yönetici erişimi yapılandırıldı.':'ADMIN_EMAILS eksik.'},
    {key:'payment',label:'Ödeme webhook güvenliği',ready:!!env.PAYMENT_WEBHOOK_SECRET,detail:env.PAYMENT_WEBHOOK_SECRET?'Webhook secret bağlı.':'PAYMENT_WEBHOOK_SECRET eksik.'},
    {key:'email',label:'E-posta gönderimi',ready:!!env.EMAIL?.send,detail:env.EMAIL?.send?'E-posta binding hazır.':'EMAIL sağlayıcısı henüz bağlı değil.'},
    {key:'turnstile',label:'Turnstile koruması',ready:!!env.TURNSTILE_SITE_KEY&&!!env.TURNSTILE_SECRET,detail:env.TURNSTILE_SITE_KEY&&env.TURNSTILE_SECRET?'Site ve secret anahtarları hazır.':'Turnstile anahtarlarından biri veya ikisi eksik.'}
  ];
  const requiredForLaunch=['database','admin','payment','email'];
  const blockers=checks.filter(x=>requiredForLaunch.includes(x.key)&&!x.ready).map(x=>x.label);
  return json({ready:blockers.length===0,blockers,checks,checkedAt:new Date().toISOString()});
}

export function adminPage(){
  return new Response(`<!doctype html><html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Mythborn Yönetim</title><link rel="stylesheet" href="/app.css"><link rel="stylesheet" href="/admin.css"></head><body><main class="admin-shell"><header><div><p class="eyebrow">MYTHBORN YÖNETİM</p><h1>Üyelik merkezi</h1></div><a href="/hesabim">Hesabıma dön</a></header><section class="admin-readiness" data-admin-readiness><p>Sistem hazırlığı kontrol ediliyor…</p></section><section class="admin-metrics" data-admin-metrics><p>Veriler yükleniyor…</p></section><section class="admin-panel"><div class="admin-tools"><input type="search" placeholder="E-posta ile ara" data-admin-search><select data-admin-status><option value="">Tüm durumlar</option><option>active</option><option>trialing</option><option>past_due</option><option>paused</option><option>cancelled</option><option>inactive</option></select></div><div class="admin-table-wrap"><table><thead><tr><th>Üye</th><th>Durum</th><th>Sonuç</th><th>Kayıt</th><th>Yönet</th></tr></thead><tbody data-admin-users><tr><td colspan="5">Yükleniyor…</td></tr></tbody></table></div><p class="admin-message" data-admin-message></p></section></main><script src="/admin.js" defer></script></body></html>`,{headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store'}});
}
