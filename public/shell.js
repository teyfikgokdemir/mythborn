(()=>{
  const button=document.querySelector('.mobile-menu-button');
  const menu=document.querySelector('.mobile-nav');
  const closeButton=document.querySelector('[data-mobile-close]');
  const backdrop=document.querySelector('[data-mobile-backdrop]');
  if(button&&menu){
    let previousScroll=0;
    let previousFocus=null;
    const focusable=()=>[...menu.querySelectorAll('a[href],button:not([disabled])')].filter(element=>!element.closest('[hidden]'));
    const open=()=>{
      previousScroll=window.scrollY;
      previousFocus=document.activeElement;
      button.setAttribute('aria-expanded','true');
      menu.classList.add('is-open');
      menu.setAttribute('aria-hidden','false');
      if(backdrop)backdrop.hidden=false;
      document.body.classList.add('has-open-menu');
      closeButton?.focus();
    };
    const close=()=>{
      button.setAttribute('aria-expanded','false');
      menu.classList.remove('is-open');
      menu.setAttribute('aria-hidden','true');
      if(backdrop)backdrop.hidden=true;
      document.body.classList.remove('has-open-menu');
      window.scrollTo(0,previousScroll);
      if(previousFocus instanceof HTMLElement)previousFocus.focus({preventScroll:true});
    };
    button.addEventListener('click',()=>button.getAttribute('aria-expanded')==='true'?close():open());
    closeButton?.addEventListener('click',close);
    backdrop?.addEventListener('click',close);
    menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',close));
    menu.querySelectorAll('.mobile-group-toggle').forEach(toggle=>toggle.addEventListener('click',()=>{
      const panel=document.getElementById(toggle.getAttribute('aria-controls'));
      const expanded=toggle.getAttribute('aria-expanded')==='true';
      toggle.setAttribute('aria-expanded',String(!expanded));
      if(panel)panel.hidden=expanded;
      const icon=toggle.querySelector('span');
      if(icon)icon.textContent=expanded?'＋':'−';
    }));
    document.addEventListener('keydown',event=>{
      if(event.key==='Escape'&&menu.classList.contains('is-open')){event.preventDefault();close()}
      if(event.key==='Tab'&&menu.classList.contains('is-open')){
        const items=focusable(),first=items[0],last=items.at(-1);
        if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus()}
        else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus()}
      }
    });
    const active=[...menu.querySelectorAll('.mobile-nav-grid a')].find(link=>new URL(link.href).pathname===location.pathname);
    const activePanel=active?.closest('.mobile-nav-grid');
    if(activePanel){
      activePanel.hidden=false;
      const toggle=menu.querySelector(`[aria-controls="${activePanel.id}"]`);
      toggle?.setAttribute('aria-expanded','true');
      const icon=toggle?.querySelector('span');
      if(icon)icon.textContent='−';
    }
  }
  document.querySelectorAll('.desktop-explore').forEach(details=>{
    const summary=details.querySelector('summary');
    let closeTimer;
    const sync=()=>summary?.setAttribute('aria-expanded',String(details.open));
    const open=()=>{clearTimeout(closeTimer);details.open=true;sync()};
    const close=()=>{details.open=false;sync()};
    const delayedClose=()=>{closeTimer=setTimeout(close,180)};
    details.addEventListener('toggle',sync);
    details.addEventListener('mouseenter',open);
    details.addEventListener('mouseleave',delayedClose);
    summary?.addEventListener('keydown',event=>{
      if(event.key==='ArrowDown'){event.preventDefault();open();details.querySelector('.desktop-explore-panel a')?.focus()}
    });
    document.addEventListener('click',event=>{if(!details.contains(event.target))close()});
    document.addEventListener('keydown',event=>{if(event.key==='Escape'){close();details.querySelector('summary')?.focus()}});
    sync();
  });
  document.querySelectorAll('.header-language').forEach(details=>{
    const summary=details.querySelector('summary');
    const links=[...details.querySelectorAll('a')];
    const close=focus=>{details.open=false;if(focus)summary?.focus()};
    document.addEventListener('pointerdown',event=>{if(!details.contains(event.target))close(false)});
    document.addEventListener('keydown',event=>{
      if(event.key==='Escape'&&details.open){event.preventDefault();close(true)}
      if(!details.open)return;
      const index=links.indexOf(document.activeElement);
      if(event.key==='ArrowDown'){event.preventDefault();links[(index+1+links.length)%links.length]?.focus()}
      if(event.key==='ArrowUp'){event.preventDefault();links[(index-1+links.length)%links.length]?.focus()}
    });
    summary?.addEventListener('keydown',event=>{if(event.key==='ArrowDown'){event.preventDefault();details.open=true;links[0]?.focus()}});
  });
})();
