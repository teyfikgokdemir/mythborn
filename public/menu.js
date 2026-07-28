(()=>{
if(!document.querySelector('[data-discovery-styles]')){
  const style=document.createElement('style');
  style.dataset.discoveryStyles='';
  style.textContent='.discovery-hero{padding-top:92px}.discovery-hero>h1{max-width:900px;margin:14px 0 18px;font-family:Georgia,serif;font-size:clamp(52px,8vw,104px);font-weight:400;line-height:.95;letter-spacing:-.05em}.discovery-tool{display:grid;gap:18px;margin-top:38px;padding:clamp(24px,5vw,48px);border:1px solid rgba(255,255,255,.13);border-radius:26px;background:radial-gradient(circle at 100% 0,rgba(156,124,255,.14),transparent 38%),rgba(255,255,255,.045)}.compact-tool{grid-template-columns:1fr 1fr auto;align-items:end}.discovery-tool label{display:grid;gap:9px;color:#ddd4e5;font-size:12px;font-weight:800}.discovery-tool input,.discovery-tool select,.discovery-tool textarea{width:100%;min-height:52px;padding:0 15px;border:1px solid rgba(255,255,255,.13);border-radius:13px;background:#0d0b12;color:#f8f2e8}.discovery-tool textarea{min-height:190px;padding:16px;resize:vertical;line-height:1.6}.discovery-result{margin-top:26px;padding:clamp(24px,5vw,44px);border:1px solid rgba(232,200,131,.26);border-radius:26px;background:radial-gradient(circle at 10% 0,rgba(232,200,131,.1),transparent 40%),rgba(255,255,255,.035)}.discovery-result h2,.moon-tool h2{font-family:Georgia,serif;font-size:clamp(38px,6vw,72px);font-weight:400}.result-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:22px}.result-grid article{padding:20px;border:1px solid rgba(255,255,255,.13);border-radius:18px;background:rgba(255,255,255,.025)}.result-grid article>strong{font-family:Georgia,serif;font-size:54px;color:#e8c883}.result-metric{display:flex;align-items:end;gap:14px;margin:20px 0}.result-metric strong{font-family:Georgia,serif;font-size:68px;font-weight:400;color:#e8c883}.result-metric span{padding-bottom:11px;color:#aaa2b0}.moon-tool{min-height:340px;align-content:center}.nav-direct-tool{white-space:nowrap}@media(max-width:1180px){.topbar .nav{gap:14px}.topbar .nav a{font-size:12px}}@media(max-width:900px){.compact-tool{grid-template-columns:1fr 1fr}.compact-tool .btn{grid-column:1/-1}.result-grid{grid-template-columns:1fr}}@media(max-width:620px){.compact-tool{grid-template-columns:1fr}.compact-tool .btn{grid-column:auto}.discovery-hero{padding-top:54px}.discovery-hero>h1{font-size:clamp(46px,15vw,70px)}}';
  document.head.appendChild(style);
}

const directLinks=[
  ['/ruya-yorumlari','Rüya'],
  ['/burc-uyumu','Uyum'],
  ['/numeroloji','Numeroloji'],
  ['/ay-takvimi','Ay Takvimi']
];

const nav=document.querySelector('.topbar .nav');
if(nav&&!nav.querySelector('[href="/ruya-yorumlari"]')){
  const account=[...nav.children].find(item=>item.textContent.trim()==='Hesabım');
  directLinks.forEach(([href,label])=>{
    const link=document.createElement('a');
    link.href=href;
    link.textContent=label;
    link.className='nav-direct-tool';
    nav.insertBefore(link,account||null);
  });
}

const mobile=document.querySelector('.mobile-nav');
if(mobile&&!mobile.querySelector('[href="/ruya-yorumlari"]')){
  const meta=mobile.querySelector('.mobile-nav-meta');
  directLinks.forEach(([href,label])=>{
    const link=document.createElement('a');
    link.href=href;
    link.textContent=label==='Rüya'?'Rüya Yorumları':label==='Uyum'?'Burç Uyumu':label;
    mobile.insertBefore(link,meta);
  });
}
})();