(()=>{
if(!document.querySelector('[data-discovery-styles]')){
  const style=document.createElement('style');
  style.dataset.discoveryStyles='';
  style.textContent=`
  .discovery-hero{padding-top:92px}.discovery-hero>h1{max-width:900px;margin:14px 0 18px;font-family:Georgia,serif;font-size:clamp(52px,8vw,104px);font-weight:400;line-height:.95;letter-spacing:-.05em}
  .discovery-tool{display:grid;gap:18px;margin-top:38px;padding:clamp(24px,5vw,48px);border:1px solid rgba(255,255,255,.13);border-radius:26px;background:radial-gradient(circle at 100% 0,rgba(156,124,255,.14),transparent 38%),rgba(255,255,255,.045)}
  .compact-tool{grid-template-columns:1fr 1fr auto;align-items:end}.discovery-tool label{display:grid;gap:9px;color:#ddd4e5;font-size:12px;font-weight:800}.discovery-tool input,.discovery-tool select,.discovery-tool textarea{width:100%;min-height:52px;padding:0 15px;border:1px solid rgba(255,255,255,.13);border-radius:13px;background:#0d0b12;color:#f8f2e8}.discovery-tool textarea{min-height:190px;padding:16px;resize:vertical;line-height:1.6}
  .discovery-result{margin-top:26px;padding:clamp(24px,5vw,44px);border:1px solid rgba(232,200,131,.26);border-radius:26px;background:radial-gradient(circle at 10% 0,rgba(232,200,131,.1),transparent 40%),rgba(255,255,255,.035)}.discovery-result h2,.moon-tool h2{font-family:Georgia,serif;font-size:clamp(38px,6vw,72px);font-weight:400}.result-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:22px}.result-grid article{padding:20px;border:1px solid rgba(255,255,255,.13);border-radius:18px;background:rgba(255,255,255,.025)}.result-grid article>strong{font-family:Georgia,serif;font-size:54px;color:#e8c883}.result-metric{display:flex;align-items:end;gap:14px;margin:20px 0}.result-metric strong{font-family:Georgia,serif;font-size:68px;font-weight:400;color:#e8c883}.result-metric span{padding-bottom:11px;color:#aaa2b0}.moon-tool{min-height:340px;align-content:center}
  .nav-direct-tool{white-space:nowrap}
  .home .section:has(.oracle-grid){padding-top:clamp(54px,6vw,88px);padding-bottom:clamp(58px,7vw,96px)}.home .section:has(.oracle-grid)>h2{max-width:980px;margin-bottom:0;font-size:clamp(46px,5.8vw,78px);line-height:.98}.home .oracle-grid{grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-top:28px}.home .oracle-card{min-height:230px;padding:22px;border-radius:22px}.home .oracle-card:after{right:18px;top:14px;font-size:38px}.home .oracle-card h3{margin:38px 0 8px;font-size:clamp(25px,2.1vw,34px);line-height:1.06}.home .oracle-card p{margin:0 0 18px;font-size:14px;line-height:1.55}.home .oracle-card .btn{min-height:42px;padding:0 17px;font-size:10px}
  .seo-faq{padding-top:clamp(72px,9vw,130px)!important;padding-bottom:clamp(72px,9vw,120px)!important}.seo-faq h2{max-width:900px;margin:12px 0 34px;font-size:clamp(48px,7vw,92px);line-height:.95}.seo-faq details{max-width:100%;margin:0 0 14px;border:1px solid rgba(255,255,255,.13);border-radius:20px;background:rgba(255,255,255,.035);overflow:hidden}.seo-faq summary{position:relative;padding:24px 64px 24px 26px;font-size:17px;font-weight:750;cursor:pointer;list-style:none}.seo-faq summary::-webkit-details-marker{display:none}.seo-faq summary:after{content:'+';position:absolute;right:26px;top:50%;transform:translateY(-50%);color:#e8c883;font-size:28px;font-weight:300}.seo-faq details[open] summary:after{content:'−'}.seo-faq details p{margin:0;padding:0 26px 26px;max-width:900px;color:#aaa2b0;font-size:15px;line-height:1.75}
  .site-footer{margin-top:clamp(72px,10vw,150px);border-top:1px solid rgba(255,255,255,.12);padding:54px 0 26px}.site-footer-grid{display:grid;grid-template-columns:minmax(260px,1.5fr) repeat(3,minmax(130px,1fr));gap:42px}.site-footer-brand{display:grid;align-content:start;gap:16px}.site-footer-logo{display:inline-flex;align-items:center;gap:12px;font-weight:900;letter-spacing:.16em}.site-footer-logo img{width:28px;height:28px;object-fit:contain}.site-footer-brand p{max-width:390px;margin:0;color:#938b99;line-height:1.7}.site-footer h3{margin:0 0 18px;color:#e8c883;font-size:11px;letter-spacing:.16em;text-transform:uppercase}.site-footer nav{display:grid;gap:11px}.site-footer nav a{color:#aaa2b0;font-size:14px}.site-footer nav a:hover{color:#f8f2e8}.site-footer-bottom{display:flex;justify-content:space-between;gap:24px;margin-top:46px;padding-top:24px;border-top:1px solid rgba(255,255,255,.09);color:#77717f;font-size:12px}.site-footer-bottom a{color:#aaa2b0}
  @media(max-width:1180px){.topbar .nav{gap:12px}.topbar .nav a{font-size:11px}.home .oracle-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.site-footer-grid{grid-template-columns:1.4fr repeat(2,1fr)}.site-footer-column:last-of-type{grid-column:2/-1}}
  @media(max-width:900px){.compact-tool{grid-template-columns:1fr 1fr}.compact-tool .btn{grid-column:1/-1}.result-grid{grid-template-columns:1fr}.home .oracle-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.home .oracle-card:first-child{grid-column:auto}.site-footer-grid{grid-template-columns:1fr 1fr}.site-footer-brand{grid-column:1/-1}.site-footer-column:last-of-type{grid-column:auto}}
  @media(max-width:620px){.compact-tool{grid-template-columns:1fr}.compact-tool .btn{grid-column:auto}.discovery-hero{padding-top:54px}.discovery-hero>h1{font-size:clamp(46px,15vw,70px)}.home .section:has(.oracle-grid)>h2{font-size:clamp(42px,12vw,60px)}.home .oracle-grid{grid-template-columns:1fr;gap:12px}.home .oracle-card{min-height:210px;padding:20px}.home .oracle-card h3{font-size:30px}.seo-faq h2{font-size:clamp(46px,14vw,68px)}.seo-faq summary{padding:20px 54px 20px 20px;font-size:15px}.seo-faq details p{padding:0 20px 22px}.site-footer{padding-bottom:90px}.site-footer-grid{grid-template-columns:1fr;gap:32px}.site-footer-brand,.site-footer-column:last-of-type{grid-column:auto}.site-footer-bottom{display:grid;gap:10px}}
  `;
  document.head.appendChild(style);
}
const directLinks=[
  ['/bugunun-gokyuzu','Gökyüzü'],
  ['/ruya-yorumlari','Rüya'],
  ['/burc-uyumu','Uyum'],
  ['/numeroloji','Numeroloji'],
  ['/ay-takvimi','Ay Takvimi']
];
const nav=document.querySelector('.topbar .nav');
if(nav&&!nav.querySelector('[href="/bugunun-gokyuzu"]')){
  const account=[...nav.children].find(item=>item.textContent.trim()==='Hesabım');
  directLinks.forEach(([href,label])=>{const link=document.createElement('a');link.href=href;link.textContent=label;link.className='nav-direct-tool';nav.insertBefore(link,account||null)});
}
const mobile=document.querySelector('.mobile-nav');
if(mobile&&!mobile.querySelector('[href="/bugunun-gokyuzu"]')){
  const meta=mobile.querySelector('.mobile-nav-meta');
  directLinks.forEach(([href,label])=>{const link=document.createElement('a');link.href=href;link.textContent=label==='Gökyüzü'?'Bugünün Gökyüzü':label==='Rüya'?'Rüya Yorumları':label==='Uyum'?'Burç Uyumu':label;mobile.insertBefore(link,meta)});
}
const oldFooter=document.querySelector('footer');
if(oldFooter&&!oldFooter.classList.contains('site-footer')){
  oldFooter.className='site-footer';
  oldFooter.innerHTML=`
    <div class="site-footer-grid">
      <div class="site-footer-brand"><a class="site-footer-logo" href="/"><img src="/images/mythborn-emblem.png" alt=""><span>MYTHBORN</span></a><p>Tarot, gerçek zamanlı astroloji ve sembolik farkındalık araçlarını tek merkezde, ücretsiz ve sade bir deneyimle sunar.</p><a href="mailto:info@mythborn.co">info@mythborn.co</a></div>
      <div class="site-footer-column"><h3>Açılımlar</h3><nav><a href="/gunluk-kart">Günlük Kart</a><a href="/tarot">3 Kart Tarot</a><a href="/ask">Aşk & Geri Dönüş</a><a href="/katina">Katina</a></nav></div>
      <div class="site-footer-column"><h3>Astroloji</h3><nav><a href="/bugunun-gokyuzu">Bugünün Gökyüzü</a><a href="/astroloji">Doğum Haritası</a><a href="/haftalik-burc">Haftalık Burç</a><a href="/burc-uyumu">Burç Uyumu</a><a href="/ay-takvimi">Ay Takvimi</a></nav></div>
      <div class="site-footer-column"><h3>Keşfet</h3><nav><a href="/ruya-yorumlari">Rüya Yorumları</a><a href="/numeroloji">Numeroloji</a><a href="/hesabim">Hesabım</a><a href="/kayit">Ücretsiz Üye Ol</a></nav></div>
    </div>
    <div class="site-footer-bottom"><span>© 2026 Mythborn. Tüm hakları saklıdır.</span><span>Eğlence ve kişisel farkındalık amaçlıdır · <a href="/gizlilik">Gizlilik</a> · <a href="/kvkk">KVKK</a> · <a href="/kullanim-kosullari">Kullanım Koşulları</a> · <a href="/cerezler">Çerezler</a></span></div>`;
}
})();