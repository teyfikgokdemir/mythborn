(()=>{
  const locale=window.MYTHBORN_LOCALE||'tr';
  const names={
    tr:{empty:'Aradığınız içerik bulunamadı.',all:'sonuç',loading:'Arama dizini yükleniyor…',error:'Arama dizini şu anda yüklenemedi.'},
    en:{empty:'No matching content was found.',all:'results',loading:'Loading the search index…',error:'The search index is temporarily unavailable.'},
    el:{empty:'Δεν βρέθηκε σχετικό περιεχόμενο.',all:'αποτελέσματα',loading:'Φόρτωση ευρετηρίου…',error:'Το ευρετήριο αναζήτησης δεν είναι προσωρινά διαθέσιμο.'},
    es:{empty:'No se encontró contenido relacionado.',all:'resultados',loading:'Cargando el índice de búsqueda…',error:'El índice de búsqueda no está disponible temporalmente.'}
  }[locale];
  const form=document.querySelector('[data-site-search]'),output=document.querySelector('[data-search-results]');
  let items=[];
  const render=()=>{
    const q=String(form.elements.q.value||'').trim().toLocaleLowerCase(locale==='el'?'el':locale==='es'?'es':'tr'),category=String(form.elements.category.value||'');
    const found=items.filter(item=>(!category||item.category===category)&&(!q||`${item.title} ${item.description}`.toLocaleLowerCase(locale==='el'?'el':locale==='es'?'es':'tr').includes(q)));
    output.innerHTML=found.length?`<p><strong>${found.length}</strong> ${names.all}</p><div class="search-result-grid">${found.map(item=>`<a href="${item.url}"><strong>${item.title}</strong><span>${item.description}</span></a>`).join('')}</div>`:`<p class="search-empty">${names.empty}</p>`;
  };
  form?.addEventListener('submit',event=>{event.preventDefault();render()});
  form?.addEventListener('input',render);
  const query=new URLSearchParams(location.search).get('q');
  if(query)form.elements.q.value=query;
  output.textContent=names.loading;
  fetch(`/api/search-index?locale=${encodeURIComponent(locale)}`,{headers:{accept:'application/json'}})
    .then(response=>response.ok?response.json():Promise.reject())
    .then(data=>{items=Array.isArray(data.items)?data.items:[];render()})
    .catch(()=>{output.innerHTML=`<p class="search-empty">${names.error}</p>`});
})();
