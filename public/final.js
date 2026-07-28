(()=>{
  const locale=window.MYTHBORN_LOCALE||'tr';
  const a11y={tr:{show:'Şifreyi göster',hide:'Şifreyi gizle',skip:'Ana içeriğe geç'},en:{show:'Show password',hide:'Hide password',skip:'Skip to main content'},el:{show:'Εμφάνιση κωδικού',hide:'Απόκρυψη κωδικού',skip:'Μετάβαση στο κύριο περιεχόμενο'}}[locale];
  const originalFetch=window.fetch.bind(window);
  window.fetch=(input,init={})=>{
    try{
      const path=new URL(typeof input==='string'?input:input.url,location.origin).pathname;
      if(['/api/auth/register','/api/auth/login','/api/auth/request-password-reset'].includes(path)&&typeof init.body==='string'){
        const payload=JSON.parse(init.body);
        const token=document.querySelector('[name="cf-turnstile-response"]')?.value;
        if(token)payload.turnstileToken=token;
        init={...init,body:JSON.stringify(payload)};
      }
    }catch{}
    return originalFetch(input,init);
  };
  const siteKey=document.querySelector('meta[name="turnstile-site-key"]')?.content;
  if(siteKey)document.querySelectorAll('[data-auth-form]').forEach(form=>{
    if(form.querySelector('.cf-turnstile'))return;
    const slot=document.createElement('div');
    slot.className='cf-turnstile';
    slot.dataset.sitekey=siteKey;
    slot.dataset.theme='dark';
    slot.dataset.size='flexible';
    form.querySelector('button[type="submit"]')?.before(slot);
  });
  document.querySelectorAll('input[type="password"]').forEach(input=>{
    if(input.closest('.password-field'))return;
    const wrapper=document.createElement('span');
    wrapper.className='password-field';
    input.parentNode.insertBefore(wrapper,input);
    wrapper.appendChild(input);
    const toggle=document.createElement('button');
    toggle.type='button';
    toggle.className='password-toggle';
    toggle.setAttribute('aria-label',a11y.show);
    toggle.textContent='◉';
    wrapper.appendChild(toggle);
    toggle.addEventListener('click',()=>{
      const show=input.type==='password';
      input.type=show?'text':'password';
      toggle.setAttribute('aria-label',show?a11y.hide:a11y.show);
    });
  });
  const main=document.querySelector('main');
  if(main&&!main.id)main.id='ana-icerik';
  if(main&&!document.querySelector('.skip-link')){
    const skip=document.createElement('a');
    skip.className='skip-link';
    skip.href='#ana-icerik';
    skip.textContent=a11y.skip;
    document.body.prepend(skip);
  }
  document.querySelectorAll('img').forEach(image=>{
    if(!image.hasAttribute('loading'))image.loading='lazy';
    image.decoding='async';
  });
})();
