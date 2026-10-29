const langs = {
  tr: ['/', 'tr', 'ltr', '/yorumcu-basvuru'],
  en: ['/en', 'en', 'ltr', '/en/apply'],
  el: ['/gr', 'el', 'ltr', '/gr/apply'],
  es: ['/es', 'es', 'ltr', '/es/apply'],
  ar: ['/ar', 'ar', 'rtl', '/ar/apply']
};

const ICONS = ['☼', '☕', '♠', '☾', '♡', '✶', '☸', '✧'];

const C = {
  tr: {
    lead: 'Kartların Gözde’si',
    badge: 'GÖZDE AKTİF · BİREBİR & KİŞİYE ÖZEL SEMBOL OKUMASI',
    heading: 'Semboller her zaman konuşur.',
    headingEm: 'Klişe cümleler değil; sana özel, net bir yol haritası.',
    sub: 'Gözde ile kartların, kahve sembollerinin ve gökyüzü anlatılarının izinde yeni bir keşif alanı. Yüzlerce rastgele profil arasında kaybolmadan; bizzat Gözde’nin derinlikli, gizlilik esaslı ve güçlendirici yorumlarıyla tanışın.',
    ctaPrimary: 'Alanını Seç & Gözde’ye İlet',
    social: 'TikTok’ta Gözde’yi keşfet',
    applyNav: 'Yorumcu Başvurusu',
    navAreas: 'Keşif Alanları',
    navProcess: 'Yaklaşım & Süreç',
    navInquiry: 'Ön İletişim',
    navFaq: 'S.S.S.',
    trustStrip: [
      ['%100 Birebir & Özgün', 'Hazır kalıp metinler veya rastgele nöbetçi yorumcular yok; her okuma bizzat Gözde tarafından senin soruna özel hazırlanır.'],
      ['Tam Gizlilik & Güven', 'Yargılamayan, etik sınırları koruyan ve paylaştığın tüm detayları yalnızca seninle tutan özenli iletişim.'],
      ['Sesli, Yazılı veya Canlı', 'İhtiyacına göre detaylı ses kaydı, yazılı analiz metni veya birebir canlı iletişim tercihi.']
    ],
    areasEyebrow: '8 SEMBOLİK KEŞİF ALANI',
    areasTitle: 'Bugün hangi düğümü çözmek istiyorsun?',
    areasSub: 'İhtiyacına en uygun alanı seç; Gözde sembolleri, arketipleri ve gökyüzü döngülerini senin odak sorun etrafında ayrıştırsın.',
    selectBtn: 'Bu Alanı Seç →',
    formats: ['Sesli Yorum', 'Detaylı Yazılı', 'Birebir Odak'],
    cats: ['Tarot', 'Kahve Falı', 'Katina', 'Duru Görü', 'Aşk ve İlişki', 'Yıldızname', 'Doğum Haritası', 'Numeroloji'],
    catDetails: [
      ['ARKETİP & KARAR', 'Tarot', 'Geçmişin izleri, şimdinin enerjisi ve önündeki karar yollarını arketipsel kart sembolleriyle berraklaştır.'],
      ['GELENEKSEL SEMBOLİZM', 'Kahve Falı', 'Fincandaki şekillerin, yolların ve sembollerin sezgisel bütünlük içinde senin gündemine tuttuğu ayna.'],
      ['MİTOLOJİK AÇILIM', 'Katina', 'Duygusal bağların derinliğini, karşı tarafın niyetini ve ilişki dinamiklerini geleneksel Katina sembolleriyle oku.'],
      ['SEZGİSEL BAKIŞ', 'Duru Görü', 'Yüzeyde görünmeyen enerji düğümlerini, sezgisel izlenimlerle ve bütünsel farkındalıkla ele al.'],
      ['DUYGUSAL DENGE', 'Aşk ve İlişki', 'İletişim ihtimallerini, kırılma noktalarını ve bağın ortak ritmini yargılamayan bir netlikle incele.'],
      ['KADİM GÖKYÜZÜ', 'Yıldızname', 'Klasik gökyüzü geleneğiyle mizaç özelliklerini, yaşam döngülerini ve koruyucu temaları keşfet.'],
      ['ASTRONOMİK VERİ', 'Doğum Haritası', 'Güneş, Ay, Yükselen, evler ve güncel gezegen geçişlerinin yaşamındaki somut yansımalarını öğren.'],
      ['SAYI & HARF RİTMİ', 'Numeroloji', 'Doğum tarihin ve ismindeki sayısal arketiplerin kişisel yıl döngüne verdiği mesajları çözümle.']
    ],
    processEyebrow: 'İLK MESAJDA FARK EDİLEN KALİTE',
    processTitle: 'Burada süreç rastgele akmaz; netlik ve güven üzerine kurulur.',
    processSub: 'Genel geçer cümlelerle vakit kaybetmek yerine, sorunun altındaki asıl ihtiyacı yakalayan 3 adımlı yapılandırılmış yaklaşım.',
    steps: [
      ['01', 'Alanını ve Odak Sorunu Seç', '8 sembolik disiplinden şu anki gündemine en çok temas eden başlığı belirle ve form üzerinden seç.'],
      ['02', 'Bağlamını Güvenle Paylaş', 'Odaklandığın soruyu, doğum verini veya sembol detaylarını tercih ettiğin iletişim biçimiyle Gözde’ye ilet.'],
      ['03', 'Sana Özel Yol Haritanı Al', 'Bağımlılık yaratmayan, kendi kararını en güçlü ve sakin zihinle vermeni sağlayan derinlikli yorumuna ulaş.']
    ],
    pillars: [
      ['Az Konu, Yüksek Netlik', 'Her şeyi yüzeysel konuşmak yerine asıl düğüm noktasına odaklanır, zihnindeki sis perdesini dağıtırız.'],
      ['Güç Veren Farkındalık', 'İyi bir danışmanlık korkutmaz veya bağımlı kılmaz; kendi yolunu yönetebilmen için içgörünü güçlendirir.'],
      ['Seçkin ve Butik Deneyim', 'Fabrikasyon sistemlerin aksine, doğrudan Gözde’nin kürasyonu ve birebir ilgisiyle karşılaşırsın.']
    ],
    formEyebrow: 'GÖZDE İLE ÖN İLETİŞİM',
    formTitle: 'Odaklandığın konuyu paylaş, süreci birlikte başlatalım.',
    formSub: 'Aşağıdaki formu doldurarak ilgilendiğin alanı ve sorunun çerçevesini doğrudan iletebilirsin.',
    labelTopic: 'İlgilendiğiniz Keşif Alanı',
    labelFormat: 'Tercih Ettiğiniz Yorumlama Biçimi',
    formatOptions: ['Sesli Kayıt & Analiz', 'Detaylı Yazılı Metin', 'Canlı Birebir İletişim'],
    labelName: 'Adınız veya Rumuzunuz',
    hintName: 'Örn. Ayşe K. veya yalnızca rumuzunuz',
    labelContact: 'İletişim Kanalınız (E-posta, Telefon veya Sosyal Medya)',
    hintContact: 'Size geri dönüş yapabilmemiz için aktif bir e-posta, telefon veya kullanıcı adı yazın',
    labelMessage: 'Odaklandığınız Soru ve Kısa Notunuz',
    hintMessage: 'Netleştirmek istediğiniz konuyu 1-2 cümleyle özetleyin (en az 10 karakter)',
    labelConsent: 'Paylaştığım bilgilerin kişisel farkındalık ve iletişim amacıyla gizlilik ilkeleri çerçevesinde incelenmesini kabul ediyorum.',
    submitInquiry: 'Gözde’ye Gönder →',
    submitting: 'İletiliyor…',
    inquirySuccess: 'Mesajınız Gözde’ye başarıyla iletildi. En kısa sürede belirttiğiniz iletişim kanalından size dönüş yapılacaktır.',
    inquiryError: 'Lütfen tüm zorunlu alanları eksiksiz doldurun ve onay kutusunu işaretleyin.',
    faqEyebrow: 'SIKÇA SORULAN SORULAR',
    faqTitle: 'Merak edilen tüm detaylar.',
    faqs: [
      ['Süreç nasıl ilerler ve ne kadar sürede dönüş yapılır?', 'Ön iletişim formunu doldurduğunuzda talebiniz doğrudan Gözde’nin ekranına düşer. Seçtiğiniz alana (Tarot, Kahve Sembolleri, Katina, Doğum Haritası vb.) göre gerekli detaylar teyit edilir ve en kısa sürede kişiye özel çalışmanız hazırlanır.'],
      ['Paylaştığım özel bilgiler ve sorular gizli tutuluyor mu?', 'Kesinlikle. Mythborn’da gizlilik en temel ilkedir. Paylaştığınız hiçbir isim, soru, doğum bilgisi veya görsel üçüncü kişilerle paylaşılmaz; yalnızca sizinle yürütülen okuma sürecinde kullanılır.'],
      ['Neden yüzlerce yorumcu yerine tek merkezde Gözde var?', 'Amacımız fabrikasyon ve kopyala-yapıştır yanıtlar üretmek değil; her danışana bizzat Gözde’nin derinlikli, tutarlı ve özenli sembol okuma standardını sunmaktır. Bununla birlikte etik ve uzmanlık kriterlerimizi karşılayan yeni yorumcu başvurularını da titizlikle değerlendiriyoruz.'],
      ['Sunulan yorumlar kesin gelecek tahmini midir?', 'Hayır. Mythborn üzerindeki tüm içerikler ve sembolik okumalar; kişisel farkındalık, kültürel sembolizm, öz-değerlendirme ve eğlence amaçlıdır. Tıbbi, hukuki, finansal tavsiye veya kesin gelecek vaadi içermez.']
    ],
    recruitEyebrow: 'MYTHBORN SEÇKİN YORUMCU AĞI',
    recruitTitle: 'Sembollerin dilini derinlik ve etikle okuyan bir uzman mısınız?',
    recruitSub: 'Mythborn, kalıp cümlelerden uzak, sezgisi ve bilgisi güçlü yeni yorumcu adaylarının başvurularını ayrı bir değerlendirme süreciyle kabul etmektedir.',
    recruitCta: 'Yorumcu Başvuru Sayfasına Git →',
    note: 'Kişisel farkındalık, kültürel sembolizm ve eğlence amaçlıdır.',
    applyPage: {
      back: '← Ana Sayfaya Dön',
      eyebrow: 'MYTHBORN SEÇKİN YORUMCU AĞI · Kartların Gözde’si',
      title: 'Uzman Yorumcu & Sembol Okuyucusu Başvurusu',
      sub: 'Mythborn ailesini büyütürken niceliğe değil, niteliğe odaklanıyoruz. Danışanlara kopyala-yapıştır cümleler yerine gerçek içgörü, gizlilik ve yüksek iletişim kalitesi sunabilen uzmanların başvurularını bekliyoruz.',
      criteria: [
        ['Özgün Yorum Yetkinliği', 'Tarot, Kahve Sembolizmi, Katina, Astroloji veya Numeroloji alanlarından en az birinde derinlikli ve özgün okuma disiplini.'],
        ['Etik Sınırlar & Saygı', 'Yargılamayan, korku veya bağımlılık yaratmayan, danışanın öz-farkındalığını güçlendiren özenli üslup.'],
        ['Zamanlama & İletişim Özeni', 'Sesli veya yazılı anlatımda akıcı ifade gücü ve süreç disiplinine bağlılık.']
      ],
      formTitle: 'Yorumcu Başvuru Formu',
      formSub: 'Başvurular bizzat Gözde ve Mythborn kürasyon ekibi tarafından gizlilikle incelenir.',
      fullName: 'Adınız Soyadınız (veya Yorumcu Mahlasınız)',
      hintFullName: 'Tam adınız ve kullanmak istediğiniz mahlas',
      email: 'E-posta Adresiniz',
      hintEmail: 'Örn. adiniz@ornek.com',
      errEmail: 'Lütfen geçerli bir e-posta adresi girin.',
      phone: 'Telefon Numaranız (WhatsApp / Aktif Hat)',
      hintPhone: 'Ülke koduyla birlikte aktif numaranız (örn. +90 5XX XXX XX XX)',
      errPhone: 'Lütfen geçerli bir telefon numarası girin.',
      specialties: 'Uzmanlık Alanlarınız (En az 1 alan seçin)',
      experience: 'Deneyim Süreniz',
      expOptions: ['1–3 Yıl', '3–5 Yıl', '5–10 Yıl', '10+ Yıl'],
      modality: 'Tercih Ettiğiniz Yorumlama Biçimi',
      modOptions: ['Sesli Kayıt & Yorum', 'Detaylı Yazılı Analiz', 'Canlı Görüşme', 'Tüm Formatlar'],
      languages: 'Yorum Yapabildiğiniz Diller',
      hintLanguages: 'Örn. Türkçe, İngilizce, Yunanca…',
      social: 'Sosyal Medya veya Portfolyo Bağlantınız (Opsiyonel)',
      hintSocial: 'TikTok, Instagram veya kişisel sayfa bağlantınız',
      bio: 'Yaklaşımınız & Örnek Yorum Üslubunuz',
      hintBio: 'Danışanlarınıza nasıl bir deneyim sunduğunuzu, hangi ekolleri kullandığınızı kısaca anlatın (en az 25 karakter).',
      errBio: 'Lütfen yaklaşımınızı en az 25 karakterle açıklayın.',
      consent: 'Başvuru bilgilerimin Mythborn yorumcu değerlendirme süreci kapsamında incelenmesini ve gizlilik ilkelerini kabul ediyorum.',
      submit: 'Başvurumu İlet →',
      success: 'Başvurunuz başarıyla kaydedildi! Kürasyon ekibimiz inceleme sonrası sizinle iletişime geçecektir.',
      error: 'Lütfen zorunlu alanları, en az bir uzmanlık alanını ve onay kutusunu eksiksiz doldurun.'
    }
  },
  en: {
    lead: 'Gözde of the Cards',
    badge: 'GÖZDE IS ACTIVE · ONE-ON-ONE PERSONAL SYMBOLIC READING',
    heading: 'Symbols always have a story to tell.',
    headingEm: 'Not generic clichés—a clear, personal roadmap crafted for you.',
    sub: 'A considered world of cards, symbolic traditions and the language of the stars, guided by Gözde. Step away from crowded, impersonal directories and experience confidential, empowering insight tailored to your question.',
    ctaPrimary: 'Choose Your Area & Connect',
    social: 'Discover Gözde on TikTok',
    applyNav: 'Reader Application',
    navAreas: 'Reading Areas',
    navProcess: 'Approach & Process',
    navInquiry: 'Connect',
    navFaq: 'FAQ',
    trustStrip: [
      ['100% Personal & Bespoke', 'No copy-paste templates or random rotating operators; every reading is personally interpreted by Gözde for your specific question.'],
      ['Complete Confidentiality', 'A safe, non-judgmental space with strict ethical boundaries where every detail you share stays strictly private.'],
      ['Voice, Written or Live', 'Choose the format that fits your pace: detailed voice notes, structured written analysis, or direct live dialogue.']
    ],
    areasEyebrow: '8 SYMBOLIC READING DISCIPLINES',
    areasTitle: 'Which question are you ready to untangle today?',
    areasSub: 'Select the lens that best matches your current crossroads; Gözde synthesizes symbols, archetypes, and sky cycles around your core focus.',
    selectBtn: 'Select This Area →',
    formats: ['Voice Insight', 'Detailed Written', '1-on-1 Focus'],
    cats: ['Coffee Reading', 'Tarot', 'Katina', 'Intuitive Insight', 'Love & Relationships', 'Traditional Astrology', 'Birth Chart', 'Numerology'],
    catDetails: [
      ['TRADITIONAL SYMBOLISM', 'Coffee Reading', 'An intuitive mirror of the patterns, paths, and symbols formed in your cup, interpreted around your current life themes.'],
      ['ARCHETYPES & CHOICES', 'Tarot', 'Illuminate past influences, present momentum, and upcoming crossroads through structured archetypal card spreads.'],
      ['MYTHIC DYNAMICS', 'Katina', 'Explore emotional bonds, unspoken intentions, and relationship dynamics through the traditional symbols of Katina.'],
      ['DEEP PERCEPTION', 'Intuitive Insight', 'Address subtle energetic knots and underlying patterns through focused intuitive reflection and clarity.'],
      ['EMOTIONAL BALANCE', 'Love & Relationships', 'Examine communication potential, turning points, and shared relationship rhythms with calm, non-judgmental clarity.'],
      ['CLASSICAL SKY LORE', 'Traditional Astrology', 'Discover temperament, life cycles, and protective themes rooted in classical celestial traditions.'],
      ['ASTRONOMICAL DATA', 'Birth Chart', 'Understand the concrete reflections of your Sun, Moon, Rising, houses, and current planetary transits.'],
      ['NUMBER & NAME RHYTHM', 'Numerology', 'Decode the numerical archetypes in your birth date and name to navigate your personal year cycles.']
    ],
    processEyebrow: 'QUALITY FELT FROM THE FIRST MESSAGE',
    processTitle: 'Nothing here is random; every step is built on clarity and trust.',
    processSub: 'Instead of vague generalizations, experience a structured 3-step method that identifies the real need beneath your question.',
    steps: [
      ['01', 'Choose Your Area & Focus', 'Select the discipline from our 8 symbolic areas that resonates most with your current situation.'],
      ['02', 'Share Your Context Privately', 'Send your core question, birth details, or symbol notes to Gözde with your preferred communication format.'],
      ['03', 'Receive Your Personal Roadmap', 'Gain structured, empowering perspective designed to help you make your own decisions with calm confidence.']
    ],
    pillars: [
      ['Focused Depth, Zero Clichés', 'Rather than speaking vaguely about everything, we narrow in on the core knot to clear the mental fog.'],
      ['Empowering Reflection', 'True guidance never creates fear or dependency—it strengthens your own intuition and agency.'],
      ['Boutique & Curated', 'Instead of getting lost among hundreds of anonymous profiles, you connect directly with Gözde’s personal curation.']
    ],
    formEyebrow: 'INITIAL CONNECTION WITH GÖZDE',
    formTitle: 'Share your focus and start the conversation.',
    formSub: 'Complete the form below to let Gözde know which area and question you would like to explore.',
    labelTopic: 'Selected Reading Area',
    labelFormat: 'Preferred Reading Format',
    formatOptions: ['Voice Recording & Analysis', 'Detailed Written Text', 'Live Direct Connection'],
    labelName: 'Your Name or Alias',
    hintName: 'E.g. Sarah M. or your preferred nickname',
    labelContact: 'Your Contact Channel (Email, Phone or Social Handle)',
    hintContact: 'Provide an active email, phone number, or handle so we can reach back to you',
    labelMessage: 'Your Core Question & Context',
    hintMessage: 'Briefly summarize what you want to clarify in 1–2 sentences (min. 10 characters)',
    labelConsent: 'I agree that the information shared may be reviewed confidentially for personal reflection and communication.',
    submitInquiry: 'Send to Gözde →',
    submitting: 'Sending…',
    inquirySuccess: 'Your message has been sent to Gözde. We will reach out to you shortly via your preferred contact channel.',
    inquiryError: 'Please complete all required fields and check the consent box.',
    faqEyebrow: 'FREQUENTLY ASKED QUESTIONS',
    faqTitle: 'Everything you need to know.',
    faqs: [
      ['How does the process work and how quickly will I hear back?', 'Once you submit the connection form, your request goes directly to Gözde. Depending on your chosen discipline (Tarot, Coffee Reading, Katina, Birth Chart, etc.), we confirm the details and prepare your personalized reading promptly.'],
      ['Is everything I share kept completely confidential?', 'Absolutely. Confidentiality is our foundation. Your name, questions, birth data, and symbols are never shared with third parties and are used solely for your personal reading.'],
      ['Why is Gözde the central reader instead of hundreds of random profiles?', 'Our goal is boutique depth rather than mass-produced, copy-paste responses. Every client experiences Gözde’s personal standard of symbolic reading—while we selectively review applications from exceptional readers who share our ethics.'],
      ['Do symbolic readings claim to predict a fixed future?', 'No. All content and readings on Mythborn are designed for personal reflection, cultural symbolism, self-discovery, and entertainment. They do not constitute medical, legal, or financial advice, nor do they claim absolute certainty about the future.']
    ],
    recruitEyebrow: 'MYTHBORN CURATED READER NETWORK',
    recruitTitle: 'Are you an experienced reader who interprets symbols with depth and ethics?',
    recruitSub: 'Mythborn selectively welcomes applications from gifted Tarot, coffee symbolism, and astrology specialists who value authenticity over clichés.',
    recruitCta: 'Go to Reader Application Page →',
    note: 'For personal reflection, cultural symbolism and entertainment purposes.',
    applyPage: {
      back: '← Back to Home',
      eyebrow: 'MYTHBORN CURATED READER NETWORK · Gözde of the Cards',
      title: 'Specialist Reader & Symbolic Interpreter Application',
      sub: 'As we expand the Mythborn circle, we prioritize depth over volume. We welcome applications from practitioners who offer genuine insight, strict confidentiality, and refined communication without copy-paste clichés.',
      criteria: [
        ['Authentic Interpretive Mastery', 'Deep, original practice in at least one core discipline: Tarot, Coffee Symbolism, Katina, Astrology, or Numerology.'],
        ['Ethical Boundaries & Respect', 'A non-judgmental, empowering voice that never uses fear-mongering or creates emotional dependency.'],
        ['Communication & Reliability', 'Articulate expression in voice or written readings, with strong respect for privacy and timeliness.']
      ],
      formTitle: 'Reader Application Form',
      formSub: 'Applications are reviewed confidentially by Gözde and the Mythborn curation team.',
      fullName: 'Full Name (and Reader Alias, if any)',
      hintFullName: 'Your full name and preferred professional alias',
      email: 'Email Address',
      hintEmail: 'Format: name@example.com',
      errEmail: 'Please enter a valid email address.',
      phone: 'Phone Number (WhatsApp / Active Line)',
      hintPhone: 'Include country code (e.g. +44 7XXX XXXXXX)',
      errPhone: 'Please enter a valid phone number.',
      specialties: 'Areas of Expertise (Select at least 1)',
      experience: 'Years of Experience',
      expOptions: ['1–3 Years', '3–5 Years', '5–10 Years', '10+ Years'],
      modality: 'Preferred Reading Format',
      modOptions: ['Voice Recording', 'Detailed Written Analysis', 'Live Session', 'All Formats'],
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
    badge: 'Η GÖZDE ΕΙΝΑΙ ΕΝΕΡΓΗ · ΠΡΟΣΩΠΙΚΗ ΑΝΑΓΝΩΣΗ ΣΥΜΒΟΛΩΝ',
    heading: 'Τα σύμβολα έχουν πάντα κάτι να πουν.',
    headingEm: 'Όχι έτοιμα κλισέ· ένας καθαρός, προσωπικός χάρτης προσανατολισμού.',
    sub: 'Ένας ξεχωριστός κόσμος συμβόλων, καρτών και ουράνιων αφηγήσεων με την Gözde. Μακριά από απρόσωπες πλατφόρμες, γνωρίστε μια εχέμυθη, βαθιά και ενδυναμωτική προσέγγιση προσαρμοσμένη στο δικό σας ερώτημα.',
    ctaPrimary: 'Επιλέξτε Θεματική & Επικοινωνήστε',
    social: 'Ανακαλύψτε την Gözde στο TikTok',
    applyNav: 'Αίτηση Ερμηνευτή',
    navAreas: 'Θεματικές',
    navProcess: 'Προσέγγιση',
    navInquiry: 'Επικοινωνία',
    navFaq: 'Συχνές Ερωτήσεις',
    trustStrip: [
      ['100% Προσωπική Ερμηνεία', 'Χωρίς τυποποιημένα κείμενα· κάθε ανάγνωση ετοιμάζεται προσωπικά από την Gözde αποκλειστικά για το δικό σας θέμα.'],
      ['Απόλυτη Εχεμύθεια', 'Ένας ασφαλής χώρος χωρίς κριτική, με σεβασμό στα ηθικά όρια και πλήρη εμπιστευτικότητα.'],
      ['Ηχητική, Γραπτή ή Ζωντανή', 'Επιλέξτε τη μορφή που σας ταιριάζει: αναλυτικό ηχητικό μήνυμα, γραπτή ανάλυση ή άμεση επικοινωνία.']
    ],
    areasEyebrow: '8 ΠΕΔΙΑ ΣΥΜΒΟΛΙΚΗΣ ΑΝΑΓΝΩΣΗΣ',
    areasTitle: 'Ποιο ερώτημα θέλετε να ξεκαθαρίσετε σήμερα;',
    areasSub: 'Επιλέξτε το πεδίο που ταιριάζει στην ανάγκη σας· η Gözde συνθέτει σύμβολα, αρχέτυπα και ουράνιους κύκλους γύρω από το ερώτημά σας.',
    selectBtn: 'Επιλογή Θεματικής →',
    formats: ['Ηχητική Ανάλυση', 'Γραπτό Κείμενο', 'Προσωπική Εστίαση'],
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
    processSub: 'Αντί για γενικόλογες φράσεις, μια δομημένη προσέγγιση 3 βημάτων που εστιάζει στην ουσία του ερωτήματός σας.',
    steps: [
      ['01', 'Επιλέξτε Θεματική & Ερώτημα', 'Διαλέξτε από τις 8 θεματικές εκείνη που ανταποκρίνεται περισσότερο σε αυτό που σας απασχολεί.'],
      ['02', 'Μοιραστείτε το Πλαίσιο με Ασφάλεια', 'Στείλτε το ερώτημά σας ή τα στοιχεία σας στην Gözde με την προτιμώμενη μορφή επικοινωνίας.'],
      ['03', 'Λάβετε την Προσωπική σας Ανάλυση', 'Αποκτήστε μια καθαρή, ενδυναμωτική οπτική που σας βοηθά να πάρετε τις δικές σας αποφάσεις με σιγουριά.']
    ],
    pillars: [
      ['Εστιασμένη Καθαρότητα', 'Δεν αναλωνόμαστε σε γενικότητες· εστιάζουμε στον πυρήνα του θέματος για ουσιαστική διαύγεια.'],
      ['Ενδυνάμωση, Όχι Εξάρτηση', 'Η σωστή καθοδήγηση δεν δημιουργεί φόβο· ενισχύει τη δική σας κρίση και εσωτερική δύναμη.'],
      ['Επιλεγμένη Boutique Εμπειρία', 'Άμεση επαφή με την προσωπική επιμέλεια της Gözde, μακριά από απρόσωπα κέντρα.']
    ],
    formEyebrow: 'ΠΡΩΤΗ ΕΠΙΚΟΙΝΩΝΙΑ ΜΕ ΤΗΝ GÖZDE',
    formTitle: 'Μοιραστείτε το θέμα σας και ξεκινήστε.',
    formSub: 'Συμπληρώστε τη φόρμα για να επιλέξετε θεματική και να στείλετε το ερώτημά σας.',
    labelTopic: 'Επιλεγμένη Θεματική',
    labelFormat: 'Προτιμώμενη Μορφή Ανάλυσης',
    formatOptions: ['Ηχητική Ηχογράφηση & Ανάλυση', 'Αναλυτικό Γραπτό Κείμενο', 'Ζωντανή Επικοινωνία'],
    labelName: 'Το Όνομα ή το Ψευδώνυμό σας',
    hintName: 'Π.χ. Μαρία Κ. ή το ψευδώνυμό σας',
    labelContact: 'Κανάλι Επικοινωνίας (Email, Τηλέφωνο ή Κοινωνικό Δίκτυο)',
    hintContact: 'Σημειώστε ενεργό email, τηλέφωνο ή προφίλ για να επικοινωνήσουμε μαζί σας',
    labelMessage: 'Το Ερώτημά σας & Σύντομο Σημείωμα',
    hintMessage: 'Περιγράψτε συνοπτικά το θέμα που θέλετε να φωτίσετε (τουλάχιστον 10 χαρακτήρες)',
    labelConsent: 'Συμφωνώ η επικοινωνία μου να εξεταστεί εμπιστευτικά για σκοπούς προσωπικού στοχασμού.',
    submitInquiry: 'Αποστολή στην Gözde →',
    submitting: 'Αποστολή…',
    inquirySuccess: 'Το μήνυμά σας στάλθηκε επιτυχώς στην Gözde. Θα επικοινωνήσουμε σύντομα μαζί σας.',
    inquiryError: 'Παρακαλούμε συμπληρώστε όλα τα υποχρεωτικά πεδία και αποδεχθείτε τους όρους.',
    faqEyebrow: 'ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ',
    faqTitle: 'Όλα όσα θέλετε να γνωρίζετε.',
    faqs: [
      ['Πώς εξελίσσεται η διαδικασία;', 'Μόλις συμπληρώσετε τη φόρμα επικοινωνίας, το αίτημά σας φτάνει απευθείας στην Gözde. Ανάλογα με τη θεματική που επιλέξατε, επιβεβαιώνονται οι λεπτομέρειες και ετοιμάζεται η προσωπική σας ανάλυση.'],
      ['Τα στοιχεία και τα ερωτήματά μου παραμένουν απόλυτα εμπιστευτικά;', 'Απολύτως. Η εμπιστευτικότητα είναι θεμελιώδης αρχή στο Mythborn. Κανένα στοιχείο δεν κοινοποιείται σε τρίτους.'],
      ['Γιατί υπάρχει η Gözde ως κεντρικό πρόσωπο;', 'Στόχος μας είναι η ποιότητα και η αυθεντικότητα, όχι οι τυποποιημένες απαντήσεις. Παράλληλα, δεχόμαστε αιτήσεις από επιλεγμένους ερμηνευτές που συμμερίζονται τις αξίες μας.'],
      ['Οι αναγνώσεις αποτελούν βέβαιη πρόβλεψη μέλλοντος;', 'Όχι. Όλο το περιεχόμενο του Mythborn προσφέρεται για προσωπικό στοχασμό, πολιτισμικό συμβολισμό και ψυχαγωγία. Δεν υποκαθιστά ιατρικές, νομικές ή οικονομικές συμβουλές.']
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
      sub: 'Στο Mythborn δίνουμε προτεραιότητα στην ποιότητα και την αυθεντικότητα. Αναζητούμε συνεργάτες που προσφέρουν ουσιαστική ανάλυση, εχεμύθεια και σεβασμό χωρίς έτοιμα κλισέ.',
      criteria: [
        ['Αυθεντική Ερμηνευτική Ικανότητα', 'Βαθιά γνώση σε τουλάχιστον ένα πεδίο: Ταρώ, Καφές, Κατίνα, Αστρολογία ή Αριθμολογία.'],
        ['Ηθικά Όρια & Εχεμύθεια', 'Ενδυναμωτικός λόγος χωρίς κριτική, φόβο ή καλλιέργεια εξάρτησης.'],
        ['Ποιότητα Επικοινωνίας', 'Καθαρή έκφραση σε ηχητική ή γραπτή μορφή και συνέπεια.']
      ],
      formTitle: 'Φόρμα Αίτησης Ερμηνευτή',
      formSub: 'Οι αιτήσεις εξετάζονται εμπιστευτικά από την Gözde και την ομάδα επιμέλειας του Mythborn.',
      fullName: 'Ονοματεπώνυμο (και Επαγγελματικό Ψευδώνυμο)',
      hintFullName: 'Το πλήρες όνομά σας και το ψευδώνυμο που χρησιμοποιείτε',
      email: 'Διεύθυνση Email',
      hintEmail: 'Μορφή: name@example.com',
      errEmail: 'Παρακαλούμε εισάγετε έγκυρο email.',
      phone: 'Τηλέφωνο Επικοινωνίας (WhatsApp)',
      hintPhone: 'Με κωδικό χώρας (π.χ. +30 69X XXX XXXX)',
      errPhone: 'Παρακαλούμε εισάγετε έγκυρο τηλέφωνο.',
      specialties: 'Πεδία Εξειδίκευσης (Επιλέξτε τουλάχιστον 1)',
      experience: 'Έτη Εμπειρίας',
      expOptions: ['1–3 Έτη', '3–5 Έτη', '5–10 Έτη', '10+ Έτη'],
      modality: 'Προτιμώμενη Μορφή Ερμηνείας',
      modOptions: ['Ηχητική Ηχογράφηση', 'Γραπτή Ανάλυση', 'Ζωντανή Επικοινωνία', 'Όλες οι Μορφές'],
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
    badge: 'GÖZDE ACTIVA · LECTURA SIMBÓLICA PERSONALIZADA 1 A 1',
    heading: 'Los símbolos siempre tienen algo que contar.',
    headingEm: 'Sin frases hechas: una hoja de ruta clara y personal para ti.',
    sub: 'Un universo de símbolos, cartas y relatos celestes, de la mano de Gözde. Lejos de directorios impersonales, vive una experiencia confidencial, profunda y enriquecedora centrada en tu propia pregunta.',
    ctaPrimary: 'Elige tu Área y Conecta',
    social: 'Descubre a Gözde en TikTok',
    applyNav: 'Solicitud de Intérprete',
    navAreas: 'Áreas',
    navProcess: 'Método y Proceso',
    navInquiry: 'Contacto Inicial',
    navFaq: 'Preguntas',
    trustStrip: [
      ['100% Personal y Único', 'Sin textos prefabricados ni operadores al azar; cada lectura es interpretada personalmente por Gözde para tu consulta.'],
      ['Confidencialidad Total', 'Un espacio seguro, libre de juicios y con límites éticos claros donde cada detalle permanece privado.'],
      ['Audio, Escrito o En Vivo', 'Elige el formato que mejor se adapte a ti: nota de voz detallada, análisis escrito o comunicación directa.']
    ],
    areasEyebrow: '8 DISCIPLINAS DE LECTURA SIMBÓLICA',
    areasTitle: '¿Qué nudo quieres desenredar hoy?',
    areasSub: 'Elige el área que mejor conecte con tu momento actual; Gözde integra símbolos, arquetipos y ciclos celestes en torno a tu pregunta.',
    selectBtn: 'Elegir esta Área →',
    formats: ['Análisis en Audio', 'Texto Detallado', 'Enfoque 1 a 1'],
    cats: ['Lectura de Café', 'Tarot', 'Katina', 'Intuición', 'Amor y Relaciones', 'Astrología Tradicional', 'Carta Astral', 'Numerología'],
    catDetails: [
      ['SIMBOLISMO TRADICIONAL', 'Lectura de Café', 'Un espejo intuitivo de las figuras, caminos y símbolos de tu taza conectados con tu momento presente.'],
      ['ARQUETIPOS Y DECISIONES', 'Tarot', 'Aclara las huellas del pasado, la energía del presente y los caminos de decisión mediante el lenguaje del Tarot.'],
      ['DINÁMICA MÍTICA', 'Katina', 'Explora los vínculos emocionales, las intenciones y la dinámica de pareja a través de los símbolos de Katina.'],
      ['VISIÓN PROFUNDA', 'Intuición', 'Aborda los nudos invisibles en la superficie mediante una reflexión intuitiva y estructurada.'],
      ['EQUILIBRIO EMOCIONAL', 'Amor y Relaciones', 'Analiza el potencial de comunicación, los puntos de inflexión y el ritmo compartido sin juicios.'],
      ['TRADICIÓN CELESTE', 'Astrología Tradicional', 'Descubre tu temperamento, ciclos vitales y temas principales desde la tradición clásica del cielo.'],
      ['DATOS ASTRONÓMICOS', 'Carta Astral', 'Comprende el Sol, la Luna, el Ascendente, las casas y los tránsitos planetarios reales en tu vida.'],
      ['RITMO NUMÉRICO', 'Numerología', 'Descifra los arquetipos numéricos de tu fecha de nacimiento y nombre para orientar tu ciclo anual.']
    ],
    processEyebrow: 'CALIDAD QUE SE NOTA DESDE EL PRIMER MENSAJE',
    processTitle: 'Aquí nada fluye al azar; cada paso se basa en claridad y confianza.',
    processSub: 'En lugar de frases genéricas, un proceso estructurado en 3 pasos que identifica la necesidad real detrás de tu consulta.',
    steps: [
      ['01', 'Elige tu Área y Pregunta', 'Selecciona entre las 8 disciplinas simbólicas la que mejor responda a tu inquietud actual.'],
      ['02', 'Comparte tu Contexto en Confianza', 'Envía tu pregunta, datos natales o detalles simbólicos a Gözde indicando el formato que prefieres.'],
      ['03', 'Recibe tu Perspectiva Personal', 'Obtén un análisis claro y constructivo pensado para que tomes tus propias decisiones con serenidad.']
    ],
    pillars: [
      ['Pocas Temáticas, Máxima Claridad', 'No hablamos de todo superficialmente; vamos al núcleo de la cuestión para despejar las dudas.'],
      ['Claridad que Empodera', 'Una buena orientación no genera miedo ni dependencia: fortalece tu propio criterio y serenidad.'],
      ['Experiencia Boutique Curada', 'Trato directo con la curaduría personal de Gözde, lejos de plataformas masivas e impersonales.']
    ],
    formEyebrow: 'CONTACTO INICIAL CON GÖZDE',
    formTitle: 'Comparte tu enfoque y comencemos.',
    formSub: 'Completa el formulario para indicar el área de tu interés y el contexto de tu consulta.',
    labelTopic: 'Área de Exploración Seleccionada',
    labelFormat: 'Formato de Lectura Preferido',
    formatOptions: ['Grabación de Voz y Análisis', 'Texto Escrito Detallado', 'Comunicación Directa en Vivo'],
    labelName: 'Tu Nombre o Seudónimo',
    hintName: 'Ej. Elena R. o tu alias preferido',
    labelContact: 'Tu Canal de Contacto (Correo, Teléfono o Red Social)',
    hintContact: 'Indica un correo, teléfono o usuario activo para poder responderte',
    labelMessage: 'Tu Pregunta Principal y Breve Nota',
    hintMessage: 'Resume en 1 o 2 frases el tema que deseas aclarar (mínimo 10 caracteres)',
    labelConsent: 'Acepto que la información compartida sea revisada de forma confidencial con fines de reflexión personal y contacto.',
    submitInquiry: 'Enviar a Gözde →',
    submitting: 'Enviando…',
    inquirySuccess: 'Tu mensaje ha sido enviado a Gözde. Nos pondremos en contacto contigo muy pronto por el canal indicado.',
    inquiryError: 'Por favor, completa todos los campos obligatorios y marca la casilla de aceptación.',
    faqEyebrow: 'PREGUNTAS FRECUENTES',
    faqTitle: 'Todo lo que necesitas saber.',
    faqs: [
      ['¿Cómo funciona el proceso y cuánto tarda la respuesta?', 'Al enviar el formulario de contacto inicial, tu solicitud llega directamente a Gözde. Según el área elegida (Tarot, Café, Katina, Carta Astral, etc.), confirmamos los detalles y preparamos tu lectura personalizada a la brevedad.'],
      ['¿La información y las preguntas que comparto son confidenciales?', 'Totalmente. La confidencialidad es un pilar esencial de Mythborn. Tus datos y consultas jamás se comparten con terceros.'],
      ['¿Por qué Gözde es la lectora principal en lugar de cientos de perfiles?', 'Priorizamos la profundidad y la autenticidad frente a las respuestas en serie. Además, evaluamos cuidadosamente solicitudes de nuevos intérpretes que compartan nuestra ética.'],
      ['¿Las lecturas garantizan hechos futuros?', 'No. Todo el contenido de Mythborn tiene fines de reflexión personal, simbolismo cultural, autoconocimiento y entretenimiento. No sustituye asesoramiento médico, legal ni financiero.']
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
      sub: 'Al ampliar el círculo de Mythborn priorizamos la calidad sobre la cantidad. Buscamos especialistas capaces de ofrecer lecturas auténticas, confidenciales y empáticas, lejos de frases hechas.',
      criteria: [
        ['Maestría Interpretativa Auténtica', 'Práctica profunda y original en Tarot, Lectura de Café, Katina, Astrología o Numerología.'],
        ['Ética y Confidencialidad', 'Un lenguaje respetuoso que fortalezca la autonomía del consultante sin crear miedo ni dependencia.'],
        ['Calidad de Comunicación', 'Claridad expresiva tanto en voz como por escrito y compromiso con la excelencia.']
      ],
      formTitle: 'Formulario de Solicitud de Intérprete',
      formSub: 'Las solicitudes son revisadas confidencialmente por Gözde y el equipo de curaduría de Mythborn.',
      fullName: 'Nombre Completo (y Alias Profesional)',
      hintFullName: 'Tu nombre completo y el nombre artístico que utilices',
      email: 'Correo Electrónico',
      hintEmail: 'Formato: nombre@ejemplo.com',
      errEmail: 'Por favor, introduce un correo electrónico válido.',
      phone: 'Número de Teléfono (WhatsApp / Línea Activa)',
      hintPhone: 'Incluye el prefijo internacional (ej. +34 6XX XXX XXX)',
      errPhone: 'Por favor, introduce un teléfono válido.',
      specialties: 'Áreas de Especialidad (Selecciona al menos 1)',
      experience: 'Años de Experiencia',
      expOptions: ['1–3 Años', '3–5 Años', '5–10 Años', '10+ Años'],
      modality: 'Formato de Lectura Preferido',
      modOptions: ['Grabación de Voz', 'Análisis Escrito Detallado', 'Sesión en Vivo', 'Todos los Formatos'],
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
    badge: 'GÖZDE متاحة الآن · قراءة رمزية فردية ومخصصة',
    heading: 'للرموز دائماً حكاية ترويها.',
    headingEm: 'ليست عبارات مكررة؛ بل خارطة طريق واضحة ومخصصة لك.',
    sub: 'عالم من الرموز والبطاقات وحكايات النجوم برفقة Gözde. بعيداً عن المنصات العشوائية، اختبر قراءة رمزية عميقة، سرية، وملهمة تركز على سؤالك الخاص.',
    ctaPrimary: 'اختر مجالك وتواصل مع Gözde',
    social: 'اكتشف Gözde على تيك توك',
    applyNav: 'طلب انضمام القراء',
    navAreas: 'مجالات الاستكشاف',
    navProcess: 'المنهج والخطوات',
    navInquiry: 'التواصل الأولي',
    navFaq: 'الأسئلة الشائعة',
    trustStrip: [
      ['قراءة فردية وأصيلة 100%', 'لا نصوص جاهزة أو ردود عشوائية؛ كل قراءة تقدمها Gözde بنفسها حول سؤالك وسياقك الخاص.'],
      ['سرية تامة وثقة', 'مساحة آمنة تحترم الخصوصية والمعايير الأخلاقية دون أي أحكام مسبقة.'],
      ['صوتية أو مكتوبة أو مباشرة', 'اختر الأسلوب الأنسب لك: تسجيل صوتي مفصل، تحليل مكتوب، أو تواصل مباشر.']
    ],
    areasEyebrow: '8 مجالات للقراءة الرمزية',
    areasTitle: 'أي سؤال ترغب في توضيح معالمه اليوم؟',
    areasSub: 'اختر المجال الأقرب لاهتمامك الحالي؛ تقوم Gözde بتحليل الرموز والأنماط الفلكية حول سؤالك الأساسي.',
    selectBtn: 'اختر هذا المجال ←',
    formats: ['تحليل صوتي', 'نص مفصل', 'تركيز فردي'],
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
    processSub: 'بدلاً من العبارات العامة، منهج منظم من 3 خطوات يركز على الجوهر الحقيقي لسؤالك.',
    steps: [
      ['01', 'حدد مجالك وسؤالك المحوري', 'اختر من بين المجالات الثمانية ما يلامس وضعك الحالي بشكل أدق.'],
      ['02', 'شارك سياقك بخصوصية تامة', 'أرسل سؤالك أو بيانات ميلادك إلى Gözde مع تحديد صيغة القراءة المفضلة لديك.'],
      ['03', 'احصل على رؤيتك المخصصة', 'استلم تحليلاً واضحاً يمنحك البصيرة والهدوء لاتخاذ قراراتك بنفسك.']
    ],
    pillars: [
      ['تركيز عميق ووضوح عالٍ', 'لا نشتت الانتباه بعموميات؛ بل نركز على جوهر المسألة لمنحك رؤية صافية.'],
      ['وعي يمنحك القوة', 'الإرشاد الحقيقي لا يزرع الخوف أو التبعية، بل يعزز ثقتك وبصيرتك الذاتية.'],
      ['تجربة نخبوية ومختارة', 'تواصل مباشر بإشراف Gözde الشخصي بعيداً عن المنصات التجارية المزدحمة.']
    ],
    formEyebrow: 'التواصل الأولي مع GÖZDE',
    formTitle: 'شارك موضوع اهتمامك ولنبدأ معاً.',
    formSub: 'املأ النموذج أدناه لتحديد المجال وإرسال سؤالك مباشرة.',
    labelTopic: 'مجال الاستكشاف المختار',
    labelFormat: 'صيغة القراءة المفضلة',
    formatOptions: ['تسجيل صوتي وتحليل', 'نص مكتوب مفصل', 'تواصل مباشر'],
    labelName: 'الاسم أو اللقب',
    hintName: 'مثال: سارة م. أو اللقب المفضل لديك',
    labelContact: 'وسيلة التواصل (البريد الإلكتروني أو الهاتف أو الحساب)',
    hintContact: 'يرجى كتابة بريد إلكتروني أو رقم هاتف نشط لنتمكن من الرد عليك',
    labelMessage: 'سؤالك المحوري وملاحظتك المختصرة',
    hintMessage: 'لخص الموضوع الذي ترغب في توضيحه في جملة أو جملتين (10 أحرف على الأقل)',
    labelConsent: 'أوافق على مراجعة المعلومات المشاركة بسرية تامة لأغراض التأمل الشخصي والتواصل.',
    submitInquiry: 'إرسال إلى Gözde ←',
    submitting: 'جاري الإرسال…',
    inquirySuccess: 'تم إرسال رسالتك إلى Gözde بنجاح. سنتواصل معك قريباً عبر وسيلة التواصل التي اخترتها.',
    inquiryError: 'يرجى ملء جميع الحقول المطلوبة والموافقة على الشروط.',
    faqEyebrow: 'الأسئلة الشائعة',
    faqTitle: 'كل ما تود معرفته.',
    faqs: [
      ['كيف تسير العملية ومتى يتم الرد؟', 'بمجرد إرسال نموذج التواصل الأولي، يصل طلبك مباشرة إلى Gözde. وبحسب المجال المختار، يتم تأكيد التفاصيل وإعداد قراءتك المخصصة في أقرب وقت.'],
      ['هل تظل معلوماتي وأسئلتي سرية تماماً؟', 'بكل تأكيد. السرية هي حجر الأساس في Mythborn، ولا تتم مشاركة أي بيانات مع أي طرف ثالث.'],
      ['لماذا تتركز التجربة حول Gözde بدلاً من مئات الحسابات؟', 'هدفنا هو العمق والأصالة بعيداً عن الردود المنسوخة. وفي الوقت نفسه نستقبل طلبات الانضمام من المتخصصين المتميزين وفق معاييرنا الأخلاقية.'],
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
      sub: 'نحن نركز على الجودة والأصالة عند توسيع دائرة Mythborn. نرحب بطلبات المتخصصين القادرين على تقديم قراءات عميقة، سرية، وبعيدة عن الكليشيهات الجاهزة.',
      criteria: [
        ['أصالة وعمق في التفسير', 'خبرة راسخة في واحد على الأقل من المجالات: التاروت، رموز القهوة، كاتينا، الفلك، أو علم الأرقام.'],
        ['الالتزام الأخلاقي والسرية', 'أسلوب راقٍ يحترم خصوصية المستفيد ويعزز وعيه الذاتي دون تخويف أو إثارة للتبعية.'],
        ['جودة التواصل والانضباط', 'قدرة تعبيرية واضحة صوتياً أو كتابياً مع الالتزام بالوقت والدقة.']
      ],
      formTitle: 'نموذج طلب انضمام قارئ / متخصص',
      formSub: 'تتم مراجعة الطلبات بسرية تامة من قبل Gözde وفريق Mythborn.',
      fullName: 'الاسم الكامل (واللقب المهني إن وجد)',
      hintFullName: 'اسمك الكامل واللقب الذي تفضل استخدامه',
      email: 'البريد الإلكتروني',
      hintEmail: 'الصيغة: name@example.com',
      errEmail: 'يرجى إدخال بريد إلكتروني صحيح.',
      phone: 'رقم الهاتف (واتساب / خط نشط)',
      hintPhone: 'مع رمز الدولة (مثال: +90 5XX XXX XX XX)',
      errPhone: 'يرجى إدخال رقم هاتف صحيح.',
      specialties: 'مجالات التخصص (اختر مجالاً واحداً على الأقل)',
      experience: 'سنوات الخبرة',
      expOptions: ['1–3 سنوات', '3–5 سنوات', '5–10 سنوات', '+10 سنوات'],
      modality: 'صيغة القراءة المفضلة',
      modOptions: ['تسجيل صوتي', 'تحليل مكتوب مفصل', 'تواصل مباشر', 'جميع الصيغ'],
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

const safe = v => String(v).replace(/[&<>"']/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));

export const resolveGozdeLocale = (pathname = '/') =>
  pathname.startsWith('/ar') ? 'ar'
  : pathname.startsWith('/es') ? 'es'
  : pathname.startsWith('/gr') || pathname.startsWith('/el') ? 'el'
  : pathname.startsWith('/en') ? 'en'
  : 'tr';

export const isGozdeApplyPath = (pathname = '/') =>
  /^\/(?:(?:en|gr|el|es|ar)\/)?(?:yorumcu-basvuru|basvuru|apply)\/?$/i.test(pathname);

const sharedStyles = `
:root{color-scheme:dark;--cream:#f4eadc;--gold:#d4ae75;--gold-bright:#edd09e;--muted:#c7bab0;--bg:#08080a;--card:#121017;--border:#be9d6b38;--ok:#37b87c;--err:#e56b60}
*{box-sizing:border-box}
html{min-height:100%;background:var(--bg);scroll-behavior:smooth}
body{margin:0;color:var(--cream);font-family:system-ui,-apple-system,"Segoe UI",sans-serif;background:var(--bg);line-height:1.6}
.wrap{position:relative;isolation:isolate;min-height:100svh;display:flex;flex-direction:column;background:#0d0a0b;overflow-x:hidden}
.hero-stage{position:relative;isolation:isolate;min-height:92svh;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;border-bottom:1px solid var(--border)}
.photo{position:absolute;inset:0;z-index:-2;margin:0}
.photo img{width:100%;height:100%;display:block;object-fit:cover;object-position:center 32%;filter:brightness(.86) saturate(.94)}
.photo:after{position:absolute;inset:0;content:"";background:linear-gradient(90deg,rgba(5,5,8,.97) 0%,rgba(5,5,8,.84) 28%,rgba(5,5,8,.34) 58%,rgba(5,5,8,.22) 100%),linear-gradient(0deg,rgba(8,8,10,1) 0%,rgba(8,8,10,.78) 18%,transparent 48%)}
.photo figcaption{display:none}
.top{width:min(1450px,calc(100% - 72px));margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:22px 0;position:relative;z-index:3;flex-wrap:wrap}
.logo{display:inline-flex;align-items:center;text-decoration:none;color:#f4eadf;font:400 21px/1 Georgia,serif;letter-spacing:.26em}
.logo:before{content:"✧";font:32px Georgia,serif;color:var(--gold);margin-inline-end:18px}
.top-nav{display:flex;align-items:center;gap:20px;flex-wrap:wrap}
.top-nav a{color:#ddd2c7;text-decoration:none;font-size:13px;letter-spacing:.05em;transition:color .2s}
.top-nav a:hover{color:var(--gold-bright)}
.top-nav .apply-pill{border:1px solid #d4ae7577;background:#1a1410aa;color:var(--gold-bright);padding:8px 15px;border-radius:999px;font-size:12px;font-weight:600;letter-spacing:.06em}
.top-nav .apply-pill:hover{background:var(--gold);color:#140e07}
.langs{display:flex;gap:12px;align-items:center}
.langs a{color:#c9bcb1;text-decoration:none;font:600 11px system-ui,sans-serif;letter-spacing:.14em;padding:6px 4px}
.langs a[aria-current=page],.langs a:hover{color:var(--gold)}
.main{width:min(1450px,calc(100% - 72px));margin:0 auto;flex:1;display:flex;flex-direction:column;justify-content:space-between;gap:34px;padding:clamp(28px,6vh,88px) 0 36px;position:relative;z-index:2}
.copy{max-width:650px;position:relative;z-index:1}
.live-pill{display:inline-flex;align-items:center;gap:10px;background:rgba(16,14,18,.82);border:1px solid #d4ae7559;border-radius:999px;padding:7px 15px;font-size:11px;font-weight:700;letter-spacing:.14em;color:#f0d5a8;margin:0 0 18px;backdrop-filter:blur(8px)}
.live-dot{width:8px;height:8px;border-radius:50%;background:var(--ok);box-shadow:0 0 10px var(--ok)}
.eyebrow{font-size:11px;font-weight:600;letter-spacing:.32em;color:#d8b57f;margin:0 0 14px;text-transform:uppercase}
.title{font:400 clamp(42px,4.8vw,74px)/1.05 Georgia,"Times New Roman",serif;letter-spacing:-.035em;margin:0 0 14px;text-wrap:balance}
.title-em{display:block;font:italic 400 clamp(21px,2.2vw,31px)/1.3 Georgia,"Times New Roman",serif;color:var(--gold-bright);margin:0 0 20px}
.sub{color:#e2dad3;font:400 16.5px/1.75 system-ui,sans-serif;max-width:580px;margin:0 0 26px}
.hero-actions{display:flex;flex-wrap:wrap;gap:14px;align-items:center;margin-bottom:10px}
.cta{display:inline-flex;gap:12px;align-items:center;justify-content:center;text-decoration:none;color:#160f08;background:#dbb980;border:1px solid #dbb980;border-radius:999px;padding:15px 26px;font-size:12.5px;letter-spacing:.08em;font-weight:700;cursor:pointer;transition:background .2s,transform .2s}
.cta:hover{background:#f0cd93;transform:translateY(-2px)}
.cta-ghost{display:inline-flex;gap:10px;align-items:center;justify-content:center;text-decoration:none;color:var(--cream);background:rgba(14,12,16,.72);border:1px solid #d4ae7566;border-radius:999px;padding:15px 24px;font-size:12.5px;letter-spacing:.07em;font-weight:600;transition:border-color .2s,background .2s}
.cta-ghost:hover{border-color:var(--gold);background:rgba(212,174,117,.14)}
.trust-bar{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;padding:20px;border-radius:20px;background:rgba(12,10,15,.82);border:1px solid var(--border);backdrop-filter:blur(10px)}
.trust-item{display:flex;flex-direction:column;gap:5px}
.trust-item strong{font:600 14px/1.3 Georgia,serif;color:var(--gold-bright);display:flex;align-items:center;gap:8px}
.trust-item strong:before{content:"✦";color:var(--gold)}
.trust-item span{font-size:13px;color:#d2c7bc;line-height:1.5}
.chips{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:12px;margin:0;padding:0;list-style:none}
.chips a{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;text-align:center;gap:10px;font:500 12.5px/1.35 system-ui,sans-serif;color:#eee3d7;text-decoration:none;padding:10px 6px;border-radius:16px;transition:transform .2s,color .2s}
.chips a:hover{transform:translateY(-3px);color:var(--gold-bright)}
.chips a:before{content:"✧";width:58px;height:58px;display:grid;place-items:center;border:1px solid #bc955d66;border-radius:50%;font:26px Georgia,serif;color:#d4ae75;background:#08070b88}
.chips a:nth-child(1):before{content:"☼"}
.chips a:nth-child(2):before{content:"☕";font-size:22px}
.chips a:nth-child(3):before{content:"♠"}
.chips a:nth-child(4):before{content:"☾"}
.chips a:nth-child(5):before{content:"♡"}
.chips a:nth-child(6):before{content:"✶"}
.chips a:nth-child(7):before{content:"☸"}
.chips a:nth-child(8):before{content:"✧"}
.section-block{width:min(1450px,calc(100% - 72px));margin:0 auto;padding:72px 0;border-bottom:1px solid var(--border)}
.section-head{max-width:760px;margin-bottom:40px}
.section-head h2{font:400 clamp(30px,3.4vw,48px)/1.12 Georgia,serif;margin:0 0 14px;color:#f7efe4}
.section-head p{margin:0;color:var(--muted);font-size:16px;line-height:1.7}
.areas-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px}
.area-card{background:linear-gradient(180deg,#15121b 0%,#0e0c12 100%);border:1px solid var(--border);border-radius:20px;padding:24px;display:flex;flex-direction:column;justify-content:space-between;gap:18px;transition:border-color .2s,transform .2s}
.area-card:hover,.area-card.is-selected{border-color:var(--gold);transform:translateY(-3px)}
.area-top{display:flex;align-items:center;justify-content:space-between;gap:12px}
.area-icon{width:46px;height:46px;border-radius:50%;border:1px solid #d4ae7555;display:grid;place-items:center;color:var(--gold);font:21px Georgia,serif;background:#09080c}
.area-tag{font-size:10px;font-weight:700;letter-spacing:.18em;color:#cdb083;text-transform:uppercase}
.area-card h3{font:400 23px/1.2 Georgia,serif;margin:10px 0 8px;color:#f8f0e5}
.area-card p{margin:0;font-size:14px;color:#cfc4b8;line-height:1.65}
.area-formats{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}
.area-formats small{font-size:11px;padding:4px 9px;border-radius:999px;background:#1c1722;color:#dfd2c2;border:1px solid #ffffff12}
.area-btn{width:100%;padding:12px 16px;border-radius:12px;border:1px solid #d4ae7566;background:#1b1510;color:var(--gold-bright);font-weight:600;font-size:12.5px;letter-spacing:.05em;cursor:pointer;transition:background .2s,color .2s}
.area-btn:hover{background:var(--gold);color:#140e07}
.process-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px;margin-bottom:28px}
.step-card,.pillar-card{background:#121017;border:1px solid var(--border);border-radius:20px;padding:26px}
.step-num{font:400 32px/1 Georgia,serif;color:var(--gold);display:block;margin-bottom:12px}
.step-card h3,.pillar-card h3{font:400 21px/1.25 Georgia,serif;margin:0 0 10px;color:#f6ede1}
.step-card p,.pillar-card p{margin:0;font-size:14.5px;color:#ccc0b4;line-height:1.65}
.inquiry-shell{display:grid;grid-template-columns:1fr 1.15fr;gap:36px;align-items:start;background:linear-gradient(145deg,#151119 0%,#0d0b11 100%);border:1px solid #d4ae7555;border-radius:24px;padding:clamp(24px,4vw,44px)}
.form-card{display:flex;flex-direction:column;gap:18px}
.field{display:flex;flex-direction:column;gap:5px}
.field label,.field legend{font-size:13.5px;font-weight:600;color:#f2e7d8}
.hint{display:block;color:#b5a799;font-size:12px;margin-bottom:2px}
.field input,.field select,.field textarea{width:100%;padding:13px 15px;border-radius:12px;border:1px solid #be9d6b44;background:#09080c;color:var(--cream);font:400 14.5px/1.4 system-ui,sans-serif;transition:border-color .2s,background-color .2s}
.field textarea{min-height:110px;resize:vertical}
.field input:focus,.field select:focus,.field textarea:focus{outline:2px solid #d4ae7588;border-color:var(--gold)}
.error-msg{display:none;color:var(--err);font-size:12.5px;margin-top:4px;font-weight:500}
.field input:user-invalid,.field textarea:user-invalid,.field input.user-invalid-fallback,.field textarea.user-invalid-fallback{border-color:var(--err);background-color:#261112}
.field input:user-invalid + .error-msg,.field textarea:user-invalid + .error-msg,.field input.user-invalid-fallback + .error-msg,.field textarea.user-invalid-fallback + .error-msg{display:block}
.field:has(input:user-invalid) .hint,.field:has(textarea:user-invalid) .hint{color:#f29b94}
.field input:user-valid,.field textarea:user-valid,.field input.user-valid-fallback,.field textarea.user-valid-fallback{border-color:var(--ok)}
.specialty-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:4px}
.check-pill{display:flex;align-items:center;gap:9px;padding:10px 12px;border-radius:11px;border:1px solid #be9d6b38;background:#0a090e;font-size:13px;color:#eadfce;cursor:pointer}
.check-pill input{width:16px;height:16px;accent-color:var(--gold);margin:0}
.consent-row{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:#d6c9bc;cursor:pointer}
.consent-row input{width:18px;height:18px;margin-top:2px;accent-color:var(--gold);flex-shrink:0}
.form-status{margin:0;padding:13px 16px;border-radius:12px;font-size:13.5px;display:none}
.form-status[data-state="ok"]{display:block;background:#10291e;border:1px solid var(--ok);color:#b9f5d8}
.form-status[data-state="err"]{display:block;background:#2b1214;border:1px solid var(--err);color:#ffd2ce}
.faq-list{display:flex;flex-direction:column;gap:14px;max-width:960px}
.faq-item{background:#121017;border:1px solid var(--border);border-radius:16px;padding:18px 22px}
.faq-item summary{font:600 17px/1.4 Georgia,serif;color:#f5ece0;cursor:pointer;list-style:none;display:flex;align-items:center;justify-content:space-between;gap:16px}
.faq-item summary::-webkit-details-marker{display:none}
.faq-item summary:after{content:"+";font:400 22px/1 system-ui,sans-serif;color:var(--gold)}
.faq-item[open] summary:after{content:"−"}
.faq-item p{margin:12px 0 0;color:#cfc3b6;font-size:14.5px;line-height:1.7}
.recruit-banner{margin-top:44px;background:linear-gradient(90deg,#1a1410 0%,#120f17 100%);border:1px solid #d4ae7566;border-radius:22px;padding:32px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap}
.recruit-banner h3{font:400 26px/1.2 Georgia,serif;margin:6px 0 8px;color:#f8efe2}
.recruit-banner p{margin:0;color:#d2c5b8;max-width:680px;font-size:15px}
.bottom{width:min(1450px,calc(100% - 72px));margin:0 auto;padding:24px 0 36px;display:flex;justify-content:space-between;gap:20px;align-items:center;flex-wrap:wrap;font-size:12px;color:#b8a797}
.bottom strong{font-weight:600;letter-spacing:.16em;color:#dcc39c}
.bottom-links{display:flex;gap:18px;flex-wrap:wrap;align-items:center}
.bottom-links a{color:#d4ae75;text-decoration:none}
[dir=rtl] .title{letter-spacing:normal}
[dir=rtl] .photo:after{background:linear-gradient(270deg,#050508f5 0%,#050508cc 35%,transparent 78%),linear-gradient(0deg,#08080a,transparent 45%)}
@media(max-width:1100px){
  .areas-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .trust-bar,.process-grid,.inquiry-shell{grid-template-columns:1fr}
  .chips{grid-template-columns:repeat(4,minmax(0,1fr))}
}
@media(max-width:700px){
  .wrap{background:#08080b}
  .top,.main,.section-block,.bottom{width:calc(100% - 34px)}
  .top{padding:14px 0}
  .logo{font-size:15px;letter-spacing:.14em}
  .logo:before{margin-inline-end:8px;font-size:22px}
  .top-nav{gap:10px;width:100%;justify-content:space-between}
  .hero-stage{min-height:auto}
  .main{padding:0 0 28px;gap:20px;justify-content:flex-start}
  .photo{position:relative;inset:auto;z-index:0;order:0;margin:0 0 0 calc((100% - 100vw)/2);width:100vw;max-width:none;height:clamp(290px,80vw,410px);overflow:hidden}
  .photo img{object-position:55% 32%;filter:brightness(.94) saturate(.96)}
  .photo:after{background:linear-gradient(0deg,#08080b 0%,transparent 28%)}
  .copy{order:1;max-width:100%}
  .trust-bar{order:2;padding:16px}
  .chips{order:3;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px 6px}
  .areas-grid,.specialty-grid{grid-template-columns:1fr}
  .title{font-size:clamp(34px,8.8vw,46px);line-height:1.1}
  .section-block{padding:48px 0}
}
@media(max-width:390px){
  .chips{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media(prefers-reduced-motion:reduce){
  *,*:before,*:after{transition:none!important;animation:none!important;scroll-behavior:auto!important}
}
`;

const clientInteractiveScript = `
(() => {
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

export const gozdeApplyPage = (pathname = '/yorumcu-basvuru') => {
  const locale = resolveGozdeLocale(pathname);
  const t = C[locale];
  const a = t.applyPage;
  const [homeHref, lang, dir, applyHref] = langs[locale];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `MYTHBORN | ${a.title}`,
    description: a.sub,
    url: `https://mythborn.co${applyHref}`,
    inLanguage: lang
  };
  return `<!doctype html><html lang="${lang}" dir="${dir}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#08090e"><meta name="robots" content="index,follow"><meta name="description" content="${safe(a.sub)}"><title>MYTHBORN | ${safe(a.title)} — ${safe(t.lead)}</title><link rel="canonical" href="https://mythborn.co${applyHref}">${Object.entries(langs).map(([, v]) => `<link rel="alternate" hreflang="${v[1]}" href="https://mythborn.co${v[3]}">`).join('')}<link rel="alternate" hreflang="x-default" href="https://mythborn.co/yorumcu-basvuru"><meta property="og:type" content="website"><meta property="og:title" content="MYTHBORN · ${safe(a.title)}"><meta property="og:description" content="${safe(a.sub)}"><meta property="og:image" content="https://mythborn.co/images/gozde-tarot-hero.webp"><meta name="twitter:card" content="summary_large_image"><script type="application/ld+json">${JSON.stringify(schema)}</script><style>${sharedStyles}</style></head><body><div class="wrap"><header class="top"><a class="logo" href="${homeHref}">MYTHBORN</a><div class="top-nav"><a href="${homeHref}">${safe(a.back)}</a><a href="https://www.tiktok.com/@gozdeli_" target="_blank" rel="noopener noreferrer">${safe(t.social)} ↗</a><nav class="langs" aria-label="Languages">${Object.entries(langs).map(([k, v]) => `<a href="${v[3]}" lang="${v[1]}" ${locale === k ? 'aria-current="page"' : ''}>${k.toUpperCase()}</a>`).join('')}</nav></div></header><main><section class="section-block" style="padding-top:28px"><div class="inquiry-shell"><div class="copy"><span class="live-pill"><span class="live-dot" aria-hidden="true"></span>${safe(t.lead)}</span><p class="eyebrow">${safe(a.eyebrow)}</p><h1 class="title" style="font-size:clamp(34px,4vw,54px)">${safe(a.title)}</h1><p class="sub">${safe(a.sub)}</p><figure style="margin:24px 0;border-radius:18px;overflow:hidden;border:1px solid var(--border);max-height:290px"><img src="/images/gozde-tarot-hero.webp" width="1536" height="1024" alt="${safe(t.lead)}" fetchpriority="high" style="width:100%;height:290px;object-fit:cover;object-position:center 32%;display:block"></figure><div style="display:flex;flex-direction:column;gap:14px">${a.criteria.map(([ct, cd]) => `<div class="pillar-card" style="padding:18px"><h3 style="font-size:18px;margin-bottom:6px">✦ ${safe(ct)}</h3><p style="font-size:13.5px">${safe(cd)}</p></div>`).join('')}</div></div><form id="gozde-apply-form" class="form-card" method="post" action="/api/gozde-apply" novalidate data-ok-msg="${safe(a.success)}" data-err-msg="${safe(a.error)}" data-sending-msg="${safe(t.submitting)}"><input type="hidden" name="locale" value="${locale}"><div><h2 style="font:400 28px/1.2 Georgia,serif;margin:0 0 8px;color:#f8efe2">${safe(a.formTitle)}</h2><p style="margin:0;color:var(--muted);font-size:14px">${safe(a.formSub)}</p></div><div class="field"><label for="apply-name">${safe(a.fullName)}</label><span id="apply-name-hint" class="hint">${safe(a.hintFullName)}</span><input id="apply-name" name="fullName" type="text" required minlength="2" maxlength="120" autocomplete="name" aria-describedby="apply-name-hint"></div><div class="field"><label for="apply-email">${safe(a.email)}</label><span id="apply-email-hint" class="hint">${safe(a.hintEmail)}</span><input id="apply-email" name="email" type="email" required autocomplete="email" aria-describedby="apply-email-hint" aria-errormessage="apply-email-err"><div id="apply-email-err" class="error-msg">${safe(a.errEmail)}</div></div><div class="field"><label for="apply-phone">${safe(a.phone)}</label><span id="apply-phone-hint" class="hint">${safe(a.hintPhone)}</span><input id="apply-phone" name="phone" type="tel" inputmode="tel" required minlength="7" maxlength="40" autocomplete="tel" aria-describedby="apply-phone-hint" aria-errormessage="apply-phone-err"><div id="apply-phone-err" class="error-msg">${safe(a.errPhone)}</div></div><fieldset class="field" style="border:0;padding:0;margin:0"><legend>${safe(a.specialties)}</legend><div class="specialty-grid">${t.cats.map((c) => `<label class="check-pill"><input type="checkbox" name="specialties" value="${safe(c)}"><span>${safe(c)}</span></label>`).join('')}</div></fieldset><div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px"><div class="field"><label for="apply-exp">${safe(a.experience)}</label><select id="apply-exp" name="experience">${a.expOptions.map((o) => `<option value="${safe(o)}">${safe(o)}</option>`).join('')}</select></div><div class="field"><label for="apply-mod">${safe(a.modality)}</label><select id="apply-mod" name="modality">${a.modOptions.map((o) => `<option value="${safe(o)}">${safe(o)}</option>`).join('')}</select></div></div><div class="field"><label for="apply-langs">${safe(a.languages)}</label><span id="apply-langs-hint" class="hint">${safe(a.hintLanguages)}</span><input id="apply-langs" name="languages" type="text" required minlength="2" maxlength="120" aria-describedby="apply-langs-hint"></div><div class="field"><label for="apply-social">${safe(a.social)}</label><span id="apply-social-hint" class="hint">${safe(a.hintSocial)}</span><input id="apply-social" name="social" type="text" maxlength="180" aria-describedby="apply-social-hint"></div><div class="field"><label for="apply-bio">${safe(a.bio)}</label><span id="apply-bio-hint" class="hint">${safe(a.hintBio)}</span><textarea id="apply-bio" name="bio" required minlength="25" maxlength="1500" aria-describedby="apply-bio-hint" aria-errormessage="apply-bio-err"></textarea><div id="apply-bio-err" class="error-msg">${safe(a.errBio)}</div></div><label class="consent-row"><input type="checkbox" name="consent" value="yes" required><span>${safe(a.consent)}</span></label><p class="form-status" data-form-status role="status" aria-live="polite"></p><button type="submit" class="cta">${safe(a.submit)}</button></form></div></section></main><footer class="bottom"><strong>© MYTHBORN · ${safe(t.lead)}</strong><div class="bottom-links"><span>${safe(t.note)}</span><a href="${homeHref}">${safe(a.back)}</a></div></footer></div><script>${clientInteractiveScript}</script></body></html>`;
};

export const gozdeLanding = (pathname = '/') => {
  if (isGozdeApplyPath(pathname)) return gozdeApplyPage(pathname);
  const locale = resolveGozdeLocale(pathname);
  const t = C[locale];
  const [homeHref, lang, dir, applyHref] = langs[locale];
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: `MYTHBORN · ${t.lead}`,
        url: `https://mythborn.co${homeHref}`,
        inLanguage: lang
      },
      {
        '@type': 'FAQPage',
        inLanguage: lang,
        mainEntity: t.faqs.map(([q, ans]) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: ans }
        }))
      }
    ]
  };
  return `<!doctype html><html lang="${lang}" dir="${dir}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#08090e"><meta name="robots" content="index,follow"><meta name="description" content="${safe(t.sub)}"><title>MYTHBORN | ${safe(t.lead)} — ${safe(t.heading)}</title><link rel="canonical" href="https://mythborn.co${homeHref}">${Object.entries(langs).map(([, v]) => `<link rel="alternate" hreflang="${v[1]}" href="https://mythborn.co${v[0]}">`).join('')}<link rel="alternate" hreflang="x-default" href="https://mythborn.co/"><meta property="og:type" content="website"><meta property="og:title" content="MYTHBORN · ${safe(t.lead)}"><meta property="og:description" content="${safe(t.sub)}"><meta property="og:image" content="https://mythborn.co/images/gozde-tarot-hero.webp"><meta name="twitter:card" content="summary_large_image"><script type="application/ld+json">${JSON.stringify(schema)}</script><style>${sharedStyles}</style></head><body><div class="wrap"><div class="hero-stage"><header class="top"><a class="logo" href="${homeHref}">MYTHBORN</a><div class="top-nav"><a href="#alanlar">${safe(t.navAreas)}</a><a href="#yaklasim">${safe(t.navProcess)}</a><a href="#iletisim">${safe(t.navInquiry)}</a><a href="#sss">${safe(t.navFaq)}</a><a class="apply-pill" href="${applyHref}">${safe(t.applyNav)}</a><nav class="langs" aria-label="Languages">${Object.entries(langs).map(([k, v]) => `<a href="${v[0]}" lang="${v[1]}" ${locale === k ? 'aria-current="page"' : ''}>${k.toUpperCase()}</a>`).join('')}</nav></div></header><main class="main"><figure class="photo"><img src="/images/gozde-tarot-hero.webp" width="1536" height="1024" alt="${safe(t.lead)}" fetchpriority="high"><figcaption>GÖZDE</figcaption></figure><section class="copy"><div class="live-pill"><span class="live-dot" aria-hidden="true"></span><span>${safe(t.badge)}</span></div><p class="eyebrow">${safe(t.lead)}</p><h1 class="title">${safe(t.heading)}</h1><span class="title-em">${safe(t.headingEm)}</span><p class="sub">${safe(t.sub)}</p><div class="hero-actions"><a class="cta" href="#alanlar">${safe(t.ctaPrimary)} <span aria-hidden="true">→</span></a><a class="cta-ghost" href="https://www.tiktok.com/@gozdeli_" target="_blank" rel="noopener noreferrer">${safe(t.social)} <span aria-hidden="true">↗</span></a></div></section><div class="trust-bar">${t.trustStrip.map(([title, desc]) => `<div class="trust-item"><strong>${safe(title)}</strong><span>${safe(desc)}</span></div>`).join('')}</div><div class="chips" aria-label="${safe(categoryLabels[locale])}">${t.cats.map((c) => `<a href="#alanlar">${safe(c)}</a>`).join('')}</div></main></div><section id="alanlar" class="section-block"><div class="section-head"><p class="eyebrow">${safe(t.areasEyebrow)}</p><h2>${safe(t.areasTitle)}</h2><p>${safe(t.areasSub)}</p></div><div class="areas-grid">${t.catDetails.map(([tag, name, desc], idx) => `<article class="area-card"><div><div class="area-top"><span class="area-icon" aria-hidden="true">${ICONS[idx] || '✧'}</span><span class="area-tag">${safe(tag)}</span></div><h3>${safe(name)}</h3><p>${safe(desc)}</p><div class="area-formats">${t.formats.map((f) => `<small>${safe(f)}</small>`).join('')}</div></div><button type="button" class="area-btn" data-select-topic="${safe(name)}">${safe(t.selectBtn)}</button></article>`).join('')}</div></section><section id="yaklasim" class="section-block"><div class="section-head"><p class="eyebrow">${safe(t.processEyebrow)}</p><h2>${safe(t.processTitle)}</h2><p>${safe(t.processSub)}</p></div><div class="process-grid">${t.steps.map(([num, title, desc]) => `<article class="step-card"><span class="step-num">${safe(num)}</span><h3>${safe(title)}</h3><p>${safe(desc)}</p></article>`).join('')}</div><div class="process-grid">${t.pillars.map(([title, desc]) => `<article class="pillar-card"><h3>✦ ${safe(title)}</h3><p>${safe(desc)}</p></article>`).join('')}</div></section><section id="iletisim" class="section-block"><div class="inquiry-shell"><div class="copy"><p class="eyebrow">${safe(t.formEyebrow)}</p><h2 style="font:400 clamp(28px,3.2vw,44px)/1.15 Georgia,serif;margin:0 0 14px;color:#f8efe2">${safe(t.formTitle)}</h2><p class="sub">${safe(t.formSub)}</p><div class="pillar-card" style="margin-top:20px"><h3>✦ ${safe(t.lead)}</h3><p>${safe(t.trustStrip[0][1])}</p><div style="margin-top:16px"><a class="cta-ghost" href="https://www.tiktok.com/@gozdeli_" target="_blank" rel="noopener noreferrer">${safe(t.social)} ↗</a></div></div></div><form id="gozde-inquiry-form" class="form-card" method="post" action="/api/gozde-inquiry" novalidate data-ok-msg="${safe(t.inquirySuccess)}" data-err-msg="${safe(t.inquiryError)}" data-sending-msg="${safe(t.submitting)}"><input type="hidden" name="locale" value="${locale}"><div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px"><div class="field"><label for="inquiry-topic">${safe(t.labelTopic)}</label><select id="inquiry-topic" name="topic">${t.cats.map((c) => `<option value="${safe(c)}">${safe(c)}</option>`).join('')}</select></div><div class="field"><label for="inquiry-format">${safe(t.labelFormat)}</label><select id="inquiry-format" name="format">${t.formatOptions.map((f) => `<option value="${safe(f)}">${safe(f)}</option>`).join('')}</select></div></div><div class="field"><label for="inquiry-name">${safe(t.labelName)}</label><span id="inquiry-name-hint" class="hint">${safe(t.hintName)}</span><input id="inquiry-name" name="name" type="text" required minlength="2" maxlength="100" autocomplete="name" aria-describedby="inquiry-name-hint"></div><div class="field"><label for="inquiry-contact">${safe(t.labelContact)}</label><span id="inquiry-contact-hint" class="hint">${safe(t.hintContact)}</span><input id="inquiry-contact" name="contact" type="text" required minlength="3" maxlength="140" aria-describedby="inquiry-contact-hint"></div><div class="field"><label for="inquiry-message">${safe(t.labelMessage)}</label><span id="inquiry-message-hint" class="hint">${safe(t.hintMessage)}</span><textarea id="inquiry-message" name="message" required minlength="10" maxlength="1200" aria-describedby="inquiry-message-hint"></textarea></div><label class="consent-row"><input type="checkbox" name="consent" value="yes" required><span>${safe(t.labelConsent)}</span></label><p class="form-status" data-form-status role="status" aria-live="polite"></p><button type="submit" class="cta">${safe(t.submitInquiry)}</button></form></div></section><section id="sss" class="section-block"><div class="section-head"><p class="eyebrow">${safe(t.faqEyebrow)}</p><h2>${safe(t.faqTitle)}</h2></div><div class="faq-list">${t.faqs.map(([q, ans], idx) => `<details class="faq-item" name="mythborn-faq"${idx === 0 ? ' open' : ''}><summary>${safe(q)}</summary><p>${safe(ans)}</p></details>`).join('')}</div><div class="recruit-banner"><div><p class="eyebrow" style="margin-bottom:6px">${safe(t.recruitEyebrow)}</p><h3>${safe(t.recruitTitle)}</h3><p>${safe(t.recruitSub)}</p></div><a class="cta" href="${applyHref}">${safe(t.recruitCta)}</a></div></section><footer class="bottom"><strong>© MYTHBORN · ${safe(t.lead)}</strong><div class="bottom-links"><span>${safe(t.note)}</span><a href="${applyHref}">${safe(t.applyNav)}</a><a href="https://www.tiktok.com/@gozdeli_" target="_blank" rel="noopener noreferrer">TikTok ↗</a></div></footer></div><script>${clientInteractiveScript}</script></body></html>`;
};

export const handleGozdeApi = async (request, env) => {
  const url = new URL(request.url);
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
    if (env?.DB && typeof env.DB.prepare === 'function') {
      try {
        await env.DB.prepare(
          'CREATE TABLE IF NOT EXISTS gozde_inquiries (id TEXT PRIMARY KEY, locale TEXT NOT NULL, name TEXT NOT NULL, contact TEXT NOT NULL, topic TEXT NOT NULL, format TEXT NOT NULL, message TEXT NOT NULL, created_at TEXT NOT NULL)'
        ).run();
        await env.DB.prepare(
          'INSERT INTO gozde_inquiries (id, locale, name, contact, topic, format, message, created_at) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)'
        ).bind(id, locale, name.slice(0, 120), contact.slice(0, 160), topic.slice(0, 80), format.slice(0, 80), message.slice(0, 1500), new Date().toISOString()).run();
      } catch {
        // Fallback gracefully if local/stateless D1 is uninitialized
      }
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
    if (env?.DB && typeof env.DB.prepare === 'function') {
      try {
        await env.DB.prepare(
          'CREATE TABLE IF NOT EXISTS gozde_applications (id TEXT PRIMARY KEY, locale TEXT NOT NULL, full_name TEXT NOT NULL, email TEXT NOT NULL, phone TEXT NOT NULL, specialties_json TEXT NOT NULL, experience TEXT NOT NULL, modality TEXT NOT NULL, languages TEXT NOT NULL, social TEXT, bio TEXT NOT NULL, created_at TEXT NOT NULL)'
        ).run();
        await env.DB.prepare(
          'INSERT INTO gozde_applications (id, locale, full_name, email, phone, specialties_json, experience, modality, languages, social, bio, created_at) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12)'
        ).bind(
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
          new Date().toISOString()
        ).run();
      } catch {
        // Fallback gracefully if local/stateless D1 is uninitialized
      }
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
