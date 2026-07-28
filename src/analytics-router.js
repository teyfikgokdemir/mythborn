import app from './app-router.js';

const appendSources=(policy,directive,sources)=>{
  const pattern=new RegExp(`(^|;\\s*)${directive}\\s+([^;]*)`);
  const match=policy.match(pattern);
  if(!match)return `${policy.replace(/;?\s*$/,'')}; ${directive} ${sources.join(' ')}`;
  const existing=new Set(match[2].trim().split(/\s+/).filter(Boolean));
  sources.forEach(source=>existing.add(source));
  return policy.replace(pattern,`${match[1]}${directive} ${[...existing].join(' ')}`);
};

const allowGoogleAnalytics=policy=>{
  let next=policy;
  next=appendSources(next,'script-src',['https://www.googletagmanager.com']);
  next=appendSources(next,'connect-src',[
    'https://www.google-analytics.com',
    'https://analytics.google.com',
    'https://region1.google-analytics.com',
    'https://www.googletagmanager.com'
  ]);
  return next;
};

export default {
  async fetch(request,env,ctx){
    const response=await app.fetch(request,env,ctx);
    const policy=response.headers.get('content-security-policy');
    if(!policy)return response;
    const headers=new Headers(response.headers);
    headers.set('content-security-policy',allowGoogleAnalytics(policy));
    return new Response(response.body,{status:response.status,statusText:response.statusText,headers});
  }
};
