(()=>{
const root=document.querySelector('[data-current-sky]');if(!root)return;
const aspectTone={Kavuşum:'yoğunlaşma',Sekstil:'fırsat',Kare:'gerilim',Üçgen:'akış',Karşıt:'denge'};
const escape=value=>String(value??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const render=data=>{
  const date=new Intl.DateTimeFormat('tr-TR',{dateStyle:'long',timeStyle:'short'}).format(new Date(data.calculatedAt));
  root.innerHTML=`
  <div class="sky-summary"><p class="eyebrow">${escape(date)}</p><h2>${escape(data.headline)}</h2><p>${escape(data.summary)}</p><div class="result-metric"><strong>${escape(data.dominantElement)}</strong><span>baskın element</span></div></div>
  <div class="sky-columns">
    <section><h3>Gezegen konumları</h3><div class="sky-planets">${data.planets.map(p=>`<article><small>${escape(p.name)}</small><strong>${escape(p.sign)}</strong><span>${Number(p.degree).toFixed(2)}° · ${escape(p.element)} · ${escape(p.mode)}</span></article>`).join('')}</div></section>
    <section><h3>Günün belirgin açıları</h3><div class="sky-aspects">${data.aspects.length?data.aspects.map(a=>`<article><strong>${escape(a.from)} ${escape(a.type)} ${escape(a.to)}</strong><span>${escape(aspectTone[a.type]||'etkileşim')} · orb ${Number(a.orb).toFixed(2)}°</span></article>`).join(''):'<p>Bugün dar orb içinde öne çıkan majör açı bulunmuyor.</p>'}</div></section>
  </div>
  <p class="provider-note">${escape(data.note)} Hesaplama motoru: ${escape(data.engine.name)}.</p>`;
};
const style=document.createElement('style');style.textContent=`
.sky-tool{display:block}.sky-summary h2{max-width:950px;margin:12px 0 16px;font-family:Georgia,serif;font-size:clamp(38px,6vw,72px);font-weight:400;line-height:.98}.sky-summary>p{max-width:850px;color:#aaa2b0;line-height:1.75}.sky-columns{display:grid;grid-template-columns:1.35fr .65fr;gap:18px;margin-top:32px}.sky-columns>section{padding:24px;border:1px solid rgba(255,255,255,.11);border-radius:22px;background:rgba(255,255,255,.025)}.sky-columns h3{margin:0 0 18px;color:#e8c883;font-size:12px;letter-spacing:.14em;text-transform:uppercase}.sky-planets{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.sky-planets article,.sky-aspects article{display:grid;gap:5px;padding:16px;border:1px solid rgba(255,255,255,.09);border-radius:15px;background:rgba(255,255,255,.02)}.sky-planets small{color:#8f8795}.sky-planets strong{font-family:Georgia,serif;font-size:24px;font-weight:400}.sky-planets span,.sky-aspects span{color:#8f8795;font-size:12px}.sky-aspects{display:grid;gap:10px}@media(max-width:900px){.sky-columns{grid-template-columns:1fr}}@media(max-width:620px){.sky-planets{grid-template-columns:1fr}}`;
document.head.appendChild(style);
fetch('/api/astrology/current-sky').then(async response=>{const data=await response.json();if(!response.ok)throw new Error(data.error||'Güncel gökyüzü alınamadı.');render(data)}).catch(error=>{root.innerHTML=`<p class="form-message">${escape(error.message)}</p>`});
})();