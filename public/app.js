(()=>{
  if(typeof window.gtag==='function')window.gtag('config','G-RW928SX37X');
  const locale=window.MYTHBORN_LOCALE||'tr';
  const prefix=locale==='tr'?'':locale==='en'?'/en':'/gr';
  const localPath=path=>`${prefix}${path}`;
  const text={
    tr:{error:'İşlem tamamlanamadı.',status:'Ücretsiz üye · Tüm açılımlar açık',empty:'Henüz kaydedilmiş açılımın yok.'},
    en:{error:'The request could not be completed.',status:'Free member · All readings unlocked',empty:'You do not have any saved readings yet.'},
    el:{error:'Η ενέργεια δεν ολοκληρώθηκε.',status:'Δωρεάν μέλος · Όλες οι αναγνώσεις διαθέσιμες',empty:'Δεν έχεις ακόμη αποθηκευμένες αναγνώσεις.'},
    es:{error:'No se pudo completar la solicitud.',status:'Miembro gratuito · Todas las lecturas están disponibles',empty:'Aún no tienes lecturas guardadas.'}
  }[locale];
  const emitAccountEvent=(name,params={})=>{if(typeof window.gtag!=='function')return;window.gtag('event',name,{...params,page_path:location.pathname,language:locale})};
  const api=async(path,options={})=>{
    const response=await fetch(path,{...options,headers:{'content-type':'application/json','x-mythborn-locale':locale,...(options.headers||{})}});
    let data={};try{data=await response.json()}catch{}
    if(!response.ok)throw new Error(locale==='tr'?(data.error||text.error):text.error);
    return data;
  };
  document.querySelectorAll('[data-auth-form]').forEach(form=>form.addEventListener('submit',async event=>{
    event.preventDefault();
    const mode=form.dataset.authForm,message=form.querySelector('[data-form-message]'),submit=form.querySelector('button[type="submit"]');
    message.textContent='';submit.disabled=true;
    try{
      const values=new FormData(form);
      await api(mode==='giris'?'/api/auth/login':'/api/auth/register',{method:'POST',body:JSON.stringify({email:values.get('email'),password:values.get('password')})});
      emitAccountEvent(mode==='giris'?'login_completed':'signup_completed',{auth_method:'email'});
      const next=new URLSearchParams(location.search).get('devam');
      location.href=next&&next.startsWith('/')&&!next.startsWith('//')?localPath(next.replace(/^\/(?:en|gr)(?=\/|$)/,'')):localPath('/hesabim');
    }catch(error){emitAccountEvent(mode==='giris'?'login_error':'signup_error',{auth_method:'email'});message.textContent=error.message}finally{submit.disabled=false}
  }));
  document.querySelector('[data-logout]')?.addEventListener('click',async()=>{emitAccountEvent('logout_started');try{await api('/api/auth/logout',{method:'POST',body:'{}'})}finally{location.href=localPath('/')}});
  const account=document.querySelector('[data-account]');
  if(account)(async()=>{
    try{
      const session=await api('/api/auth/me');
      account.querySelector('[data-account-email]').textContent=session.user.email;
      account.querySelector('[data-account-status]').textContent=text.status;
      const history=await api('/api/results'),root=account.querySelector('[data-result-history]');
      root.innerHTML=history.results?.length?history.results.map(item=>`<article class="history-item"><strong>${item.archetype_name}</strong><span>${new Date(item.created_at).toLocaleDateString(locale==='tr'?'tr-TR':locale==='en'?'en-GB':'el-GR')}</span></article>`).join(''):`<p>${text.empty}</p>`;
      emitAccountEvent('account_viewed',{saved_readings:Number(history.results?.length||0)});
    }catch{location.href=`${localPath('/giris')}?devam=/hesabim`}
  })();
  window.MythbornApi=api;
})();