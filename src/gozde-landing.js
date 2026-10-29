import {
  ROUTE_MAP,
  EXTRA_UI,
  detectGozdeSubpage,
  renderHeaderAndDrawer,
  renderFooter,
  renderBlogPreviewSection,
  renderAreasSubpage,
  renderApproachSubpage,
  renderBlogIndexSubpage,
  renderBlogPostSubpage,
  renderContactSubpage,
  renderLegalSubpage,
  renderAdminFormsSubpage
} from './gozde-pages.js';

const langs = {
  tr: ['/', 'tr', 'ltr', '/yorumcu-basvuru', 'tr_TR', '/llms.txt'],
  en: ['/en', 'en', 'ltr', '/en/apply', 'en_US', '/llms.en.txt'],
  el: ['/gr', 'el', 'ltr', '/gr/apply', 'el_GR', '/llms.gr.txt'],
  es: ['/es', 'es', 'ltr', '/es/apply', 'es_ES', '/llms.es.txt'],
  ar: ['/ar', 'ar', 'rtl', '/ar/apply', 'ar_AE', '/llms.txt']
};

const ICONS = ['☼', '☕', '♠', '☾', '♡', '✶', '☸', '✧'];

const C = {
  tr: {
    lead: 'Kartların Gözde’si',
    badge: 'GÖZDE AKTİF · SESLİ, YAZILI & RANDEVULU BİREBİR SEMBOL OKUMASI',
    heading: 'Semboller her zaman konuşur.',
    headingEm: 'Klişe cümleler değil; sana özel, net bir yol haritası.',
    sub: 'Gözde ile kartların, kahve sembollerinin ve gökyüzü anlatılarının izinde yeni bir keşif alanı. Yüzlerce rastgele profil arasında kaybolmadan; bizzat Gözde’nin derinlikli, gizlilik esaslı ve güçlendirici yorumlarıyla tanışın.',
    keywords: 'Mythborn, Kartların Gözdesi, Gözde tarot, kahve falı yorumu, katina aşk açılımı, duru görü, yıldızname, doğum haritası analizi, numeroloji, sembolik danışmanlık',
    ctaPrimary: 'Alanını Seç & Gözde’ye İlet',
    social: 'TikTok’ta Gözde’yi keşfet',
    applyNav: 'Yorumcu Başvurusu',
    navAreas: 'Keşif Alanları',
    navProcess: 'Yaklaşım & Süreç',
    navInquiry: 'Ön İletişim',
    navFaq: 'S.S.S.',
    trustStrip: [
      ['Birebir & Özgün Yorum', 'Hazır kalıp metinler yok; her okuma bizzat Gözde tarafından senin soruna özel hazırlanır.'],
      ['Tam Gizlilik & KVKK Güvencesi', 'Yargılamayan, etik sınırları koruyan ve paylaştığın tüm detayları gizli tutan özenli iletişim.'],
      ['Sesli, Yazılı veya Randevulu Birebir', 'İhtiyacına göre özel ses kaydı, detaylı yazılı analiz veya ön iletişimle planlanan randevulu birebir canlı görüşme.']
    ],
    areasEyebrow: 'SEMBOLİK KEŞİF ALANLARI',
    areasTitle: 'Bugün hangi düğümü çözmek istiyorsun?',
    areasSub: 'İhtiyacına en uygun alanı seç; Gözde sembolleri, arketipleri ve gökyüzü döngülerini senin odak sorun etrafında ayrıştırsın.',
    selectBtn: 'Bu Alanı Seç →',
    formats: ['Özel Sesli Kayıt', 'Detaylı Yazılı', 'Randevulu Birebir'],
    cats: ['Tarot', 'Kahve Falı', 'Katina', 'Duru Görü', 'Aşk ve İlişki', 'Yıldızname', 'Doğum Haritası', 'Numeroloji'],
    catDetails: [
      ['ARKETİP & KARAR', 'Tarot', 'Geçmişin izleri, şimdinin enerjisi ve önündeki karar yollarını arketipsel kart sembolleriyle berraklaştır.'],
      ['GELENEKSEL SEMBOLİZM', 'Kahve Falı', 'Fincandaki şekillerin, yolların ve sembollerin sezgisel bütünlük içinde gündemine tuttuğu ayna.'],
      ['MİTOLOJİK AÇILIM', 'Katina', 'Duygusal bağların derinliğini, karşı tarafın niyetini ve ilişki dinamiklerini Katina sembolleriyle oku.'],
      ['SEZGİSEL BAKIŞ', 'Duru Görü', 'Yüzeyde görünmeyen enerji düğümlerini sezgisel izlenimlerle ve bütünsel farkındalıkla ele al.'],
      ['DUYGUSAL DENGE', 'Aşk ve İlişki', 'İletişim ihtimallerini, kırılma noktalarını ve bağın ortak ritmini yargılamayan bir netlikle incele.'],
      ['KADİM GÖKYÜZÜ', 'Yıldızname', 'Klasik gökyüzü geleneğiyle mizaç özelliklerini, yaşam döngülerini ve koruyucu temaları keşfet.'],
      ['ASTRONOMİK VERİ', 'Doğum Haritası', 'Güneş, Ay, Yükselen, evler ve güncel gezegen geçişlerinin yaşamındaki somut yansımalarını öğren.'],
      ['SAYI & HARF RİTMİ', 'Numeroloji', 'Doğum tarihin ve ismindeki sayısal arketiplerin kişisel yıl döngüne verdiği mesajları çözümle.']
    ],
    processEyebrow: 'İLK MESAJDA FARK EDİLEN KALİTE',
    processTitle: 'Burada süreç rastgele akmaz; netlik ve güven üzerine kurulur.',
    processSub: 'Genel geçer cümlelerle vakit kaybetmeden, sorunun altındaki asıl ihtiyacı yakalayan yapılandırılmış yaklaşım.',
    steps: [
      ['Alanını ve Odak Sorunu Seç', 'Gündemine en çok temas eden sembolik disiplini belirle ve doğrudan form üzerinden seç.'],
      ['Tercihini ve Bağlamını Paylaş', 'Sesli kayıt, yazılı analiz veya randevulu birebir canlı görüşme tercihini sorununla birlikte Gözde’ye ilet.'],
      ['Sana Özel Yol Haritanı Al', 'Seçtiğin formata göre özel ses/yazı analizine ulaş veya planlanan randevu saatinde Gözde ile birebir görüş.']
    ],
    pillars: [
      ['Az Konu, Yüksek Netlik', 'Her şeyi yüzeysel konuşmak yerine asıl düğüm noktasına odaklanır, zihnindeki sis perdesini dağıtırız.'],
      ['Planlı & Özenli Süreç', 'Anlık çağrı merkezi karmaşası yoktur; birebir canlı görüşmeler randevu ile, sesli ve yazılı okumalar ise derin odaklanmayla gerçekleştirilir.'],
      ['Seçkin ve Butik Deneyim', 'Fabrikasyon sistemlerin aksine, doğrudan Gözde’nin kürasyonu ve birebir ilgisiyle karşılaşırsın.']
    ],
    formEyebrow: 'GÖZDE İLE ÖN İLETİŞİM & RANDEVU TALEBİ',
    formTitle: 'Odaklandığın konuyu paylaş, süreci birlikte başlatalım.',
    formSub: 'İlgilendiğin alanı, sorunun çerçevesini ve tercih ettiğin görüşme biçimini aşağıdaki formdan doğrudan Gözde’ye iletebilirsin.',
    labelTopic: 'İlgilendiğiniz Keşif Alanı',
    labelFormat: 'Tercih Ettiğiniz Yorumlama / Görüşme Biçimi',
    formatOptions: ['Kişiye Özel Sesli Kayıt Analizi', 'Detaylı Yazılı Okuma Metni', 'Randevulu Birebir Canlı Görüşme'],
    labelName: 'Adınız veya Rumuzunuz',
    hintName: 'Örn. Ayşe K. veya yalnızca rumuzunuz',
    labelContact: 'İletişim Kanalınız (E-posta, Telefon veya Sosyal Medya)',
    hintContact: 'Size geri dönüş yapabilmemiz için aktif bir e-posta, telefon veya kullanıcı adı yazın',
    labelMessage: 'Odaklandığınız Soru ve Kısa Notunuz',
    hintMessage: 'Netleştirmek istediğiniz konuyu ve randevu tercihinizi kısaca özetleyin (en az 10 karakter)',
    labelConsent: 'Paylaştığım bilgilerin KVKK Aydınlatma Metni ve Gizlilik Politikası çerçevesinde kişisel farkındalık ve iletişim amacıyla incelenmesini kabul ediyorum.',
    submitInquiry: 'Gözde’ye Gönder →',
    submitting: 'İletiliyor…',
    inquirySuccess: 'Mesajınız Gözde’ye başarıyla iletildi ve güvenli sistemimize kaydedildi. En kısa sürede belirttiğiniz iletişim kanalından size dönüş yapılacaktır.',
    inquiryError: 'Lütfen tüm zorunlu alanları eksiksiz doldurun ve onay kutusunu işaretleyin.',
    faqEyebrow: 'SIKÇA SORULAN SORULAR & HIZLI YANITLAR',
    faqTitle: 'Süreç, gizlilik ve sembolik okuma yaklaşımı hakkında net yanıtlar.',
    faqSub: 'Merak ettiğiniz tüm detayları, çalışma ilkelerimizi ve kurumsal standartlarımızı tek bakışta inceleyin.',
    aeoFacts: [
      ['Platform & Otorite', 'Mythborn, Kartların Gözde’si liderliğinde birebir sembolik okuma ve astroloji farkındalığı sunan çok dilli butik platformdur.'],
      ['Uzmanlık Kapsamı', 'Tarot, Kahve Falı sembolizmi, Katina, Duru Görü, Aşk ve İlişki analizi, Yıldızname, Doğum Haritası ve Numeroloji.'],
      ['Yorumlama & Görüşme Formatı', 'Kişiye özel sesli kayıt analizi, detaylı yazılı metin veya ön iletişimle planlanan randevulu birebir canlı görüşme.'],
      ['Gizlilik & KVKK İlkesi', 'Tam gizlilik, 6698 sayılı KVKK uyumu, sıfır hazır kalıp metin ve kişisel farkındalık odaklı etik danışmanlık.']
    ],
    faqs: [
      ['Mythborn ve Kartların Gözde’si nasıl bir deneyim sunar?', 'Mythborn, kalabalık ve fabrikasyon fal sitelerinin aksine, bizzat Gözde (Kartların Gözde’si) tarafından yürütülen birebir, gizlilik esaslı sembolik okuma ve astroloji farkındalığı sunar. Her analiz danışanın kendi sorusuna özel olarak hazırlanır.'],
      ['Birebir canlı görüşme nasıl gerçekleşiyor?', 'Anlık çağrı merkezi mantığıyla çalışmayız; Gözde tek başına ve her danışanına tam odaklanarak çalıştığı için birebir canlı görüşmeler ön iletişim formu sonrasında ortak belirlenen gün ve saatte randevu ile gerçekleştirilir. Dileyen danışanlarımız için ise kapsamlı ses kaydı veya detaylı yazılı analiz hazırlanır.'],
      ['Süreç nasıl ilerler ve doldurduğum form nereye ulaşır?', 'Ön iletişim formunu doldurduğunuzda talebiniz şifreli bağlantı ile doğrudan Mythborn güvenli veritabanına ve Gözde’nin yönetim ekranına düşer. Seçtiğiniz alana ve formata göre size dönüş yapılarak randevu saatiniz veya sesli/yazılı çalışmanız planlanır.'],
      ['Paylaştığım özel bilgiler ve sorular gizli tutuluyor mu?', 'Kesinlikle. 6698 sayılı KVKK ve Gizlilik Politikamız uyarınca paylaştığınız hiçbir isim, soru, doğum bilgisi veya görsel üçüncü kişilerle paylaşılmaz; yalnızca sizinle yürütülen okuma sürecinde kullanılır.'],
      ['Tarot, Katina ve Doğum Haritası okumaları arasındaki fark nedir?', 'Tarot mevcut enerjinizi ve karar yollarınızı arketipsel kartlarla inceler; Katina özellikle duygusal bağlara, niyetlere ve ilişki dinamiklerine odaklanır; Doğum Haritası ise astronomik gezegen konumlarıyla karakter ve dönem temalarını analiz eder.'],
      ['Sunulan yorumlar kesin gelecek tahmini midir?', 'Hayır. Mythborn üzerindeki tüm içerikler ve sembolik okumalar; kişisel farkındalık, kültürel sembolizm, öz-değerlendirme ve eğlence amaçlıdır. Tıbbi, hukuki, finansal tavsiye veya kesin gelecek vaadi içermez.']
    ],
    recruitEyebrow: 'MYTHBORN SEÇKİN YORUMCU AĞI',
    recruitTitle: 'Sembollerin dilini derinlik ve etikle okuyan bir uzman mısınız?',
    recruitSub: 'Kalıp cümlelerden uzak, sezgisi ve bilgisi güçlü yorumcu adaylarının başvurularını ayrı bir değerlendirme süreciyle kabul ediyoruz.',
    recruitCta: 'Yorumcu Başvuru Sayfasına Git →',
    note: 'Kişisel farkındalık, kültürel sembolizm ve eğlence amaçlıdır.',
    applyPage: {
      back: '← Ana Sayfaya Dön',
      eyebrow: 'MYTHBORN SEÇKİN YORUMCU AĞI · Kartların Gözde’si',
      title: 'Uzman Yorumcu & Sembol Okuyucusu Başvurusu',
      sub: 'Danışanlara kopyala-yapıştır cümleler yerine gerçek içgörü, tam gizlilik ve yüksek iletişim kalitesi sunabilen uzmanların başvurularını bekliyoruz.',
      criteria: [
        ['Özgün Yorum Yetkinliği', 'Tarot, Kahve Sembolizmi, Katina, Astroloji veya Numeroloji alanlarında derinlikli ve özgün okuma disiplini.'],
        ['Etik Sınırlar & Saygı', 'Yargılamayan, korku veya bağımlılık yaratmayan, danışanın öz-farkındalığını güçlendiren özenli üslup.'],
        ['Zamanlama & İletişim Özeni', 'Ses kaydı, yazılı analiz veya randevulu birebir görüşmelerde akıcı ifade gücü ve süreç disiplinine bağlılık.']
      ],
      formTitle: 'Yorumcu Başvuru Formu',
      formSub: 'Başvurular bizzat Gözde ve Mythborn kürasyon ekibi tarafından KVKK gizlilik ilkeleriyle incelenir.',
      fullName: 'Adınız Soyadınız (veya Yorumcu Mahlasınız)',
      hintFullName: 'Tam adınız ve kullanmak istediğiniz mahlas',
      email: 'E-posta Adresiniz',
      hintEmail: 'Örn. adiniz@ornek.com',
      errEmail: 'Lütfen geçerli bir e-posta adresi girin.',
      phone: 'Telefon Numaranız (Aktif Hat)',
      hintPhone: 'Ülke koduyla birlikte aktif numaranız (örn. +90 5XX XXX XX XX)',
      errPhone: 'Lütfen geçerli bir telefon numarası girin.',
      specialties: 'Uzmanlık Alanlarınız (En az 1 alan seçin)',
      experience: 'Deneyim Süreniz',
      expOptions: ['1–3 Yıl', '3–5 Yıl', '5–10 Yıl', '10+ Yıl'],
      modality: 'Tercih Ettiğiniz Yorumlama Biçimi',
      modOptions: ['Kişiye Özel Sesli Kayıt & Yorum', 'Detaylı Yazılı Analiz', 'Randevulu Birebir Canlı Görüşme', 'Tüm Formatlar'],
      languages: 'Yorum Yapabildiğiniz Diller',
      hintLanguages: 'Örn. Türkçe, İngilizce, Yunanca…',
      social: 'Sosyal Medya veya Portfolyo Bağlantınız (Opsiyonel)',
      hintSocial: 'TikTok, Instagram veya kişisel sayfa bağlantınız',
      bio: 'Yaklaşımınız & Örnek Yorum Üslubunuz',
      hintBio: 'Danışanlarınıza nasıl bir deneyim sunduğunuzu ve ekolünüzü kısaca anlatın (en az 25 karakter).',
      errBio: 'Lütfen yaklaşımınızı en az 25 karakterle açıklayın.',
      consent: 'Başvuru bilgilerimin Mythborn yorumcu değerlendirme süreci kapsamında KVKK Aydınlatma Metni çerçevesinde incelenmesini kabul ediyorum.',
      submit: 'Başvurumu İlet →',
      success: 'Başvurunuz başarıyla kaydedildi! Kürasyon ekibimiz inceleme sonrası sizinle iletişime geçecektir.',
      error: 'Lütfen zorunlu alanları, en az bir uzmanlık alanını ve onay kutusunu eksiksiz doldurun.'
    }
  },
  en: {
    lead: 'Gözde of the Cards',
    badge: 'GÖZDE IS ACTIVE · BESPOKE VOICE & WRITTEN SYMBOLIC READING',
    heading: 'Symbols always have a story to tell.',
    headingEm: 'Not generic clichés—a clear, personal roadmap crafted for you.',
    sub: 'Step into a considered world of cards, symbolic traditions and the language of the stars. Without getting lost among hundreds of random profiles, connect directly with Gözde’s personal, confidential and empowering interpretations.',
    keywords: 'Mythborn, Gözde of the Cards, Tarot reading, Turkish coffee reading, Katina love reading, intuitive insight, traditional astrology, birth chart analysis, numerology',
    ctaPrimary: 'Choose Your Area & Connect',
    social: 'Discover Gözde on TikTok',
    applyNav: 'Reader Application',
    navAreas: 'Reading Areas',
    navProcess: 'Approach & Process',
    navInquiry: 'Connect',
    navFaq: 'FAQ',
    trustStrip: [
      ['Personal & Bespoke', 'No copy-paste templates; every reading is personally interpreted by Gözde for your specific question.'],
      ['Complete Confidentiality', 'A safe, non-judgmental space with strict privacy standards where every detail stays strictly private.'],
      ['Focused Voice or Written Format', 'Prepared with deep studio concentration as a detailed voice recording or written analysis—never rushed live calls.']
    ],
    areasEyebrow: 'SYMBOLIC READING DISCIPLINES',
    areasTitle: 'Which question are you ready to untangle today?',
    areasSub: 'Select the lens that best matches your current crossroads; Gözde synthesizes symbols, archetypes, and sky cycles around your core focus.',
    selectBtn: 'Select This Area →',
    formats: ['Voice Recording', 'Detailed Written', 'Personal Focus'],
    cats: ['Coffee Reading', 'Tarot', 'Katina', 'Intuitive Insight', 'Love & Relationships', 'Traditional Astrology', 'Birth Chart', 'Numerology'],
    catDetails: [
      ['TRADITIONAL SYMBOLISM', 'Coffee Reading', 'An intuitive mirror of the patterns, paths, and symbols formed in your cup around your current life themes.'],
      ['ARCHETYPES & CHOICES', 'Tarot', 'Illuminate past influences, present momentum, and upcoming crossroads through structured archetypal spreads.'],
      ['MYTHIC DYNAMICS', 'Katina', 'Explore emotional bonds, unspoken intentions, and relationship dynamics through traditional Katina symbols.'],
      ['DEEP PERCEPTION', 'Intuitive Insight', 'Address subtle energetic knots and underlying patterns through focused intuitive reflection and clarity.'],
      ['EMOTIONAL BALANCE', 'Love & Relationships', 'Examine communication potential, turning points, and shared rhythms with calm, non-judgmental clarity.'],
      ['CLASSICAL SKY LORE', 'Traditional Astrology', 'Discover temperament, life cycles, and protective themes rooted in classical celestial traditions.'],
      ['ASTRONOMICAL DATA', 'Birth Chart', 'Understand the concrete reflections of your Sun, Moon, Rising, houses, and current planetary transits.'],
      ['NUMBER & NAME RHYTHM', 'Numerology', 'Decode the numerical archetypes in your birth date and name to navigate your personal year cycles.']
    ],
    processEyebrow: 'QUALITY FELT FROM THE FIRST MESSAGE',
    processTitle: 'Nothing here is random; every step is built on clarity and trust.',
    processSub: 'Instead of vague generalizations, experience a structured method that identifies the real need beneath your question.',
    steps: [
      ['Choose Your Area & Focus', 'Select the symbolic discipline that resonates most with your current situation directly from the form.'],
      ['Share Your Context Privately', 'Send your core question, birth details, or symbol notes to Gözde with your preferred format.'],
      ['Receive Your Voice or Written Roadmap', 'Gain a deeply focused voice recording or written perspective you can revisit whenever you need.']
    ],
    pillars: [
      ['Focused Depth, Zero Clichés', 'Rather than speaking vaguely about everything, we narrow in on the core knot to clear the mental fog.'],
      ['Transparent Delivery Format', 'We never promise rushed live calls; every reading is crafted in quiet solitude as a rich voice recording or written text.'],
      ['Boutique & Curated', 'Instead of getting lost among hundreds of anonymous profiles, you connect directly with Gözde’s personal curation.']
    ],
    formEyebrow: 'INITIAL CONNECTION WITH GÖZDE',
    formTitle: 'Share your focus and start the conversation.',
    formSub: 'Complete the form below to let Gözde know which area and question you would like to explore.',
    labelTopic: 'Selected Reading Area',
    labelFormat: 'Preferred Reading Format',
    formatOptions: ['Bespoke Voice Recording & Analysis', 'Detailed Written Reading Text', 'Scheduled 1-on-1 Live Session (By Appointment)'],
    labelName: 'Your Name or Alias',
    hintName: 'E.g. Sarah M. or your preferred nickname',
    labelContact: 'Your Contact Channel (Email, Phone or Social Handle)',
    hintContact: 'Provide an active email, phone number, or handle so we can reach back to you',
    labelMessage: 'Your Core Question & Context',
    hintMessage: 'Briefly summarize what you want to clarify (minimum 10 characters)',
    labelConsent: 'I agree that the information shared may be reviewed confidentially under the Data Protection (KVKK/GDPR) and Privacy Policy.',
    submitInquiry: 'Send to Gözde →',
    submitting: 'Sending…',
    inquirySuccess: 'Your message has been securely saved and sent to Gözde. We will reach out to you shortly via your preferred contact channel.',
    inquiryError: 'Please complete all required fields and check the consent box.',
    faqEyebrow: 'FREQUENTLY ASKED QUESTIONS & QUICK ANSWERS',
    faqTitle: 'Clear answers on our process, privacy, and symbolic reading method.',
    faqSub: 'Review every detail about our bespoke sessions, confidentiality standards, and editorial principles at a glance.',
    aeoFacts: [
      ['Platform & Authority', 'Mythborn is a multilingual boutique symbolic reading and astrology platform led by Gözde (Gözde of the Cards).'],
      ['Core Disciplines', 'Tarot, Turkish Coffee Symbolism, Katina, Intuitive Insight, Love & Relationships, Traditional Astrology, Birth Chart, Numerology.'],
      ['Transparent Format', 'Bespoke recorded voice analyses or detailed written texts crafted in studio solitude (no rushed live calls).'],
      ['Privacy & Ethics', 'Strict KVKK/GDPR confidentiality, zero copy-paste templates, and empowering self-reflection.']
    ],
    faqs: [
      ['What makes Mythborn and Gözde of the Cards different?', 'Unlike mass-market fortune directories with rotating anonymous operators, Mythborn offers bespoke symbolic readings personally interpreted by Gözde with complete confidentiality and zero copy-paste clichés.'],
      ['Do you offer live phone or video calls?', 'No—we believe in complete honesty with our clients. Deep symbolic and astrological synthesis requires quiet concentration rather than the time pressure of a live call. Gözde prepares every reading personally in studio solitude as a comprehensive voice recording or detailed written analysis that you can keep and replay anytime.'],
      ['How does the process work and where does my form go?', 'Once you submit the connection form, your encrypted request is saved directly to Mythborn’s secure database for Gözde’s review. We confirm the details via your contact channel and prepare your personalized reading promptly.'],
      ['Is everything I share kept completely confidential?', 'Absolutely. Under our Data Protection (KVKK/GDPR) and Privacy Policy, your name, questions, birth data, and symbols are never shared with third parties.'],
      ['How do Tarot, Katina, and Birth Chart readings differ?', 'Tarot examines present momentum and decision paths through archetypal cards; Katina focuses specifically on emotional bonds and relationship dynamics; Birth Chart analysis uses real astronomical positions to map temperament and timing.'],
      ['Do symbolic readings claim to predict a fixed future?', 'No. All content and readings on Mythborn are designed for personal reflection, cultural symbolism, self-discovery, and entertainment. They do not constitute medical, legal, or financial advice.']
    ],
    recruitEyebrow: 'MYTHBORN CURATED READER NETWORK',
    recruitTitle: 'Are you an experienced reader who interprets symbols with depth and ethics?',
    recruitSub: 'Mythborn selectively welcomes applications from gifted Tarot, coffee symbolism, and astrology specialists who value authenticity.',
    recruitCta: 'Go to Reader Application Page →',
    note: 'For personal reflection, cultural symbolism and entertainment purposes.',
    applyPage: {
      back: '← Back to Home',
      eyebrow: 'MYTHBORN CURATED READER NETWORK · Gözde of the Cards',
      title: 'Specialist Reader & Symbolic Interpreter Application',
      sub: 'We welcome applications from practitioners who offer genuine insight, strict confidentiality, and refined communication without copy-paste clichés.',
      criteria: [
        ['Authentic Interpretive Mastery', 'Deep, original practice in Tarot, Coffee Symbolism, Katina, Astrology, or Numerology.'],
        ['Ethical Boundaries & Respect', 'A non-judgmental, empowering voice that never uses fear-mongering or creates emotional dependency.'],
        ['Voice & Written Articulacy', 'Clear, thoughtful expression in recorded voice or written analyses with strong respect for privacy.']
      ],
      formTitle: 'Reader Application Form',
      formSub: 'Applications are reviewed confidentially by Gözde and the Mythborn curation team.',
      fullName: 'Full Name (and Reader Alias, if any)',
      hintFullName: 'Your full name and preferred professional alias',
      email: 'Email Address',
      hintEmail: 'Format: name@example.com',
      errEmail: 'Please enter a valid email address.',
      phone: 'Phone Number (Active Line)',
      hintPhone: 'Include country code (e.g. +44 7XXX XXXXXX)',
      errPhone: 'Please enter a valid phone number.',
      specialties: 'Areas of Expertise (Select at least 1)',
      experience: 'Years of Experience',
      expOptions: ['1–3 Years', '3–5 Years', '5–10 Years', '10+ Years'],
      modality: 'Preferred Reading Format',
      modOptions: ['Recorded Voice Analysis', 'Detailed Written Analysis', 'Both Voice & Written Formats'],
      languages: 'Languages You Can Read In',
      hintLanguages: 'E.g. English, Turkish, Greek, Spanish, Arabic…',
      social: 'Social Media or Portfolio Link (Optional)',
      hintSocial: 'Your TikTok, Instagram, or website URL',
      bio: 'Your Approach & Interpretive Style',
      hintBio: 'Describe how you structure a reading and what makes your approach distinct (minimum 25 characters).',
      errBio: 'Please describe your approach in at least 25 characters.',
      consent: 'I agree to the confidential review of my application details under Mythborn’s privacy and ethical standards.',
      submit: 'Submit Application →',
      success: 'Your application has been received! Our curation team will contact you after reviewing your profile.',
      error: 'Please fill in all required fields, select at least one specialty, and accept the consent box.'
    }
  },
  el: {
    lead: 'Η Gözde των Καρτών',
    badge: 'Η GÖZDE ΕΙΝΑΙ ΕΝΕΡΓΗ · ΗΧΗΤΙΚΗ & ΓΡΑΠΤΗ ΑΝΑΓΝΩΣΗ ΣΥΜΒΟΛΩΝ',
    heading: 'Τα σύμβολα έχουν πάντα κάτι να πουν.',
    headingEm: 'Όχι έτοιμα κλισέ· ένας καθαρός, προσωπικός χάρτης προσανατολισμού.',
    sub: 'Ένας ξεχωριστός κόσμος συμβόλων, καρτών και ουράνιων αφηγήσεων με την Gözde. Χωρίς να χάνεστε ανάμεσα σε εκατοντάδες τυχαία προφίλ, γνωρίστε μια εμπιστευτική, βαθιά και ουσιαστική προσέγγιση.',
    keywords: 'Mythborn, Η Gözde των Καρτών, Ταρώ, Καφές, Κατίνα, Διαισθητική Ανάγνωση, Αστρολογία, Γενέθλιος Χάρτης, Αριθμολογία',
    ctaPrimary: 'Επιλέξτε Θεματική & Επικοινωνήστε',
    social: 'Ανακαλύψτε την Gözde στο TikTok',
    applyNav: 'Αίτηση Ερμηνευτή',
    navAreas: 'Θεματικές',
    navProcess: 'Προσέγγιση',
    navInquiry: 'Επικοινωνία',
    navFaq: 'Συχνές Ερωτήσεις',
    trustStrip: [
      ['Προσωπική Ερμηνεία', 'Χωρίς τυποποιημένα κείμενα· κάθε ανάγνωση ετοιμάζεται προσωπικά από την Gözde για το δικό σας θέμα.'],
      ['Απόλυτη Εχεμύθεια', 'Ένας ασφαλής χώρος χωρίς κριτική, με σεβασμό στα ηθικά όρια και πλήρη εμπιστευτικότητα.'],
      ['Ηχητική Ηχογράφηση ή Γραπτή Ανάλυση', 'Ετοιμάζεται με απόλυτη συγκέντρωση ως αναλυτικό ηχητικό αρχείο ή γραπτό κείμενο, χωρίς τη βιασύνη μιας ζωντανής κλήσης.']
    ],
    areasEyebrow: 'ΠΕΔΙΑ ΣΥΜΒΟΛΙΚΗΣ ΑΝΑΓΝΩΣΗΣ',
    areasTitle: 'Ποιο ερώτημα θέλετε να ξεκαθαρίσετε σήμερα;',
    areasSub: 'Επιλέξτε το πεδίο που ταιριάζει στην ανάγκη σας· η Gözde συνθέτει σύμβολα, αρχέτυπα και ουράνιους κύκλους γύρω από το ερώτημά σας.',
    selectBtn: 'Επιλογή Θεματικής →',
    formats: ['Ηχητική Ηχογράφηση', 'Γραπτό Κείμενο', 'Προσωπική Εστίαση'],
    cats: ['Καφές', 'Ταρώ', 'Κατίνα', 'Διαισθητική Ανάγνωση', 'Αγάπη & Σχέσεις', 'Παραδοσιακή Αστρολογία', 'Γενέθλιος Χάρτης', 'Αριθμολογία'],
    catDetails: [
      ['ΠΑΡΑΔΟΣΙΑΚΟΣ ΣΥΜΒΟΛΙΣΜΟΣ', 'Καφές', 'Διαισθητική ερμηνεία των σχημάτων και των συμβόλων του φλιτζανιού σε σύνδεση με τα τρέχοντα ερωτήματά σας.'],
      ['ΑΡΧΕΤΥΠΑ & ΕΠΙΛΟΓΕΣ', 'Ταρώ', 'Φωτίστε τις επιρροές του παρελθόντος, τη δυναμική του παρόντος και τις επιλογές που ανοίγονται μπροστά σας.'],
      ['ΜΥΘΟΛΟΓΙΚΗ ΔΥΝΑΜΙΚΗ', 'Κατίνα', 'Κατανοήστε τους συναισθηματικούς δεσμούς και τις προθέσεις μέσα από τα παραδοσιακά σύμβολα της Κατίνας.'],
      ['ΒΑΘΙΑ ΚΑΤΑΝΟΗΣΗ', 'Διαισθητική Ανάγνωση', 'Προσεγγίστε τα βαθύτερα σημεία προβληματισμού με διαισθητική καθαρότητα και ολιστική ματιά.'],
      ['ΣΥΝΑΙΣΘΗΜΑΤΙΚΗ ΙΣΟΡΡΟΠΙΑ', 'Αγάπη & Σχέσεις', 'Εξετάστε τις προοπτικές επικοινωνίας και τη δυναμική της σχέσης σας με ηρεμία και διαύγεια.'],
      ['ΚΛΑΣΙΚΗ ΠΑΡΑΔΟΣΗ', 'Παραδοσιακή Αστρολογία', 'Ανακαλύψτε την ιδιοσυγκρασία και τους κύκλους ζωής μέσα από την κλασική ουράνια παράδοση.'],
      ['ΑΣΤΡΟΝΟΜΙΚΑ ΔΕΔΟΜΕΝΑ', 'Γενέθλιος Χάρτης', 'Ήλιος, Σελήνη, Ωροσκόπος, οίκοι και τρέχουσες διελεύσεις με πραγματικούς αστρονομικούς υπολογισμούς.'],
      ['ΡΥΘΜΟΣ ΑΡΙΘΜΩΝ', 'Αριθμολογία', 'Αποκωδικοποιήστε τα αριθμητικά αρχέτυπα της ημερομηνίας γέννησης και του ονόματός σας.']
    ],
    processEyebrow: 'ΠΟΙΟΤΗΤΑ ΠΟΥ ΞΕΧΩΡΙΖΕΙ ΑΠΟ ΤΟ ΠΡΩΤΟ ΜΗΝΥΜΑ',
    processTitle: 'Εδώ τίποτα δεν κυλά τυχαία· κάθε βήμα χτίζεται στην εμπιστοσύνη.',
    processSub: 'Αντί για γενικόλογες φράσεις, μια δομημένη προσέγγιση που εστιάζει στην πραγματική ουσία του ερωτήματός σας.',
    steps: [
      ['Επιλέξτε Θεματική & Ερώτημα', 'Διαλέξτε τη συμβολική θεματική που ανταποκρίνεται περισσότερο σε αυτό που σας απασχολεί σήμερα.'],
      ['Μοιραστείτε το Πλαίσιο με Ασφάλεια', 'Στείλτε το ερώτημά σας ή τα στοιχεία σας στην Gözde με την προτιμώμενη μορφή ανάλυσης.'],
      ['Λάβετε την Ηχητική ή Γραπτή Ανάλυση', 'Αποκτήστε μια εμπεριστατωμένη ηχογράφηση ή γραπτή μελέτη που σας βοηθά να πάρετε τις δικές σας αποφάσεις.']
    ],
    pillars: [
      ['Εστιασμένη Καθαρότητα', 'Δεν αναλωνόμαστε σε γενικότητες· εστιάζουμε στον πυρήνα του θέματος για ουσιαστική διαύγεια.'],
      ['Ειλικρινής Μορφή Ανάλυσης', 'Χωρίς βιαστικές ζωντανές κλήσεις· κάθε ανάγνωση ετοιμάζεται με ηρεμία ως ηχητική ηχογράφηση ή γραπτό κείμενο.'],
      ['Επιλεγμένη Boutique Εμπειρία', 'Άμεση επαφή με την προσωπική επιμέλεια της Gözde, μακριά από απρόσωπα κέντρα.']
    ],
    formEyebrow: 'ΠΡΩΤΗ ΕΠΙΚΟΙΝΩΝΙΑ ΜΕ ΤΗΝ GÖZDE',
    formTitle: 'Μοιραστείτε το θέμα σας και ξεκινήστε.',
    formSub: 'Συμπληρώστε τη φόρμα για να επιλέξετε θεματική και να στείλετε απευθείας το ερώτημά σας.',
    labelTopic: 'Επιλεγμένη Θεματική',
    labelFormat: 'Προτιμώμενη Μορφή Ανάλυσης',
    formatOptions: ['Εξατομικευμένη Ηχητική Ηχογράφηση', 'Αναλυτικό Γραπτό Κείμενο', 'Ατομική Συνεδρία Κατόπιν Ραντεβού'],
    labelName: 'Το Όνομα ή το Ψευδώνυμό σας',
    hintName: 'Π.χ. Μαρία Κ. ή το ψευδώνυμό σας',
    labelContact: 'Κανάλι Επικοινωνίας (Email, Τηλέφωνο ή Κοινωνικό Δίκτυο)',
    hintContact: 'Σημειώστε ενεργό email, τηλέφωνο ή προφίλ για να επικοινωνήσουμε μαζί σας',
    labelMessage: 'Το Ερώτημά σας & Σύντομο Σημείωμα',
    hintMessage: 'Περιγράψτε συνοπτικά το θέμα που θέλετε να φωτίσετε (τουλάχιστον 10 χαρακτήρες)',
    labelConsent: 'Συμφωνώ η επικοινωνία μου να εξεταστεί εμπιστευτικά σύμφωνα με την Πολιτική Απορρήτου.',
    submitInquiry: 'Αποστολή στην Gözde →',
    submitting: 'Αποστολή…',
    inquirySuccess: 'Το μήνυμά σας αποθηκεύτηκε με ασφάλεια και στάλθηκε στην Gözde. Θα επικοινωνήσουμε σύντομα μαζί σας.',
    inquiryError: 'Παρακαλούμε συμπληρώστε όλα τα υποχρεωτικά πεδία και αποδεχθείτε τους όρους.',
    faqEyebrow: 'ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ & ΣΥΝΤΟΜΕΣ ΑΠΑΝΤΗΣΕΙΣ',
    faqTitle: 'Καθαρές απαντήσεις για τη διαδικασία, την εχεμύθεια και τη μέθοδό μας.',
    faqSub: 'Δείτε με μια ματιά όλες τις λεπτομέρειες για τον τρόπο λειτουργίας και τις αρχές του Mythborn.',
    aeoFacts: [
      ['Πλατφόρμα & Ταυτότητα', 'Το Mythborn είναι πολύγλωσση boutique πλατφόρμα συμβολικής ανάγνωσης και αστρολογίας με κεντρικό πρόσωπο την Gözde.'],
      ['Θεματικά Πεδία', 'Ταρώ, Καφές, Κατίνα, Διαισθητική Ανάγνωση, Αγάπη & Σχέσεις, Παραδοσιακή Αστρολογία, Γενέθλιος Χάρτης, Αριθμολογία.'],
      ['Μορφές Ανάλυσης', 'Προσωπική ηχητική ηχογράφηση ή αναλυτικό γραπτό κείμενο με βαθιά συγκέντρωση (όχι ζωντανή κλήση).'],
      ['Εχεμύθεια & Δεοντολογία', 'Πλήρης εμπιστευτικότητα KVKK/GDPR, αυθεντική ερμηνεία χωρίς κλισέ και εστίαση στην προσωπική ενδυνάμωση.']
    ],
    faqs: [
      ['Τι κάνει το Mythborn και την Gözde των Καρτών να ξεχωρίζουν;', 'Σε αντίθεση με τις μαζικές πλατφόρμες, το Mythborn προσφέρει εξατομικευμένες συμβολικές αναγνώσεις από την ίδια την Gözde με πλήρη εχεμύθεια και ουσιαστικό βάθος.'],
      ['Γίνονται ζωντανές τηλεφωνικές ή βιντεοκλήσεις;', 'Όχι, είμαστε απόλυτα ειλικρινείς. Για να διαβαστούν σωστά τα σύμβολα και ο γενέθλιος χάρτης απαιτείται ησυχία και βαθιά συγκέντρωση. Η Gözde ετοιμάζει για εσάς μια αναλυτική ηχητική ηχογράφηση ή γραπτή μελέτη που μπορείτε να ακούσετε ξανά όποτε θέλετε.'],
      ['Πώς εξελίσσεται η διαδικασία και πού καταλήγει η φόρμα;', 'Μόλις συμπληρώσετε τη φόρμα επικοινωνίας, το αίτημά σας αποθηκεύεται με ασφάλεια στη βάση του Mythborn για την Gözde. Επιβεβαιώνονται οι λεπτομέρειες και ετοιμάζεται η προσωπική σας ανάλυση.'],
      ['Τα στοιχεία και τα ερωτήματά μου παραμένουν απόλυτα εμπιστευτικά;', 'Απολύτως. Η εμπιστευτικότητα είναι θεμελιώδης αρχή στο Mythborn. Κανένα στοιχείο δεν κοινοποιείται σε τρίτους.'],
      ['Ποια η διαφορά ανάμεσα σε Ταρώ, Κατίνα και Γενέθλιο Χάρτη;', 'Το Ταρώ φωτίζει τη δυναμική του παρόντος και τις επιλογές, η Κατίνα εστιάζει στις σχέσεις και τα συναισθήματα, ενώ ο Γενέθλιος Χάρτης βασίζεται σε αστρονομικά δεδομένα.'],
      ['Οι αναγνώσεις αποτελούν βέβαιη πρόβλεψη μέλλοντος;', 'Όχι. Όλο το περιεχόμενο του Mythborn προσφέρεται για προσωπικό στοχασμό, πολιτισμικό συμβολισμό και ψυχαγωγία.']
    ],
    recruitEyebrow: 'ΔΙΚΤΥΟ ΕΠΙΛΕΓΜΕΝΩΝ ΕΡΜΗΝΕΥΤΩΝ MYTHBORN',
    recruitTitle: 'Είστε έμπειρος ερμηνευτής συμβόλων ή αστρολογίας με ήθος και βάθος;',
    recruitSub: 'Το Mythborn δέχεται αιτήσεις συνεργασίας από εξειδικευμένους ερμηνευτές Ταρώ, καφέ και αστρολογίας σε ξεχωριστή σελίδα αξιολόγησης.',
    recruitCta: 'Μετάβαση στη Σελίδα Αίτησης →',
    note: 'Για προσωπικό στοχασμό, πολιτισμικό συμβολισμό και ψυχαγωγία.',
    applyPage: {
      back: '← Επιστροφή στην Αρχική',
      eyebrow: 'ΔΙΚΤΥΟ ΕΠΙΛΕΓΜΕΝΩΝ ΕΡΜΗΝΕΥΤΩΝ · Η Gözde των Καρτών',
      title: 'Αίτηση Συνεργασίας Ερμηνευτή Συμβόλων & Αστρολογίας',
      sub: 'Αναζητούμε συνεργάτες που προσφέρουν ουσιαστική ανάλυση, εχεμύθεια και σεβασμό χωρίς έτοιμα κλισέ.',
      criteria: [
        ['Αυθεντική Ερμηνευτική Ικανότητα', 'Βαθιά γνώση σε Ταρώ, Καφέ, Κατίνα, Αστρολογία ή Αριθμολογία.'],
        ['Ηθικά Όρια & Εχεμύθεια', 'Ενδυναμωτικός λόγος χωρίς κριτική, φόβο ή καλλιέργεια εξάρτησης.'],
        ['Ποιότητα Ηχητικής & Γραπτής Έκφρασης', 'Καθαρή έκφραση σε ηχογραφημένη ή γραπτή μορφή και συνέπεια.']
      ],
      formTitle: 'Φόρμα Αίτησης Ερμηνευτή',
      formSub: 'Οι αιτήσεις εξετάζονται εμπιστευτικά από την Gözde και την ομάδα επιμέλειας του Mythborn.',
      fullName: 'Ονοματεπώνυμο (και Επαγγελματικό Ψευδώνυμο)',
      hintFullName: 'Το πλήρες όνομά σας και το ψευδώνυμο που χρησιμοποιείτε',
      email: 'Διεύθυνση Email',
      hintEmail: 'Μορφή: name@example.com',
      errEmail: 'Παρακαλούμε εισάγετε έγκυρο email.',
      phone: 'Τηλέφωνο Επικοινωνίας',
      hintPhone: 'Με κωδικό χώρας (π.χ. +30 69X XXX XXXX)',
      errPhone: 'Παρακαλούμε εισάγετε έγκυρο τηλέφωνο.',
      specialties: 'Πεδία Εξειδίκευσης (Επιλέξτε τουλάχιστον 1)',
      experience: 'Έτη Εμπειρίας',
      expOptions: ['1–3 Έτη', '3–5 Έτη', '5–10 Έτη', '10+ Έτη'],
      modality: 'Προτιμώμενη Μορφή Ερμηνείας',
      modOptions: ['Ηχητική Ηχογράφηση', 'Γραπτή Ανάλυση', 'Ηχητική & Γραπτή Μορφή'],
      languages: 'Γλώσσες Εργασίας',
      hintLanguages: 'Π.χ. Ελληνικά, Αγγλικά, Τουρκικά…',
      social: 'Σύνδεσμος Κοινωνικών Δικτύων (Προαιρετικό)',
      hintSocial: 'TikTok, Instagram ή προσωπική σελίδα',
      bio: 'Η Προσέγγιση & το Ύφος σας',
      hintBio: 'Περιγράψτε πώς δομείτε μια ανάγνωση και τι ξεχωρίζει στη μέθοδό σας (τουλάχιστον 25 χαρακτήρες).',
      errBio: 'Παρακαλούμε γράψτε τουλάχιστον 25 χαρακτήρες.',
      consent: 'Αποδέχομαι την εμπιστευτική αξιολόγηση των στοιχείων μου σύμφωνα με τις αρχές απορρήτου του Mythborn.',
      submit: 'Υποβολή Αίτησης →',
      success: 'Η αίτησή σας καταχωρήθηκε επιτυχώς! Η ομάδα μας θα επικοινωνήσει μαζί σας μετά την αξιολόγηση.',
      error: 'Παρακαλούμε συμπληρώστε τα υποχρεωτικά πεδία, τουλάχιστον μία εξειδίκευση και την αποδοχή.'
    }
  },
  es: {
    lead: 'Gözde, la voz de las cartas',
    badge: 'GÖZDE ACTIVA · LECTURA SIMBÓLICA EN AUDIO Y ESCRITA',
    heading: 'Los símbolos siempre tienen algo que contar.',
    headingEm: 'Sin frases hechas: una hoja de ruta clara y personal para ti.',
    sub: 'Un nuevo espacio de símbolos, cartas y relatos celestes de la mano de Gözde. Sin perderte entre cientos de perfiles al azar, conecta con interpretaciones profundas, confidenciales y enriquecedoras.',
    keywords: 'Mythborn, Gözde la voz de las cartas, lectura de Tarot, lectura de café, Katina, intuición, astrología tradicional, carta astral, numerología',
    ctaPrimary: 'Elige tu Área y Conecta',
    social: 'Descubre a Gözde en TikTok',
    applyNav: 'Solicitud de Intérprete',
    navAreas: 'Áreas',
    navProcess: 'Método y Proceso',
    navInquiry: 'Contacto Inicial',
    navFaq: 'Preguntas',
    trustStrip: [
      ['Lectura Personal y Única', 'Sin textos prefabricados; cada lectura es interpretada personalmente por Gözde para tu consulta.'],
      ['Confidencialidad Total', 'Un espacio seguro, libre de juicios y con límites éticos claros donde cada detalle permanece privado.'],
      ['Audio Grabado o Análisis Escrito', 'Preparado en silencio y máxima concentración como grabación de voz o texto detallado, sin llamadas apresuradas.']
    ],
    areasEyebrow: 'DISCIPLINAS DE LECTURA SIMBÓLICA',
    areasTitle: '¿Qué nudo quieres desenredar hoy?',
    areasSub: 'Elige el área que mejor conecte con tu momento actual; Gözde integra símbolos, arquetipos y ciclos celestes en torno a tu pregunta.',
    selectBtn: 'Elegir esta Área →',
    formats: ['Grabación de Voz', 'Texto Detallado', 'Enfoque Personal'],
    cats: ['Lectura de Café', 'Tarot', 'Katina', 'Intuición', 'Amor y Relaciones', 'Astrología Tradicional', 'Carta Astral', 'Numerología'],
    catDetails: [
      ['SIMBOLISMO TRADICIONAL', 'Lectura de Café', 'Un espejo intuitivo de las figuras, caminos y símbolos de tu taza conectados con tu momento presente.'],
      ['ARQUETIPOS Y DECISIONES', 'Tarot', 'Aclara las huellas del pasado, la energía del presente y los caminos de decisión mediante el Tarot.'],
      ['DINÁMICA MÍTICA', 'Katina', 'Explora los vínculos emocionales, las intenciones y la dinámica de pareja a través de los símbolos de Katina.'],
      ['VISIÓN PROFUNDA', 'Intuición', 'Aborda los nudos invisibles en la superficie mediante una reflexión intuitiva y estructurada.'],
      ['EQUILIBRIO EMOCIONAL', 'Amor y Relaciones', 'Analiza el potencial de comunicación, los puntos de inflexión y el ritmo compartido sin juicios.'],
      ['TRADICIÓN CELESTE', 'Astrología Tradicional', 'Descubre tu temperamento, ciclos vitales y temas principales desde la tradición clásica del cielo.'],
      ['DATOS ASTRONÓMICOS', 'Carta Astral', 'Comprende el Sol, la Luna, el Ascendente, las casas y los tránsitos planetarios reales en tu vida.'],
      ['RITMO NUMÉRICO', 'Numerología', 'Descifra los arquetipos numéricos de tu fecha de nacimiento y nombre para orientar tu ciclo anual.']
    ],
    processEyebrow: 'CALIDAD QUE SE NOTA DESDE EL PRIMER MENSAJE',
    processTitle: 'Aquí nada fluye al azar; cada paso se basa en claridad y confianza.',
    processSub: 'En lugar de frases genéricas, un enfoque estructurado que identifica la necesidad real detrás de tu consulta.',
    steps: [
      ['Elige tu Área y Pregunta', 'Selecciona entre las disciplinas simbólicas la que mejor responda a tu inquietud actual en el formulario.'],
      ['Comparte tu Contexto en Confianza', 'Envía tu pregunta, datos natales o detalles simbólicos a Gözde indicando el formato que prefieres.'],
      ['Recibe tu Audio o Análisis Escrito', 'Obtén una grabación de voz detallada o lectura escrita que podrás conservar y revisar siempre.']
    ],
    pillars: [
      ['Pocas Temáticas, Máxima Claridad', 'No hablamos de todo superficialmente; vamos al núcleo de la cuestión para despejar las dudas.'],
      ['Formato Honesto y Profundo', 'Sin llamadas en vivo apresuradas: cada lectura se prepara con total concentración en formato de voz o texto.'],
      ['Experiencia Boutique Curada', 'Trato directo con la curaduría personal de Gözde, lejos de plataformas masivas e impersonales.']
    ],
    formEyebrow: 'CONTACTO INICIAL CON GÖZDE',
    formTitle: 'Comparte tu enfoque y comencemos.',
    formSub: 'Completa el formulario para indicar el área de tu interés y el contexto de tu consulta.',
    labelTopic: 'Área de Exploración Seleccionada',
    labelFormat: 'Formato de Lectura Preferido',
    formatOptions: ['Grabación de Voz Personalizada', 'Texto Escrito Detallado', 'Sesión Individual en Vivo (Con Cita Previa)'],
    labelName: 'Tu Nombre o Seudónimo',
    hintName: 'Ej. Elena R. o tu alias preferido',
    labelContact: 'Tu Canal de Contacto (Correo, Teléfono o Red Social)',
    hintContact: 'Indica un correo, teléfono o usuario activo para poder responderte',
    labelMessage: 'Tu Pregunta Principal y Breve Nota',
    hintMessage: 'Resume brevemente el tema que deseas aclarar (mínimo 10 caracteres)',
    labelConsent: 'Acepto que la información compartida sea revisada de forma confidencial bajo la Política de Privacidad y Protección de Datos.',
    submitInquiry: 'Enviar a Gözde →',
    submitting: 'Enviando…',
    inquirySuccess: 'Tu mensaje ha sido guardado y enviado a Gözde. Nos pondremos en contacto contigo muy pronto por el canal indicado.',
    inquiryError: 'Por favor, completa todos los campos obligatorios y marca la casilla de aceptación.',
    faqEyebrow: 'PREGUNTAS FRECUENTES Y RESPUESTAS RÁPIDAS',
    faqTitle: 'Respuestas claras sobre nuestro proceso, privacidad y lectura simbólica.',
    faqSub: 'Consulta de un vistazo todos los detalles sobre nuestras lecturas personalizadas y principios éticos.',
    aeoFacts: [
      ['Plataforma y Autoridad', 'Mythborn es una plataforma boutique multilingüe de lectura simbólica y astrología dirigida por Gözde.'],
      ['Disciplinas', 'Lectura de Café, Tarot, Katina, Intuición, Amor y Relaciones, Astrología Tradicional, Carta Astral, Numerología.'],
      ['Formatos de Entrega', 'Grabación de voz personalizada o análisis escrito detallado preparado en tranquilidad (sin llamadas en vivo).'],
      ['Privacidad y Ética', 'Confidencialidad absoluta KVKK/RGPD, lecturas sin plantillas genéricas y enfoque en el autoconocimiento.']
    ],
    faqs: [
      ['¿Qué diferencia a Mythborn y a Gözde, la voz de las cartas?', 'A diferencia de los directorios masivos, Mythborn ofrece lecturas simbólicas personalizadas interpretadas directamente por Gözde con total confidencialidad y sin frases prefabricadas.'],
      ['¿Se realizan llamadas telefónicas o videollamadas en vivo?', 'No; actuamos con total transparencia. Una lectura simbólica y astrológica seria requiere silencio y concentración, no la prisa de una llamada en vivo. Gözde prepara tu lectura en privado como una grabación de voz detallada o un análisis escrito que puedes volver a escuchar cuando quieras.'],
      ['¿Cómo funciona el proceso y adónde llega el formulario?', 'Al enviar el formulario de contacto inicial, tu solicitud queda registrada de forma segura en la base de datos de Mythborn para Gözde. Confirmamos los detalles por tu canal de contacto y preparamos tu lectura personalizada.'],
      ['¿La información y las preguntas que comparto son confidenciales?', 'Totalmente. La confidencialidad es un pilar esencial de Mythborn. Tus datos y consultas jamás se comparten con terceros.'],
      ['¿Cuál es la diferencia entre Tarot, Katina y Carta Astral?', 'El Tarot ilumina la energía actual y las decisiones; Katina profundiza en vínculos afectivos e intenciones; la Carta Astral analiza posiciones astronómicas reales.'],
      ['¿Las lecturas garantizan hechos futuros?', 'No. Todo el contenido de Mythborn tiene fines de reflexión personal, simbolismo cultural, autoconocimiento y entretenimiento.']
    ],
    recruitEyebrow: 'RED DE INTÉRPRETES SELECCIONADOS DE MYTHBORN',
    recruitTitle: '¿Eres especialista en lectura simbólica o astrología con ética y profundidad?',
    recruitSub: 'Mythborn recibe solicitudes de lectores de Tarot, café y astrología en una página de evaluación independiente.',
    recruitCta: 'Ir a la Página de Solicitud →',
    note: 'Con fines de reflexión personal, simbolismo cultural y entretenimiento.',
    applyPage: {
      back: '← Volver al Inicio',
      eyebrow: 'RED DE INTÉRPRETES MYTHBORN · Gözde, la voz de las cartas',
      title: 'Solicitud para Intérpretes Simbólicos y Especialistas',
      sub: 'Buscamos especialistas capaces de ofrecer lecturas auténticas, confidenciales y empáticas, lejos de frases hechas.',
      criteria: [
        ['Maestría Interpretativa Auténtica', 'Práctica profunda y original en Tarot, Lectura de Café, Katina, Astrología o Numerología.'],
        ['Ética y Confidencialidad', 'Un lenguaje respetuoso que fortalezca la autonomía del consultante sin crear miedo ni dependencia.'],
        ['Calidad en Voz y Texto', 'Claridad expresiva tanto en grabaciones de voz como por escrito y compromiso con la excelencia.']
      ],
      formTitle: 'Formulario de Solicitud de Intérprete',
      formSub: 'Las solicitudes son revisadas confidencialmente por Gözde y el equipo de curaduría de Mythborn.',
      fullName: 'Nombre Completo (y Alias Profesional)',
      hintFullName: 'Tu nombre completo y el nombre artístico que utilices',
      email: 'Correo Electrónico',
      hintEmail: 'Formato: nombre@ejemplo.com',
      errEmail: 'Por favor, introduce un correo electrónico válido.',
      phone: 'Número de Teléfono (Línea Activa)',
      hintPhone: 'Incluye el prefijo internacional (ej. +34 6XX XXX XXX)',
      errPhone: 'Por favor, introduce un teléfono válido.',
      specialties: 'Áreas de Especialidad (Selecciona al menos 1)',
      experience: 'Años de Experiencia',
      expOptions: ['1–3 Años', '3–5 Años', '5–10 Años', '10+ Años'],
      modality: 'Formato de Lectura Preferido',
      modOptions: ['Grabación de Voz', 'Análisis Escrito Detallado', 'Formatos de Voz y Escrito'],
      languages: 'Idiomas en los que Realizas Lecturas',
      hintLanguages: 'Ej. Español, Inglés, Turco…',
      social: 'Enlace de Redes Sociales o Portafolio (Opcional)',
      hintSocial: 'Tu perfil de TikTok, Instagram o sitio web',
      bio: 'Tu Enfoque y Estilo de Interpretación',
      hintBio: 'Describe cómo estructuras una lectura y qué distingue tu enfoque (mínimo 25 caracteres).',
      errBio: 'Por favor, describe tu enfoque con al menos 25 caracteres.',
      consent: 'Acepto la revisión confidencial de mi solicitud bajo los principios éticos y de privacidad de Mythborn.',
      submit: 'Enviar Solicitud →',
      success: '¡Tu solicitud ha sido registrada con éxito! Nuestro equipo se pondrá en contacto contigo tras la evaluación.',
      error: 'Por favor, completa los campos obligatorios, elige al menos una especialidad y acepta el consentimiento.'
    }
  },
  ar: {
    lead: 'Gözde قارئة البطاقات',
    badge: 'GÖZDE متاحة الآن · قراءة رمزية صوتية ومكتوبة مخصصة',
    heading: 'للرموز دائماً حكاية ترويها.',
    headingEm: 'ليست عبارات مكررة؛ بل خارطة طريق واضحة ومخصصة لك.',
    sub: 'عالم متأنٍّ من الرموز والبطاقات وحكايات النجوم برفقة Gözde. بعيداً عن التشتت بين مئات الحسابات العشوائية، تعرّف على قراءة رمزية عميقة، سرية، وملهمة.',
    keywords: 'Mythborn, Gözde قارئة البطاقات, التاروت, قراءة القهوة, كاتينا, البصيرة, الحب والعلاقات, التنجيم التقليدي, خارطة الميلاد, علم الأرقام',
    ctaPrimary: 'اختر مجالك وتواصل مع Gözde',
    social: 'اكتشف Gözde على تيك توك',
    applyNav: 'طلب انضمام القراء',
    navAreas: 'مجالات الاستكشاف',
    navProcess: 'المنهج والخطوات',
    navInquiry: 'التواصل الأولي',
    navFaq: 'الأسئلة الشائعة',
    trustStrip: [
      ['قراءة فردية وأصيلة', 'لا نصوص جاهزة أو ردود عشوائية؛ كل قراءة تقدمها Gözde بنفسها حول سؤالك وسياقك الخاص.'],
      ['سرية تامة وحماية البيانات', 'مساحة آمنة تحترم الخصوصية والمعايير الأخلاقية دون أي أحكام مسبقة.'],
      ['تسجيل صوتي أو تحليل مكتوب', 'تُعد القراءة بتركيز عميق في هدوء تام كتسجيل صوتي مفصل أو نص مكتوب، بعيداً عن المكالمات السريعة.']
    ],
    areasEyebrow: 'مجالات القراءة الرمزية',
    areasTitle: 'أي سؤال ترغب في توضيح معالمه اليوم؟',
    areasSub: 'اختر المجال الأقرب لاهتمامك الحالي؛ تقوم Gözde بتحليل الرموز والأنماط الفلكية حول سؤالك الأساسي.',
    selectBtn: 'اختر هذا المجال ←',
    formats: ['تسجيل صوتي', 'تحليل مكتوب', 'تركيز فردي'],
    cats: ['قراءة القهوة', 'التاروت', 'كاتينا', 'البصيرة', 'الحب والعلاقات', 'التنجيم التقليدي', 'خارطة الميلاد', 'علم الأرقام'],
    catDetails: [
      ['رمزية تقليدية', 'قراءة القهوة', 'قراءة تأملية للأشكال والرموز والمسارات في فنجانك وربطها بمحاور اهتمامك الحالية.'],
      ['الأنماط والقرارات', 'التاروت', 'استكشف تأثيرات الماضي، طاقة الحاضر، ومسارات الاختيار عبر رموز بطاقات التاروت.'],
      ['ديناميكية العلاقات', 'كاتينا', 'فهم الروابط العاطفية والنوايا المتبادلة من خلال رموز كاتينا التقليدية.'],
      ['رؤية عميقة', 'البصيرة', 'تسليط الضوء على العقد غير المرئية عبر قراءة حدسية متوازنة وواضحة.'],
      ['توازن عاطفي', 'الحب والعلاقات', 'تأمل فرص التواصل، نقاط التحول، وإيقاع العلاقة بهدوء وموضوعية.'],
      ['تراث السماء', 'التنجيم التقليدي', 'اكتشف الطباع والدورات الحياتية المستندة إلى التقاليد الفلكية الكلاسيكية.'],
      ['بيانات فلكية', 'خارطة الميلاد', 'فهم مواقع الشمس والقمر والطالع والبيوت والعبورات الفلكية الفعلية في حياتك.'],
      ['إيقاع الأرقام', 'علم الأرقام', 'تحليل الدلالات الرمزية لتاريخ ميلادك واسمك لفهم دورات عامك الشخصي.']
    ],
    processEyebrow: 'جودة تلمسها من الرسالة الأولى',
    processTitle: 'لا شيء هنا يسير عشوائياً؛ كل خطوة مبنية على الوضوح والثقة.',
    processSub: 'بدلاً من العبارات العامة، منهج منظم يركز مباشرة على الجوهر الحقيقي لسؤالك.',
    steps: [
      ['حدد مجالك وسؤالك المحوري', 'اختر من بين المجالات الرمزية ما يلامس وضعك الحالي بشكل أدق عبر النموذج.'],
      ['شارك سياقك بخصوصية تامة', 'أرسل سؤالك أو بيانات ميلادك إلى Gözde مع تحديد صيغة القراءة المفضلة لديك.'],
      ['استلم تسجيلك الصوتي أو التحليل المكتوب', 'احصل على قراءة متأنية مسجلة صوتياً أو مكتوبة يمكنك الرجوع إليها في أي وقت.']
    ],
    pillars: [
      ['تركيز عميق ووضوح عالٍ', 'لا نشتت الانتباه بعموميات؛ بل نركز على جوهر المسألة لمنحك رؤية صافية.'],
      ['شفافية وصدق في الأسلوب', 'لا نعد بمكالمات مباشرة سريعة؛ بل نعد قراءات صوتية ومكتوبة بتركيز كامل وعمق حقيقي.'],
      ['تجربة نخبوية ومختارة', 'تواصل مباشر بإشراف Gözde الشخصي بعيداً عن المنصات التجارية المزدحمة.']
    ],
    formEyebrow: 'التواصل الأولي مع GÖZDE',
    formTitle: 'شارك موضوع اهتمامك ولنبدأ معاً.',
    formSub: 'املأ النموذج أدناه لتحديد المجال وإرسال سؤالك مباشرة.',
    labelTopic: 'مجال الاستكشاف المختار',
    labelFormat: 'صيغة القراءة المفضلة',
    formatOptions: ['تسجيل صوتي مخصص وتحليل', 'نص مكتوب مفصل', 'جلسة فردية مباشرة (بموعد مسبق)'],
    labelName: 'الاسم أو اللقب',
    hintName: 'مثال: سارة م. أو اللقب المفضل لديك',
    labelContact: 'وسيلة التواصل (البريد الإلكتروني أو الهاتف أو الحساب)',
    hintContact: 'يرجى كتابة بريد إلكتروني أو رقم هاتف نشط لنتمكن من الرد عليك',
    labelMessage: 'سؤالك المحوري وملاحظتك المختصرة',
    hintMessage: 'لخص الموضوع الذي ترغب في توضيحه بإيجاز (10 أحرف على الأقل)',
    labelConsent: 'أوافق على مراجعة المعلومات المشاركة بسرية تامة وفق سياسة الخصوصية وحماية البيانات الشخصية.',
    submitInquiry: 'إرسال إلى Gözde ←',
    submitting: 'جاري الإرسال…',
    inquirySuccess: 'تم حفظ رسالتك وإرسالها إلى Gözde بنجاح. سنتواصل معك قريباً عبر وسيلة التواصل التي اخترتها.',
    inquiryError: 'يرجى ملء جميع الحقول المطلوبة والموافقة على الشروط.',
    faqEyebrow: 'الأسئلة الشائعة والإجابات السريعة',
    faqTitle: 'إجابات واضحة حول منهج القراءة الرمزية والخصوصية.',
    faqSub: 'تعرف في لمحة سريعة على تفاصيل الجلسات الفردية ومعايير السرية والأخلاقيات لدينا.',
    aeoFacts: [
      ['المنصة والمرجعية', 'Mythborn منصة متعددة اللغات للقراءة الرمزية والفلك بإشراف Gözde قارئة البطاقات.'],
      ['مجالات التخصص', 'قراءة القهوة، التاروت، كاتينا، البصيرة، الحب والعلاقات، التنجيم التقليدي، خارطة الميلاد، علم الأرقام.'],
      ['صيغ التقديم الشفافة', 'تسجيل صوتي مخصص أو تحليل مكتوب مفصل يُعد بتركيز عميق (دون مكالمات مباشرة).'],
      ['الخصوصية والأخلاقيات', 'سرية تامة، قراءات أصيلة خالية من القوالب الجاهزة، وتركيز على الوعي الذاتي.']
    ],
    faqs: [
      ['ما الذي يميز Mythborn و Gözde قارئة البطاقات؟', 'بعيداً عن المنصات التجارية العشوائية، تقدم Mythborn قراءات رمزية فردية ومخصصة بإشراف Gözde شخصياً مع سرية تامة وعمق حقيقي.'],
      ['هل توجد مكالمات هاتفية أو مرئية مباشرة؟', 'لا، نحن نحرص على الصدق التام معكم. القراءة الرمزية والفلكية العميقة تتطلب هدوءاً وتركيزاً عالياً بعيداً عن التسرع في المكالمات المباشرة، لذلك تعد Gözde قراءتك كتسجيل صوتي مفصل أو تحليل مكتوب يمكنك الاحتفاظ به والرجوع إليه دائماً.'],
      ['كيف تسير العملية وأين يذهب النموذج؟', 'بمجرد إرسال نموذج التواصل الأولي، يُحفظ طلبك بأمان في قاعدة بيانات Mythborn ليصل مباشرة إلى Gözde، ثم يتم تأكيد التفاصيل وإعداد قراءتك المخصصة.'],
      ['هل تظل معلوماتي وأسئلتي سرية تماماً؟', 'بكل تأكيد. السرية وحماية البيانات هي حجر الأساس في Mythborn، ولا تتم مشاركة أي بيانات مع أي طرف ثالث.'],
      ['ما الفرق بين التاروت وكاتينا وخارطة الميلاد؟', 'يركز التاروت على طاقة الحاضر ومسارات القرار، وتختص كاتينا بديناميكية العلاقات والعاطفة، بينما تعتمد خارطة الميلاد على الحسابات الفلكية الدقيقة.'],
      ['هل القراءات تعد تنبؤاً حتمياً بالمستقبل؟', 'لا. جميع القراءات والمحتويات في Mythborn مخصصة للتأمل الشخصي، الرمزية الثقافية، والترفيه، ولا تعد نصيحة طبية أو قانونية أو مالية.']
    ],
    recruitEyebrow: 'شبكة قراء MYTHBORN المختارة',
    recruitTitle: 'هل أنت متخصص في قراءة الرموز أو الفلك بعمق وأخلاقيات عالية؟',
    recruitSub: 'تستقبل Mythborn طلبات الانضمام من المتخصصين في التاروت والقهوة والفلك عبر صفحة تقييم مخصصة.',
    recruitCta: 'انتقل إلى صفحة طلب الانضمام ←',
    note: 'لأغراض التأمل الشخصي والرمزية الثقافية والترفيه.',
    applyPage: {
      back: '→ العودة إلى الصفحة الرئيسية',
      eyebrow: 'شبكة قراء MYTHBORN · Gözde قارئة البطاقات',
      title: 'طلب انضمام متخصصي قراءة الرموز والفلك',
      sub: 'نرحب بطلبات المتخصصين القادرين على تقديم قراءات عميقة، سرية، وبعيدة عن الكليشيهات الجاهزة.',
      criteria: [
        ['أصالة وعمق في التفسير', 'خبرة راسخة في التاروت، رموز القهوة، كاتينا، الفلك، أو علم الأرقام.'],
        ['الالتزام الأخلاقي والسرية', 'أسلوب راقٍ يحترم خصوصية المستفيد ويعزز وعيه الذاتي دون تخويف أو إثارة للتبعية.'],
        ['جودة التعبير الصوتي والمكتوب', 'قدرة تعبيرية واضحة في التسجيلات الصوتية أو التحليلات المكتوبة مع الالتزام بالدقة.']
      ],
      formTitle: 'نموذج طلب انضمام قارئ / متخصص',
      formSub: 'تتم مراجعة الطلبات بسرية تامة من قبل Gözde وفريق Mythborn.',
      fullName: 'الاسم الكامل (واللقب المهني إن وجد)',
      hintFullName: 'اسمك الكامل واللقب الذي تفضل استخدامه',
      email: 'البريد الإلكتروني',
      hintEmail: 'الصيغة: name@example.com',
      errEmail: 'يرجى إدخال بريد إلكتروني صحيح.',
      phone: 'رقم الهاتف (خط نشط)',
      hintPhone: 'مع رمز الدولة (مثال: +90 5XX XXX XX XX)',
      errPhone: 'يرجى إدخال رقم هاتف صحيح.',
      specialties: 'مجالات التخصص (اختر مجالاً واحداً على الأقل)',
      experience: 'سنوات الخبرة',
      expOptions: ['1–3 سنوات', '3–5 سنوات', '5–10 سنوات', '+10 سنوات'],
      modality: 'صيغة القراءة المفضلة',
      modOptions: ['تسجيل صوتي مخصص', 'تحليل مكتوب مفصل', 'الصيغتان الصوتية والمكتوبة'],
      languages: 'اللغات التي تقدم بها القراءات',
      hintLanguages: 'مثال: العربية، التركية، الإنجليزية…',
      social: 'رابط حساب التواصل الاجتماعي أو الأعمال (اختياري)',
      hintSocial: 'رابط تيك توك أو إنستغرام أو موقعك الشخصي',
      bio: 'منهجك وأسلوبك في القراءة',
      hintBio: 'اشرح بإيجاز كيف تقدم القراءة وما الذي يميز أسلوبك (25 حرفاً على الأقل).',
      errBio: 'يرجى كتابة 25 حرفاً على الأقل حول منهجك.',
      consent: 'أوافق على مراجعة بيانات طلبي بسرية وفق معايير الخصوصية والأخلاقيات في Mythborn.',
      submit: 'إرسال الطلب ←',
      success: 'تم تسجيل طلبك بنجاح! سيتواصل معك فريقنا بعد مراجعة ملفك.',
      error: 'يرجى إكمال جميع الحقول المطلوبة واختيار تخصص واحد على الأقل والموافقة على الشروط.'
    }
  }
};

const categoryLabels = {
  tr: 'Konular',
  en: 'Topics',
  el: 'Θεματικές',
  es: 'Temas',
  ar: 'الموضوعات'
};

const safe = (v) => String(v).replace(/[&<>"']/g, (s) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));

export const resolveGozdeLocale = (pathname = '/') =>
  pathname.startsWith('/ar')
    ? 'ar'
    : pathname.startsWith('/es')
    ? 'es'
    : pathname.startsWith('/gr') || pathname.startsWith('/el')
    ? 'el'
    : pathname.startsWith('/en')
    ? 'en'
    : 'tr';

export const isGozdeApplyPath = (pathname = '/') =>
  /^\/(?:(?:en|gr|el|es|ar)\/)?(?:yorumcu-basvuru|basvuru|apply)\/?$/i.test(pathname);

export const isGozdeStandaloneRoute = (pathname = '/') =>
  isGozdeApplyPath(pathname) || Boolean(detectGozdeSubpage(pathname));

const sharedStyles = `
:root{color-scheme:dark;--cream:#f4eadc;--gold:#d4ae75;--gold-bright:#edd09e;--muted:#c7bab0;--bg:#08080a;--card:#121017;--border:#be9d6b38;--ok:#37b87c;--err:#e56b60}
*{box-sizing:border-box}
html{min-height:100%;background:var(--bg);scroll-behavior:smooth}
body{margin:0;color:var(--cream);font-family:system-ui,-apple-system,"Segoe UI",sans-serif;background:var(--bg);line-height:1.55;overflow-x:hidden}
body.drawer-open{overflow:hidden}
.wrap{position:relative;isolation:isolate;min-height:100svh;display:flex;flex-direction:column;background:#0d0a0b;overflow-x:hidden}
.top-shell{position:sticky;top:0;z-index:40;background:rgba(8,8,11,.84);backdrop-filter:blur(14px);border-bottom:1px solid #be9d6b26}
.hero-stage{position:relative;isolation:isolate;min-height:90svh;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;border-bottom:1px solid var(--border)}
.photo{position:absolute;inset:0;z-index:-2;margin:0}
.photo img{width:100%;height:100%;display:block;object-fit:cover;object-position:center 32%;filter:brightness(.86) saturate(.94)}
.photo:after{position:absolute;inset:0;content:"";background:linear-gradient(90deg,rgba(5,5,8,.97) 0%,rgba(5,5,8,.84) 28%,rgba(5,5,8,.34) 58%,rgba(5,5,8,.22) 100%),linear-gradient(0deg,rgba(8,8,10,1) 0%,rgba(8,8,10,.78) 18%,transparent 48%)}
.photo figcaption{display:none}
.top{width:min(1450px,calc(100% - 64px));margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:16px 0;position:relative;z-index:3}
.logo{display:inline-flex;align-items:center;text-decoration:none;color:#f4eadf;font:400 20px/1 Georgia,serif;letter-spacing:.24em;flex-shrink:0}
.logo:before{content:"✧";font:28px Georgia,serif;color:var(--gold);margin-inline-end:14px}
.top-nav{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.top-nav a{color:#ddd2c7;text-decoration:none;font-size:13px;letter-spacing:.04em;transition:color .2s;white-space:nowrap}
.top-nav a[aria-current=page],.top-nav a:hover{color:var(--gold-bright)}
.top-nav .apply-pill{border:1px solid #d4ae7577;background:#1a1410aa;color:var(--gold-bright);padding:8px 15px;border-radius:999px;font-size:12px;font-weight:600;letter-spacing:.06em}
.top-nav .apply-pill:hover{background:var(--gold);color:#140e07}
.langs{display:flex;gap:10px;align-items:center}
.langs a{color:#c9bcb1;text-decoration:none;font:600 11px system-ui,sans-serif;letter-spacing:.14em;padding:6px 4px}
.langs a[aria-current=page],.langs a:hover{color:var(--gold)}
.mobile-bar-actions{display:none;align-items:center;gap:10px}
.mobile-quick-cta{text-decoration:none;color:var(--gold-bright);border:1px solid #d4ae7566;background:#1a1410cc;padding:8px 13px;border-radius:999px;font-size:12px;font-weight:600;white-space:nowrap}
.menu-toggle{display:inline-flex;align-items:center;gap:8px;border:1px solid #d4ae7588;background:#15111acc;color:#f6ecdf;padding:9px 15px;border-radius:999px;font:600 12.5px/1 system-ui,sans-serif;letter-spacing:.06em;cursor:pointer}
.mobile-drawer{position:fixed;inset:0;z-index:100;pointer-events:none;opacity:0;transition:opacity .24s ease}
.mobile-drawer.is-open{pointer-events:auto;opacity:1}
.drawer-backdrop{position:absolute;inset:0;background:rgba(4,4,7,.76);backdrop-filter:blur(6px)}
.drawer-panel{position:absolute;top:0;inset-inline-end:0;width:min(390px,92vw);height:100%;background:linear-gradient(180deg,#131018 0%,#0a090d 100%);border-inline-start:1px solid #d4ae7544;padding:20px 20px 28px;display:flex;flex-direction:column;gap:18px;overflow-y:auto;transform:translateX(100%);transition:transform .26s cubic-bezier(.22,1,.36,1)}
[dir=rtl] .drawer-panel{transform:translateX(-100%)}
.mobile-drawer.is-open .drawer-panel{transform:translateX(0)}
.drawer-head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding-bottom:12px;border-bottom:1px solid var(--border)}
.drawer-close{border:1px solid #d4ae7555;background:#18141f;color:var(--gold-bright);border-radius:999px;padding:8px 14px;font:600 12px/1 system-ui,sans-serif;cursor:pointer}
.drawer-badge{display:inline-flex;align-items:center;gap:8px;font-size:11.5px;color:#ead7b7;letter-spacing:.08em;font-weight:600}
.drawer-links{display:flex;flex-direction:column;gap:8px}
.drawer-links a{display:flex;align-items:center;justify-content:space-between;padding:13px 15px;border-radius:14px;background:#17141e;border:1px solid #be9d6b2e;color:#f5ece0;text-decoration:none;font-size:14px;font-weight:500}
.drawer-links a.drawer-highlight{border-color:#d4ae7588;background:linear-gradient(90deg,#231a12 0%,#17131d 100%);color:var(--gold-bright)}
.drawer-legal{padding-top:8px;border-top:1px solid var(--border)}
.drawer-legal-links{display:flex;flex-direction:column;gap:6px}
.drawer-legal-links a{color:#c9bcb0;text-decoration:none;font-size:12.5px;padding:4px 0}
.drawer-langs{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px}
.drawer-langs a{text-align:center;padding:9px 4px;border-radius:10px;border:1px solid #be9d6b38;background:#110f16;color:#d6c9bc;text-decoration:none;font:600 11.5px system-ui,sans-serif}
.drawer-langs a[aria-current=page]{border-color:var(--gold);background:#241b11;color:var(--gold-bright)}
.drawer-foot{margin-top:auto;display:flex;flex-direction:column;gap:10px;padding-top:10px}
.main{width:min(1450px,calc(100% - 64px));margin:0 auto;flex:1;display:flex;flex-direction:column;justify-content:space-between;gap:28px;padding:clamp(24px,4.5vh,68px) 0 32px;position:relative;z-index:2}
.copy{max-width:650px;position:relative;z-index:1;min-width:0}
.live-pill{display:inline-flex;align-items:center;gap:10px;background:rgba(16,14,18,.82);border:1px solid #d4ae7559;border-radius:999px;padding:7px 15px;font-size:11px;font-weight:700;letter-spacing:.12em;color:#f0d5a8;margin:0 0 16px;backdrop-filter:blur(8px);max-width:100%}
.live-dot{width:8px;height:8px;border-radius:50%;background:var(--ok);box-shadow:0 0 10px var(--ok);flex-shrink:0}
.eyebrow{font-size:11px;font-weight:600;letter-spacing:.26em;color:#d8b57f;margin:0 0 10px;text-transform:uppercase}
.title{font:400 clamp(42px,4.8vw,74px)/1.05 Georgia,"Times New Roman",serif;letter-spacing:-.035em;margin:0 0 14px;text-wrap:balance}
.title-em{display:block;font:italic 400 clamp(21px,2.2vw,31px)/1.3 Georgia,"Times New Roman",serif;color:var(--gold-bright);margin:0 0 20px}
.sub{color:#e2dad3;font:400 16.5px/1.75 system-ui,sans-serif;max-width:580px;margin:0 0 26px}
.hero-actions{display:flex;flex-wrap:wrap;gap:14px;align-items:center;margin-bottom:8px}
.cta{display:inline-flex;gap:10px;align-items:center;justify-content:center;text-decoration:none;color:#160f08;background:#dbb980;border:1px solid #dbb980;border-radius:999px;padding:14px 25px;font-size:12.5px;letter-spacing:.07em;font-weight:700;cursor:pointer;transition:background .2s,transform .2s;text-align:center}
.cta:hover{background:#f0cd93;transform:translateY(-2px)}
.cta-ghost{display:inline-flex;gap:10px;align-items:center;justify-content:center;text-decoration:none;color:var(--cream);background:rgba(14,12,16,.72);border:1px solid #d4ae7566;border-radius:999px;padding:14px 23px;font-size:12.5px;letter-spacing:.06em;font-weight:600;transition:border-color .2s,background .2s;text-align:center}
.cta-ghost:hover{border-color:var(--gold);background:rgba(212,174,117,.14)}
.trust-bar{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;padding:18px 20px;border-radius:18px;background:rgba(12,10,15,.82);border:1px solid var(--border);backdrop-filter:blur(10px)}
.trust-item{display:flex;flex-direction:column;gap:4px;min-width:0}
.trust-item strong{font:600 14.5px/1.25 Georgia,serif;color:var(--gold-bright);display:flex;align-items:center;gap:8px}
.trust-item strong:before{content:"✦";color:var(--gold);flex-shrink:0}
.trust-item span{font-size:12.5px;color:#d2c7bc;line-height:1.45}
.chips{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:12px;margin:0;padding:0;list-style:none}
.chips a{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;text-align:center;gap:10px;font:500 12.5px/1.3 system-ui,sans-serif;color:#eee3d7;text-decoration:none;padding:8px 4px;border-radius:16px;transition:transform .2s,color .2s}
.chips a:hover{transform:translateY(-3px);color:var(--gold-bright)}
.chips a:before{content:"✧";width:54px;height:54px;display:grid;place-items:center;border:1px solid #bc955d66;border-radius:50%;font:24px Georgia,serif;color:#d4ae75;background:#08070b88}
.chips a:nth-child(1):before{content:"☼"}
.chips a:nth-child(2):before{content:"☕";font-size:21px}
.chips a:nth-child(3):before{content:"♠"}
.chips a:nth-child(4):before{content:"☾"}
.chips a:nth-child(5):before{content:"♡"}
.chips a:nth-child(6):before{content:"✶"}
.chips a:nth-child(7):before{content:"☸"}
.chips a:nth-child(8):before{content:"✧"}
.section-block{width:min(1450px,calc(100% - 64px));margin:0 auto;padding:60px 0;border-bottom:1px solid var(--border)}
.section-head{width:100%;max-width:100%;margin-bottom:30px}
.section-head h1,.section-head h2{font:400 clamp(24px,2.2vw,36px)/1.2 Georgia,serif;margin:0 0 8px;color:#f7efe4}
.section-head p{margin:0;color:var(--muted);font-size:15px;line-height:1.55;max-width:100%}
.areas-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}
.area-card{background:linear-gradient(180deg,#15121b 0%,#0e0c12 100%);border:1px solid var(--border);border-radius:18px;padding:22px;display:flex;flex-direction:column;justify-content:space-between;gap:16px;transition:border-color .2s,transform .2s;min-width:0}
.area-card:hover,.area-card.is-selected{border-color:var(--gold);transform:translateY(-3px)}
.area-top{display:flex;align-items:center;justify-content:space-between;gap:10px}
.area-icon{width:42px;height:42px;border-radius:50%;border:1px solid #d4ae7555;display:grid;place-items:center;color:var(--gold);font:19px Georgia,serif;background:#09080c;flex-shrink:0}
.area-tag{font-size:10px;font-weight:700;letter-spacing:.14em;color:#cdb083;text-transform:uppercase}
.area-card h3{font:400 21px/1.2 Georgia,serif;margin:10px 0 6px;color:#f8f0e5}
.area-card p{margin:0;font-size:13.5px;color:#cfc4b8;line-height:1.55}
.area-formats{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}
.area-formats small{font-size:10.5px;padding:3px 8px;border-radius:999px;background:#1c1722;color:#dfd2c2;border:1px solid #ffffff12}
.area-btn{width:100%;padding:11px 14px;border-radius:11px;border:1px solid #d4ae7566;background:#1b1510;color:var(--gold-bright);font-weight:600;font-size:12px;letter-spacing:.05em;cursor:pointer;transition:background .2s,color .2s;text-align:center}
.area-btn:hover{background:var(--gold);color:#140e07}
.process-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-bottom:18px}
.step-card,.pillar-card{background:#121017;border:1px solid var(--border);border-radius:18px;padding:22px 24px;min-width:0}
.step-card h3,.pillar-card h3{font:400 19.5px/1.25 Georgia,serif;margin:0 0 8px;color:#f6ede1;display:flex;align-items:center;gap:8px}
.step-card h3:before,.pillar-card h3:before{content:"✦";color:var(--gold);font-size:15px;flex-shrink:0}
.step-card p,.pillar-card p{margin:0;font-size:13.5px;color:#ccc0b4;line-height:1.55}
.inquiry-shell{display:grid;grid-template-columns:1fr 1.15fr;gap:34px;align-items:start;background:linear-gradient(145deg,#151119 0%,#0d0b11 100%);border:1px solid #d4ae7555;border-radius:22px;padding:clamp(20px,3.5vw,38px)}
.form-card{display:flex;flex-direction:column;gap:16px;min-width:0}
.form-row-2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
.field{display:flex;flex-direction:column;gap:4px;min-width:0}
.field label,.field legend{font-size:13px;font-weight:600;color:#f2e7d8}
.hint{display:block;color:#b5a799;font-size:11.5px;margin-bottom:2px}
.field input,.field select,.field textarea{width:100%;padding:12px 14px;border-radius:11px;border:1px solid #be9d6b44;background:#09080c;color:var(--cream);font:400 14px/1.4 system-ui,sans-serif;transition:border-color .2s,background-color .2s}
.field textarea{min-height:100px;resize:vertical}
.field input:focus,.field select:focus,.field textarea:focus{outline:2px solid #d4ae7588;border-color:var(--gold)}
.error-msg{display:none;color:var(--err);font-size:12px;margin-top:3px;font-weight:500}
.field input:user-invalid,.field textarea:user-invalid,.field input.user-invalid-fallback,.field textarea.user-invalid-fallback{border-color:var(--err);background-color:#261112}
.field input:user-invalid + .error-msg,.field textarea:user-invalid + .error-msg,.field input.user-invalid-fallback + .error-msg,.field textarea.user-invalid-fallback + .error-msg{display:block}
.field:has(input:user-invalid) .hint,.field:has(textarea:user-invalid) .hint{color:#f29b94}
.field input:user-valid,.field textarea:user-valid,.field input.user-valid-fallback,.field textarea.user-valid-fallback{border-color:var(--ok)}
.specialty-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px;margin-top:4px}
.check-pill{display:flex;align-items:center;gap:8px;padding:9px 11px;border-radius:10px;border:1px solid #be9d6b38;background:#0a090e;font-size:12.5px;color:#eadfce;cursor:pointer}
.check-pill input{width:15px;height:15px;accent-color:var(--gold);margin:0;flex-shrink:0}
.consent-row{display:flex;align-items:flex-start;gap:10px;font-size:12.5px;color:#d6c9bc;cursor:pointer}
.consent-row input{width:17px;height:17px;margin-top:2px;accent-color:var(--gold);flex-shrink:0}
.form-status{margin:0;padding:12px 15px;border-radius:11px;font-size:13px;display:none}
.form-status[data-state="ok"]{display:block;background:#10291e;border:1px solid var(--ok);color:#b9f5d8}
.form-status[data-state="err"]{display:block;background:#2b1214;border:1px solid var(--err);color:#ffd2ce}
.aeo-dl{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;margin:0 0 28px;padding:0}
.aeo-fact{background:#110f16;border:1px solid var(--border);border-radius:16px;padding:18px 20px;min-width:0}
.aeo-fact dt{font:600 14px/1.3 Georgia,serif;color:var(--gold-bright);margin:0 0 6px}
.aeo-fact dd{margin:0;font-size:13px;color:#cdc1b4;line-height:1.55}
.faq-list{display:flex;flex-direction:column;gap:12px;width:100%}
.faq-item{background:#121017;border:1px solid var(--border);border-radius:15px;padding:16px 22px}
.faq-item summary{font:600 16.5px/1.35 Georgia,serif;color:#f5ece0;cursor:pointer;list-style:none;display:flex;align-items:center;justify-content:space-between;gap:16px}
.faq-item summary::-webkit-details-marker{display:none}
.faq-item summary:after{content:"+";font:400 21px/1 system-ui,sans-serif;color:var(--gold);flex-shrink:0}
.faq-item[open] summary:after{content:"−"}
.faq-item p{margin:10px 0 0;color:#cfc3b6;font-size:14px;line-height:1.65}
.recruit-banner{margin-top:34px;background:linear-gradient(90deg,#1a1410 0%,#120f17 100%);border:1px solid #d4ae7566;border-radius:20px;padding:24px 22px;display:flex;flex-direction:column;align-items:stretch;gap:18px}
.recruit-copy{min-width:0;flex:1}
.recruit-banner h3{font:400 clamp(20px,2vw,26px)/1.28 Georgia,serif;margin:4px 0 6px;color:#f8efe2}
.recruit-banner p{margin:0;color:#d2c5b8;font-size:14.5px;line-height:1.55}
.subpage-hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:32px;align-items:center}
.subpage-portrait{margin:0;border-radius:22px;overflow:hidden;border:1px solid #d4ae7555;box-shadow:0 20px 50px rgba(0,0,0,.5);max-height:420px}
.subpage-portrait img{width:100%;height:100%;max-height:420px;object-fit:cover;object-position:center 28%;display:block}
.areas-deep-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px}
.area-deep-card{background:linear-gradient(180deg,#15121b 0%,#0d0b11 100%);border:1px solid var(--border);border-radius:20px;padding:26px;display:flex;flex-direction:column;justify-content:space-between;gap:16px}
.area-deep-card h2{font:400 25px/1.2 Georgia,serif;margin:4px 0;color:#f8f0e5}
.area-deep-desc{margin:0;color:#d5c9bd;font-size:14.5px;line-height:1.6}
.area-q-box{background:#0b090f;border:1px solid #be9d6b2e;border-radius:14px;padding:14px 16px;font-size:13px;color:#dfd3c6}
.area-q-box strong{display:block;color:var(--gold-bright);margin-bottom:6px}
.area-q-box ul{margin:0;padding-inline-start:18px;display:flex;flex-direction:column;gap:4px}
.area-delivery-note{font-size:12.5px;color:#c7bab0}
.area-delivery-note strong{color:#edd09e}
.honest-callout{display:grid;grid-template-columns:1.2fr .8fr;gap:28px;align-items:center;background:linear-gradient(135deg,#191310 0%,#110e16 100%);border:1px solid #d4ae7566;border-radius:22px;padding:28px}
.honest-copy h2{font:400 clamp(22px,2.2vw,32px)/1.22 Georgia,serif;margin:0 0 12px;color:#f8efe2}
.honest-copy p{margin:0;color:#ddd0c3;font-size:15px;line-height:1.7}
.honest-img{margin:0;border-radius:16px;overflow:hidden;border:1px solid var(--border);max-height:290px}
.honest-img img{width:100%;height:290px;object-fit:cover;display:block}
.blog-grid-preview{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}
.blog-grid-full{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}
.blog-card{background:#121017;border:1px solid var(--border);border-radius:18px;overflow:hidden;display:flex;flex-direction:column;transition:border-color .2s,transform .2s}
.blog-card:hover{border-color:var(--gold);transform:translateY(-3px)}
.blog-thumb{position:relative;display:block;height:210px;overflow:hidden;background:#09080c}
.blog-thumb img{width:100%;height:100%;object-fit:cover;object-position:center 28%;display:block;transition:transform .35s}
.blog-card:hover .blog-thumb img{transform:scale(1.04)}
.blog-cat-pill{position:absolute;top:12px;inset-inline-start:12px;background:rgba(10,8,13,.86);border:1px solid #d4ae7566;color:var(--gold-bright);padding:4px 10px;border-radius:999px;font-size:10px;font-weight:700;letter-spacing:.12em}
.blog-card-body{padding:20px;display:flex;flex-direction:column;gap:10px;flex:1}
.article-meta{display:flex;flex-wrap:wrap;gap:6px;align-items:center;font-size:11px;color:#b9aa9b;letter-spacing:.06em;text-transform:uppercase}
.blog-card-body h2,.blog-card-body h3{font:400 19px/1.3 Georgia,serif;margin:0;color:#f7efe3}
.blog-card-body h2 a,.blog-card-body h3 a{color:inherit;text-decoration:none}
.blog-card-body p{margin:0;font-size:13.5px;color:#cbc0b3;line-height:1.55;flex:1}
.blog-read-link{color:var(--gold-bright);text-decoration:none;font-size:12.5px;font-weight:600;letter-spacing:.05em;margin-top:4px}
.article-shell{max-width:960px}
.back-pill{display:inline-flex;align-items:center;gap:6px;color:var(--gold-bright);text-decoration:none;font-size:13px;font-weight:600}
.article-title{font:400 clamp(28px,3.4vw,46px)/1.14 Georgia,serif;margin:8px 0 12px;color:#f9f1e6}
.article-lead{font-size:17px;line-height:1.7;color:#e3d7ca;margin:14px 0 22px}
.article-hero-figure{margin:0 0 28px;border-radius:20px;overflow:hidden;border:1px solid var(--border);max-height:440px}
.article-hero-figure img{width:100%;max-height:440px;object-fit:cover;object-position:center 28%;display:block}
.article-sec{margin-bottom:26px}
.article-sec h2{font:400 clamp(21px,2.1vw,28px)/1.25 Georgia,serif;color:#f5ebd9;margin:0 0 10px}
.article-sec p{font-size:15.5px;line-height:1.78;color:#dad0c4;margin:0 0 14px}
.legal-nav-pills{display:flex;flex-wrap:wrap;gap:10px;margin:16px 0 24px}
.admin-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px}
.bottom{width:min(1450px,calc(100% - 64px));margin:0 auto;padding:28px 0 42px;font-size:12.5px;color:#b8a797}
.footer-card{background:linear-gradient(180deg,#131018 0%,#0b090f 100%);border:1px solid #d4ae7544;border-radius:24px;padding:30px 32px;display:flex;flex-direction:column;gap:26px;box-shadow:0 18px 44px rgba(0,0,0,.45)}
.footer-top{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;padding-bottom:22px;border-bottom:1px solid var(--border);flex-wrap:wrap}
.bottom-brand{display:flex;flex-direction:column;gap:6px;max-width:520px}
.footer-lead{margin:2px 0 0;font:600 13px/1.3 Georgia,serif;color:var(--gold-bright);letter-spacing:.12em;text-transform:uppercase}
.bottom-brand span{color:#c5b8ab;font-size:13px;line-height:1.5}
.footer-cta-row{display:flex;gap:12px;flex-wrap:wrap;align-items:center}
.footer-cols{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}
.footer-col{display:flex;flex-direction:column;gap:10px;min-width:0}
.footer-col h4{margin:0 0 2px;font-size:10.5px;font-weight:700;letter-spacing:.22em;color:var(--gold);text-transform:uppercase}
.footer-col nav{display:flex;flex-direction:column;gap:8px}
.footer-col nav a{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:11px 14px;border-radius:12px;background:#16131d;border:1px solid #be9d6b29;color:#efe4d6;text-decoration:none;font-size:13px;font-weight:500;transition:border-color .2s,background .2s}
.footer-col nav a:hover{border-color:var(--gold);background:#1f1924;color:var(--gold-bright)}
.footer-col nav a small{color:var(--gold);font-size:13px;flex-shrink:0}
.footer-meta{display:flex;align-items:center;justify-content:space-between;gap:16px;padding-top:18px;border-top:1px solid var(--border);flex-wrap:wrap}
.footer-meta strong{font-weight:600;letter-spacing:.14em;color:#dcc39c;font-size:11.5px}
.footer-langs{display:flex;gap:8px;align-items:center}
.footer-langs a{padding:6px 11px;border-radius:999px;border:1px solid #be9d6b38;background:#120f17;color:#d2c5b8;text-decoration:none;font:600 11px/1 system-ui,sans-serif;letter-spacing:.1em}
.footer-langs a[aria-current=page],.footer-langs a:hover{border-color:var(--gold);background:#241b11;color:var(--gold-bright)}
.scroll-top-btn{position:fixed;bottom:22px;inset-inline-end:22px;z-index:85;width:48px;height:48px;border-radius:50%;border:1px solid #d4ae75aa;background:rgba(18,14,22,.88);backdrop-filter:blur(10px);color:var(--gold-bright);display:grid;place-items:center;font:600 20px/1 system-ui,sans-serif;cursor:pointer;box-shadow:0 10px 28px rgba(0,0,0,.6);opacity:0;pointer-events:none;transform:translateY(10px) scale(.92);transition:opacity .26s ease,transform .26s ease,background .2s,border-color .2s}
.scroll-top-btn.is-visible{opacity:1;pointer-events:auto;transform:translateY(0) scale(1)}
.scroll-top-btn:hover{background:var(--gold);color:#140e07;border-color:var(--gold-bright)}
[dir=rtl] .title{letter-spacing:normal}
[dir=rtl] .photo:after{background:linear-gradient(270deg,#050508f5 0%,#050508cc 35%,transparent 78%),linear-gradient(0deg,#08080a,transparent 45%)}
@media(min-width:1100px){
  .section-head h2,.section-head p,.recruit-banner h3,.recruit-banner p{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .recruit-banner{flex-direction:row;align-items:center;justify-content:space-between;padding:28px 32px;gap:24px}
  .recruit-banner .cta{width:auto;flex-shrink:0}
}
@media(max-width:1080px){
  .desktop-nav{display:none}
  .mobile-bar-actions{display:flex}
  .areas-grid,.aeo-dl,.blog-grid-preview{grid-template-columns:repeat(2,minmax(0,1fr))}
  .trust-bar,.process-grid,.inquiry-shell,.subpage-hero-grid,.honest-callout,.areas-deep-grid,.blog-grid-full,.admin-grid{grid-template-columns:1fr}
  .chips{grid-template-columns:repeat(4,minmax(0,1fr))}
}
@media(max-width:720px){
  .wrap{background:#08080b}
  .top,.main,.section-block,.bottom{width:calc(100% - 32px)}
  .top{padding:12px 0}
  .logo{font-size:16px;letter-spacing:.16em}
  .logo:before{margin-inline-end:8px;font-size:22px}
  .hero-stage{min-height:auto}
  .main{padding:0 0 26px;gap:18px;justify-content:flex-start}
  .photo{position:relative;inset:auto;z-index:0;order:0;margin:0 0 0 calc((100% - 100vw)/2);width:100vw;max-width:none;height:clamp(270px,74vw,380px);overflow:hidden}
  .photo img{object-position:55% 30%;filter:brightness(.94) saturate(.96)}
  .photo:after{background:linear-gradient(0deg,#08080b 0%,transparent 32%)}
  .copy{order:1;max-width:100%}
  .live-pill{font-size:10px;letter-spacing:.08em;padding:6px 12px;line-height:1.35}
  .eyebrow{letter-spacing:.16em;line-height:1.4}
  .title{font-size:clamp(32px,8.5vw,44px);line-height:1.1}
  .title-em{font-size:clamp(18px,4.8vw,23px)}
  .sub{font-size:15px;line-height:1.65;max-width:100%}
  .hero-actions{flex-direction:column;align-items:stretch}
  .cta,.cta-ghost{width:100%;white-space:normal;padding:14px 18px;line-height:1.35}
  .trust-bar{order:2;padding:16px}
  .chips{order:3;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px 6px}
  .areas-grid,.specialty-grid,.aeo-dl,.blog-grid-preview,.form-row-2{grid-template-columns:1fr!important}
  .section-block{padding:42px 0}
  .recruit-banner{padding:20px 18px}
  .footer-card{padding:22px 18px;border-radius:20px;gap:20px}
  .footer-top{flex-direction:column;align-items:stretch;gap:16px;padding-bottom:18px}
  .footer-cta-row{display:grid;grid-template-columns:1fr;gap:10px;width:100%}
  .footer-cols{grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
  .footer-col-legal{grid-column:1 / -1;padding-top:6px}
  .footer-col nav a{padding:10px 12px;font-size:12.5px}
  .footer-meta{flex-direction:column;align-items:stretch;gap:12px}
  .footer-langs{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px;width:100%}
  .footer-langs a{text-align:center;padding:8px 4px}
  .cookie-banner{left:12px;right:12px;bottom:12px;padding:16px}
  .cookie-banner-inner{flex-direction:column;align-items:stretch;gap:14px}
  .cookie-banner-actions{width:100%;display:grid;grid-template-columns:1fr 1fr;gap:8px}
  .cookie-btn{width:100%;padding:11px 12px;font-size:12.5px}
}
.cookie-pref-trigger{display:flex;align-items:center;justify-content:space-between;width:100%;padding:9px 12px;border-radius:11px;background:#ffffff06;border:1px solid #ffffff0d;color:#d8cdc0;font:inherit;font-size:13px;cursor:pointer;text-align:start;transition:border-color .2s,background .2s,color .2s}
.cookie-pref-trigger:hover{border-color:#d8b78059;background:#d8b78012;color:#f7ead5}
.cookie-pref-trigger small{color:#c9a66b;font-size:11px}
.cookie-banner{position:fixed;left:max(18px,env(safe-area-inset-left));right:max(18px,env(safe-area-inset-right));bottom:max(18px,env(safe-area-inset-bottom));z-index:115;max-width:1120px;margin:0 auto;padding:18px 22px;border-radius:20px;background:linear-gradient(165deg,#13141df5,#0b0c12fa);border:1px solid #d8b78059;box-shadow:0 22px 54px #000000d9;backdrop-filter:blur(16px)}
.cookie-banner[hidden]{display:none!important}
.cookie-banner-inner{display:flex;align-items:center;justify-content:space-between;gap:22px;flex-wrap:wrap}
.cookie-banner-copy{flex:1 1 460px}
.cookie-banner-copy strong{display:block;color:#f6ecdc;font-size:14.5px;margin-bottom:4px;letter-spacing:.02em}
.cookie-banner-copy p{margin:0;color:#c9beb0;font-size:13px;line-height:1.55}
.cookie-banner-copy a{color:var(--gold);text-decoration:underline;text-underline-offset:3px}
.cookie-banner-actions{display:flex;align-items:center;gap:10px;flex-shrink:0}
.cookie-btn{min-height:42px;padding:10px 18px;font-size:13px;cursor:pointer}
@media(max-width:390px){
  .chips{grid-template-columns:repeat(2,minmax(0,1fr))}
  .mobile-quick-cta{display:none}
}
@media(prefers-reduced-motion:reduce){
  *,*:before,*:after{transition:none!important;animation:none!important;scroll-behavior:auto!important}
}
`;

const clientInteractiveScript = `
(() => {
  const drawer = document.getElementById('mobile-drawer');
  const openBtn = document.querySelector('[data-open-drawer]');
  const setDrawer = (open) => {
    if (!drawer) return;
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    document.body.classList.toggle('drawer-open', open);
    if (openBtn) openBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  if (openBtn) openBtn.addEventListener('click', () => setDrawer(true));
  document.querySelectorAll('[data-close-drawer]').forEach((el) => el.addEventListener('click', () => setDrawer(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setDrawer(false);
  });

  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (scrollTopBtn) {
    let scrollIdleTimer = null;
    const handleScrollActivity = () => {
      if (window.scrollY > 220) {
        scrollTopBtn.classList.add('is-visible');
        if (scrollIdleTimer) clearTimeout(scrollIdleTimer);
        scrollIdleTimer = setTimeout(() => {
          if (!scrollTopBtn.matches(':hover, :focus')) {
            scrollTopBtn.classList.remove('is-visible');
          }
        }, 900);
      } else {
        scrollTopBtn.classList.remove('is-visible');
        if (scrollIdleTimer) clearTimeout(scrollIdleTimer);
      }
    };
    window.addEventListener('scroll', handleScrollActivity, { passive: true });
    window.addEventListener('touchmove', handleScrollActivity, { passive: true });
    scrollTopBtn.addEventListener('click', () => {
      scrollTopBtn.classList.remove('is-visible');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const cookieBanner = document.getElementById('cookie-consent-banner');
  const COOKIE_KEY = 'mythborn_cookie_consent';
  if (cookieBanner) {
    let savedChoice = null;
    try {
      savedChoice = localStorage.getItem(COOKIE_KEY);
    } catch {}
    if (!savedChoice && document.cookie.includes('mythborn_cookie_consent=')) {
      savedChoice = 'accepted';
    }
    if (!savedChoice) {
      cookieBanner.hidden = false;
    }
    const saveCookieChoice = (choice) => {
      try {
        localStorage.setItem(COOKIE_KEY, choice);
      } catch {}
      document.cookie = 'mythborn_cookie_consent=' + encodeURIComponent(choice) + '; Path=/; Max-Age=31536000; SameSite=Lax; Secure';
      cookieBanner.hidden = true;
    };
    cookieBanner.querySelectorAll('[data-cookie-choice]').forEach((btn) => {
      btn.addEventListener('click', () => {
        saveCookieChoice(btn.getAttribute('data-cookie-choice') || 'essential');
      });
    });
    document.querySelectorAll('[data-open-cookie-banner]').forEach((btn) => {
      btn.addEventListener('click', () => {
        cookieBanner.hidden = false;
      });
    });
  }

  try {
    const params = new URLSearchParams(window.location.search);
    const preTopic = params.get('topic');
    const select = document.querySelector('#inquiry-topic');
    if (preTopic && select) {
      Array.from(select.options).forEach((opt) => {
        if (opt.value.toLowerCase() === preTopic.toLowerCase()) select.value = opt.value;
      });
    }
  } catch {}

  const dirtyState = new WeakMap();
  const syncAria = (el) => {
    if (!el || typeof el.checkValidity !== 'function') return;
    const valid = el.checkValidity();
    el.classList.toggle('user-invalid-fallback', !valid);
    el.classList.toggle('user-valid-fallback', valid);
    el.setAttribute('aria-invalid', valid ? 'false' : 'true');
  };
  document.addEventListener('blur', (e) => {
    const t = e.target;
    if (!t || !t.checkValidity) return;
    const st = dirtyState.get(t) || { interacted: false };
    if (st.interacted) syncAria(t);
  }, true);
  document.addEventListener('input', (e) => {
    const t = e.target;
    if (!t || !t.checkValidity) return;
    dirtyState.set(t, { interacted: true });
    if (t.hasAttribute('aria-invalid')) syncAria(t);
  });

  document.querySelectorAll('[data-select-topic]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const topic = btn.getAttribute('data-select-topic');
      const select = document.querySelector('#inquiry-topic');
      if (select && topic) select.value = topic;
      document.querySelectorAll('.area-card').forEach((c) => c.classList.remove('is-selected'));
      const card = btn.closest('.area-card');
      if (card) card.classList.add('is-selected');
      const formSection = document.querySelector('#iletisim');
      if (formSection) formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const nameInput = document.querySelector('#inquiry-name');
      if (nameInput) setTimeout(() => nameInput.focus({ preventScroll: true }), 350);
    });
  });

  const bindForm = (formId, endpoint) => {
    const form = document.getElementById(formId);
    if (!form) return;
    const statusEl = form.querySelector('[data-form-status]');
    const submitBtn = form.querySelector('button[type="submit"]');
    const defaultLabel = submitBtn ? submitBtn.textContent : '';
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        Array.from(form.elements).forEach((el) => syncAria(el));
        if (statusEl) {
          statusEl.setAttribute('data-state', 'err');
          statusEl.textContent = form.getAttribute('data-err-msg') || 'Error';
        }
        return;
      }
      const fd = new FormData(form);
      const payload = Object.fromEntries(fd.entries());
      if (formId === 'gozde-apply-form') {
        payload.specialties = fd.getAll('specialties');
        if (!payload.specialties.length) {
          if (statusEl) {
            statusEl.setAttribute('data-state', 'err');
            statusEl.textContent = form.getAttribute('data-err-msg') || 'Error';
          }
          return;
        }
      }
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = form.getAttribute('data-sending-msg') || '...';
      }
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.ok) {
          if (statusEl) {
            statusEl.setAttribute('data-state', 'ok');
            statusEl.textContent = form.getAttribute('data-ok-msg') || 'OK';
          }
          form.reset();
        } else {
          if (statusEl) {
            statusEl.setAttribute('data-state', 'err');
            statusEl.textContent = data.error || form.getAttribute('data-err-msg') || 'Error';
          }
        }
      } catch {
        if (statusEl) {
          statusEl.setAttribute('data-state', 'err');
          statusEl.textContent = form.getAttribute('data-err-msg') || 'Error';
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = defaultLabel;
        }
      }
    });
  };

  bindForm('gozde-inquiry-form', '/api/gozde-inquiry');
  bindForm('gozde-apply-form', '/api/gozde-apply');
})();
`;

const buildInquirySectionHtml = (locale, t) => {
  const r = ROUTE_MAP[locale];
  const u = EXTRA_UI[locale];
  return `<section id="iletisim" class="section-block"><div class="inquiry-shell"><div class="copy"><p class="eyebrow">${safe(t.formEyebrow)}</p><h2 style="font:400 clamp(24px,2.4vw,34px)/1.18 Georgia,serif;margin:0 0 10px;color:#f8efe2">${safe(t.formTitle)}</h2><p class="sub" style="margin-bottom:18px">${safe(t.formSub)}</p><div class="pillar-card" style="margin-top:16px"><h3>${safe(t.lead)}</h3><p>${safe(u.deliveryText)}</p><div style="margin-top:14px;display:flex;flex-wrap:wrap;gap:10px"><a class="cta-ghost" href="https://www.tiktok.com/@gozdeli_" target="_blank" rel="noopener noreferrer">${safe(t.social)} ↗</a><a class="cta-ghost" href="${r.kvkk}">${safe(u.kvkkNav)}</a></div></div></div><form id="gozde-inquiry-form" class="form-card" method="post" action="/api/gozde-inquiry" novalidate data-ok-msg="${safe(t.inquirySuccess)}" data-err-msg="${safe(t.inquiryError)}" data-sending-msg="${safe(t.submitting)}"><input type="hidden" name="locale" value="${locale}"><div class="form-row-2"><div class="field"><label for="inquiry-topic">${safe(t.labelTopic)}</label><select id="inquiry-topic" name="topic">${t.cats.map((c) => `<option value="${safe(c)}">${safe(c)}</option>`).join('')}</select></div><div class="field"><label for="inquiry-format">${safe(t.labelFormat)}</label><select id="inquiry-format" name="format">${t.formatOptions.map((f) => `<option value="${safe(f)}">${safe(f)}</option>`).join('')}</select></div></div><div class="field"><label for="inquiry-name">${safe(t.labelName)}</label><span id="inquiry-name-hint" class="hint">${safe(t.hintName)}</span><input id="inquiry-name" name="name" type="text" required minlength="2" maxlength="100" autocomplete="name" aria-describedby="inquiry-name-hint"></div><div class="field"><label for="inquiry-contact">${safe(t.labelContact)}</label><span id="inquiry-contact-hint" class="hint">${safe(t.hintContact)}</span><input id="inquiry-contact" name="contact" type="text" required minlength="3" maxlength="140" aria-describedby="inquiry-contact-hint"></div><div class="field"><label for="inquiry-message">${safe(t.labelMessage)}</label><span id="inquiry-message-hint" class="hint">${safe(t.hintMessage)}</span><textarea id="inquiry-message" name="message" required minlength="10" maxlength="1200" aria-describedby="inquiry-message-hint"></textarea></div><label class="consent-row"><input type="checkbox" name="consent" value="yes" required><span>${safe(t.labelConsent)} (<a href="${r.kvkk}" style="color:var(--gold)">${safe(u.kvkkNav)}</a> · <a href="${r.privacy}" style="color:var(--gold)">${safe(u.privacyNav)}</a>)</span></label><p class="form-status" data-form-status role="status" aria-live="polite"></p><button type="submit" class="cta">${safe(t.submitInquiry)}</button></form></div></section>`;
};

export const gozdeApplyPage = (pathname = '/yorumcu-basvuru') => {
  const locale = resolveGozdeLocale(pathname);
  const t = C[locale];
  const a = t.applyPage;
  const r = ROUTE_MAP[locale];
  const u = EXTRA_UI[locale];
  const [homeHref, lang, dir, applyHref, ogLocale, llmsHref] = langs[locale];
  const canonicalUrl = `https://mythborn.co${applyHref}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://mythborn.co/#organization',
        name: 'MYTHBORN',
        url: 'https://mythborn.co/',
        logo: 'https://mythborn.co/images/gozde-tarot-hero.webp',
        sameAs: ['https://www.tiktok.com/@gozdeli_'],
        availableLanguage: ['tr', 'en', 'el', 'es', 'ar']
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        name: `MYTHBORN | ${a.title}`,
        description: a.sub,
        url: canonicalUrl,
        inLanguage: lang,
        isPartOf: { '@id': 'https://mythborn.co/#website' },
        about: { '@id': 'https://mythborn.co/#organization' }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'MYTHBORN', item: `https://mythborn.co${homeHref}` },
          { '@type': 'ListItem', position: 2, name: a.title, item: canonicalUrl }
        ]
      }
    ]
  };
  return `<!doctype html><html lang="${lang}" dir="${dir}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#08090e"><meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"><meta name="author" content="Gözde — MYTHBORN"><meta name="keywords" content="${safe(t.keywords)}"><meta name="description" content="${safe(a.sub)}"><title>MYTHBORN | ${safe(a.title)} — ${safe(t.lead)}</title><link rel="canonical" href="${canonicalUrl}">${Object.entries(langs).map(([, v]) => `<link rel="alternate" hreflang="${v[1]}" href="https://mythborn.co${v[3]}">`).join('')}<link rel="alternate" hreflang="x-default" href="https://mythborn.co/yorumcu-basvuru"><link rel="alternate" type="text/plain" href="https://mythborn.co${llmsHref}" title="LLM Context"><link rel="help" href="https://mythborn.co/ai-fact-sheet.txt"><meta property="og:type" content="website"><meta property="og:site_name" content="MYTHBORN"><meta property="og:locale" content="${ogLocale}"><meta property="og:url" content="${canonicalUrl}"><meta property="og:title" content="MYTHBORN · ${safe(a.title)}"><meta property="og:description" content="${safe(a.sub)}"><meta property="og:image" content="https://mythborn.co/images/gozde-tarot-hero.webp"><meta property="og:image:secure_url" content="https://mythborn.co/images/gozde-tarot-hero.webp"><meta property="og:image:type" content="image/webp"><meta property="og:image:width" content="1536"><meta property="og:image:height" content="1024"><meta property="og:image:alt" content="${safe(t.lead)}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="MYTHBORN · ${safe(a.title)}"><meta name="twitter:description" content="${safe(a.sub)}"><meta name="twitter:image" content="https://mythborn.co/images/gozde-tarot-hero.webp"><script type="application/ld+json">${JSON.stringify(schema)}</script><style>${sharedStyles}</style></head><body><div class="wrap">${renderHeaderAndDrawer({ locale, t, langs, activeType: 'apply', langHrefFn: (k) => langs[k][3] })}<main><section class="section-block" style="padding-top:28px"><div class="inquiry-shell"><div class="copy"><span class="live-pill"><span class="live-dot" aria-hidden="true"></span><span>${safe(t.lead)}</span></span><p class="eyebrow">${safe(a.eyebrow)}</p><h1 class="title" style="font-size:clamp(30px,3.4vw,46px)">${safe(a.title)}</h1><p class="sub">${safe(a.sub)}</p><figure style="margin:20px 0;border-radius:18px;overflow:hidden;border:1px solid var(--border);max-height:290px"><img src="/images/gozde-salon-portrait.jpg" width="1200" height="800" alt="${safe(t.lead)}" fetchpriority="high" style="width:100%;height:290px;object-fit:cover;object-position:center 28%;display:block"></figure><div style="display:flex;flex-direction:column;gap:12px">${a.criteria.map(([ct, cd]) => `<div class="pillar-card" style="padding:16px 18px"><h3>${safe(ct)}</h3><p>${safe(cd)}</p></div>`).join('')}</div></div><form id="gozde-apply-form" class="form-card" method="post" action="/api/gozde-apply" novalidate data-ok-msg="${safe(a.success)}" data-err-msg="${safe(a.error)}" data-sending-msg="${safe(t.submitting)}"><input type="hidden" name="locale" value="${locale}"><div><h2 style="font:400 26px/1.2 Georgia,serif;margin:0 0 6px;color:#f8efe2">${safe(a.formTitle)}</h2><p style="margin:0;color:var(--muted);font-size:13.5px">${safe(a.formSub)}</p></div><div class="field"><label for="apply-name">${safe(a.fullName)}</label><span id="apply-name-hint" class="hint">${safe(a.hintFullName)}</span><input id="apply-name" name="fullName" type="text" required minlength="2" maxlength="120" autocomplete="name" aria-describedby="apply-name-hint"></div><div class="field"><label for="apply-email">${safe(a.email)}</label><span id="apply-email-hint" class="hint">${safe(a.hintEmail)}</span><input id="apply-email" name="email" type="email" required autocomplete="email" aria-describedby="apply-email-hint" aria-errormessage="apply-email-err"><div id="apply-email-err" class="error-msg">${safe(a.errEmail)}</div></div><div class="field"><label for="apply-phone">${safe(a.phone)}</label><span id="apply-phone-hint" class="hint">${safe(a.hintPhone)}</span><input id="apply-phone" name="phone" type="tel" inputmode="tel" required minlength="7" maxlength="40" autocomplete="tel" aria-describedby="apply-phone-hint" aria-errormessage="apply-phone-err"><div id="apply-phone-err" class="error-msg">${safe(a.errPhone)}</div></div><fieldset class="field" style="border:0;padding:0;margin:0"><legend>${safe(a.specialties)}</legend><div class="specialty-grid">${t.cats.map((c) => `<label class="check-pill"><input type="checkbox" name="specialties" value="${safe(c)}"><span>${safe(c)}</span></label>`).join('')}</div></fieldset><div class="form-row-2"><div class="field"><label for="apply-exp">${safe(a.experience)}</label><select id="apply-exp" name="experience">${a.expOptions.map((o) => `<option value="${safe(o)}">${safe(o)}</option>`).join('')}</select></div><div class="field"><label for="apply-mod">${safe(a.modality)}</label><select id="apply-mod" name="modality">${a.modOptions.map((o) => `<option value="${safe(o)}">${safe(o)}</option>`).join('')}</select></div></div><div class="field"><label for="apply-langs">${safe(a.languages)}</label><span id="apply-langs-hint" class="hint">${safe(a.hintLanguages)}</span><input id="apply-langs" name="languages" type="text" required minlength="2" maxlength="120" aria-describedby="apply-langs-hint"></div><div class="field"><label for="apply-social">${safe(a.social)}</label><span id="apply-social-hint" class="hint">${safe(a.hintSocial)}</span><input id="apply-social" name="social" type="text" maxlength="180" aria-describedby="apply-social-hint"></div><div class="field"><label for="apply-bio">${safe(a.bio)}</label><span id="apply-bio-hint" class="hint">${safe(a.hintBio)}</span><textarea id="apply-bio" name="bio" required minlength="25" maxlength="1500" aria-describedby="apply-bio-hint" aria-errormessage="apply-bio-err"></textarea><div id="apply-bio-err" class="error-msg">${safe(a.errBio)}</div></div><label class="consent-row"><input type="checkbox" name="consent" value="yes" required><span>${safe(a.consent)} (<a href="${r.kvkk}" style="color:var(--gold)">${safe(u.kvkkNav)}</a>)</span></label><p class="form-status" data-form-status role="status" aria-live="polite"></p><button type="submit" class="cta">${safe(a.submit)}</button></form></div></section></main>${renderFooter({ locale, t })}</div><script>${clientInteractiveScript}</script></body></html>`;
};

export const gozdeLanding = (pathname = '/') => {
  if (isGozdeApplyPath(pathname)) return gozdeApplyPage(pathname);
  const locale = resolveGozdeLocale(pathname);
  const t = C[locale];
  const sub = detectGozdeSubpage(pathname);
  if (sub) {
    const ctx = { locale, t, langs, ICONS, sharedStyles, clientInteractiveScript };
    if (sub.type === 'admin') return renderAdminFormsSubpage({ ...ctx, t: C.tr });
    if (sub.type === 'areas') return renderAreasSubpage(ctx);
    if (sub.type === 'approach') return renderApproachSubpage(ctx);
    if (sub.type === 'blog-index') return renderBlogIndexSubpage(ctx);
    if (sub.type === 'blog-post') return renderBlogPostSubpage(ctx, sub.post);
    if (sub.type === 'contact') return renderContactSubpage(ctx, buildInquirySectionHtml(locale, t));
    if (sub.type === 'legal') return renderLegalSubpage(ctx, sub.legalKey);
  }

  const [homeHref, lang, dir, applyHref, ogLocale, llmsHref] = langs[locale];
  const canonicalUrl = `https://mythborn.co${homeHref}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://mythborn.co/#organization',
        name: 'MYTHBORN',
        url: 'https://mythborn.co/',
        logo: 'https://mythborn.co/images/gozde-tarot-hero.webp',
        sameAs: ['https://www.tiktok.com/@gozdeli_'],
        availableLanguage: ['tr', 'en', 'el', 'es', 'ar']
      },
      {
        '@type': 'Person',
        '@id': 'https://mythborn.co/#gozde',
        name: 'Gözde',
        alternateName: t.lead,
        url: canonicalUrl,
        image: 'https://mythborn.co/images/gozde-tarot-hero.webp',
        sameAs: ['https://www.tiktok.com/@gozdeli_'],
        knowsAbout: t.cats,
        worksFor: { '@id': 'https://mythborn.co/#organization' }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://mythborn.co/#website',
        name: `MYTHBORN · ${t.lead}`,
        url: 'https://mythborn.co/',
        inLanguage: lang,
        publisher: { '@id': 'https://mythborn.co/#organization' }
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `MYTHBORN | ${t.lead} — ${t.heading}`,
        description: t.sub,
        inLanguage: lang,
        isPartOf: { '@id': 'https://mythborn.co/#website' },
        about: { '@id': 'https://mythborn.co/#gozde' },
        mainEntity: { '@id': `${canonicalUrl}#essential-paths` },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.copy h1', '.copy .sub', '.aeo-dl', '.faq-item']
        }
      },
      {
        '@type': 'ItemList',
        '@id': `${canonicalUrl}#essential-paths`,
        name: t.areasEyebrow,
        numberOfItems: t.catDetails.length,
        itemListElement: t.catDetails.map(([, name, desc], idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name,
          description: desc,
          url: `${canonicalUrl}#alanlar`
        }))
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        inLanguage: lang,
        mainEntity: t.faqs.map(([q, ans]) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: ans }
        }))
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [{ '@type': 'ListItem', position: 1, name: 'MYTHBORN', item: canonicalUrl }]
      }
    ]
  };
  return `<!doctype html><html lang="${lang}" dir="${dir}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#08090e"><meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"><meta name="author" content="Gözde — MYTHBORN"><meta name="keywords" content="${safe(t.keywords)}"><meta name="description" content="${safe(t.sub)}"><title>MYTHBORN | ${safe(t.lead)} — ${safe(t.heading)}</title><link rel="canonical" href="${canonicalUrl}">${Object.entries(langs).map(([, v]) => `<link rel="alternate" hreflang="${v[1]}" href="https://mythborn.co${v[0]}">`).join('')}<link rel="alternate" hreflang="x-default" href="https://mythborn.co/"><link rel="alternate" type="text/plain" href="https://mythborn.co${llmsHref}" title="LLM Context"><link rel="help" href="https://mythborn.co/ai-fact-sheet.txt"><meta property="og:type" content="website"><meta property="og:site_name" content="MYTHBORN"><meta property="og:locale" content="${ogLocale}"><meta property="og:url" content="${canonicalUrl}"><meta property="og:title" content="MYTHBORN · ${safe(t.lead)}"><meta property="og:description" content="${safe(t.sub)}"><meta property="og:image" content="https://mythborn.co/images/gozde-tarot-hero.webp"><meta property="og:image:secure_url" content="https://mythborn.co/images/gozde-tarot-hero.webp"><meta property="og:image:type" content="image/webp"><meta property="og:image:width" content="1536"><meta property="og:image:height" content="1024"><meta property="og:image:alt" content="${safe(t.lead)}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="MYTHBORN · ${safe(t.lead)}"><meta name="twitter:description" content="${safe(t.sub)}"><meta name="twitter:image" content="https://mythborn.co/images/gozde-tarot-hero.webp"><script type="application/ld+json">${JSON.stringify(schema)}</script><style>${sharedStyles}</style></head><body><div class="wrap">${renderHeaderAndDrawer({ locale, t, langs, activeType: 'home', langHrefFn: (k) => langs[k][0] })}<div class="hero-stage"><main class="main"><figure class="photo"><img src="/images/gozde-tarot-hero.webp" width="1536" height="1024" alt="${safe(t.lead)}" fetchpriority="high"><figcaption>GÖZDE</figcaption></figure><section class="copy"><div class="live-pill"><span class="live-dot" aria-hidden="true"></span><span>${safe(t.badge)}</span></div><p class="eyebrow">${safe(t.lead)}</p><h1 class="title">${safe(t.heading)}</h1><span class="title-em">${safe(t.headingEm)}</span><p class="sub">${safe(t.sub)}</p><div class="hero-actions"><a class="cta" href="#alanlar">${safe(t.ctaPrimary)} <span aria-hidden="true">→</span></a><a class="cta-ghost" href="https://www.tiktok.com/@gozdeli_" target="_blank" rel="noopener noreferrer">${safe(t.social)} <span aria-hidden="true">↗</span></a></div></section><div class="trust-bar">${t.trustStrip.map(([title, desc]) => `<div class="trust-item"><strong>${safe(title)}</strong><span>${safe(desc)}</span></div>`).join('')}</div><div class="chips" aria-label="${safe(categoryLabels[locale])}">${t.cats.map((c) => `<a href="#alanlar">${safe(c)}</a>`).join('')}</div></main></div><section id="alanlar" class="section-block"><div class="section-head"><p class="eyebrow">${safe(t.areasEyebrow)}</p><h2>${safe(t.areasTitle)}</h2><p>${safe(t.areasSub)}</p></div><div class="areas-grid">${t.catDetails.map(([tag, name, desc], idx) => `<article class="area-card"><div><div class="area-top"><span class="area-icon" aria-hidden="true">${ICONS[idx] || '✧'}</span><span class="area-tag">${safe(tag)}</span></div><h3>${safe(name)}</h3><p>${safe(desc)}</p><div class="area-formats">${t.formats.map((f) => `<small>${safe(f)}</small>`).join('')}</div></div><button type="button" class="area-btn" data-select-topic="${safe(name)}">${safe(t.selectBtn)}</button></article>`).join('')}</div></section><section id="yaklasim" class="section-block"><div class="section-head"><p class="eyebrow">${safe(t.processEyebrow)}</p><h2>${safe(t.processTitle)}</h2><p>${safe(t.processSub)}</p></div><div class="process-grid">${t.steps.map(([title, desc]) => `<article class="step-card"><h3>${safe(title)}</h3><p>${safe(desc)}</p></article>`).join('')}</div><div class="process-grid">${t.pillars.map(([title, desc]) => `<article class="pillar-card"><h3>${safe(title)}</h3><p>${safe(desc)}</p></article>`).join('')}</div></section>${renderBlogPreviewSection({ locale })}${buildInquirySectionHtml(locale, t)}<section id="sss" class="section-block"><div class="section-head"><p class="eyebrow">${safe(t.faqEyebrow)}</p><h2>${safe(t.faqTitle)}</h2><p>${safe(t.faqSub)}</p></div><dl class="aeo-dl">${t.aeoFacts.map(([dt, dd]) => `<div class="aeo-fact"><dt>✦ ${safe(dt)}</dt><dd>${safe(dd)}</dd></div>`).join('')}</dl><div class="faq-list">${t.faqs.map(([q, ans], idx) => `<details class="faq-item" name="mythborn-faq"${idx === 0 ? ' open' : ''}><summary>${safe(q)}</summary><p>${safe(ans)}</p></details>`).join('')}</div><div class="recruit-banner"><div class="recruit-copy"><p class="eyebrow" style="margin-bottom:4px">${safe(t.recruitEyebrow)}</p><h3>${safe(t.recruitTitle)}</h3><p>${safe(t.recruitSub)}</p></div><a class="cta" href="${applyHref}">${safe(t.recruitCta)}</a></div></section>${renderFooter({ locale, t })}</div><script>${clientInteractiveScript}</script></body></html>`;
};

export const handleGozdeApi = async (request, env) => {
  const url = new URL(request.url);
  if (url.pathname === '/api/gozde-submissions' && request.method === 'GET') {
    const expectedPass = String(env?.GOZDE_ADMIN_PASSWORD || 'teyfikgokdemir');
    const providedPass = String(request.headers.get('x-admin-password') || url.searchParams.get('key') || '').trim();
    if (!providedPass || providedPass !== expectedPass) {
      return new Response(JSON.stringify({ ok: false, error: 'Hatalı şifre veya yetkisiz erişim.' }), {
        status: 401,
        headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
      });
    }
    let inquiries = [];
    let applications = [];
    if (env?.DB && typeof env.DB.prepare === 'function') {
      try {
        const inqRes = await env.DB.prepare('SELECT id, locale, name, contact, topic, format, message, created_at FROM gozde_inquiries ORDER BY created_at DESC LIMIT 50').all();
        inquiries = inqRes?.results || [];
      } catch {}
      try {
        const appRes = await env.DB.prepare('SELECT id, locale, full_name, email, phone, specialties_json, experience, modality, languages, social, bio, created_at FROM gozde_applications ORDER BY created_at DESC LIMIT 50').all();
        applications = appRes?.results || [];
      } catch {}
    }
    return new Response(JSON.stringify({ ok: true, inquiries, applications }), {
      status: 200,
      headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
    });
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ ok: false, error: 'Method not allowed' }), {
      status: 405,
      headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
    });
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'Invalid JSON payload' }), {
      status: 400,
      headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
    });
  }
  const locale = ['tr', 'en', 'el', 'es', 'ar'].includes(body?.locale) ? body.locale : 'tr';
  const t = C[locale];

  if (url.pathname === '/api/gozde-inquiry') {
    const name = String(body?.name || '').trim();
    const contact = String(body?.contact || '').trim();
    const topic = String(body?.topic || '').trim();
    const format = String(body?.format || '').trim();
    const message = String(body?.message || '').trim();
    const consent = body?.consent === 'yes' || body?.consent === true;
    if (name.length < 2 || contact.length < 3 || message.length < 10 || !consent) {
      return new Response(JSON.stringify({ ok: false, error: t.inquiryError }), {
        status: 400,
        headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
      });
    }
    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();
    if (env?.DB && typeof env.DB.prepare === 'function') {
      try {
        await env.DB.prepare(
          'CREATE TABLE IF NOT EXISTS gozde_inquiries (id TEXT PRIMARY KEY, locale TEXT NOT NULL, name TEXT NOT NULL, contact TEXT NOT NULL, topic TEXT NOT NULL, format TEXT NOT NULL, message TEXT NOT NULL, created_at TEXT NOT NULL)'
        ).run();
        await env.DB.prepare(
          'INSERT INTO gozde_inquiries (id, locale, name, contact, topic, format, message, created_at) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)'
        )
          .bind(id, locale, name.slice(0, 120), contact.slice(0, 160), topic.slice(0, 80), format.slice(0, 80), message.slice(0, 1500), createdAt)
          .run();
      } catch {}
    }
    if (env?.GOZDE_WEBHOOK_URL) {
      try {
        await fetch(env.GOZDE_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ type: 'inquiry', id, locale, name, contact, topic, format, message, createdAt })
        });
      } catch {}
    }
    return new Response(JSON.stringify({ ok: true, id, message: t.inquirySuccess }), {
      status: 200,
      headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
    });
  }

  if (url.pathname === '/api/gozde-apply') {
    const fullName = String(body?.fullName || '').trim();
    const email = String(body?.email || '').trim();
    const phone = String(body?.phone || '').trim();
    const specialties = Array.isArray(body?.specialties)
      ? body.specialties.map((s) => String(s).trim()).filter(Boolean)
      : typeof body?.specialties === 'string' && body.specialties.trim()
      ? [body.specialties.trim()]
      : [];
    const experience = String(body?.experience || '').trim();
    const modality = String(body?.modality || '').trim();
    const languages = String(body?.languages || '').trim();
    const social = String(body?.social || '').trim();
    const bio = String(body?.bio || '').trim();
    const consent = body?.consent === 'yes' || body?.consent === true;

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (fullName.length < 2 || !emailValid || phone.length < 7 || specialties.length < 1 || bio.length < 25 || !consent) {
      return new Response(JSON.stringify({ ok: false, error: t.applyPage.error }), {
        status: 400,
        headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
      });
    }
    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();
    if (env?.DB && typeof env.DB.prepare === 'function') {
      try {
        await env.DB.prepare(
          'CREATE TABLE IF NOT EXISTS gozde_applications (id TEXT PRIMARY KEY, locale TEXT NOT NULL, full_name TEXT NOT NULL, email TEXT NOT NULL, phone TEXT NOT NULL, specialties_json TEXT NOT NULL, experience TEXT NOT NULL, modality TEXT NOT NULL, languages TEXT NOT NULL, social TEXT, bio TEXT NOT NULL, created_at TEXT NOT NULL)'
        ).run();
        await env.DB.prepare(
          'INSERT INTO gozde_applications (id, locale, full_name, email, phone, specialties_json, experience, modality, languages, social, bio, created_at) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12)'
        )
          .bind(
            id,
            locale,
            fullName.slice(0, 120),
            email.slice(0, 160),
            phone.slice(0, 60),
            JSON.stringify(specialties.slice(0, 12)),
            experience.slice(0, 60),
            modality.slice(0, 80),
            languages.slice(0, 140),
            social.slice(0, 200),
            bio.slice(0, 2000),
            createdAt
          )
          .run();
      } catch {}
    }
    if (env?.GOZDE_WEBHOOK_URL) {
      try {
        await fetch(env.GOZDE_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ type: 'application', id, locale, fullName, email, phone, specialties, experience, modality, languages, social, bio, createdAt })
        });
      } catch {}
    }
    return new Response(JSON.stringify({ ok: true, id, message: t.applyPage.success }), {
      status: 200,
      headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
    });
  }

  return new Response(JSON.stringify({ ok: false, error: 'Not found' }), {
    status: 404,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
  });
};
