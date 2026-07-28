const enc=new TextEncoder();
const dec=new TextDecoder();
const b64url=bytes=>btoa(String.fromCharCode(...new Uint8Array(bytes))).replace(/=/g,'').replace(/\+/g,'-').replace(/\//g,'_');
const fromB64url=value=>{const normalized=String(value).replace(/-/g,'+').replace(/_/g,'/');const padded=normalized+'='.repeat((4-normalized.length%4)%4);return Uint8Array.from(atob(padded),c=>c.charCodeAt(0))};
const encodeJson=value=>b64url(enc.encode(JSON.stringify(value)));
const decodeJson=value=>JSON.parse(dec.decode(fromB64url(value)));
const random=(size=32)=>{const b=new Uint8Array(size);crypto.getRandomValues(b);return b64url(b)};
const challenge=async value=>b64url(await crypto.subtle.digest('SHA-256',enc.encode(value)));
const sha256=async value=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',enc.encode(value)))].map(b=>b.toString(16).padStart(2,'0')).join('');
const cookie=(name,value,maxAge=600,sameSite='Lax')=>`${name}=${encodeURIComponent(value)}; Path=/; HttpOnly; Secure; SameSite=${sameSite}; Max-Age=${maxAge}`;
const sessionCookie=(token,maxAge=60*60*24*30)=>`mythborn_session=${encodeURIComponent(token)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`;
const readCookie=(request,name)=>{const value=(request.headers.get('cookie')||'').split(';').map(x=>x.trim()).find(x=>x.startsWith(`${name}=`));return value?decodeURIComponent(value.slice(name.length+1)):null};
const configured=(env,provider)=>provider==='google'?Boolean(env.GOOGLE_CLIENT_ID&&env.GOOGLE_CLIENT_SECRET):Boolean(env.APPLE_CLIENT_ID&&env.APPLE_TEAM_ID&&env.APPLE_KEY_ID&&env.APPLE_PRIVATE_KEY);
const safeNext=value=>typeof value==='string'&&value.startsWith('/')&&!value.startsWith('//')?value:'/hesabim';
const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}});
const redirect=(location,cookies=[])=>{const headers=new Headers({location,'cache-control':'no-store'});cookies.forEach(value=>headers.append('set-cookie',value));return new Response(null,{status:302,headers})};
const clearOAuthCookies=()=>['mythborn_oauth_state','mythborn_oauth_verifier','mythborn_oauth_next','mythborn_oauth_nonce'].map(name=>cookie(name,'',0,'None'));
const oauthError=(request,code)=>redirect(`${new URL(request.url).origin}/giris?oauth_error=${encodeURIComponent(code)}`,clearOAuthCookies());

export const providerStatus=env=>({google:configured(env,'google'),apple:configured(env,'apple')});

export async function beginOAuth(request,env,provider){
 if(!['google','apple'].includes(provider)||!configured(env,provider))return json({error:'Bu giriş sağlayıcısı henüz yapılandırılmadı.'},503);
 const url=new URL(request.url),state=random(),verifier=random(),nonce=random(),next=safeNext(url.searchParams.get('devam'));
 const redirectUri=`${url.origin}/api/auth/oauth/${provider}/callback`;
 let target;
 if(provider==='google'){
  target=new URL('https://accounts.google.com/o/oauth2/v2/auth');
  target.search=new URLSearchParams({client_id:env.GOOGLE_CLIENT_ID,redirect_uri:redirectUri,response_type:'code',scope:'openid email profile',state,nonce,code_challenge:await challenge(verifier),code_challenge_method:'S256',prompt:'select_account'}).toString();
 }else{
  target=new URL('https://appleid.apple.com/auth/authorize');
  target.search=new URLSearchParams({client_id:env.APPLE_CLIENT_ID,redirect_uri:redirectUri,response_type:'code',response_mode:'form_post',scope:'name email',state,nonce}).toString();
 }
 const sameSite=provider==='apple'?'None':'Lax';
 return redirect(target.toString(),[
  cookie('mythborn_oauth_state',state,600,sameSite),
  cookie('mythborn_oauth_verifier',verifier,600,sameSite),
  cookie('mythborn_oauth_next',next,600,sameSite),
  cookie('mythborn_oauth_nonce',nonce,600,sameSite)
 ]);
}

function pemToPkcs8(pem){
 const clean=String(pem).replace(/\\n/g,'\n').replace(/-----BEGIN PRIVATE KEY-----|-----END PRIVATE KEY-----|\s/g,'');
 return Uint8Array.from(atob(clean),c=>c.charCodeAt(0));
}

async function appleClientSecret(env){
 const now=Math.floor(Date.now()/1000),header=encodeJson({alg:'ES256',kid:env.APPLE_KEY_ID}),payload=encodeJson({iss:env.APPLE_TEAM_ID,iat:now,exp:now+300,aud:'https://appleid.apple.com',sub:env.APPLE_CLIENT_ID});
 const key=await crypto.subtle.importKey('pkcs8',pemToPkcs8(env.APPLE_PRIVATE_KEY),{name:'ECDSA',namedCurve:'P-256'},false,['sign']);
 const signature=await crypto.subtle.sign({name:'ECDSA',hash:'SHA-256'},key,enc.encode(`${header}.${payload}`));
 return `${header}.${payload}.${b64url(signature)}`;
}

async function verifyAppleIdToken(idToken,env,nonce){
 const parts=String(idToken||'').split('.');if(parts.length!==3)throw new Error('APPLE_TOKEN_INVALID');
 const header=decodeJson(parts[0]),claims=decodeJson(parts[1]);
 const keysResponse=await fetch('https://appleid.apple.com/auth/keys',{headers:{accept:'application/json'}});if(!keysResponse.ok)throw new Error('APPLE_KEYS_FAILED');
 const keys=await keysResponse.json(),jwk=keys.keys?.find(item=>item.kid===header.kid&&item.kty==='RSA');if(!jwk)throw new Error('APPLE_KEY_NOT_FOUND');
 const key=await crypto.subtle.importKey('jwk',jwk,{name:'RSASSA-PKCS1-v1_5',hash:'SHA-256'},false,['verify']);
 const valid=await crypto.subtle.verify('RSASSA-PKCS1-v1_5',key,fromB64url(parts[2]),enc.encode(`${parts[0]}.${parts[1]}`));
 const now=Math.floor(Date.now()/1000),aud=Array.isArray(claims.aud)?claims.aud.includes(env.APPLE_CLIENT_ID):claims.aud===env.APPLE_CLIENT_ID;
 if(!valid||claims.iss!=='https://appleid.apple.com'||!aud||Number(claims.exp)<=now||claims.nonce!==nonce)throw new Error('APPLE_TOKEN_INVALID');
 if(!claims.sub||!claims.email||!(claims.email_verified===true||claims.email_verified==='true'))throw new Error('APPLE_EMAIL_UNVERIFIED');
 return{sub:String(claims.sub),email:String(claims.email).trim().toLowerCase()};
}

async function googleIdentity(code,redirectUri,verifier,env,nonce){
 const tokenResponse=await fetch('https://oauth2.googleapis.com/token',{method:'POST',headers:{'content-type':'application/x-www-form-urlencoded'},body:new URLSearchParams({code,client_id:env.GOOGLE_CLIENT_ID,client_secret:env.GOOGLE_CLIENT_SECRET,redirect_uri:redirectUri,grant_type:'authorization_code',code_verifier:verifier})});
 const tokens=await tokenResponse.json();if(!tokenResponse.ok||!tokens.id_token)throw new Error('GOOGLE_TOKEN_EXCHANGE_FAILED');
 const verifyResponse=await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(tokens.id_token)}`,{headers:{accept:'application/json'}});const claims=await verifyResponse.json();
 const now=Math.floor(Date.now()/1000);if(!verifyResponse.ok||claims.aud!==env.GOOGLE_CLIENT_ID||!['accounts.google.com','https://accounts.google.com'].includes(claims.iss)||Number(claims.exp)<=now||claims.nonce!==nonce||claims.email_verified!=='true'||!claims.sub||!claims.email)throw new Error('GOOGLE_TOKEN_INVALID');
 return{sub:String(claims.sub),email:String(claims.email).trim().toLowerCase()};
}

async function appleIdentity(code,redirectUri,env,nonce){
 const tokenResponse=await fetch('https://appleid.apple.com/auth/token',{method:'POST',headers:{'content-type':'application/x-www-form-urlencoded'},body:new URLSearchParams({client_id:env.APPLE_CLIENT_ID,client_secret:await appleClientSecret(env),code,grant_type:'authorization_code',redirect_uri:redirectUri})});
 const tokens=await tokenResponse.json();if(!tokenResponse.ok||!tokens.id_token)throw new Error('APPLE_TOKEN_EXCHANGE_FAILED');
 return verifyAppleIdToken(tokens.id_token,env,nonce);
}

async function establishAccount(request,env,provider,identity){
 let mapping=await env.DB.prepare('SELECT user_id FROM oauth_identities WHERE provider=? AND provider_subject=?').bind(provider,identity.sub).first();
 let userId=mapping?.user_id;
 if(!userId){
  const existing=await env.DB.prepare('SELECT id FROM users WHERE email=? AND deleted_at IS NULL').bind(identity.email).first();
  userId=existing?.id||crypto.randomUUID();
  if(!existing){
   await env.DB.prepare('INSERT INTO users (id,email,password_hash,password_salt,email_verified_at) VALUES (?,?,?,?,CURRENT_TIMESTAMP)').bind(userId,identity.email,random(48),random(24)).run();
   await env.DB.prepare("INSERT INTO subscriptions (id,user_id,status,plan_code,amount_kurus) VALUES (?,?,'inactive','mythborn_monthly_115',11500)").bind(crypto.randomUUID(),userId).run();
  }else{
   await env.DB.prepare('UPDATE users SET email_verified_at=COALESCE(email_verified_at,CURRENT_TIMESTAMP),updated_at=CURRENT_TIMESTAMP WHERE id=?').bind(userId).run();
  }
  await env.DB.prepare('INSERT INTO oauth_identities (id,user_id,provider,provider_subject,provider_email) VALUES (?,?,?,?,?)').bind(crypto.randomUUID(),userId,provider,identity.sub,identity.email).run();
 }
 const token=random(32),expiresAt=new Date(Date.now()+30*86400000).toISOString();
 await env.DB.prepare('INSERT INTO sessions (id,user_id,token_hash,expires_at,user_agent) VALUES (?,?,?,?,?)').bind(crypto.randomUUID(),userId,await sha256(token),expiresAt,request.headers.get('user-agent')||'').run();
 return token;
}

async function callbackInput(request,provider){
 if(provider==='apple'&&request.method==='POST'){const form=await request.formData();return{code:String(form.get('code')||''),state:String(form.get('state')||''),error:String(form.get('error')||'')}}
 const url=new URL(request.url);return{code:url.searchParams.get('code')||'',state:url.searchParams.get('state')||'',error:url.searchParams.get('error')||''};
}

export async function finishOAuth(request,env,provider){
 if(!['google','apple'].includes(provider)||!configured(env,provider))return oauthError(request,'provider_not_configured');
 if(!env.DB)return oauthError(request,'database_unavailable');
 try{
  const input=await callbackInput(request,provider),expectedState=readCookie(request,'mythborn_oauth_state'),verifier=readCookie(request,'mythborn_oauth_verifier'),nonce=readCookie(request,'mythborn_oauth_nonce'),next=safeNext(readCookie(request,'mythborn_oauth_next'));
  if(input.error)throw new Error('AUTHORIZATION_DENIED');
  if(!input.code||!input.state||!expectedState||input.state!==expectedState||!nonce)throw new Error('STATE_MISMATCH');
  const redirectUri=`${new URL(request.url).origin}/api/auth/oauth/${provider}/callback`;
  const identity=provider==='google'?await googleIdentity(input.code,redirectUri,verifier,env,nonce):await appleIdentity(input.code,redirectUri,env,nonce);
  const token=await establishAccount(request,env,provider,identity);
  return redirect(`${new URL(request.url).origin}${next}`,[sessionCookie(token),...clearOAuthCookies()]);
 }catch(error){console.error('oauth_callback_failed',provider,error?.message||error);return oauthError(request,error?.message||'oauth_failed')}
}
