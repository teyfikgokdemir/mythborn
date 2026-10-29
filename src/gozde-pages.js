import { GOZDE_BLOG_POSTS, GOZDE_LEGAL_PAGES } from './gozde-blog-data.js';

const safe = (v) =>
  String(v ?? '').replace(/[&<>"']/g, (s) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));

export const ROUTE_MAP = {
  tr: {
    home: '/',
    areas: '/kesif-alanlari',
    approach: '/yaklasim',
    videos: '/videolar',
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
    videos: '/en/videos',
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
    videos: '/gr/videos',
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
    videos: '/es/videos',
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
    videos: '/ar/videos',
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
    honestBadge: 'ŞEFFAF SÜREÇ · SESLİ KAYIT, YAZILI ANALİZ VEYA RANDEVULU BİREBİR GÖRÜŞME',
    honestTitle: 'Nasıl Çalışıyoruz? Sesli Kayıt, Yazılı Analiz ve Randevulu Birebir Görüşme',
    honestBody:
      'Danışanlarımıza anlık çağrı merkezi vaadiyle yanıltıcı bilgi vermeyiz. Gözde tek başına ve derin odaklanmayla çalıştığı için; birebir canlı görüşmeler ön iletişim formu sonrasında size uygun gün ve saat planlanarak randevu ile gerçekleştirilir. Beklemek istemeyen veya kaydı tekrar tekrar dinlemek isteyen danışanlarımız için ise kapsamlı ses kaydı analizi veya detaylı yazılı yol haritası hazırlanır.',
    blogEyebrow: 'GÖKYÜZÜ GÜNDEMİ, RETRO & SEMBOL REHBERLERİ',
    blogTitle: 'Sembollerin ve Gökyüzünün Dilini Derinlemesine Keşfedin',
    blogSub: 'Gezegen retrolarından tutulma koridorlarına, Katina aşk açılımından Tarot arketiplerine uzanan 10 kapsamlı rehber.',
    readMore: 'Rehberi Oku →',
    allBlogsCta: 'Tüm 10 Blog Rehberini İncele →',
    backToBlog: '← Tüm Blog Yazılarına Dön',
    sampleQuestionsLabel: 'Bu Okumada Sık Sorulan Odak Sorular:',
    deliveryLabel: 'Teslimat & Görüşme Biçimi:',
    deliveryText: 'Kişiye özel ses kaydı, detaylı yazılı analiz veya ön iletişimle planlanan randevulu birebir canlı görüşme.',
    askGozdeCta: 'Bu Konuda Gözde’ye Soru & Randevu Talebi İlet →'
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
    honestBadge: 'TRANSPARENT PROCESS · VOICE, WRITTEN OR BY-APPOINTMENT 1-ON-1 SESSION',
    honestTitle: 'How We Work: Voice Recordings, Written Analyses & Scheduled 1-on-1 Sessions',
    honestBody:
      'Because Gözde works personally with every client rather than running an instant call center, live 1-on-1 sessions are conducted strictly by prior appointment after you submit the initial connection form. You may also choose a bespoke voice recording or detailed written analysis.',
    blogEyebrow: 'CELESTIAL CYCLES, RETROGRADES & SYMBOLIC GUIDES',
    blogTitle: 'Explore the Language of Symbols and the Sky in Depth',
    blogSub: '10 comprehensive long-form guides covering planetary retrogrades, eclipse corridors, Katina love spreads, and Tarot archetypes.',
    readMore: 'Read Guide →',
    allBlogsCta: 'Explore All 10 Blog Guides →',
    backToBlog: '← Back to All Guides',
    sampleQuestionsLabel: 'Key Questions Explored in This Reading:',
    deliveryLabel: 'Reading & Session Format:',
    deliveryText: 'Bespoke voice recording, comprehensive written roadmap, or 1-on-1 live session by appointment.',
    askGozdeCta: 'Send Question or Appointment Request →'
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
    honestBadge: 'ΔΙΑΦΑΝΕΙΑ · ΗΧΗΤΙΚΗ, ΓΡΑΠΤΗ Ή ΠΡΟΣΩΠΙΚΗ ΣΥΝΕΔΡΙΑ ΚΑΤΟΠΙΝ ΡΑΝΤΕΒΟΥ',
    honestTitle: 'Πώς Λειτουργούμε: Ηχητική Ανάλυση, Γραπτό Κείμενο & Προσωπικό Ραντεβού',
    honestBody:
      'Είμαστε απόλυτα ειλικρινείς: επειδή κάθε ανάγνωση γίνεται προσωπικά από την Gözde, οι ζωντανές ατομικές συνεδρίες πραγματοποιούνται αποκλειστικά κατόπιν προγραμματισμένου ραντεβού μετά τη συμπλήρωση της φόρμας επικοινωνίας, παράλληλα με τις ηχητικές και γραπτές αναλύσεις.',
    blogEyebrow: 'ΟΥΡΑΝΙΟΙ ΚΥΚΛΟΙ, ΑΝΑΔΡΟΜΟΙ & ΣΥΜΒΟΛΙΚΟΙ ΟΔΗΓΟΙ',
    blogTitle: 'Ανακαλύψτε σε Βάθος τη Γλώσσα των Συμβόλων και των Άστρων',
    blogSub: '10 αναλυτικοί οδηγοί για ανάδρομους πλανήτες, εκλείψεις, Κατίνα, Ταρώ και γενέθλιο χάρτη.',
    readMore: 'Διαβάστε το Άρθρο →',
    allBlogsCta: 'Δείτε και τα 10 Άρθρα →',
    backToBlog: '← Επιστροφή στα Άρθρα',
    sampleQuestionsLabel: 'Ενδεικτικά Ερωτήματα σε Αυτή τη Θεματική:',
    deliveryLabel: 'Μορφή Παράδοσης & Συνεδρίας:',
    deliveryText: 'Ηχητική ηχογράφηση, αναλυτικό γραπτό κείμενο ή ατομική συνεδρία κατόπιν ραντεβού.',
    askGozdeCta: 'Στείλτε Ερώτημα ή Αίτημα Ραντεβού →'
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
    honestBadge: 'PROCESO TRANSPARENTE · AUDIO, ESCRITO O SESIÓN INDIVIDUAL CON CITA PREVIA',
    honestTitle: 'Cómo Trabajamos: Audio Grabado, Análisis Escrito y Sesión Individual con Cita Previa',
    honestBody:
      'Hablamos siempre con total honestidad: dado que Gözde atiende personalmente cada consulta, las sesiones individuales en vivo se realizan exclusivamente con cita previa acordada tras enviar el formulario inicial, además de las modalidades en audio grabado o texto detallado.',
    blogEyebrow: 'CICLOS CELESTES, RETRÓGRADOS Y GUÍAS SIMBÓLICAS',
    blogTitle: 'Explora a Fondo el Lenguaje de los Símbolos y las Estrellas',
    blogSub: '10 guías extensas sobre planetas retrógrados, eclipses, lectura de Katina, arcanos del Tarot y carta natal.',
    readMore: 'Leer Guía →',
    allBlogsCta: 'Ver las 10 Guías del Blog →',
    backToBlog: '← Volver al Blog',
    sampleQuestionsLabel: 'Preguntas Frecuentes en Esta Lectura:',
    deliveryLabel: 'Formato de Entrega y Sesión:',
    deliveryText: 'Grabación de voz personalizada, análisis escrito detallado o sesión individual en vivo con cita previa.',
    askGozdeCta: 'Enviar Consulta o Solicitud de Cita →'
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
    honestBadge: 'شفافية تامة · تسجيل صوتي أو تحليل مكتوب أو جلسة فردية بموعد مسبق',
    honestTitle: 'كيف نعمل؟ تسجيل صوتي، تحليل مكتوب، أو جلسة فردية مباشرة بموعد مسبق',
    honestBody:
      'نلتزم بالوضوح والصدق معكم: لأن Gözde تقدم كل قراءة بنفسها وبتركيز كامل، فإن الجلسات الفردية المباشرة تتم حصراً بموعد مسبق يتم تنسيقه بعد إرسال نموذج التواصل الأولي، إلى جانب خيارات التسجيل الصوتي المفصل أو التحليل المكتوب.',
    blogEyebrow: 'حركة الكواكب، التراجعات وأدلة الرموز',
    blogTitle: 'استكشف لغة الرموز والنجوم بعمق ووضوح',
    blogSub: '10 مقالات وأدلة موسعة حول تراجع الكواكب، الكسوف والخسوف، أوراق كاتينا، التاروت وخارطة الميلاد.',
    readMore: 'اقرأ الدليل ←',
    allBlogsCta: 'استعرض جميع المقالات الـ 10 ←',
    backToBlog: '→ العودة إلى المدونة',
    sampleQuestionsLabel: 'أبرز الأسئلة التي تتناولها هذه القراءة:',
    deliveryLabel: 'صيغة تقديم القراءة والجلسة:',
    deliveryText: 'تسجيل صوتي مخصص، تحليل مكتوب مفصل، أو جلسة فردية مباشرة بموعد مسبق.',
    askGozdeCta: 'أرسل سؤالك أو طلب الموعد إلى Gözde ←'
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

  if (/^(?:\/(en|gr|el|es|ar))?\/(?:videolar|videos)$/i.test(clean)) return { type: 'videos' };
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
  const navVideosLabel =
    locale === 'tr' ? 'Video Açılımlar' : locale === 'en' ? 'Video Readings' : locale === 'el' ? 'Βίντεο' : locale === 'es' ? 'Videos' : 'فيديوهات القراءة';
  const getLangHref = langHrefFn || ((k) => ROUTE_MAP[k][activeType] || ROUTE_MAP[k].home);
  const langLabel = (k) => (k === 'el' ? 'GR' : k.toUpperCase());
  return `<header class="top-shell"><div class="top"><a class="logo" href="${r.home}">MYTHBORN</a><nav class="top-nav desktop-nav" aria-label="Primary"><a href="${r.areas}" ${activeType === 'areas' ? 'aria-current="page"' : ''}>${safe(t.navAreas)}</a><a href="${r.approach}" ${activeType === 'approach' ? 'aria-current="page"' : ''}>${safe(t.navProcess)}</a><a href="${r.videos}" ${activeType === 'videos' ? 'aria-current="page"' : ''}>${safe(navVideosLabel)}</a><a href="${r.blog}" ${activeType === 'blog' || activeType === 'blog-post' ? 'aria-current="page"' : ''}>${safe(u.navBlog)}</a><a href="${r.contact}" ${activeType === 'contact' ? 'aria-current="page"' : ''}>${safe(t.navInquiry)}</a><a class="apply-pill" href="${r.apply}" ${activeType === 'apply' ? 'aria-current="page"' : ''}>${safe(t.applyNav)}</a><div class="langs" aria-label="Languages">${Object.entries(langs)
    .map(([k, v]) => `<a href="${getLangHref(k)}" lang="${v[1]}" ${locale === k ? 'aria-current="page"' : ''}>${langLabel(k)}</a>`)
    .join('')}</div></nav><div class="mobile-bar-actions"><a class="mobile-quick-cta" href="${r.contact}">${safe(t.navInquiry)}</a><button type="button" class="menu-toggle" data-open-drawer aria-expanded="false" aria-controls="mobile-drawer"><span aria-hidden="true">☰</span> <span>${safe(u.menuBtn)}</span></button></div></div></header><aside id="mobile-drawer" class="mobile-drawer" aria-hidden="true"><div class="drawer-backdrop" data-close-drawer></div><div class="drawer-panel"><div class="drawer-head"><a class="logo" href="${r.home}">MYTHBORN</a><button type="button" class="drawer-close" data-close-drawer aria-label="${safe(u.closeBtn)}">✕ ${safe(u.closeBtn)}</button></div><div class="drawer-badge"><span class="live-dot" aria-hidden="true"></span><span>${safe(t.lead)}</span></div><nav class="drawer-links" aria-label="Mobile Navigation"><a href="${r.home}"><span>✦ ${safe(u.navHome)}</span><small>→</small></a><a href="${r.areas}"><span>☼ ${safe(t.navAreas)}</span><small>→</small></a><a href="${r.approach}"><span>☾ ${safe(t.navProcess)}</span><small>→</small></a><a href="${r.videos}"><span>▶ ${safe(navVideosLabel)}</span><small>→</small></a><a href="${r.blog}"><span>✧ ${safe(u.navBlog)} (10)</span><small>→</small></a><a href="${r.contact}"><span>♡ ${safe(t.navInquiry)} & ${safe(t.navFaq)}</span><small>→</small></a><a href="${r.apply}" class="drawer-highlight"><span>✶ ${safe(t.applyNav)}</span><small>→</small></a></nav><div class="drawer-legal"><p class="eyebrow" style="margin-bottom:8px">${safe(u.legalTitle)}</p><div class="drawer-legal-links"><a href="${r.kvkk}">${safe(u.kvkkNav)}</a><a href="${r.privacy}">${safe(u.privacyNav)}</a><a href="${r.terms}">${safe(u.termsNav)}</a></div></div><div class="drawer-langs">${Object.entries(langs)
    .map(([k, v]) => `<a href="${getLangHref(k)}" lang="${v[1]}" ${locale === k ? 'aria-current="page"' : ''}>${langLabel(k)}</a>`)
    .join('')}</div><div class="drawer-foot"><a class="cta" href="${r.contact}" style="width:100%">${safe(t.ctaPrimary)} →</a><a class="cta-ghost" href="https://www.tiktok.com/@gozdeli_" target="_blank" rel="noopener noreferrer" style="width:100%">${safe(t.social)} ↗</a></div></div></aside>`;
};

export const renderFooter = ({ locale, t }) => {
  const r = ROUTE_MAP[locale];
  const u = EXTRA_UI[locale];
  const colExplore =
    locale === 'tr' ? 'KEŞİF & REHBERLER' : locale === 'en' ? 'EXPLORE & GUIDES' : locale === 'el' ? 'ΠΕΡΙΗΓΗΣΗ' : locale === 'es' ? 'EXPLORAR' : 'استكشف المنصة';
  const colConnect =
    locale === 'tr' ? 'İLETİŞİM & AĞ' : locale === 'en' ? 'CONNECT & NETWORK' : locale === 'el' ? 'ΕΠΙΚΟΙΝΩΝΙΑ' : locale === 'es' ? 'CONTACTO Y RED' : 'التواصل والشبكة';
  const topLabel =
    locale === 'tr' ? 'Yukarı çık' : locale === 'en' ? 'Back to top' : locale === 'el' ? 'Πάνω' : locale === 'es' ? 'Subir' : 'إلى الأعلى';
  const cookieCopy = {
    tr: {
      region: 'Çerez ve Gizlilik Bildirimi',
      title: 'Çerez (Cookie) ve Gizlilik Tercihleriniz',
      desc: 'Deneyiminizi güvenli kılmak, dil tercihlerinizi hatırlamak ve 6698 sayılı KVKK ile GDPR standartlarına uygun hizmet sunmak için zorunlu ve işlevsel çerezler kullanıyoruz. Detaylar için',
      acceptAll: 'Tümünü Kabul Et',
      essentialOnly: 'Sadece Zorunlu Çerezler',
      manageLabel: 'Çerez Tercihleri'
    },
    en: {
      region: 'Cookie and Privacy Notice',
      title: 'Your Cookie & Privacy Preferences',
      desc: 'We use strictly necessary and functional cookies to keep your session secure, remember language preferences, and comply with KVKK & GDPR standards. Read our',
      acceptAll: 'Accept All',
      essentialOnly: 'Essential Only',
      manageLabel: 'Cookie Preferences'
    },
    el: {
      region: 'Ειδοποίηση Cookies και Απορρήτου',
      title: 'Προτιμήσεις Cookies & Απορρήτου',
      desc: 'Χρησιμοποιούμε απαραίτητα και λειτουργικά cookies για την ασφάλεια της περιήγησής σας και την απομνημόνευση της γλώσσας σύμφωνα με το GDPR/KVKK. Δείτε την',
      acceptAll: 'Αποδοχή Όλων',
      essentialOnly: 'Μόνο Απαραίτητα',
      manageLabel: 'Ρυθμίσεις Cookies'
    },
    es: {
      region: 'Aviso de Cookies y Privacidad',
      title: 'Preferencias de Cookies y Privacidad',
      desc: 'Utilizamos cookies estrictamente necesarias y funcionales para garantizar una navegación segura y recordar su idioma conforme al RGPD/KVKK. Consulte nuestra',
      acceptAll: 'Aceptar Todo',
      essentialOnly: 'Solo Necesarias',
      manageLabel: 'Preferencias de Cookies'
    },
    ar: {
      region: 'إشعار ملفات تعريف الارتباط والخصوصية',
      title: 'تفضيلات ملفات تعريف الارتباط (Cookies) والخصوصية',
      desc: 'نستخدم ملفات تعريف الارتباط الضرورية والوظيفية لضمان أمان التصفح وتذكر لغتك المفضلة وفقاً لمعايير KVKK وGDPR. للاطلاع على التفاصيل راجع',
      acceptAll: 'قبول الكل',
      essentialOnly: 'الضرورية فقط',
      manageLabel: 'إعدادات ملفات الارتباط'
    }
  }[locale] || {
    region: 'Çerez ve Gizlilik Bildirimi',
    title: 'Çerez (Cookie) ve Gizlilik Tercihleriniz',
    desc: 'Deneyiminizi güvenli kılmak için çerezler kullanıyoruz.',
    acceptAll: 'Tümünü Kabul Et',
    essentialOnly: 'Sadece Zorunlu Çerezler',
    manageLabel: 'Çerez Tercihleri'
  };
  const navVideosLabel =
    locale === 'tr' ? 'Video Açılımlar' : locale === 'en' ? 'Video Readings' : locale === 'el' ? 'Βίντεο' : locale === 'es' ? 'Videos' : 'فيديوهات القراءة';
  const videoToastCopy = {
    tr: {
      badge: 'YENİ HAFTALIK AÇILIM YAYINDA',
      title: '28 Ekim – 5 Kasım Tarot Açılımı: Kartlar Bu Hafta Burcun İçin Ne Söylüyor?',
      cta: 'Hemen İzle ▶',
      close: 'Bildirimi kapat'
    },
    en: {
      badge: 'NEW WEEKLY VIDEO READING',
      title: 'Oct 28 – Nov 5 Tarot Spread: What Do the Cards Reveal for Your Sign?',
      cta: 'Watch Now ▶',
      close: 'Dismiss notification'
    },
    el: {
      badge: 'ΝΕΟ ΕΒΔΟΜΑΔΙΑΙΟ ΒΙΝΤΕΟ ΤΑΡΩ',
      title: '28 Οκτ – 5 Νοε Ταρώ: Τι Αποκαλύπτουν οι Κάρτες για το Ζώδιό σας;',
      cta: 'Δείτε Τώρα ▶',
      close: 'Κλείσιμο ειδοποίησης'
    },
    es: {
      badge: 'NUEVA LECTURA EN VIDEO',
      title: 'Tarot 28 Oct – 5 Nov: ¿Qué Revelan las Cartas para tu Signo?',
      cta: 'Ver Ahora ▶',
      close: 'Cerrar aviso'
    },
    ar: {
      badge: 'فيديو قراءة الأسبوع الجديد',
      title: 'تاروت 28 أكتوبر – 5 نوفمبر: ماذا تكشف الأوراق لبرجك هذا الأسبوع؟',
      cta: 'شاهد الآن ▶',
      close: 'إغلاق الإشعار'
    }
  }[locale];
  return `<footer class="bottom"><div class="footer-card"><div class="footer-top"><div class="bottom-brand"><a class="logo" href="${r.home}">MYTHBORN</a><p class="footer-lead">${safe(t.lead)}</p><span>${safe(t.note)}</span></div><div class="footer-cta-row"><a class="cta" href="${r.contact}">${safe(t.navInquiry)} →</a><a class="cta-ghost" href="https://www.tiktok.com/@gozdeli_" target="_blank" rel="noopener noreferrer">TikTok · @gozdeli_ ↗</a></div></div><div class="footer-cols"><div class="footer-col"><h4>${safe(colExplore)}</h4><nav aria-label="${safe(colExplore)}"><a href="${r.home}"><span>${safe(u.navHome)}</span><small>→</small></a><a href="${r.areas}"><span>${safe(t.navAreas)}</span><small>→</small></a><a href="${r.approach}"><span>${safe(t.navProcess)}</span><small>→</small></a><a href="${r.videos}"><span>${safe(navVideosLabel)}</span><small>▶</small></a><a href="${r.blog}"><span>${safe(u.navBlog)}</span><small>→</small></a></nav></div><div class="footer-col"><h4>${safe(colConnect)}</h4><nav aria-label="${safe(colConnect)}"><a href="${r.contact}"><span>${safe(t.navInquiry)}</span><small>→</small></a><a href="${r.home}#sss"><span>${safe(t.navFaq)}</span><small>→</small></a><a href="${r.apply}"><span>${safe(t.applyNav)}</span><small>→</small></a><a href="https://www.tiktok.com/@gozdeli_" target="_blank" rel="noopener noreferrer"><span>TikTok</span><small>↗</small></a></nav></div><div class="footer-col footer-col-legal"><h4>${safe(u.legalTitle)}</h4><nav aria-label="${safe(u.legalTitle)}"><a href="${r.kvkk}"><span>${safe(u.kvkkNav)}</span><small>→</small></a><a href="${r.privacy}"><span>${safe(u.privacyNav)}</span><small>→</small></a><a href="${r.terms}"><span>${safe(u.termsNav)}</span><small>→</small></a><button type="button" class="cookie-pref-trigger" data-open-cookie-banner><span>${safe(cookieCopy.manageLabel)}</span><small>⚙</small></button></nav></div></div><div class="footer-meta"><strong>© 2026 MYTHBORN · ${safe(t.lead)}</strong><div class="footer-langs">${Object.keys(ROUTE_MAP)
    .map((k) => `<a href="${ROUTE_MAP[k].home}" ${locale === k ? 'aria-current="page"' : ''}>${k === 'el' ? 'GR' : k.toUpperCase()}</a>`)
    .join('')}</div></div></div></footer><aside id="video-promo-toast" class="video-toast" popover="manual" data-video-release="2026-10-28-v4" role="status" aria-live="polite" hidden><div class="video-toast-inner"><a class="video-toast-thumb" href="${r.videos}"><img src="/images/gozde-salon-portrait.jpg" width="96" height="96" alt="${safe(t.lead)}"><span class="video-toast-play" aria-hidden="true">▶</span></a><div class="video-toast-copy"><span class="video-toast-badge"><span class="live-dot" aria-hidden="true"></span> ${safe(videoToastCopy.badge)}</span><a class="video-toast-title" href="${r.videos}">${safe(videoToastCopy.title)}</a><div class="video-toast-actions"><a class="video-toast-cta" href="${r.videos}">${safe(videoToastCopy.cta)}</a></div></div><button type="button" class="video-toast-close" popovertarget="video-promo-toast" popovertargetaction="hide" data-close-video-toast aria-label="${safe(videoToastCopy.close)}">✕</button></div><span class="video-toast-progress" aria-hidden="true"></span></aside><aside id="cookie-consent-banner" class="cookie-banner" role="region" aria-label="${safe(cookieCopy.region)}" hidden><div class="cookie-banner-inner"><div class="cookie-banner-copy"><strong><span style="color:var(--gold)">✦</span> ${safe(cookieCopy.title)}</strong><p>${safe(cookieCopy.desc)} <a href="${r.privacy}">${safe(u.privacyNav)}</a> · <a href="${r.kvkk}">${safe(u.kvkkNav)}</a>.</p></div><div class="cookie-banner-actions"><button type="button" class="cta-ghost cookie-btn" data-cookie-choice="essential">${safe(cookieCopy.essentialOnly)}</button><button type="button" class="cta cookie-btn" data-cookie-choice="accepted">${safe(cookieCopy.acceptAll)}</button></div></div></aside><button type="button" id="scroll-top-btn" class="scroll-top-btn" aria-label="${safe(topLabel)}" title="${safe(topLabel)}"><span aria-hidden="true">↑</span></button>`;
};

const ZODIAC_WEEKLY_DATA = [
  { sign: 'Koç', en: 'Aries', el: 'Κριός', es: 'Aries', ar: 'الحمل', element: 'fire', card: 'İmparator & Değnek Ası', coffee: 'Kanatlı Anahtar', note: '28 Ekim – 5 Kasım haftasında ertelenen bir girişim hız kazanıyor; acele karar yerine stratejik sınır çizmek kazandıracak.' },
  { sign: 'Boğa', en: 'Taurus', el: 'Ταύρος', es: 'Tauro', ar: 'الثور', element: 'earth', card: 'Azize & Tılsım Dokuzlusu', coffee: 'Köklü Ağaç', note: 'Maddi güven ve uzun vadeli planlarda iç sesiniz çok berrak; sabırla koruduğunuz alanda somut bir netlik doğuyor.' },
  { sign: 'İkizler', en: 'Gemini', el: 'Δίδυμοι', es: 'Géminis', ar: 'الجوزاء', element: 'air', card: 'Büyücü & Kılıç İkilisi', coffee: 'Çifte Kuş', note: 'İkili görüşmeler ve beklenen bir haber gündemde; zihinsel ikilemi bitirmek için tek bir önceliğe odaklanın.' },
  { sign: 'Yengeç', en: 'Cancer', el: 'Καρκίνος', es: 'Cáncer', ar: 'السرطان', element: 'water', card: 'Ay & Kupa Yıldızı', coffee: 'Deniz Kabuğu', note: 'Duygusal sezgileriniz zirvede; hane içi ve yakın ilişkilerde geçmişten kalan bir düğüm tatlılıkla çözülüyor.' },
  { sign: 'Aslan', en: 'Leo', el: 'Λέων', es: 'Leo', ar: 'الأسد', element: 'fire', card: 'Güneş & Güç', coffee: 'Taç ve Yol', note: 'Yaratıcı enerjiniz ve görünürlüğünüz parlıyor; gurur kaynaklı gerilimleri yumuşak bir liderlikle aşacaksınız.' },
  { sign: 'Başak', en: 'Virgo', el: 'Παρθένος', es: 'Virgo', ar: 'العذراء', element: 'earth', card: 'Ermiş & Tılsım Sekizlisi', coffee: 'Kum Saati', note: 'Detayları sadeleştirme ve zihinsel detoks haftası; iş ve düzen konularında attığınız disiplinli adım karşılık buluyor.' },
  { sign: 'Terazi', en: 'Libra', el: 'Ζυγός', es: 'Libra', ar: 'الميزان', element: 'air', card: 'Adalet & Aşıklar', coffee: 'Terazi ve Halka', note: 'İlişki ve ortaklıklarda denge yeniden kuruluyor; açık iletişim kurduğunuzda karşı taraftan güçlü bir adım geliyor.' },
  { sign: 'Akrep', en: 'Scorpio', el: 'Σκορπιός', es: 'Escorpio', ar: 'العقرب', element: 'water', card: 'Dönüşüm & Kader Çarkı', coffee: 'Zümrüdüanka', note: 'Sizin döneminizde güçlü bir yenilenme kapısı açılıyor; eski yükleri bıraktıkça yeni bir döngü hızla başlıyor.' },
  { sign: 'Yay', en: 'Sagittarius', el: 'Τοξότης', es: 'Sagitario', ar: 'القوس', element: 'fire', card: 'Denge & Değnek Üçlüsü', coffee: 'Uzak Ufuk / Yelken', note: 'Yeni ufuklar, eğitim veya uzak bağlantılı konular hareketleniyor; vizyonunuzu genişleten bir teklif doğabilir.' },
  { sign: 'Oğlak', en: 'Capricorn', el: 'Αιγόκερως', es: 'Capricornio', ar: 'الجدي', element: 'earth', card: 'Dünya & Tılsım Kralı', coffee: 'Dağ Zirvesi', note: 'Uzun süredir emek verdiğiniz bir süreç tamamlanma aşamasında; otorite ve kariyer alanında sağlam bir zemin oluşuyor.' },
  { sign: 'Kova', en: 'Aquarius', el: 'Υδροχόος', es: 'Acuario', ar: 'الدلو', element: 'air', card: 'Yıldız & Kılıç Ası', coffee: 'Parlayan Yıldız', note: 'Özgün bir fikir ve sosyal çevreden gelen ilham verici destekle zihninizdeki sis perdesi tamamen dağılıyor.' },
  { sign: 'Balık', en: 'Pisces', el: 'Ιχθύες', es: 'Piscis', ar: 'الحوت', element: 'water', card: 'Kupa Kraliçesi & Asılan Adam', coffee: 'Yunus ve Ay', note: 'Rüyalarınız ve duru görünüz bu hafta çok konuşkan; olaylara farklı açıdan baktığınızda aradığınız huzuru bulacaksınız.' }
];

export const renderVideoSpotlightSection = ({ locale }) => {
  const r = ROUTE_MAP[locale];
  const copy = {
    tr: {
      eyebrow: 'HAFTALIK VİDEO AÇILIMLAR & BURÇ REHBERİ',
      title: '28 Ekim – 5 Kasım Haftalık Tarot ve Sembol Açılımı Yayında',
      sub: 'Site hızını düşürmeyen özel video kütüphanemizde Gözde’nin haftalık Tarot, Kahve Falı ve 12 burç enerji okumalarını izleyin; geçmiş haftaların arşivini keşfedin.',
      badge: 'YENİ VİDEO · 28 EKİM – 5 KASIM TAROT AÇILIMI',
      cardTitle: '28 Ekim – 5 Kasım: Akrep Yeniayı ve Kasım Geçişinde Kartlar Ne Söylüyor?',
      cardDesc: 'Gözde bu haftanın kolektif Tarot enerjisini, ilişkilerdeki kırılma noktalarını ve 12 burcun dikkat etmesi gereken sembolleri adım adım yorumluyor.',
      watchBtn: 'Videoyu Aç & İzle ▶',
      zodiacBtn: '12 Burç Haftalık Özeti →'
    },
    en: {
      eyebrow: 'WEEKLY VIDEO READINGS & ZODIAC ARCHIVE',
      title: 'Oct 28 – Nov 5 Weekly Tarot & Symbolic Reading Is Live',
      sub: 'Watch Gözde’s weekly Tarot, Coffee Symbol, and 12-sign horoscope readings in our lightweight video library without slowing down your browsing.',
      badge: 'NEW VIDEO · OCT 28 – NOV 5 TAROT SPREAD',
      cardTitle: 'Oct 28 – Nov 5: What Do the Cards Reveal for the Scorpio Season Corridor?',
      cardDesc: 'Gözde explores this week’s collective Tarot archetypes, relationship dynamics, and key symbolic messages across all 12 zodiac signs.',
      watchBtn: 'Watch Video Reading ▶',
      zodiacBtn: '12 Zodiac Sign Highlights →'
    },
    el: {
      eyebrow: 'ΕΒΔΟΜΑΔΙΑΙΑ ΒΙΝΤΕΟ ΤΑΡΩ & ΖΩΔΙΑ',
      title: 'Εβδομαδιαία Ανάγνωση Ταρώ 28 Οκτωβρίου – 5 Νοεμβρίου',
      sub: 'Παρακολουθήστε τις εβδομαδιαίες αναγνώσεις Ταρώ, Καφέ και των 12 ζωδίων της Gözde στην ειδική βιβλιοθήκη βίντεο.',
      badge: 'ΝΕΟ ΒΙΝΤΕΟ · 28 ΟΚΤ – 5 ΝΟΕ',
      cardTitle: '28 Οκτωβρίου – 5 Νοεμβρίου: Τι Αποκαλύπτουν οι Κάρτες Ταρώ;',
      cardDesc: 'Η Gözde αναλύει την ενέργεια της εβδομάδας, τις σχέσεις και τα μηνύματα για τα 12 ζώδια.',
      watchBtn: 'Δείτε το Βίντεο ▶',
      zodiacBtn: 'Τα 12 Ζώδια της Εβδομάδας →'
    },
    es: {
      eyebrow: 'LECTURAS EN VIDEO SEMANALES Y HORÓSCOPO',
      title: 'Lectura Semanal de Tarot del 28 de Octubre al 5 de Noviembre',
      sub: 'Mira las lecturas semanales de Tarot, Café y los 12 signos del zodiaco de Gözde en nuestra videoteca optimizada.',
      badge: 'NUEVO VIDEO · 28 OCT – 5 NOV TAROT',
      cardTitle: '28 de Octubre – 5 de Noviembre: ¿Qué Revelan las Cartas esta Semana?',
      cardDesc: 'Gözde interpreta la energía colectiva del Tarot, los vínculos afectivos y las claves simbólicas para los 12 signos.',
      watchBtn: 'Ver Lectura en Video ▶',
      zodiacBtn: 'Resumen de los 12 Signos →'
    },
    ar: {
      eyebrow: 'قراءات الفيديو الأسبوعية والأبراج',
      title: 'قراءة التاروت الأسبوعية من 28 أكتوبر إلى 5 نوفمبر متاحة الآن',
      sub: 'شاهد قراءات Gözde الأسبوعية للتاروت وفنجان القهوة وتوقعات الأبراج الـ 12 في مكتبة الفيديو السريعة لدينا.',
      badge: 'فيديو جديد · قراءة تاروت 28 أكتوبر – 5 نوفمبر',
      cardTitle: '28 أكتوبر – 5 نوفمبر: ماذا تقول أوراق التاروت والرموز هذا الأسبوع؟',
      cardDesc: 'تستعرض Gözde طاقة الأسبوع العاطفية والمهنية والرسائل الرمزية لجميع الأبراج الاثني عشر.',
      watchBtn: 'شاهد الفيديو الآن ▶',
      zodiacBtn: 'ملخص الأبراج الـ 12 ←'
    }
  }[locale];

  return `<section id="video-vitrin" class="section-block"><div class="section-head"><p class="eyebrow">${safe(copy.eyebrow)}</p><h2>${safe(copy.title)}</h2><p>${safe(copy.sub)}</p></div><div class="video-spotlight-card"><a class="video-spotlight-Poster" href="${r.videos}" aria-label="${safe(copy.watchBtn)}"><img src="/images/gozde-salon-portrait.jpg" width="900" height="600" loading="lazy" alt="${safe(copy.cardTitle)}"><span class="video-play-orb" aria-hidden="true">▶</span><span class="video-duration-pill">HD MP4 · 28 EKİM – 5 KASIM</span></a><div class="video-spotlight-body"><div class="live-pill" style="margin-bottom:4px"><span class="live-dot" aria-hidden="true"></span><span>${safe(copy.badge)}</span></div><h3><a href="${r.videos}" style="color:inherit;text-decoration:none">${safe(copy.cardTitle)}</a></h3><p>${safe(copy.cardDesc)}</p><div class="zodiac-mini-strip">${ZODIAC_WEEKLY_DATA.map((z) => `<a href="${r.videos}#burclar" class="zodiac-mini-pill">${safe(locale === 'tr' ? z.sign : z[locale] || z.sign)}</a>`).join('')}</div><div class="hero-actions" style="margin-top:16px"><a class="cta" href="${r.videos}">${safe(copy.watchBtn)}</a><a class="cta-ghost" href="${r.videos}#burclar">${safe(copy.zodiacBtn)}</a></div></div></div></section>`;
};

export const renderVideosSubpage = (ctx) => {
  const { locale, t, langs } = ctx;
  const r = ROUTE_MAP[locale];
  const u = EXTRA_UI[locale];
  const [, lang] = langs[locale];
  const canonicalPath = r.videos;
  const canonicalUrl = `https://mythborn.co${canonicalPath}`;

  const pageTitle =
    locale === 'tr'
      ? 'Haftalık Tarot & Kahve Falı Video Açılımları ve Burç Arşivi'
      : locale === 'en'
      ? 'Weekly Tarot & Coffee Reading Videos and Zodiac Archive'
      : locale === 'el'
      ? 'Εβδομαδιαία Βίντεο Ταρώ, Καφέ & Αρχείο Ζωδίων'
      : locale === 'es'
      ? 'Videos Semanales de Tarot, Café y Archivo Zodiacal'
      : 'فيديوهات التاروت وقراءة القهوة الأسبوعية وأرشيف الأبراج';

  const pageDesc =
    locale === 'tr'
      ? 'Gözde’nin 28 Ekim – 5 Kasım haftalık Tarot açılımı videosu, 12 burç için haftalık kart ve kahve sembolü yorumları ile geçmiş haftaların akıllı video arşivi.'
      : 'Watch Gözde’s Oct 28 – Nov 5 weekly Tarot video reading, 12 zodiac sign symbolic highlights, and weekly reading archive.';

  const schemaGraph = [
    {
      '@type': 'VideoObject',
      '@id': `${canonicalUrl}#featured-video`,
      name: '28 Ekim – 5 Kasım Haftalık Tarot ve Sembol Açılımı — Gözde (MYTHBORN)',
      description: pageDesc,
      thumbnailUrl: ['https://mythborn.co/images/gozde-salon-portrait.jpg', 'https://mythborn.co/images/gozde-tarot-hero.webp'],
      uploadDate: '2026-10-28T12:00:00+03:00',
      contentUrl: 'https://mythborn.co/videos/28-ekim-5-kasim-tarot.mp4',
      embedUrl: canonicalUrl,
      inLanguage: lang,
      publisher: {
        '@type': 'Organization',
        '@id': 'https://mythborn.co/#organization',
        name: 'MYTHBORN',
        logo: { '@type': 'ImageObject', url: 'https://mythborn.co/images/gozde-tarot-hero.webp' }
      }
    },
    {
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: `MYTHBORN | ${pageTitle}`,
      description: pageDesc,
      inLanguage: lang
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'MYTHBORN', item: `https://mythborn.co${r.home}` },
        { '@type': 'ListItem', position: 2, name: pageTitle, item: canonicalUrl }
      ]
    }
  ];

  const bodyHtml = `<section class="section-block" style="padding-top:28px"><div class="section-head"><div class="live-pill" style="margin-bottom:10px"><span class="live-dot" aria-hidden="true"></span><span>BU HAFTANIN ÖZEL AÇILIMI · 28 EKİM – 5 KASIM</span></div><p class="eyebrow">MYTHBORN VİDEO KÜTÜPHANESİ & HAFTALIK BURÇ ENERJİLERİ</p><h1 class="title" style="font-size:clamp(28px,3.4vw,46px);max-width:26ch">${safe(pageTitle)}</h1><p>${safe(pageDesc)}</p></div><div class="video-theater-grid"><div class="video-player-box"><video id="featured-tarot-video" class="featured-video-player" controls playsinline preload="none" width="1280" height="720" poster="/images/gozde-salon-portrait.jpg"><source src="/videos/28-ekim-5-kasim-tarot.mp4" type="video/mp4">Tarayıcınız HTML5 video oynatmayı desteklemiyor.</video></div><aside class="video-meta-panel"><p class="eyebrow">AKTİF HAFTA · 28 EKİM – 5 KASIM</p><h2>28 Ekim – 5 Kasım Tarot Açılımı: Dönüşüm, İlişkiler ve Karar Eşikleri</h2><p>Gözde bu videoda 28 Ekim – 5 Kasım koridorunun kolektif Tarot enerjisini, yakın ilişkilerdeki gizli gündemleri ve yeni haftada dikkat edilmesi gereken sembolik işaretleri yorumluyor.</p><ul class="video-highlights-list"><li>✦ <strong>Odak Disiplin:</strong> Tarot Arkana & Kolektif Enerji Okuması</li><li>✦ <strong>Akıllı Yükleme:</strong> Video yalnızca siz <em>Oynat (▶)</em> tuşuna bastığınızda yüklenir; kotanızı ve sayfa hızını yormaz.</li><li>✦ <strong>Kişisel Danışmanlık:</strong> Genel burç yorumunun ötesinde kendi doğum verinize özel açılım için ön iletişim formunu kullanabilirsiniz.</li></ul><div style="display:flex;flex-direction:column;gap:10px;margin-top:auto"><a class="cta" href="${r.contact}?topic=Tarot">${safe(u.askGozdeCta)}</a><a class="cta-ghost" href="https://www.tiktok.com/@gozdeli_" target="_blank" rel="noopener noreferrer">TikTok’ta Günlük Kısa Açılımlar (@gozdeli_) ↗</a></div></aside></div></section><section id="burclar" class="section-block"><div class="section-head"><p class="eyebrow">12 BURÇ HAFTALIK TAROT & KAHVE SEMBOLÜ ÖZETİ (28 EKİM – 5 KASIM)</p><h2>Burcunuza Göre Bu Haftanın Kartı ve Sembol Mesajı</h2><p>Her hafta 12 burç için güncellenen Tarot arketipi, fincan sembolü ve haftalık odak notları. Elementinize göre filtreleyebilir veya doğrudan kendi burcunuzu seçebilirsiniz.</p></div><div class="zodiac-filter-bar" role="tablist" aria-label="Element Filtresi"><button type="button" class="zodiac-filter-btn is-active" data-zodiac-filter="all">Tüm Burçlar (12)</button><button type="button" class="zodiac-filter-btn" data-zodiac-filter="fire">🔥 Ateş (Koç, Aslan, Yay)</button><button type="button" class="zodiac-filter-btn" data-zodiac-filter="earth">🌿 Toprak (Boğa, Başak, Oğlak)</button><button type="button" class="zodiac-filter-btn" data-zodiac-filter="air">💨 Hava (İkizler, Terazi, Kova)</button><button type="button" class="zodiac-filter-btn" data-zodiac-filter="water">💧 Su (Yengeç, Akrep, Balık)</button></div><div class="zodiac-cards-grid">${ZODIAC_WEEKLY_DATA.map(
    (z) => `<article class="zodiac-week-card" data-zodiac-element="${z.element}"><div class="zodiac-card-top"><h3>${safe(locale === 'tr' ? z.sign : `${z[locale]} (${z.sign})`)}</h3><span class="area-tag">28 EKİM – 5 KASIM</span></div><div class="zodiac-symbols-row"><small>🃏 <strong>Kart:</strong> ${safe(z.card)}</small><small>☕ <strong>Sembol:</strong> ${safe(z.coffee)}</small></div><p>${safe(z.note)}</p><a class="blog-read-link" href="${r.contact}?topic=${encodeURIComponent(z.sign + ' Burcu Özel Açılım')}">${safe(z.sign)} Burcu İçin Kişisel Açılım İste →</a></article>`
  ).join('')}</div></section><section id="video-arsiv" class="section-block"><div class="section-head"><p class="eyebrow">AKILLI HAFTALIK VİDEO & SEMBOL ARŞİVİ</p><h2>Haftalık Açılım Arşivi ve Yayın Takvimi</h2><p>Arama motorları (Google & Yapay Zeka) için her haftanın açılım özeti burada kalıcı olarak arşivlenir; medya dosyaları ise isteğe bağlı (on-demand) yüklendiği için site hızı her zaman ilk günkü gibi yüksek kalır.</p></div><div class="process-grid"><article class="pillar-card"><span class="area-tag" style="display:inline-block;margin-bottom:8px">YAYINDA · AKTİF HAFTA</span><h3>28 Ekim – 5 Kasım 2026: Haftalık Tarot & 12 Burç Enerji Açılımı</h3><p>Akrep döngüsü, ilişkilerde yüzleşme cesareti, finansal sınırlar ve 12 burcun haftalık Tarot arketipleri.</p><p style="margin-top:10px"><a href="#featured-tarot-video" style="color:var(--gold);font-size:13px">▲ Yukarıdaki Oynatıcıda İzle</a></p></article><article class="pillar-card"><span class="area-tag" style="display:inline-block;margin-bottom:8px">GELECEK HAFTA · HAZIRLANIYOR</span><h3>6 Kasım – 13 Kasım 2026: 12 Burç Kahve Falı & Katina Aşk Açılımı</h3><p>Her burç için fincan sembolleri, Katina destesinde ilişki gündemi ve Kasım ortası gökyüzü kavuşumları.</p><p style="margin-top:10px"><a href="https://www.tiktok.com/@gozdeli_" target="_blank" rel="noopener noreferrer" style="color:var(--gold);font-size:13px">TikTok Bildirimlerini Aç (@gozdeli_) ↗</a></p></article><article class="pillar-card"><span class="area-tag" style="display:inline-block;margin-bottom:8px">ARŞİV MİMARİSİ · SIFIR ŞİŞKİNLİK</span><h3>Haftalık Arşiv Nasıl Çalışır?</h3><p>Güncel haftanın videosu doğrudan HD oynatıcıda yer alır; geçmiş haftaların yazılı burç ve kart özetleri SEO arşivi olarak korunurken ağır video dosyaları sayfa yükünü artırmaz.</p><p style="margin-top:10px"><a href="${r.blog}" style="color:var(--gold);font-size:13px">${safe(u.allBlogsCta)}</a></p></article></div></section>`;

  return renderSubpageDocument({
    ...ctx,
    pageType: 'videos',
    canonicalPath,
    title: pageTitle,
    description: pageDesc,
    bodyHtml,
    schemaGraph
  });
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
  const { t, sharedStyles, clientInteractiveScript } = ctx;
  const bodyHtml = `<section class="section-block" style="padding-top:32px"><div class="section-head"><p class="eyebrow">MYTHBORN · ŞİFRELİ YÖNETİM PANELİ</p><h1>Siteden Gelen Mesajlar ve Yorumcu Başvuruları</h1><p>Ziyaretçiler sitedeki <strong>Ön İletişim Formunu</strong> veya <strong>Yorumcu Başvuru Formunu</strong> doldurup gönderdiğinde tüm kayıtlar şifreli olarak burada listelenir.</p></div><div id="admin-login-card" class="form-card" style="max-width:480px;margin:0 auto 24px"><form id="admin-login-form" class="gozde-form" style="grid-template-columns:1fr"><div class="field full"><label for="admin-password">Yönetim Paneli Şifresi</label><input type="password" id="admin-password" name="password" autocomplete="current-password" enterkeyhint="done" placeholder="Şifrenizi girin…" required></div><div class="field full" style="display:flex;gap:12px;align-items:center;flex-wrap:wrap"><button type="submit" class="submit-btn">Panele Giriş Yap →</button><p id="admin-login-status" class="form-status" aria-live="polite" style="margin:0"></p></div></form></div><div id="admin-panel-wrapper" style="display:none"><div style="display:flex;justify-content:flex-end;gap:10px;margin-bottom:16px;flex-wrap:wrap"><button type="button" id="admin-refresh-btn" class="cta-ghost" style="min-height:40px;padding:8px 16px;cursor:pointer">Listeyi Yenile ↻</button><button type="button" id="admin-logout-btn" class="cta-ghost" style="min-height:40px;padding:8px 16px;cursor:pointer">Paneli Kilitle / Çıkış Yap</button></div><div id="admin-submissions-root" class="admin-grid"><div class="pillar-card"><h3>1. Danışan Ön İletişim & Randevu Talepleri</h3><div id="inquiries-list"><p>Yükleniyor…</p></div></div><div class="pillar-card"><h3>2. Falcı / Yorumcu Başvuruları</h3><div id="applications-list"><p>Yükleniyor…</p></div></div></div></div></section><script>
  (() => {
    const STORAGE_KEY = 'mythborn_admin_pass';
    const loginCard = document.getElementById('admin-login-card');
    const loginForm = document.getElementById('admin-login-form');
    const passInput = document.getElementById('admin-password');
    const statusEl = document.getElementById('admin-login-status');
    const panelWrapper = document.getElementById('admin-panel-wrapper');
    const refreshBtn = document.getElementById('admin-refresh-btn');
    const logoutBtn = document.getElementById('admin-logout-btn');
    const inqEl = document.getElementById('inquiries-list');
    const appEl = document.getElementById('applications-list');
    const esc = (s) => String(s || '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

    const loadSubmissions = async (password) => {
      if (statusEl) {
        statusEl.className = 'form-status';
        statusEl.textContent = 'Kontrol ediliyor…';
      }
      try {
        const res = await fetch('/api/gozde-submissions', {
          headers: { 'x-admin-password': password }
        });
        const data = await res.json();
        if (!res.ok || !data.ok) {
          sessionStorage.removeItem(STORAGE_KEY);
          if (statusEl) {
            statusEl.className = 'form-status err';
            statusEl.textContent = data.error || 'Hatalı şifre girdiniz.';
          }
          if (panelWrapper) panelWrapper.style.display = 'none';
          if (loginCard) loginCard.style.display = 'block';
          return false;
        }
        sessionStorage.setItem(STORAGE_KEY, password);
        if (loginCard) loginCard.style.display = 'none';
        if (panelWrapper) panelWrapper.style.display = 'block';
        if (statusEl) statusEl.textContent = '';
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
        return true;
      } catch {
        if (statusEl) {
          statusEl.className = 'form-status err';
          statusEl.textContent = 'Bağlantı hatası oluştu, lütfen tekrar deneyin.';
        }
        return false;
      }
    };

    if (loginForm) {
      loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const pass = (passInput && passInput.value ? passInput.value : '').trim();
        if (!pass) return;
        await loadSubmissions(pass);
      });
    }

    if (refreshBtn) {
      refreshBtn.addEventListener('click', () => {
        const saved = sessionStorage.getItem(STORAGE_KEY) || '';
        if (saved) loadSubmissions(saved);
      });
    }

    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem(STORAGE_KEY);
        if (passInput) passInput.value = '';
        if (panelWrapper) panelWrapper.style.display = 'none';
        if (loginCard) loginCard.style.display = 'block';
      });
    }

    const savedPass = sessionStorage.getItem(STORAGE_KEY);
    if (savedPass) {
      loadSubmissions(savedPass);
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
