(()=>{
  const form=document.querySelector('[data-auth-form]');
  if(!form)return;
  const locale=location.pathname==='/en'||location.pathname.startsWith('/en/')?'en':location.pathname==='/gr'||location.pathname.startsWith('/gr/')?'el':'tr';
  const prefix=locale==='tr'?'':locale==='en'?'/en':'/gr';
  const copy={
    tr:{google:'Google ile devam et',divider:'veya e-posta ile',disabled:'Google bağlantısı üretim ortamında henüz etkin değil.',error:'Google bağlantı durumu şu anda doğrulanamadı.'},
    en:{google:'Continue with Google',divider:'or continue with email',disabled:'Google sign-in is not enabled in this environment yet.',error:'Google sign-in status could not be verified.'},
    el:{google:'Συνέχεια με Google',divider:'ή συνέχεια με email',disabled:'Η σύνδεση Google δεν είναι ακόμη ενεργή σε αυτό το περιβάλλον.',error:'Δεν ήταν δυνατή η επαλήθευση της σύνδεσης Google.'}
  }[locale];
  const requested=new URLSearchParams(location.search).get('devam');
  const next=requested&&requested.startsWith('/')&&!requested.startsWith('//')
    ?(prefix&&!(requested===prefix||requested.startsWith(prefix+'/'))?prefix+requested:requested)
    :(prefix+'/hesabim'||'/hesabim');
  const style=document.createElement('style');
  style.textContent='.social-auth-panel{width:min(560px,100%);margin:0 auto 18px}.social-auth-button{min-height:52px;display:flex;align-items:center;justify-content:center;gap:10px;border:1px solid rgba(255,255,255,.14);border-radius:14px;background:#fff;color:#171717;font-weight:800}.social-auth-button[aria-disabled=true]{opacity:.62}.social-auth-note{text-align:center;color:#aaa2b0;font-size:11px}.social-auth-divider{display:flex;align-items:center;gap:12px;margin:15px 0;color:#77717f;font-size:11px;text-transform:uppercase}.social-auth-divider:before,.social-auth-divider:after{content:"";height:1px;flex:1;background:rgba(255,255,255,.1)}';
  document.head.appendChild(style);
  const panel=document.createElement('div');
  panel.className='social-auth-panel';
  panel.innerHTML=`<a class="social-auth-button" href="/api/auth/oauth/google/start?devam=${encodeURIComponent(next)}"><span aria-hidden="true">G</span><span>${copy.google}</span></a><p class="social-auth-note" hidden></p><div class="social-auth-divider"><span>${copy.divider}</span></div>`;
  form.parentNode.insertBefore(panel,form);
  const button=panel.querySelector('.social-auth-button'),note=panel.querySelector('.social-auth-note');
  fetch('/api/auth/providers',{headers:{accept:'application/json'},cache:'no-store'})
    .then(response=>response.ok?response.json():Promise.reject())
    .then(data=>{
      if(data.google)return;
      button.setAttribute('aria-disabled','true');
      note.hidden=false;
      note.textContent=copy.disabled;
      button.addEventListener('click',event=>event.preventDefault());
    })
    .catch(()=>{note.hidden=false;note.textContent=copy.error});
})();
