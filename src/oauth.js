const enc=new TextEncoder();
const b64url=bytes=>btoa(String.fromCharCode(...new Uint8Array(bytes))).replace(/=/g,'').replace(/\+/g,'-').replace(/\//g,'_');
const random=()=>{const b=new Uint8Array(32);crypto.getRandomValues(b);return b64url(b)};
const challenge=async value=>b64url(await crypto.subtle.digest('SHA-256',enc.encode(value)));
const cookie=(name,value,maxAge=600,sameSite='Lax')=>`${name}=${encodeURIComponent(value)}; Path=/; HttpOnly; Secure; SameSite=${sameSite}; Max-Age=${maxAge}`;
const configured=(env,provider)=>provider==='google'?Boolean(env.GOOGLE_CLIENT_ID&&env.GOOGLE_CLIENT_SECRET):Boolean(env.APPLE_CLIENT_ID&&env.APPLE_TEAM_ID&&env.APPLE_KEY_ID&&env.APPLE_PRIVATE_KEY);
export const providerStatus=env=>({google:configured(env,'google'),apple:configured(env,'apple')});
export async function beginOAuth(request,env,provider){
 if(!['google','apple'].includes(provider)||!configured(env,provider))return new Response(JSON.stringify({error:'Bu giriş sağlayıcısı henüz yapılandırılmadı.'}),{status:503,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}});
 const url=new URL(request.url),state=random(),verifier=random(),next=url.searchParams.get('devam')||'/hesabim',safeNext=next.startsWith('/')&&!next.startsWith('//')?next:'/hesabim';
 const redirectUri=`${url.origin}/api/auth/oauth/${provider}/callback`;
 let target;
 if(provider==='google'){
  target=new URL('https://accounts.google.com/o/oauth2/v2/auth');
  target.search=new URLSearchParams({client_id:env.GOOGLE_CLIENT_ID,redirect_uri:redirectUri,response_type:'code',scope:'openid email profile',state,code_challenge:await challenge(verifier),code_challenge_method:'S256',prompt:'select_account'}).toString();
 }else{
  target=new URL('https://appleid.apple.com/auth/authorize');
  target.search=new URLSearchParams({client_id:env.APPLE_CLIENT_ID,redirect_uri:redirectUri,response_type:'code',response_mode:'form_post',scope:'name email',state}).toString();
 }
 const headers=new Headers({location:target.toString(),'cache-control':'no-store'});
 headers.append('set-cookie',cookie('mythborn_oauth_state',state,600,provider==='apple'?'None':'Lax'));
 headers.append('set-cookie',cookie('mythborn_oauth_verifier',verifier,600,provider==='apple'?'None':'Lax'));
 headers.append('set-cookie',cookie('mythborn_oauth_next',safeNext,600,provider==='apple'?'None':'Lax'));
 return new Response(null,{status:302,headers});
}
