import finalRouter from './final-router.js';

const hotfixHead=`<link rel="stylesheet" href="/mobile-menu-clean.css"><style>
.topbar{position:sticky!important;top:0!important;z-index:110!important;width:100%!important;background:rgba(8,7,11,.92)!important;border-bottom:1px solid rgba(255,255,255,.08)!important;backdrop-filter:blur(18px)!important;-webkit-backdrop-filter:blur(18px)!important;transform:none!important;opacity:1!important;visibility:visible!important}
.topbar.is-scrolled{background:rgba(8,7,11,.97)!important;box-shadow:0 12px 30px rgba(0,0,0,.22)!important}
@media(min-width:761px){.topbar{min-height:76px!important}.topbar .shell{min-height:76px!important}.topbar .nav{align-items:center!important}}
</style>`;

const hotfixScript=`<script>(()=>{const apply=()=>{document.querySelectorAll('.language-switcher a').forEach(a=>{if(a.textContent.trim()==='EL')a.textContent='GR'});const header=document.querySelector('.topbar');if(header){header.style.position='sticky';header.style.top='0';header.style.zIndex='110';header.style.transform='none';header.style.opacity='1';header.style.visibility='visible'}};document.readyState==='loading'?document.addEventListener('DOMContentLoaded',apply):apply();new MutationObserver(apply).observe(document.documentElement,{childList:true,subtree:true})})()</script>`;

export default{async fetch(request,env,ctx){const response=await finalRouter.fetch(request,env,ctx),type=response.headers.get('content-type')||'';if(!type.includes('text/html'))return response;let html=await response.text();html=html.replace('</head>',`${hotfixHead}</head>`).replace('</body>',`${hotfixScript}</body>`);return new Response(html,{status:response.status,headers:response.headers})}};
