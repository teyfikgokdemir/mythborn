// Mythborn contact page: mailto-only, no unverified server-side collection.
import { getRouteHref } from '../layout.js';
const copy = {
tr:{k:'İLETİŞİM · MYTHBORN',h:'Soruların için buradayız.',lead:'Bir hesaplamayla ilgili sorun mu yaşıyorsun, içeriklerimiz hakkında bir şey mi merak ediyorsun? Doğru adrese kolayca ulaş.',support:'Destek ve teknik sorular',supportDesc:'Hesaplayıcılar, erişilebilirlik, hatalı bağlantılar ve kullanım sorunları.',info:'Genel iletişim ve iş birliği',infoDesc:'İçerik önerileri, geri bildirimler ve iş birliği talepleri.',write:'E-posta gönder',note:'Bağlantılar cihazındaki e-posta uygulamasını açar. Bu sayfada form verisi toplanmaz veya saklanmaz.',privacy:'Gizlilik politikası',home:'Ana sayfa'},
en:{k:'CONTACT · MYTHBORN',h:'We are here for your questions.',lead:'Need help with a calculation or have a question about our content? Reach the right inbox directly.',support:'Support and technical questions',supportDesc:'Calculators, accessibility, broken links and usage issues.',info:'General enquiries and partnerships',infoDesc:'Content suggestions, feedback and collaboration.',write:'Send an email',note:'These links open your email app. This page does not collect or store form submissions.',privacy:'Privacy policy',home:'Home'},
el:{k:'ΕΠΙΚΟΙΝΩΝΙΑ · MYTHBORN',h:'Είμαστε εδώ για τις ερωτήσεις σας.',lead:'Χρειάζεστε βοήθεια με έναν υπολογισμό ή έχετε ερώτηση για το περιεχόμενό μας; Επικοινωνήστε απευθείας.',support:'Υποστήριξη και τεχνικά θέματα',supportDesc:'Υπολογισμοί, προσβασιμότητα, σύνδεσμοι και προβλήματα χρήσης.',info:'Γενικές ερωτήσεις και συνεργασίες',infoDesc:'Προτάσεις περιεχομένου, σχόλια και συνεργασίες.',write:'Αποστολή email',note:'Οι σύνδεσμοι ανοίγουν την εφαρμογή email. Δεν αποθηκεύονται δεδομένα φόρμας.',privacy:'Πολιτική απορρήτου',home:'Αρχική'},
es:{k:'CONTACTO · MYTHBORN',h:'Estamos aquí para tus preguntas.',lead:'¿Necesitas ayuda con un cálculo o tienes dudas sobre nuestro contenido? Escríbenos directamente.',support:'Soporte y cuestiones técnicas',supportDesc:'Calculadoras, accesibilidad, enlaces y problemas de uso.',info:'Consultas generales y colaboraciones',infoDesc:'Sugerencias de contenido, comentarios y colaboraciones.',write:'Enviar correo',note:'Los enlaces abren tu aplicación de correo. Esta página no recoge ni almacena formularios.',privacy:'Política de privacidad',home:'Inicio'},
ar:{k:'تواصل معنا · MYTHBORN',h:'نحن هنا للإجابة عن أسئلتك.',lead:'هل تحتاج إلى مساعدة في حساب أو لديك سؤال عن المحتوى؟ تواصل معنا مباشرة.',support:'الدعم والأسئلة التقنية',supportDesc:'الحاسبات وإمكانية الوصول والروابط والمشكلات التقنية.',info:'الاستفسارات العامة والتعاون',infoDesc:'اقتراحات المحتوى والملاحظات وفرص التعاون.',write:'أرسل بريدًا إلكترونيًا',note:'تفتح الروابط تطبيق البريد لديك. لا نجمع بيانات نموذج في هذه الصفحة.',privacy:'سياسة الخصوصية',home:'الرئيسية'}
};
const safe = v=>String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
export const renderContactView = ({locale='tr'})=>{
const t=copy[locale]||copy.tr;
const icon = kind => kind==='support'
  ? '<svg viewBox="0 0 48 48" aria-hidden="true" fill="none"><rect x="8" y="9" width="32" height="28" rx="7" stroke="currentColor" stroke-width="1.5"/><path d="M15 19h18M15 26h13M18 37l-4 5v-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
  : '<svg viewBox="0 0 48 48" aria-hidden="true" fill="none"><path d="M6 15 24 28 42 15M8 12h32a2 2 0 0 1 2 2v21a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const card=(label,description,email,subject,kind)=>`<article class="astro-contact-card astro-contact-card-${kind}">
  <div class="astro-contact-card-head"><span class="astro-contact-icon">${icon(kind)}</span><span class="astro-contact-kicker">${safe(label)}</span></div>
  <p class="astro-contact-description">${safe(description)}</p>
  <div class="astro-contact-card-bottom"><a class="astro-contact-email" href="mailto:${email}?subject=${encodeURIComponent(subject)}" aria-label="${safe(t.write)}: ${email}"><span>${email}</span><svg viewBox="0 0 24 24" aria-hidden="true" fill="none"><path d="M5 19 19 5M8 5h11v11" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></a><span class="astro-contact-action" aria-hidden="true">${safe(t.write)}</span></div>
</article>`;
return `<section class="astro-contact-page astro-container" aria-labelledby="astro-contact-title">
<nav class="astro-contact-breadcrumb" aria-label="Breadcrumb"><a href="${getRouteHref(locale,'home')}">${safe(t.home)}</a><span aria-hidden="true">›</span><span>${safe(t.k.split(' · ')[0])}</span></nav>
<header class="astro-contact-heading"><span class="astro-contact-eyebrow">✦ ${safe(t.k)}</span><h1 id="astro-contact-title">${safe(t.h)}</h1><p>${safe(t.lead)}</p></header>
<div class="astro-contact-grid">${card(t.support,t.supportDesc,'support@mythborn.co','Mythborn Support','support')}${card(t.info,t.infoDesc,'info@mythborn.co','Mythborn General Enquiry','info')}</div>
<div class="astro-contact-foot"><p>${safe(t.note)}</p><a href="${getRouteHref(locale,'privacy')}">${safe(t.privacy)} ↗</a></div>
</section>`;
};
