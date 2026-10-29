import { GOZDE_BLOG_POSTS, GOZDE_LEGAL_PAGES } from './gozde-blog-data.js';

const safe = (v) =>
  String(v ?? '').replace(/[&<>"']/g, (s) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));

export const ROUTE_MAP = {
  tr: {
    home: '/',
    areas: '/kesif-alanlari',
    approach: '/yaklasim',
    blog: '/blog',
    contact: '/iletisim',
    apply: '/yorumcu-basvuru',
    kvkk: '/kvkk',
    privacy: '/gizlilik',
    terms: '/kullanim-kosullari'
  },
  en: {
    home: '/en',
    areas: '/en/areas',
    approach: '/en/approach',
    blog: '/en/blog',
    contact: '/en/contact',
    apply: '/en/apply',
    kvkk: '/en/kvkk',
    privacy: '/en/privacy',
    terms: '/en/terms'
  },
  el: {
    home: '/gr',
    areas: '/gr/areas',
    approach: '/gr/approach',
    blog: '/gr/blog',
    contact: '/gr/contact',
    apply: '/gr/apply',
    kvkk: '/gr/kvkk',
    privacy: '/gr/privacy',
    terms: '/gr/terms'
  },
  es: {
    home: '/es',
    areas: '/es/areas',
    approach: '/es/approach',
    blog: '/es/blog',
    contact: '/es/contact',
    apply: '/es/apply',
    kvkk: '/es/kvkk',
    privacy: '/es/privacy',
    terms: '/es/terms'
  },
  ar: {
    home: '/ar',
    areas: '/ar/areas',
    approach: '/ar/approach',
    blog: '/ar/blog',
    contact: '/ar/contact',
    apply: '/ar/apply',
    kvkk: '/ar/kvkk',
    privacy: '/ar/privacy',
    terms: '/ar/terms'
  }
};

export const EXTRA_UI = {
  tr: {
    menuBtn: 'Menü',
    closeBtn: 'Kapat',
    navHome: 'Ana Sayfa',
    navBlog: 'Blog & Rehberler',
    legalTitle: 'Yasal & Kurumsal',
    kvkkNav: 'KVKK Aydınlatma Metni',
    privacyNav: 'Gizlilik & Çerez Politikası',
    termsNav: 'Kullanım Koşulları',
    honestBadge: 'ŞEFFAF SÜREÇ · CANLI ARAMA DEĞİL, ODAKLI SES KAYDI & YAZILI ANALİZ',
    honestTitle: 'Neden Canlı Arama Yerine Özel Hazırlanan Ses Kaydı ve Yazılı Analiz?',
    honestBody:
      'Danışanlarımıza gerçekçi olmayan vaatlerde bulunmayız. Kartların, kahve sembollerinin ve doğum haritası açılarının derinliğini aceleye getirilmiş bir canlı telefon/video görüşmesinde yüzeysel geçiştirmek yerine; Gözde sorunuz üzerinde sessiz stüdyo ortamında tek başına odaklanarak çalışır. Böylece tekrar tekrar dinleyebileceğiniz kapsamlı bir ses kaydı veya detaylı yazılı yol haritası alırsınız.',
    blogEyebrow: 'GÖKYÜZÜ GÜNDEMİ, RETRO & SEMBOL REHBERLERİ',
    blogTitle: 'Sembollerin ve Gökyüzünün Dilini Derinlemesine Keşfedin',
    blogSub: 'Gezegen retrolarından tutulma koridorlarına, Katina aşk açılımından Tarot arketiplerine uzanan 10 kapsamlı rehber.',
    readMore: 'Rehberi Oku →',
    allBlogsCta: 'Tüm 10 Blog Rehberini İncele →',
    backToBlog: '← Tüm Blog Yazılarına Dön',
    sampleQuestionsLabel: 'Bu Okumada Sık Sorulan Odak Sorular:',
    deliveryLabel: 'Teslimat & Yorumlama Biçimi:',
    deliveryText: 'Kişiye özel hazırlanan detaylı ses kaydı veya kapsamlı yazılı analiz metni (canlı görüşme yapılmaz).',
    askGozdeCta: 'Bu Konuda Gözde’ye Soru Gönder →'
  },
  en: {
    menuBtn: 'Menu',
    closeBtn: 'Close',
    navHome: 'Home',
    navBlog: 'Blog & Guides',
    legalTitle: 'Legal & Privacy',
    kvkkNav: 'Data Protection (KVKK / GDPR)',
    privacyNav: 'Privacy & Cookie Policy',
    termsNav: 'Terms of Use & Disclaimer',
    honestBadge: 'TRANSPARENT PROCESS · FOCUSED VOICE RECORDING & WRITTEN ANALYSIS',
    honestTitle: 'Why Focused Voice Recordings & Written Analyses Instead of Live Calls?',
    honestBody:
      'We never make misleading promises. Rather than rushing through symbols on a live phone or video call, Gözde works with your cards, cup symbols, and birth chart in quiet studio solitude—delivering a comprehensive voice recording or detailed written analysis you can revisit anytime.',
    blogEyebrow: 'CELESTIAL CYCLES, RETROGRADES & SYMBOLIC GUIDES',
    blogTitle: 'Explore the Language of Symbols and the Sky in Depth',
    blogSub: '10 comprehensive long-form guides covering planetary retrogrades, eclipse corridors, Katina love spreads, and Tarot archetypes.',
    readMore: 'Read Guide →',
    allBlogsCta: 'Explore All 10 Blog Guides →',
    backToBlog: '← Back to All Guides',
    sampleQuestionsLabel: 'Key Questions Explored in This Reading:',
    deliveryLabel: 'Reading Delivery Format:',
    deliveryText: 'Bespoke recorded voice analysis or comprehensive written roadmap (no rushed live calls).',
    askGozdeCta: 'Send Your Question to Gözde →'
  },
  el: {
    menuBtn: 'Μενού',
    closeBtn: 'Κλείσιμο',
    navHome: 'Αρχική',
    navBlog: 'Άρθρα & Οδηγοί',
    legalTitle: 'Νομικά & Απόρρητο',
    kvkkNav: 'Προστασία Δεδομένων (KVKK/GDPR)',
    privacyNav: 'Πολιτική Απορρήτου & Cookies',
    termsNav: 'Όροι Χρήσης',
    honestBadge: 'ΔΙΑΦΑΝΕΙΑ · ΗΧΗΤΙΚΗ ΗΧΟΓΡΑΦΗΣΗ & ΓΡΑΠΤΗ ΑΝΑΛΥΣΗ ΜΕ ΒΑΘΟΣ',
    honestTitle: 'Γιατί Επιλέγουμε Εστιασμένη Ηχητική & Γραπτή Ανάλυση Αντί για Ζωντανή Κλήση;',
    honestBody:
      'Είμαστε απόλυτα ειλικρινείς: η ουσιαστική ανάγνωση συμβόλων απαιτεί ησυχία και συγκέντρωση. Η Gözde μελετά το ερώτημά σας χωρίς την πίεση μιας ζωντανής κλήσης, ετοιμάζοντας μια αναλυτική ηχογράφηση ή γραπτή μελέτη που μπορείτε να ακούσετε ξανά όποτε θέλετε.',
    blogEyebrow: 'ΟΥΡΑΝΙΟΙ ΚΥΚΛΟΙ, ΑΝΑΔΡΟΜΟΙ & ΣΥΜΒΟΛΙΚΟΙ ΟΔΗΓΟΙ',
    blogTitle: 'Ανακαλύψτε σε Βάθος τη Γλώσσα των Συμβόλων και των Άστρων',
    blogSub: '10 αναλυτικοί οδηγοί για ανάδρομους πλανήτες, εκλείψεις, Κατίνα, Ταρώ και γενέθλιο χάρτη.',
    readMore: 'Διαβάστε το Άρθρο →',
    allBlogsCta: 'Δείτε και τα 10 Άρθρα →',
    backToBlog: '← Επιστροφή στα Άρθρα',
    sampleQuestionsLabel: 'Ενδεικτικά Ερωτήματα σε Αυτή τη Θεματική:',
    deliveryLabel: 'Μορφή Παράδοσης:',
    deliveryText: 'Εξατομικευμένη ηχητική ηχογράφηση ή αναλυτικό γραπτό κείμενο (όχι ζωντανή κλήση).',
    askGozdeCta: 'Στείλτε το Ερώτημά σας στην Gözde →'
  },
  es: {
    menuBtn: 'Menú',
    closeBtn: 'Cerrar',
    navHome: 'Inicio',
    navBlog: 'Blog y Guías',
    legalTitle: 'Legal y Privacidad',
    kvkkNav: 'Protección de Datos (KVKK/RGPD)',
    privacyNav: 'Política de Privacidad y Cookies',
    termsNav: 'Términos de Uso',
    honestBadge: 'PROCESO TRANSPARENTE · AUDIO GRABADO Y ANÁLISIS ESCRITO EN PROFUNDIDAD',
    honestTitle: '¿Por Qué Grabaciones de Voz y Análisis Escritos en Lugar de Llamadas en Vivo?',
    honestBody:
      'Hablamos siempre con total honestidad: interpretar símbolos y cartas astrales con rigor requiere silencio y concentración. Gözde estudia tu consulta en privado y prepara una grabación de voz detallada o un análisis escrito que podrás conservar y volver a escuchar siempre.',
    blogEyebrow: 'CICLOS CELESTES, RETRÓGRADOS Y GUÍAS SIMBÓLICAS',
    blogTitle: 'Explora a Fondo el Lenguaje de los Símbolos y las Estrellas',
    blogSub: '10 guías extensas sobre planetas retrógrados, eclipses, lectura de Katina, arcanos del Tarot y carta natal.',
    readMore: 'Leer Guía →',
    allBlogsCta: 'Ver las 10 Guías del Blog →',
    backToBlog: '← Volver al Blog',
    sampleQuestionsLabel: 'Preguntas Frecuentes en Esta Lectura:',
    deliveryLabel: 'Formato de Entrega:',
    deliveryText: 'Grabación de voz personalizada o análisis escrito detallado (sin llamadas en vivo apresuradas).',
    askGozdeCta: 'Enviar Consulta a Gözde →'
  },
  ar: {
    menuBtn: 'القائمة',
    closeBtn: 'إغلاق',
    navHome: 'الرئيسية',
    navBlog: 'المدونة والأدلة',
    legalTitle: 'القسم القانوني والخصوصية',
    kvkkNav: 'حماية البيانات الشخصية (KVKK)',
    privacyNav: 'سياسة الخصوصية وملفات الارتباط',
    termsNav: 'شروط الاستخدام وإخلاء المسؤولية',
    honestBadge: 'شفافية تامة · تسجيل صوتي مفصل وتحليل مكتوب بتركيز عميق',
    honestTitle: 'لماذا نعتمد التسجيل الصوتي والتحليل المكتوب بدلاً من المكالمات المباشرة؟',
    honestBody:
      'نحن نلتزم بالصدق التام معكم: القراءة الرمزية والفلكية العميقة تتطلب هدوءاً وتركيزاً عالياً بعيداً عن التسرع في المكالمات المباشرة. تدرس Gözde سؤالك بتركيز كامل وتعد لك تسجيلاً صوتياً مفصلاً أو تحليلاً مكتوباً يمكنك الرجوع إليه في أي وقت.',
    blogEyebrow: 'حركة الكواكب، التراجعات وأدلة الرموز',
    blogTitle: 'استكشف لغة الرموز والنجوم بعمق ووضوح',
    blogSub: '10 مقالات وأدلة موسعة حول تراجع الكواكب، الكسوف والخسوف، أوراق كاتينا، التاروت وخارطة الميلاد.',
    readMore: 'اقرأ الدليل ←',
    allBlogsCta: 'استعرض جميع المقالات الـ 10 ←',
    backToBlog: '→ العودة إلى المدونة',
    sampleQuestionsLabel: 'أبرز الأسئلة التي تتناولها هذه القراءة:',
    deliveryLabel: 'صيغة تقديم القراءة:',
    deliveryText: 'تسجيل صوتي مخصص أو تحليل مكتوب مفصل (لا توجد مكالمات فيديو أو هاتف مباشرة).',
    askGozdeCta: 'أرسل سؤالك إلى Gözde ←'
  }
};

export const AREA_SAMPLE_QUESTIONS = {
  tr: [
    ['Önümdeki iki farklı karar yolunun enerjisi bana ne söylüyor?', 'Geçmişten taşıdığım hangi kalıp şu anki ilerleyişimi yavaşlatıyor?', 'Bu süreçte neyi kontrol etmeyi bırakmalı, neye odaklanmalıyım?'],
    ['Fincandaki yollar ve semboller yakın gündemimde hangi gelişmeye işaret ediyor?', 'Hane içindeki ve sosyal çevremdeki enerji akışı nasıl şekilleniyor?', 'Zihnimi meşgul eden konuda hangi beklenmedik haber kapıda?'],
    ['Karşı tarafın bana dair gerçek duygusu ile zihnindeki çekinceler neler?', 'Aramızdaki sessizlik veya mesafe nasıl bir süreçten geçiyor?', 'Bu ilişkide kendi öz-değerimi koruyarak en doğru adımı nasıl atarım?'],
    ['Son dönemde tekrarlayan rüyalarım ve sezgilerim bana ne anlatmak istiyor?', 'Yüzeyde görünmeyen enerji düğümü nerede kilitleniyor?', 'Zihin gürültüsü ile gerçek iç sesimi bu konuda nasıl ayırt edebilirim?'],
    ['İlişkimizdeki iletişim tıkanıklığının altındaki asıl ihtiyaç nedir?', 'Ortak ritmimiz uzun vadeli güven ve huzur vaat ediyor mu?', 'Kırılma noktasını onarmak için hangi yaklaşım daha yapıcı olur?'],
    ['Doğum tabiatımdaki dört element (Ateş, Toprak, Hava, Su) dengesi nasıl?', 'Enerjimi düşüren dış etkilere karşı merkezimi nasıl korurum?', 'İsmim ve doğum döngüm bu dönemde hangi koruyucu temaları öne çıkarıyor?'],
    ['Yükselen burcum, Ay ve Venüs yerleşimim ilişki ve kariyer yolumu nasıl etkiliyor?', 'Yaklaşan tutulmalar ve gezegen retroları haritamda hangi evi tetikliyor?', 'Satürn ve Jüpiter döngülerime göre şu an inşa zamanı mı yoksa sadeleşme zamanı mı?'],
    ['İçinde bulunduğum Kişisel Yıl sayısı (1–9) benden nasıl bir strateji istiyor?', 'Doğum tarihimdeki Yaşam Yolu sayısı ana potansiyelimi nasıl tanımlıyor?', 'İsmimdeki harf arketipleri hangi doğal yeteneklerimi destekliyor?']
  ]
};

export const detectGozdeSubpage = (pathname = '/') => {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean === '/yonetim/formlar') return { type: 'admin', locale: 'tr' };

  const blogMatch = clean.match(/^(?:\/(en|gr|el|es|ar))?\/blog\/([a-z0-9-]+)$/i);
  if (blogMatch) {
    const rawLoc = blogMatch[1] || 'tr';
    const locale = rawLoc === 'gr' || rawLoc === 'el' ? 'el' : rawLoc;
    const post = GOZDE_BLOG_POSTS.find((p) => p.slug === blogMatch[2]);
    if (post) return { type: 'blog-post', locale, post };
  }

  if (/^(?:\/(en|gr|el|es|ar))?\/blog$/i.test(clean)) return { type: 'blog-index' };
  if (/^(?:\/(en|gr|el|es|ar))?\/(?:kesif-alanlari|areas)$/i.test(clean)) return { type: 'areas' };
  if (/^(?:\/(en|gr|el|es|ar))?\/(?:yaklasim|approach)$/i.test(clean)) return { type: 'approach' };
  if (/^(?:\/(en|gr|el|es|ar))?\/(?:iletisim|contact)$/i.test(clean)) return { type: 'contact' };
  if (/^(?:\/(en|gr|el|es|ar))?\/kvkk$/i.test(clean)) return { type: 'legal', legalKey: 'kvkk' };
  if (/^(?:\/(en|gr|el|es|ar))?\/(?:gizlilik|gizlilik-politikasi|cerezler|privacy)$/i.test(clean)) return { type: 'legal', legalKey: 'gizlilik' };
  if (/^(?:\/(en|gr|el|es|ar))?\/(?:kullanim-kosullari|terms)$/i.test(clean)) return { type: 'legal', legalKey: 'kullanim' };

  return null;
};

export const renderHeaderAndDrawer = ({ locale, t, langs, activeType = 'home', langHrefFn }) => {
  const r = ROUTE_MAP[locale];
  const u = EXTRA_UI[locale];
  const getLangHref = langHrefFn || ((k) => ROUTE_MAP[k][activeType] || ROUTE_MAP[k].home);
  return `<header class="top-shell"><div class="top"><a class="logo" href="${r.home}">MYTHBORN</a><nav class="top-nav desktop-nav" aria-label="Primary"><a href="${r.areas}" ${activeType === 'areas' ? 'aria-current="page"' : ''}>${safe(t.navAreas)}</a><a href="${r.approach}" ${activeType === 'approach' ? 'aria-current="page"' : ''}>${safe(t.navProcess)}</a><a href="${r.blog}" ${activeType === 'blog' || activeType === 'blog-post' ? 'aria-current="page"' : ''}>${safe(u.navBlog)}</a><a href="${r.contact}" ${activeType === 'contact' ? 'aria-current="page"' : ''}>${safe(t.navInquiry)}</a><a class="apply-pill" href="${r.apply}" ${activeType === 'apply' ? 'aria-current="page"' : ''}>${safe(t.applyNav)}</a><div class="langs" aria-label="Languages">${Object.entries(langs)
    .map(([k, v]) => `<a href="${getLangHref(k)}" lang="${v[1]}" ${locale === k ? 'aria-current="page"' : ''}>${k.toUpperCase()}</a>`)
    .join('')}</div></nav><div class="mobile-bar-actions"><a class="mobile-quick-cta" href="${r.contact}">${safe(t.navInquiry)}</a><button type="button" class="menu-toggle" data-open-drawer aria-expanded="false" aria-controls="mobile-drawer"><span aria-hidden="true">☰</span> <span>${safe(u.menuBtn)}</span></button></div></div></header><aside id="mobile-drawer" class="mobile-drawer" aria-hidden="true"><div class="drawer-backdrop" data-close-drawer></div><div class="drawer-panel"><div class="drawer-head"><a class="logo" href="${r.home}">MYTHBORN</a><button type="button" class="drawer-close" data-close-drawer aria-label="${safe(u.closeBtn)}">✕ ${safe(u.closeBtn)}</button></div><div class="drawer-badge"><span class="live-dot" aria-hidden="true"></span><span>${safe(t.lead)}</span></div><nav class="drawer-links" aria-label="Mobile Navigation"><a href="${r.home}"><span>✦ ${safe(u.navHome)}</span><small>→</small></a><a href="${r.areas}"><span>☼ ${safe(t.navAreas)}</span><small>→</small></a><a href="${r.approach}"><span>☾ ${safe(t.navProcess)}</span><small>→</small></a><a href="${r.blog}"><span>✧ ${safe(u.navBlog)} (10)</span><small>→</small></a><a href="${r.contact}"><span>♡ ${safe(t.navInquiry)} & ${safe(t.navFaq)}</span><small>→</small></a><a href="${r.apply}" class="drawer-highlight"><span>✶ ${safe(t.applyNav)}</span><small>→</small></a></nav><div class="drawer-legal"><p class="eyebrow" style="margin-bottom:8px">${safe(u.legalTitle)}</p><div class="drawer-legal-links"><a href="${r.kvkk}">${safe(u.kvkkNav)}</a><a href="${r.privacy}">${safe(u.privacyNav)}</a><a href="${r.terms}">${safe(u.termsNav)}</a></div></div><div class="drawer-langs">${Object.entries(langs)
    .map(([k, v]) => `<a href="${getLangHref(k)}" lang="${v[1]}" ${locale === k ? 'aria-current="page"' : ''}>${k.toUpperCase()}</a>`)
    .join('')}</div><div class="drawer-foot"><a class="cta" href="${r.contact}" style="width:100%">${safe(t.ctaPrimary)} →</a><a class="cta-ghost" href="https://www.tiktok.com/@gozdeli_" target="_blank" rel="noopener noreferrer" style="width:100%">${safe(t.social)} ↗</a></div></div></aside>`;
};

export const renderFooter = ({ locale, t }) => {
  const r = ROUTE_MAP[locale];
  const u = EXTRA_UI[locale];
  const colExplore =
    locale === 'tr' ? 'KEŞİF & REHBERLER' : locale === 'en' ? 'EXPLORE & GUIDES' : locale === 'el' ? 'ΠΕΡΙΗΓΗΣΗ' : locale === 'es' ? 'EXPLORAR' : 'استكشف المنصة';
  const colConnect =
    locale === 'tr' ? 'İLETİŞİM & AĞ' : locale === 'en' ? 'CONNECT & NETWORK' : locale === 'el' ? 'ΕΠΙΚΟΙΝΩΝΙΑ' : locale === 'es' ? 'CONTACTO Y RED' : 'التواصل والشبكة';
  return `<footer class="bottom"><div class="footer-card"><div class="footer-top"><div class="bottom-brand"><a class="logo" href="${r.home}">MYTHBORN</a><p class="footer-lead">${safe(t.lead)}</p><span>${safe(t.note)}</span></div><div class="footer-cta-row"><a class="cta" href="${r.contact}">${safe(t.navInquiry)} →</a><a class="cta-ghost" href="https://www.tiktok.com/@gozdeli_" target="_blank" rel="noopener noreferrer">TikTok · @gozdeli_ ↗</a></div></div><div class="footer-cols"><div class="footer-col"><h4>${safe(colExplore)}</h4><nav aria-label="${safe(colExplore)}"><a href="${r.home}"><span>${safe(u.navHome)}</span><small>→</small></a><a href="${r.areas}"><span>${safe(t.navAreas)}</span><small>→</small></a><a href="${r.approach}"><span>${safe(t.navProcess)}</span><small>→</small></a><a href="${r.blog}"><span>${safe(u.navBlog)}</span><small>→</small></a></nav></div><div class="footer-col"><h4>${safe(colConnect)}</h4><nav aria-label="${safe(colConnect)}"><a href="${r.contact}"><span>${safe(t.navInquiry)}</span><small>→</small></a><a href="${r.home}#sss"><span>${safe(t.navFaq)}</span><small>→</small></a><a href="${r.apply}"><span>${safe(t.applyNav)}</span><small>→</small></a><a href="https://www.tiktok.com/@gozdeli_" target="_blank" rel="noopener noreferrer"><span>TikTok</span><small>↗</small></a></nav></div><div class="footer-col footer-col-legal"><h4>${safe(u.legalTitle)}</h4><nav aria-label="${safe(u.legalTitle)}"><a href="${r.kvkk}"><span>${safe(u.kvkkNav)}</span><small>→</small></a><a href="${r.privacy}"><span>${safe(u.privacyNav)}</span><small>→</small></a><a href="${r.terms}"><span>${safe(u.termsNav)}</span><small>→</small></a></nav></div></div><div class="footer-meta"><strong>© 2026 MYTHBORN · ${safe(t.lead)}</strong><div class="footer-langs">${Object.keys(ROUTE_MAP)
    .map((k) => `<a href="${ROUTE_MAP[k].home}" ${locale === k ? 'aria-current="page"' : ''}>${k.toUpperCase()}</a>`)
    .join('')}</div></div></div></footer>`;
};

export const renderBlogPreviewSection = ({ locale }) => {
  const r = ROUTE_MAP[locale];
  const u = EXTRA_UI[locale];
  const featured = GOZDE_BLOG_POSTS.slice(0, 4);
  const prefix = locale === 'tr' ? '' : locale === 'el' ? '/gr' : `/${locale}`;
  return `<section id="blog-onizleme" class="section-block"><div class="section-head"><p class="eyebrow">${safe(u.blogEyebrow)}</p><h2>${safe(u.blogTitle)}</h2><p>${safe(u.blogSub)}</p></div><div class="blog-grid-preview">${featured
    .map(
      (post) => `<article class="blog-card"><a class="blog-thumb" href="${prefix}/blog/${post.slug}"><img src="${post.image}" width="640" height="420" loading="lazy" alt="${safe(post.title[locale] || post.title.tr)}"><span class="blog-cat-pill">${safe(post.category)}</span></a><div class="blog-card-body"><div class="article-meta"><span>MYTHBORN EDITORIAL DESK</span><span>·</span><time datetime="${post.publishedAt}">${post.publishedAt}</time><span>·</span><span>${safe(post.readTime)}</span></div><h3><a href="${prefix}/blog/${post.slug}">${safe(post.title[locale] || post.title.tr)}</a></h3><p>${safe(post.excerpt[locale] || post.excerpt.tr)}</p><a class="blog-read-link" href="${prefix}/blog/${post.slug}">${safe(u.readMore)}</a></div></article>`
    )
    .join('')}</div><div style="margin-top:26px;display:flex;justify-content:center"><a class="cta-ghost" href="${r.blog}">${safe(u.allBlogsCta)}</a></div></section>`;
};

export const renderSubpageDocument = ({
  locale,
  t,
  langs,
  sharedStyles,
  clientInteractiveScript,
  pageType,
  canonicalPath,
  title,
  description,
  bodyHtml,
  schemaGraph,
  langHrefFn,
  robots = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
}) => {
  const [, lang, dir, , ogLocale, llmsHref] = langs[locale];
  const canonicalUrl = `https://mythborn.co${canonicalPath}`;
  const getLangHref = langHrefFn || ((k) => ROUTE_MAP[k][pageType] || ROUTE_MAP[k].home);
  const schema = {
    '@context': 'https://schema.org',
    '@graph': schemaGraph || [
      {
        '@type': 'Organization',
        '@id': 'https://mythborn.co/#organization',
        name: 'MYTHBORN',
        url: 'https://mythborn.co/',
        logo: 'https://mythborn.co/images/gozde-tarot-hero.webp',
        sameAs: ['https://www.tiktok.com/@gozdeli_']
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `MYTHBORN | ${title}`,
        description,
        inLanguage: lang
      }
    ]
  };
  return `<!doctype html><html lang="${lang}" dir="${dir}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#08090e"><meta name="robots" content="${robots}"><meta name="author" content="Gözde — MYTHBORN"><meta name="keywords" content="${safe(t.keywords)}"><meta name="description" content="${safe(description)}"><title>MYTHBORN | ${safe(title)} — ${safe(t.lead)}</title><link rel="canonical" href="${canonicalUrl}">${Object.entries(langs)
    .map(([k, v]) => `<link rel="alternate" hreflang="${v[1]}" href="https://mythborn.co${getLangHref(k)}">`)
    .join('')}<link rel="alternate" hreflang="x-default" href="https://mythborn.co${getLangHref('tr')}"><link rel="alternate" type="text/plain" href="https://mythborn.co${llmsHref}" title="LLM Context"><link rel="help" href="https://mythborn.co/ai-fact-sheet.txt"><meta property="og:type" content="website"><meta property="og:site_name" content="MYTHBORN"><meta property="og:locale" content="${ogLocale}"><meta property="og:url" content="${canonicalUrl}"><meta property="og:title" content="MYTHBORN · ${safe(title)}"><meta property="og:description" content="${safe(description)}"><meta property="og:image" content="https://mythborn.co/images/gozde-tarot-hero.webp"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="MYTHBORN · ${safe(title)}"><meta name="twitter:description" content="${safe(description)}"><meta name="twitter:image" content="https://mythborn.co/images/gozde-tarot-hero.webp"><script type="application/ld+json">${JSON.stringify(schema)}</script><style>${sharedStyles}</style></head><body><div class="wrap">${renderHeaderAndDrawer({ locale, t, langs, activeType: pageType, langHrefFn: getLangHref })}<main>${bodyHtml}</main>${renderFooter({ locale, t })}</div><script>${clientInteractiveScript}</script></body></html>`;
};

export const renderAreasSubpage = (ctx) => {
  const { locale, t, ICONS } = ctx;
  const r = ROUTE_MAP[locale];
  const u = EXTRA_UI[locale];
  const questions = AREA_SAMPLE_QUESTIONS.tr;
  const bodyHtml = `<section class="section-block" style="padding-top:32px"><div class="subpage-hero-grid"><div class="copy"><span class="live-pill"><span class="live-dot" aria-hidden="true"></span><span>${safe(u.honestBadge)}</span></span><p class="eyebrow">${safe(t.areasEyebrow)}</p><h1 class="title" style="font-size:clamp(32px,3.8vw,54px)">${safe(t.areasTitle)}</h1><p class="sub">${safe(t.areasSub)}</p><div class="hero-actions"><a class="cta" href="${r.contact}">${safe(t.ctaPrimary)} →</a><a class="cta-ghost" href="${r.blog}">${safe(u.navBlog)}</a></div></div><figure class="subpage-portrait"><img src="/images/gozde-salon-portrait.jpg" width="1200" height="800" alt="${safe(t.lead)}" fetchpriority="high"></figure></div></section><section class="section-block"><div class="areas-deep-grid">${t.catDetails
    .map(
      ([tag, name, desc], idx) => `<article class="area-deep-card"><div class="area-top"><span class="area-icon" aria-hidden="true">${ICONS[idx] || '✧'}</span><span class="area-tag">${safe(tag)}</span></div><h2>${safe(name)}</h2><p class="area-deep-desc">${safe(desc)}</p><div class="area-q-box"><strong>${safe(u.sampleQuestionsLabel)}</strong><ul>${(questions[idx] || questions[0])
        .map((q) => `<li>${safe(q)}</li>`)
        .join('')}</ul></div><div class="area-delivery-note"><strong>${safe(u.deliveryLabel)}</strong> <span>${safe(u.deliveryText)}</span></div><a class="area-btn" style="display:inline-flex;justify-content:center;text-decoration:none" href="${r.contact}?topic=${encodeURIComponent(name)}">${safe(u.askGozdeCta)}</a></article>`
    )
    .join('')}</div></section>`;
  return renderSubpageDocument({
    ...ctx,
    pageType: 'areas',
    canonicalPath: r.areas,
    title: `${t.navAreas} — ${t.areasTitle}`,
    description: t.areasSub,
    bodyHtml
  });
};

export const renderApproachSubpage = (ctx) => {
  const { locale, t } = ctx;
  const r = ROUTE_MAP[locale];
  const u = EXTRA_UI[locale];
  const bodyHtml = `<section class="section-block" style="padding-top:32px"><div class="subpage-hero-grid"><div class="copy"><span class="live-pill"><span class="live-dot" aria-hidden="true"></span><span>${safe(u.honestBadge)}</span></span><p class="eyebrow">${safe(t.processEyebrow)}</p><h1 class="title" style="font-size:clamp(32px,3.8vw,52px)">${safe(t.processTitle)}</h1><p class="sub">${safe(t.processSub)}</p><div class="hero-actions"><a class="cta" href="${r.contact}">${safe(t.ctaPrimary)} →</a><a class="cta-ghost" href="${r.areas}">${safe(t.navAreas)}</a></div></div><figure class="subpage-portrait"><img src="/images/gozde-astrology-concept.jpg" width="1200" height="800" alt="${safe(t.lead)}" fetchpriority="high"></figure></div></section><section class="section-block"><div class="honest-callout"><div class="honest-copy"><p class="eyebrow">${safe(u.honestBadge)}</p><h2>${safe(u.honestTitle)}</h2><p>${safe(u.honestBody)}</p></div><figure class="honest-img"><img src="/images/gozde-coffee-concept.jpg" width="900" height="600" loading="lazy" alt="${safe(t.lead)}"></figure></div><div class="process-grid" style="margin-top:28px">${t.steps
    .map(([title, desc]) => `<article class="step-card"><h3>${safe(title)}</h3><p>${safe(desc)}</p></article>`)
    .join('')}</div><div class="process-grid">${t.pillars
    .map(([title, desc]) => `<article class="pillar-card"><h3>${safe(title)}</h3><p>${safe(desc)}</p></article>`)
    .join('')}</div></section>`;
  return renderSubpageDocument({
    ...ctx,
    pageType: 'approach',
    canonicalPath: r.approach,
    title: `${t.navProcess} — ${t.lead}`,
    description: u.honestBody,
    bodyHtml
  });
};

export const renderBlogIndexSubpage = (ctx) => {
  const { locale, t } = ctx;
  const r = ROUTE_MAP[locale];
  const u = EXTRA_UI[locale];
  const prefix = locale === 'tr' ? '' : locale === 'el' ? '/gr' : `/${locale}`;
  const bodyHtml = `<section class="section-block" style="padding-top:32px"><div class="subpage-hero-grid"><div class="copy"><span class="live-pill"><span class="live-dot" aria-hidden="true"></span><span>MYTHBORN EDITORIAL DESK · 10 REHBER</span></span><p class="eyebrow">${safe(u.blogEyebrow)}</p><h1 class="title" style="font-size:clamp(32px,3.8vw,52px)">${safe(u.blogTitle)}</h1><p class="sub">${safe(u.blogSub)}</p></div><figure class="subpage-portrait"><img src="/images/gozde-astrology-concept.jpg" width="1200" height="800" alt="${safe(t.lead)}" fetchpriority="high"></figure></div></section><section class="section-block"><div class="blog-grid-full">${GOZDE_BLOG_POSTS.map(
    (post) => `<article class="blog-card"><a class="blog-thumb" href="${prefix}/blog/${post.slug}"><img src="${post.image}" width="640" height="420" loading="lazy" alt="${safe(post.title[locale] || post.title.tr)}"><span class="blog-cat-pill">${safe(post.category)}</span></a><div class="blog-card-body"><div class="article-meta"><span>MYTHBORN EDITORIAL DESK</span><span>·</span><time datetime="${post.publishedAt}">${post.publishedAt}</time><span>·</span><span>${safe(post.readTime)}</span></div><h2><a href="${prefix}/blog/${post.slug}">${safe(post.title[locale] || post.title.tr)}</a></h2><p>${safe(post.excerpt[locale] || post.excerpt.tr)}</p><a class="blog-read-link" href="${prefix}/blog/${post.slug}">${safe(u.readMore)}</a></div></article>`
  ).join('')}</div></section>`;
  return renderSubpageDocument({
    ...ctx,
    pageType: 'blog',
    canonicalPath: r.blog,
    title: `${u.navBlog} — ${u.blogTitle}`,
    description: u.blogSub,
    bodyHtml
  });
};

export const renderBlogPostSubpage = (ctx, post) => {
  const { locale, t, langs } = ctx;
  const r = ROUTE_MAP[locale];
  const u = EXTRA_UI[locale];
  const [, lang] = langs[locale];
  const prefix = locale === 'tr' ? '' : locale === 'el' ? '/gr' : `/${locale}`;
  const canonicalPath = `${prefix}/blog/${post.slug}`;
  const canonicalUrl = `https://mythborn.co${canonicalPath}`;
  const postTitle = post.title[locale] || post.title.tr;
  const postExcerpt = post.excerpt[locale] || post.excerpt.tr;
  const related = GOZDE_BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const schemaGraph = [
    {
      '@type': 'Article',
      '@id': `${canonicalUrl}#article`,
      headline: postTitle,
      description: postExcerpt,
      image: `https://mythborn.co${post.image}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      inLanguage: lang,
      author: {
        '@type': 'Person',
        '@id': 'https://mythborn.co/#gozde',
        name: 'Gözde (MYTHBORN EDITORIAL DESK)',
        url: 'https://mythborn.co/'
      },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://mythborn.co/#organization',
        name: 'MYTHBORN',
        logo: { '@type': 'ImageObject', url: 'https://mythborn.co/images/gozde-tarot-hero.webp' }
      },
      mainEntityOfPage: canonicalUrl
    },
    {
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      inLanguage: lang,
      mainEntity: post.faqs.map(([q, ans]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: ans }
      }))
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'MYTHBORN', item: `https://mythborn.co${r.home}` },
        { '@type': 'ListItem', position: 2, name: u.navBlog, item: `https://mythborn.co${r.blog}` },
        { '@type': 'ListItem', position: 3, name: postTitle, item: canonicalUrl }
      ]
    }
  ];

  const bodyHtml = `<article class="section-block article-shell" style="padding-top:28px"><div class="article-header"><a class="back-pill" href="${r.blog}">${safe(u.backToBlog)}</a><p class="eyebrow" style="margin-top:14px">${safe(post.category)}</p><h1 class="article-title">${safe(postTitle)}</h1><div class="article-meta"><span>MYTHBORN EDITORIAL DESK · ${safe(t.lead)}</span><span>·</span><time datetime="${post.publishedAt}">${post.publishedAt}</time><span>·</span><span>${safe(post.readTime)}</span></div><p class="article-lead">${safe(postExcerpt)}</p><figure class="article-hero-figure"><img src="${post.image}" width="1200" height="720" alt="${safe(postTitle)}" fetchpriority="high"></figure></div><div class="article-content">${post.sections
    .map(
      (sec) => `<section class="article-sec"><h2>${safe(sec.h2)}</h2>${sec.paragraphs
        .map((p) => `<p>${safe(p)}</p>`)
        .join('')}</section>`
    )
    .join('')}<dl class="aeo-dl" style="grid-template-columns:repeat(3,minmax(0,1fr));margin:32px 0">${post.takeaways
    .map(([dt, dd]) => `<div class="aeo-fact"><dt>✦ ${safe(dt)}</dt><dd>${safe(dd)}</dd></div>`)
    .join('')}</dl><section class="article-faq"><h2>${safe(t.faqEyebrow)}</h2><div class="faq-list">${post.faqs
    .map(
      ([q, ans], idx) => `<details class="faq-item" name="post-faq"${idx === 0 ? ' open' : ''}><summary>${safe(q)}</summary><p>${safe(ans)}</p></details>`
    )
    .join('')}</div></section><div class="recruit-banner" style="margin-top:36px"><div class="recruit-copy"><p class="eyebrow" style="margin-bottom:4px">${safe(t.formEyebrow)}</p><h3>${safe(t.formTitle)}</h3><p>${safe(u.deliveryText)}</p></div><a class="cta" href="${r.contact}">${safe(u.askGozdeCta)}</a></div></div></article><section class="section-block"><div class="section-head"><p class="eyebrow">${safe(u.blogEyebrow)}</p><h2>${safe(u.blogTitle)}</h2></div><div class="blog-grid-preview" style="grid-template-columns:repeat(3,minmax(0,1fr))">${related
    .map(
      (rp) => `<article class="blog-card"><a class="blog-thumb" href="${prefix}/blog/${rp.slug}"><img src="${rp.image}" width="640" height="420" loading="lazy" alt="${safe(rp.title[locale] || rp.title.tr)}"><span class="blog-cat-pill">${safe(rp.category)}</span></a><div class="blog-card-body"><h3><a href="${prefix}/blog/${rp.slug}">${safe(rp.title[locale] || rp.title.tr)}</a></h3><p>${safe(rp.excerpt[locale] || rp.excerpt.tr)}</p><a class="blog-read-link" href="${prefix}/blog/${rp.slug}">${safe(u.readMore)}</a></div></article>`
    )
    .join('')}</div></section>`;

  return renderSubpageDocument({
    ...ctx,
    pageType: 'blog-post',
    canonicalPath,
    title: postTitle,
    description: postExcerpt,
    bodyHtml,
    schemaGraph,
    langHrefFn: (k) => `${k === 'tr' ? '' : k === 'el' ? '/gr' : `/${k}`}/blog/${post.slug}`
  });
};

export const renderContactSubpage = (ctx, inquirySectionHtml) => {
  const { locale, t } = ctx;
  const r = ROUTE_MAP[locale];
  const u = EXTRA_UI[locale];
  const bodyHtml = `${inquirySectionHtml}<section class="section-block"><div class="section-head"><p class="eyebrow">${safe(t.faqEyebrow)}</p><h2>${safe(t.faqTitle)}</h2><p>${safe(t.faqSub)}</p></div><dl class="aeo-dl">${t.aeoFacts
    .map(([dt, dd]) => `<div class="aeo-fact"><dt>✦ ${safe(dt)}</dt><dd>${safe(dd)}</dd></div>`)
    .join('')}</dl><div class="faq-list">${t.faqs
    .map(
      ([q, ans], idx) => `<details class="faq-item" name="contact-faq"${idx === 0 ? ' open' : ''}><summary>${safe(q)}</summary><p>${safe(ans)}</p></details>`
    )
    .join('')}</div></section>`;
  return renderSubpageDocument({
    ...ctx,
    pageType: 'contact',
    canonicalPath: r.contact,
    title: `${t.navInquiry} — ${t.formTitle}`,
    description: `${t.formSub} ${u.deliveryText}`,
    bodyHtml
  });
};

export const renderLegalSubpage = (ctx, legalKey) => {
  const { locale, t } = ctx;
  const u = EXTRA_UI[locale];
  const r = ROUTE_MAP[locale];
  const doc = GOZDE_LEGAL_PAGES[legalKey] || GOZDE_LEGAL_PAGES.kvkk;
  const canonicalPath = doc.paths[locale] || doc.paths.tr;
  const pageTitle = doc.title[locale] || doc.title.tr;
  const pageSub = doc.sub[locale] || doc.sub.tr;
  const pageEyebrow = doc.eyebrow[locale] || doc.eyebrow.tr;

  const bodyHtml = `<section class="section-block article-shell" style="padding-top:32px"><div class="article-header"><p class="eyebrow">${safe(pageEyebrow)}</p><h1 class="article-title">${safe(pageTitle)}</h1><p class="article-lead">${safe(pageSub)}</p><div class="legal-nav-pills"><a class="cta-ghost" href="${r.kvkk}">${safe(u.kvkkNav)}</a><a class="cta-ghost" href="${r.privacy}">${safe(u.privacyNav)}</a><a class="cta-ghost" href="${r.terms}">${safe(u.termsNav)}</a></div></div><div class="article-content">${doc.sections
    .map(
      (s) => `<section class="article-sec"><h2>${safe(s.h2)}</h2>${s.body
        .split('\n')
        .map((line) => `<p>${safe(line)}</p>`)
        .join('')}</section>`
    )
    .join('')}</div></section>`;

  return renderSubpageDocument({
    ...ctx,
    pageType: legalKey === 'kvkk' ? 'kvkk' : legalKey === 'gizlilik' ? 'privacy' : 'terms',
    canonicalPath,
    title: pageTitle,
    description: pageSub,
    bodyHtml,
    langHrefFn: (k) => doc.paths[k] || doc.paths.tr
  });
};

export const renderAdminFormsSubpage = (ctx) => {
  const { locale, t, sharedStyles, clientInteractiveScript } = ctx;
  const bodyHtml = `<section class="section-block" style="padding-top:32px"><div class="section-head"><p class="eyebrow">MYTHBORN · VERİTABANI KAYIT EKRANI (D1)</p><h1>Gelen Danışan Formları & Yorumcu Başvuruları</h1><p>Sitedeki Ön İletişim (/api/gozde-inquiry) ve Yorumcu Başvuru (/api/gozde-apply) formları doldurulduğunda doğrudan Cloudflare D1 veritabanındaki <code>gozde_inquiries</code> ve <code>gozde_applications</code> tablolarına kaydedilir ve bu ekrandan anlık olarak listelenir.</p></div><div id="admin-submissions-root" class="admin-grid"><div class="pillar-card"><h3>Danışan Ön İletişim Mesajları</h3><div id="inquiries-list"><p>Yükleniyor…</p></div></div><div class="pillar-card"><h3>Yorumcu Başvuruları</h3><div id="applications-list"><p>Yükleniyor…</p></div></div></div></section><script>
  (async () => {
    try {
      const res = await fetch('/api/gozde-submissions');
      const data = await res.json();
      const inqEl = document.getElementById('inquiries-list');
      const appEl = document.getElementById('applications-list');
      const esc = (s) => String(s || '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
      if (inqEl) {
        inqEl.innerHTML = (data.inquiries && data.inquiries.length)
          ? data.inquiries.map(r => '<div style="padding:14px 0;border-bottom:1px solid #be9d6b38"><strong>' + esc(r.name) + '</strong> · <span style="color:#edd09e">' + esc(r.topic) + ' (' + esc(r.format) + ')</span><br><small style="color:#b5a799">İletişim: ' + esc(r.contact) + ' · ' + esc(r.created_at) + '</small><p style="margin:6px 0 0;color:#e2dad3">' + esc(r.message) + '</p></div>').join('')
          : '<p>Henüz kayıtlı ön iletişim mesajı bulunmuyor.</p>';
      }
      if (appEl) {
        appEl.innerHTML = (data.applications && data.applications.length)
          ? data.applications.map(r => '<div style="padding:14px 0;border-bottom:1px solid #be9d6b38"><strong>' + esc(r.full_name) + '</strong> · <span style="color:#edd09e">' + esc(r.experience) + ' · ' + esc(r.modality) + '</span><br><small style="color:#b5a799">' + esc(r.email) + ' · ' + esc(r.phone) + ' · Diller: ' + esc(r.languages) + '</small><p style="margin:6px 0 0;color:#e2dad3">' + esc(r.bio) + '</p></div>').join('')
          : '<p>Henüz kayıtlı yorumcu başvurusu bulunmuyor.</p>';
      }
    } catch {
      // ignore
    }
  })();
  </script>`;
  return renderSubpageDocument({
    ...ctx,
    locale: 'tr',
    t,
    sharedStyles,
    clientInteractiveScript,
    pageType: 'home',
    canonicalPath: '/yonetim/formlar',
    title: 'Gelen Formlar & Başvurular Paneli',
    description: 'Mythborn D1 gelen form ve başvuru kayıtları yönetim ekranı.',
    bodyHtml,
    robots: 'noindex,nofollow'
  });
};
