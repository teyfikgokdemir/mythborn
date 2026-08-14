import platform from './premium-router.js';
import {tarotSearchItems} from './tarot-library.js';
import {dreamSearchItems,glossarySearchItems} from './dream-glossary.js';
import {astrologySearchItems} from './astrology-library.js';
import {localizedBlogSearchItems} from './localized-blog.js';
import {premiumGuideSearchItems} from './premium-guides.js';
import {blogMeta,blogDates} from './blog.js';
import {corePage,coreMeta} from './core-pages.js';
import {discoveryPage,discoveryMeta,discoverySchema} from './discovery-core.js';
import {earlyAccessBanner,paywallPage,premiumState,routeRequiresPremium} from './premium-access.js';
import {spanishRouteSet,spanishRoutes,loadSpanishPage} from './spanish-edition.js';

const SITE='https://mythborn.co';
const localeInfo={
  tr:{prefix:'',html:'tr',label:'TR'},
  en:{prefix:'/en',html:'en',label:'EN'},
  el:{prefix:'/gr',html:'el',label:'GR'},
  es:{prefix:'/es',html:'es',label:'ES'}
};
const socialImage=`${SITE}/images/cinematic/social/mythborn-social-celestial.jpg`;
const socialImageAlt={
  tr:'Altın göksel halkalar içindeki hilal ve gece ufkunda mor kristal',
  en:'A crescent moon within golden celestial rings above a violet crystal on the night horizon',
  el:'Ημισέληνος μέσα σε χρυσούς ουράνιους δακτυλίους πάνω από μωβ κρύσταλλο στον νυχτερινό ορίζοντα',
  es:'Una luna creciente entre anillos celestes dorados sobre un cristal violeta en el horizonte nocturno'
};
const labels={
  tr:{
    daily:'Günlük Kart',tarot:'Tarot',astrology:'Astroloji',weekly:'Haftalık',explore:'Keşfet',account:'Hesabım',
    close:'Menüyü kapat',open:'Menüyü aç',menu:'Ana menü',tarotGroup:'Tarot',astroGroup:'Astroloji',exploreGroup:'Keşfet',accountGroup:'Hesap',
    login:'Giriş Yap',register:'Üye Ol',astroCentre:'Astroloji Merkezi',weeklyLong:'Haftalık Burç',sky:'Bugünün Gökyüzü',
    synastry:'Sinastri',moon:'Ay Takvimi',library:'Astroloji Kütüphanesi',ancient:'Kadim Gökyüzü',dreams:'Rüya Yorumları',
    numerology:'Numeroloji',blog:'Blog',tarotLibrary:'Tarot Ansiklopedisi',advanced:'Gelişmiş Astroloji',
    dreamSymbols:'Rüya Sembolleri',glossary:'Astroloji Sözlüğü',three:'3 Kart Tarot',love:'Aşk & Geri Dönüş',
    career:'Kariyer & Para',month:'30 Gün',katina:'Katina',knowledge:'BİLGİ MERKEZİ',
    knowledgeTitle:'Sembolleri ve gökyüzünü derinlemesine keşfet.',exploreIntro:'Sembolleri ve gökyüzünü keşfet.',
    knowledgeCopy:'Tarot kartları, doğum haritası, rüya sembolleri ve astroloji kavramları için kapsamlı rehberler.',
    search:'Sitede ara'
  },
  en:{
    daily:'Daily Card',tarot:'Tarot',astrology:'Astrology',weekly:'Weekly',explore:'Explore',account:'My Account',
    close:'Close menu',open:'Open menu',menu:'Main menu',tarotGroup:'Tarot',astroGroup:'Astrology',exploreGroup:'Explore',accountGroup:'Account',
    login:'Sign In',register:'Join Free',astroCentre:'Astrology Centre',weeklyLong:'Weekly Horoscope',sky:'Today’s Sky',
    synastry:'Synastry',moon:'Moon Calendar',library:'Birth Chart Library',ancient:'Ancient Sky',dreams:'Dream Interpretation',
    numerology:'Numerology',blog:'Journal',tarotLibrary:'Tarot Encyclopedia',advanced:'Advanced Astrology',
    dreamSymbols:'Dream Symbols',glossary:'Astrology Glossary',three:'3-Card Tarot',love:'Love & Reconnection',
    career:'Career & Money',month:'30-Day Reading',katina:'Katina',knowledge:'KNOWLEDGE CENTRE',
    knowledgeTitle:'Explore symbols and the sky in depth.',exploreIntro:'Explore symbols and the sky.',
    knowledgeCopy:'Comprehensive guides to Tarot cards, birth charts, dream symbols and astrology concepts.',
    search:'Search the site'
  },
  el:{
    daily:'Ημερήσια Κάρτα',tarot:'Ταρώ',astrology:'Αστρολογία',weekly:'Εβδομαδιαίο',explore:'Εξερεύνηση',account:'Ο Λογαριασμός μου',
    close:'Κλείσιμο μενού',open:'Άνοιγμα μενού',menu:'Κύριο μενού',tarotGroup:'Ταρώ',astroGroup:'Αστρολογία',exploreGroup:'Εξερεύνηση',accountGroup:'Λογαριασμός',
    login:'Σύνδεση',register:'Δωρεάν Εγγραφή',astroCentre:'Κέντρο Αστρολογίας',weeklyLong:'Εβδομαδιαίο Ωροσκόπιο',sky:'Ο Σημερινός Ουρανός',
    synastry:'Συναστρία',moon:'Σεληνιακό Ημερολόγιο',library:'Βιβλιοθήκη Γενέθλιου Χάρτη',ancient:'Αρχαίος Ουρανός',dreams:'Ερμηνεία Ονείρων',
    numerology:'Αριθμολογία',blog:'Περιοδικό',tarotLibrary:'Εγκυκλοπαίδεια Ταρώ',advanced:'Προχωρημένη Αστρολογία',
    dreamSymbols:'Σύμβολα Ονείρων',glossary:'Γλωσσάρι Αστρολογίας',three:'Ταρώ 3 Καρτών',love:'Αγάπη & Επανασύνδεση',
    career:'Καριέρα & Χρήματα',month:'Άνοιγμα 30 Ημερών',katina:'Κατίνα',knowledge:'ΚΕΝΤΡΟ ΓΝΩΣΗΣ',
    knowledgeTitle:'Εξερεύνησε σε βάθος τα σύμβολα και τον ουρανό.',exploreIntro:'Εξερεύνησε τα σύμβολα και τον ουρανό.',
    knowledgeCopy:'Αναλυτικοί οδηγοί για κάρτες Ταρώ, γενέθλιους χάρτες, σύμβολα ονείρων και έννοιες αστρολογίας.',
    search:'Αναζήτηση στον ιστότοπο'
  },
  es:{
    daily:'Carta diaria',tarot:'Tarot',astrology:'Astrología',weekly:'Semanal',explore:'Explorar',account:'Mi cuenta',
    close:'Cerrar menú',open:'Abrir menú',menu:'Menú principal',tarotGroup:'Tarot',astroGroup:'Astrología',exploreGroup:'Explorar',accountGroup:'Cuenta',
    login:'Iniciar sesión',register:'Crear cuenta',astroCentre:'Centro de astrología',weeklyLong:'Horóscopo semanal',sky:'El cielo de hoy',
    synastry:'Sinastría',moon:'Calendario lunar',library:'Biblioteca de carta natal',ancient:'Cielo antiguo',dreams:'Interpretación de sueños',
    numerology:'Numerología',blog:'Revista',tarotLibrary:'Enciclopedia del Tarot',advanced:'Astrología avanzada',
    dreamSymbols:'Símbolos de sueños',glossary:'Glosario de astrología',three:'Tarot de 3 cartas',love:'Amor y reconexión',
    career:'Carrera y dinero',month:'Lectura de 30 días',katina:'Katina',knowledge:'CENTRO DE CONOCIMIENTO',
    knowledgeTitle:'Explora los símbolos y el cielo en profundidad.',exploreIntro:'Explora los símbolos y el cielo.',
    knowledgeCopy:'Guías completas sobre cartas del Tarot, cartas natales, símbolos de sueños y conceptos de astrología.',
    search:'Buscar en el sitio',availableEnglish:'Disponible en inglés'
  }
};
const llms={
  tr:`# Mythborn\n\n> Mythborn; Tarot, doğum haritası, sinastri ve sembolik öz-refleksiyon için ücretsiz, çok dilli bir astroloji platformudur.\n\n## Ne sunar?\n- Gerçek astronomik gezegen konumlarıyla doğum haritası, güncel gökyüzü ve Sinastri hesaplamaları\n- Günlük Tarot, haftalık burç rehberleri ve ilişki/kişisel farkındalık açılımları\n- 78 kartlık Tarot ansiklopedisi, 42 başlıklı doğum haritası kütüphanesi, 51 rüya sembolü, 25 astroloji terimi ve Maya takvimleri dahil tarihsel gökyüzü rehberlerinden oluşan bilgi merkezi\n\n## Hesaplama yaklaşımı\nGezegen konumları Astronomy Engine ile jeosantrik ekliptik boylamlardan hesaplanır. Doğum saati biliniyorsa koordinat ve tarihsel saat dilimi kullanılarak Yükselen, MC ve Eşit Ev sistemi gösterilir.\n\n## Yorum ilkesi\nMythborn astronomik hesaplamayı sembolik yorumdan açıkça ayırır. İçerikler eğlence, eğitim ve kişisel farkındalık içindir; tıbbi, hukuki, finansal tavsiye veya kesin gelecek öngörüsü değildir.\n\n## Başlangıç noktaları\n- [Doğum haritası](https://mythborn.co/astroloji)\n- [Bugünün gökyüzü](https://mythborn.co/bugunun-gokyuzu)\n- [Tarot Ansiklopedisi](https://mythborn.co/tarot-kartlari)\n- [Astroloji Kütüphanesi](https://mythborn.co/astroloji-kutuphanesi)\n`,
  en:`# Mythborn\n\n> Mythborn is a free multilingual platform for Tarot, birth charts, synastry, and symbolic self-reflection.\n\n## What Mythborn offers\n- Birth-chart, current-sky, and synastry calculations based on real astronomical planetary positions\n- Daily Tarot, weekly horoscope guidance, and relationship or personal-reflection readings\n- A knowledge centre with a 78-card Tarot encyclopedia, a 42-guide Birth-chart library, a 51-entry Dream-symbol encyclopedia, and 25 astrology terms\n\n## Calculation approach\nPlanetary positions are calculated with Astronomy Engine from geocentric ecliptic longitudes. When birth time is known, Mythborn uses coordinates and historical timezone resolution to show the Ascendant, MC, and Equal House system.\n\n## Interpretation principle\nMythborn clearly separates astronomical calculation from symbolic interpretation. Content supports entertainment, education, and personal reflection; it is not medical, legal, financial, or deterministic advice.\n\n## Start here\n- [Birth chart](https://mythborn.co/en/astroloji)\n- [Today’s sky](https://mythborn.co/en/bugunun-gokyuzu)\n- [Tarot encyclopedia](https://mythborn.co/en/tarot-kartlari)\n- [Birth-chart library](https://mythborn.co/en/astroloji-kutuphanesi)\n`,
  el:`# Mythborn\n\n> Το Mythborn είναι μια δωρεάν πολύγλωσση πλατφόρμα για Ταρώ, γενέθλιους χάρτες, συναστρία και συμβολικό αυτοστοχασμό.\n\n## Τι προσφέρει\n- Υπολογισμούς γενέθλιου χάρτη, σημερινού ουρανού και συναστρίας με πραγματικές αστρονομικές θέσεις πλανητών\n- Ημερήσιο Ταρώ, εβδομαδιαία ωροσκόπια και αναγνώσεις σχέσεων ή προσωπικού στοχασμού\n- Εγκυκλοπαίδεια 78 καρτών Ταρώ, Βιβλιοθήκη γενέθλιου χάρτη με 42 οδηγούς, Εγκυκλοπαίδεια συμβόλων ονείρων με 51 καταχωρίσεις και 25 όροι αστρολογίας στο κέντρο γνώσης\n\n## Υπολογιστική προσέγγιση\nΟι πλανητικές θέσεις υπολογίζονται με το Astronomy Engine από γεωκεντρικά εκλειπτικά μήκη. Όταν η ώρα γέννησης είναι γνωστή, χρησιμοποιούνται συντεταγμένες και ιστορική ζώνη ώρας για Ωροσκόπο, Μεσουράνημα και σύστημα Ισων Οίκων.\n\n## Αρχή ερμηνείας\nΤο Mythborn διαχωρίζει ρητά τον αστρονομικό υπολογισμό από τη συμβολική ερμηνεία. Το περιεχόμενο προορίζεται για ψυχαγωγία, εκπαίδευση και προσωπικό στοχασμό· δεν αποτελεί ιατρική, νομική, οικονομική ή βέβαιη προγνωστική συμβουλή.\n\n## Ξεκίνα εδώ\n- [Γενέθλιος χάρτης](https://mythborn.co/gr/astroloji)\n- [Ο σημερινός ουρανός](https://mythborn.co/gr/bugunun-gokyuzu)\n- [Εγκυκλοπαίδεια Ταρώ](https://mythborn.co/gr/tarot-kartlari)\n- [Βιβλιοθήκη γενέθλιου χάρτη](https://mythborn.co/gr/astroloji-kutuphanesi)\n`,
  es:`# Mythborn\n\n> Mythborn es una plataforma multilingüe gratuita para Tarot, cartas natales, sinastría y reflexión simbólica.\n\n## Qué ofrece Mythborn\n- Cálculos de carta natal, cielo actual y sinastría basados en posiciones planetarias astronómicas reales\n- Tarot diario, guía de horóscopo semanal y lecturas de relaciones o reflexión personal\n- Un centro de conocimiento con una enciclopedia de Tarot de 78 cartas, una biblioteca de carta natal, símbolos de sueños y términos de astrología\n\n## Enfoque de cálculo\nLas posiciones planetarias se calculan con Astronomy Engine a partir de longitudes eclípticas geocéntricas. Cuando se conoce la hora de nacimiento, Mythborn utiliza coordenadas y resolución histórica de zona horaria para mostrar el Ascendente, el MC y el sistema de casas iguales.\n\n## Principio de interpretación\nMythborn distingue claramente el cálculo astronómico de la interpretación simbólica. El contenido sirve para entretenimiento, educación y reflexión personal; no constituye consejo médico, jurídico, financiero ni una predicción determinista.\n\n## Empieza aquí\n- [Carta natal](https://mythborn.co/es/astroloji)\n- [El cielo de hoy](https://mythborn.co/es/bugunun-gokyuzu)\n- [Enciclopedia del Tarot](https://mythborn.co/es/tarot-kartlari)\n- [Biblioteca de carta natal](https://mythborn.co/es/astroloji-kutuphanesi)\n`
};
const toolGuides={
  tr:{
    '/astroloji':{title:'Doğum haritası hakkında kısa yanıtlar',intro:'Hesaplama adımlarını, doğum saatinin etkisini ve sembolik yorumun sınırlarını açıkça bilerek haritanı daha bilinçli inceleyebilirsin.',meta:['Ücretsiz Doğum Haritası Hesapla | Gerçek Astronomik Veri — Mythborn','Ücretsiz doğum haritasını gerçek astronomik verilerle hesapla; Güneş, Ay, Yükselen, evler ve açıların nasıl üretildiğini şeffaf biçimde incele.'],faq:[['Doğum haritası nasıl hesaplanır?','Mythborn, Güneş, Ay ve gezegen konumlarını Astronomy Engine ile jeosantrik ekliptik boylamlardan hesaplar. Girilen yer ve saat, doğum anını UTC’ye çevirmek için kullanılır.'],['Doğum saatimi bilmiyorsam ne olur?','Doğum saati bilinmiyorsa Yükselen, MC ve evler gösterilmez. Tarihe dayalı Güneş, Ay ve gezegen yerleşimleri ise hesaplanmaya devam eder.'],['Doğum yeri neden gereklidir?','Doğum yeri, koordinat ve tarihsel saat dilimi bilgisiyle kaydedilen saatin doğru astronomik ana çevrilmesine yardımcı olur.'],['Bu harita kesin gelecek söyler mi?','Hayır. Astronomik konumlar hesaplanır; sembolik yorum ise düşünme ve öz-refleksiyon için bağlam sunar, kesin sonuç veya profesyonel tavsiye değildir.']],links:[['Güneş, Ay ve Yükselen rehberi','/astroloji-kutuphanesi'],['Astroloji sözlüğü','/astroloji-sozlugu'],['Bugünün gökyüzü','/bugunun-gokyuzu']]},
    '/tarot':{title:'3 kart Tarot açılımı hakkında kısa yanıtlar',intro:'Geçmiş, şimdi ve yakın gelecek konumlarını tek tek hüküm gibi değil; aynı hikâyenin birbirini etkileyen üç bölümü olarak okumak daha anlamlıdır.',meta:['Ücretsiz 3 Kart Tarot Açılımı | Geçmiş, Şimdi, Yakın Gelecek — Mythborn','Üye olmadan ücretsiz 3 kart Tarot açılımı yap. Geçmiş, şimdi ve yakın gelecek kartlarını sembolik ve kesin olmayan bir farkındalık çerçevesinde incele.'],faq:[['3 kart Tarot açılımı neyi anlatır?','İlk kart bugünü hazırlayan deneyimi, ikinci kart mevcut odağı, üçüncü kart ise eğilim sürerse belirebilecek yönü inceler. Kartlar birlikte okunur.'],['Kartlar kesin gelecek verir mi?','Hayır. Tarot sembolleri düşünme ve farkındalık için tema sunar; değişmez bir gelecek, sağlık, hukuk veya finans sonucu bildirmez.'],['Aynı soru için tekrar açılım yapabilir miyim?','Yapabilirsin; ancak aynı soruyu art arda tekrarlamak yerine ilk açılımın sende uyandırdığı düşünceyi ve somut seçeneği not etmek daha faydalı olabilir.'],['Açılım için hesap gerekli mi?','Hayır. Mythborn’daki 3 kart Tarot açılımı ücretsizdir ve hesap oluşturmadan kullanılabilir.']],links:[['Tarot Ansiklopedisi','/tarot-kartlari'],['Günlük Tarot kartı','/gunluk-kart'],['Rüya sembolleri','/ruya-sembolleri']]},
    '/sinastri':{title:'Sinastri hakkında kısa yanıtlar',intro:'Sinastri, iki kişinin doğum haritasındaki gezegen açılarını karşılaştırır. İlişkiyi tek bir puana indirmek yerine iletişim, duygu, çekim ve bağlılık temalarını birlikte düşünmeye yardımcı olur.',meta:['Ücretsiz Sinastri Hesaplama | İlişki Haritası Karşılaştırması — Mythborn','İki doğum haritasındaki gezegen açılarını gerçek astronomik verilerle karşılaştır. Sinastriyi yüzde uyum puanı yerine iletişim, duygu ve ilişki temalarıyla incele.'],faq:[['Sinastri neyi karşılaştırır?','Sinastri, iki doğum haritasındaki gezegenlerin birbirleriyle yaptığı açıları karşılaştırır ve duygu, iletişim, çekim, bağlılık ile birlikte büyüme başlıklarında temalar sunar.'],['Uyum yüzdesi veriyor musunuz?','Hayır. Tek bir yüzde ilişki kalitesini, kişilerin davranışlarını veya geleceği güvenilir biçimde temsil etmez. Mythborn bu nedenle açıları ve bağlamı gösterir.'],['Doğum saati gerekli mi?','Gezegen açıları doğum tarihi ve yerle hesaplanabilir. Doğum saati bilindiğinde Yükselen, evler ve daha yerel harita katmanları daha ayrıntılı incelenebilir.'],['Sinastri ilişkinin geleceğini söyler mi?','Hayır. Sinastri sembolik dinamikleri görünür kılar; iletişim, seçimler, sınırlar ve gerçek yaşam koşulları ilişkiyi belirleyen temel unsurlardır.']],links:[['Doğum haritasını hesapla','/astroloji'],['İlişki ve bağ temalı Tarot','/ask'],['Astroloji kütüphanesi','/astroloji-kutuphanesi']]}
  },
  en:{
    '/astroloji':{title:'Birth chart: quick answers',intro:'Understand the calculation, the role of birth time, and the boundary between astronomical data and symbolic interpretation before exploring a personal chart.',meta:['Free Birth Chart Calculator | Real Astronomical Data — Mythborn','Calculate a free birth chart with real astronomical data and explore how the Sun, Moon, Rising sign, houses and aspects are produced.'],faq:[['How is a birth chart calculated?','Mythborn calculates the Sun, Moon and planetary positions with Astronomy Engine from geocentric ecliptic longitudes. The entered place and time help convert the birth moment to UTC.'],['What if I do not know my birth time?','When time is unknown, the Rising sign, MC and houses are withheld. Date-based Sun, Moon and planetary placements can still be calculated.'],['Why is the birth place needed?','The place helps resolve coordinates and the historical time zone so that the recorded local time can be converted to the correct astronomical instant.'],['Does this chart predict a fixed future?','No. Astronomical positions are calculated; symbolic interpretation provides context for reflection, not certainty or professional advice.']],links:[['Sun, Moon and Rising guide','/astroloji-kutuphanesi'],['Astrology glossary','/astroloji-sozlugu'],['Today’s sky','/bugunun-gokyuzu']]},
    '/tarot':{title:'3-card Tarot: quick answers',intro:'Read past, present and near-future positions as connected stages of one story, not as isolated verdicts.',meta:['Free 3-Card Tarot Reading | Past, Present, Near Future — Mythborn','Use a free 3-card Tarot reading without an account. Explore past, present and near-future cards through a symbolic, non-deterministic framework.'],faq:[['What does a 3-card Tarot spread explore?','The first card considers what prepared the present, the second the current focus, and the third a possible direction if the current pattern continues. Read the cards together.'],['Do the cards predict a fixed future?','No. Tarot symbols support reflection and awareness; they do not deliver an unchangeable future, medical, legal or financial outcome.'],['Can I repeat a reading for the same question?','You can, but it is often more useful to pause with the first reading and notice the reflection or practical choice it brings forward.'],['Do I need an account?','No. Mythborn’s 3-card Tarot reading is free and can be used without creating an account.']],links:[['Tarot encyclopedia','/tarot-kartlari'],['Daily Tarot card','/gunluk-kart'],['Dream symbols','/ruya-sembolleri']]},
    '/sinastri':{title:'Synastry: quick answers',intro:'Synastry compares aspects between two birth charts. Rather than reducing a relationship to one score, it offers themes for emotion, communication, attraction and commitment.',meta:['Free Synastry Calculator | Relationship Chart Comparison — Mythborn','Compare planetary aspects between two birth charts using real astronomical data. Explore synastry through relationship themes, not a single compatibility percentage.'],faq:[['What does synastry compare?','Synastry compares planetary aspects between two birth charts and offers themes around emotion, communication, attraction, commitment and shared growth.'],['Do you give a compatibility percentage?','No. A single percentage cannot reliably represent relationship quality, behaviour or the future. Mythborn shows aspects and context instead.'],['Is birth time required?','Planetary aspects can be calculated with birth date and place. A known birth time allows more detailed consideration of the Rising sign, houses and local chart layers.'],['Does synastry predict the future of a relationship?','No. Synastry makes symbolic dynamics visible; communication, choices, boundaries and real-life circumstances remain fundamental.']],links:[['Calculate a birth chart','/astroloji'],['Relationship Tarot reading','/ask'],['Birth-chart library','/astroloji-kutuphanesi']]}
  },
  el:{
    '/astroloji':{title:'Γενέθλιος χάρτης: σύντομες απαντήσεις',intro:'Δες καθαρά τον υπολογισμό, τον ρόλο της ώρας γέννησης και το όριο ανάμεσα στα αστρονομικά δεδομένα και τη συμβολική ερμηνεία.',meta:['Δωρεάν Υπολογισμός Γενέθλιου Χάρτη | Αστρονομικά Δεδομένα — Mythborn','Υπολόγισε δωρεάν γενέθλιο χάρτη με πραγματικά αστρονομικά δεδομένα και δες πώς προκύπτουν Ήλιος, Σελήνη, Ωροσκόπος, οίκοι και όψεις.'],faq:[['Πώς υπολογίζεται ένας γενέθλιος χάρτης;','Το Mythborn υπολογίζει Ήλιο, Σελήνη και πλανήτες με το Astronomy Engine από γεωκεντρικά εκλειπτικά μήκη. Ο τόπος και η ώρα μετατρέπουν τη γέννηση σε UTC.'],['Τι γίνεται αν δεν γνωρίζω την ώρα γέννησης;','Όταν η ώρα είναι άγνωστη, δεν εμφανίζονται Ωροσκόπος, Μεσουράνημα και οίκοι. Μπορούν να υπολογιστούν στοιχεία βάσει ημερομηνίας.'],['Γιατί χρειάζεται ο τόπος γέννησης;','Ο τόπος βοηθά στον προσδιορισμό συντεταγμένων και ιστορικής ζώνης ώρας, ώστε η τοπική ώρα να μετατραπεί στη σωστή αστρονομική στιγμή.'],['Προβλέπει ο χάρτης ένα σταθερό μέλλον;','Όχι. Οι αστρονομικές θέσεις υπολογίζονται, ενώ η συμβολική ερμηνεία προσφέρει πλαίσιο στοχασμού, όχι βεβαιότητα ή επαγγελματική συμβουλή.']],links:[['Οδηγός Ήλιου, Σελήνης και Ωροσκόπου','/astroloji-kutuphanesi'],['Γλωσσάρι αστρολογίας','/astroloji-sozlugu'],['Ο σημερινός ουρανός','/bugunun-gokyuzu']]},
    '/tarot':{title:'Ταρώ 3 καρτών: σύντομες απαντήσεις',intro:'Διάβασε παρελθόν, παρόν και κοντινό μέλλον ως συνδεδεμένα στάδια μιας ιστορίας, όχι ως ξεχωριστές ετυμηγορίες.',meta:['Δωρεάν Ανάγνωση Ταρώ 3 Καρτών | Παρελθόν, Παρόν, Κοντινό Μέλλον — Mythborn','Κάνε δωρεάν άνοιγμα Ταρώ 3 καρτών χωρίς λογαριασμό. Εξερεύνησε παρελθόν, παρόν και κοντινό μέλλον σε συμβολικό, μη ντετερμινιστικό πλαίσιο.'],faq:[['Τι εξερευνά ένα άνοιγμα Ταρώ 3 καρτών;','Η πρώτη κάρτα εξετάζει τι προετοίμασε το παρόν, η δεύτερη την τωρινή εστίαση και η τρίτη μια πιθανή κατεύθυνση αν συνεχιστεί το μοτίβο.'],['Οι κάρτες προβλέπουν σταθερό μέλλον;','Όχι. Τα σύμβολα του Ταρώ υποστηρίζουν τον στοχασμό και δεν δίνουν αμετάβλητο μέλλον, ιατρικό, νομικό ή οικονομικό αποτέλεσμα.'],['Μπορώ να επαναλάβω την ανάγνωση για την ίδια ερώτηση;','Μπορείς, αλλά συχνά είναι πιο χρήσιμο να σταθείς στην πρώτη ανάγνωση και στην πρακτική επιλογή που αναδεικνύει.'],['Χρειάζομαι λογαριασμό;','Όχι. Η ανάγνωση Ταρώ 3 καρτών του Mythborn είναι δωρεάν και λειτουργεί χωρίς δημιουργία λογαριασμού.']],links:[['Εγκυκλοπαίδεια Ταρώ','/tarot-kartlari'],['Ημερήσια κάρτα Ταρώ','/gunluk-kart'],['Σύμβολα ονείρων','/ruya-sembolleri']]},
    '/sinastri':{title:'Συναστρία: σύντομες απαντήσεις',intro:'Η συναστρία συγκρίνει όψεις ανάμεσα σε δύο γενέθλιους χάρτες. Αντί για ένα σκορ, προσφέρει θέματα για συναίσθημα, επικοινωνία, έλξη και δέσμευση.',meta:['Δωρεάν Υπολογισμός Συναστρίας | Σύγκριση Χαρτών Σχέσης — Mythborn','Σύγκρινε πλανητικές όψεις ανάμεσα σε δύο γενέθλιους χάρτες με πραγματικά αστρονομικά δεδομένα. Εξέτασε τη συναστρία με θέματα σχέσης, όχι ποσοστό συμβατότητας.'],faq:[['Τι συγκρίνει η συναστρία;','Η συναστρία συγκρίνει πλανητικές όψεις ανάμεσα σε δύο γενέθλιους χάρτες και προσφέρει θέματα για συναίσθημα, επικοινωνία, έλξη, δέσμευση και κοινή ανάπτυξη.'],['Δίνετε ποσοστό συμβατότητας;','Όχι. Ένα μόνο ποσοστό δεν μπορεί να αποδώσει αξιόπιστα την ποιότητα μιας σχέσης, τη συμπεριφορά ή το μέλλον. Το Mythborn δείχνει όψεις και πλαίσιο.'],['Είναι απαραίτητη η ώρα γέννησης;','Οι πλανητικές όψεις υπολογίζονται με ημερομηνία και τόπο. Η γνωστή ώρα επιτρέπει λεπτομερέστερη εξέταση Ωροσκόπου, οίκων και τοπικών επιπέδων.'],['Προβλέπει η συναστρία το μέλλον μιας σχέσης;','Όχι. Η συναστρία κάνει ορατές συμβολικές δυναμικές· η επικοινωνία, οι επιλογές, τα όρια και οι πραγματικές συνθήκες παραμένουν θεμελιώδεις.']],links:[['Υπολογισμός γενέθλιου χάρτη','/astroloji'],['Ταρώ για σχέσεις','/ask'],['Βιβλιοθήκη γενέθλιου χάρτη','/astroloji-kutuphanesi']]}
  }
};
const toolGuide=(locale,path)=>toolGuides[locale]?.[path]||null;
const toolGuideMeta=(locale,path)=>{const guide=toolGuide(locale,path);return guide?{title:guide.meta[0],description:guide.meta[1]}:null};
const toolGuideSchema=(locale,path)=>{const guide=toolGuide(locale,path);if(!guide)return [];return [{'@context':'https://schema.org','@type':'FAQPage',mainEntity:guide.faq.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))}];};
const toolGuideSection=(locale,path)=>{const guide=toolGuide(locale,path);if(!guide)return '';const label=locale==='tr'?'KISA YANITLAR':locale==='en'?'QUICK ANSWERS':'ΣΥΝΤΟΜΕΣ ΑΠΑΝΤΗΣΕΙΣ';const explore=locale==='tr'?'İlgili rehberleri keşfet':locale==='en'?'Explore related guides':'Εξερεύνησε σχετικούς οδηγούς';return `<section class="section tool-answer-guide" data-tool-answer-guide><div class="tool-answer-intro"><p class="eyebrow">${label}</p><h2>${guide.title}</h2><p class="lead left-lead">${guide.intro}</p></div><div class="tool-answer-grid">${guide.faq.map(([question,answer])=>`<details><summary>${question}</summary><p>${answer}</p></details>`).join('')}</div><nav class="tool-answer-links" aria-label="${explore}">${guide.links.map(([label,url])=>`<a href="${href(locale,url)}">${label} <span aria-hidden="true">→</span></a>`).join('')}</nav></section>`;};
const escapeMetaContent=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const upsertMetaDescription=(html,description)=>{
  const tag=`<meta name="description" content="${escapeMetaContent(description)}">`;
  return /<meta name="description" content="[^"]*">/.test(html)
    ?html.replace(/<meta name="description" content="[^"]*">/,tag)
    :html.replace('</head>',`${tag}</head>`);
};
const localeFrom=path=>path==='/en'||path.startsWith('/en/')?'en':path==='/gr'||path.startsWith('/gr/')?'el':path==='/es'||path.startsWith('/es/')?'es':'tr';
const cleanPath=(path,locale)=>locale==='tr'?path:(path===localeInfo[locale].prefix?'/':path.slice(localeInfo[locale].prefix.length)||'/');
const href=(locale,path)=>{
  const clean=path==='/'?'':path;
  if(locale==='es'&&path!=='/arama'&&!spanishRouteSet.has(path))return `/en${clean}`||'/en';
  return `${localeInfo[locale].prefix}${clean}`||'/';
};
const turkishBlogSearchItems=()=>Object.entries(blogMeta).filter(([path])=>path.startsWith('/blog/')).map(([path,[title,description]])=>({title,description,category:'journal',path}));
const searchItems=locale=>{
  const sourceLocale=locale==='es'?'en':locale;
  return [
    ...tarotSearchItems(sourceLocale),
    ...astrologySearchItems(sourceLocale),
    ...dreamSearchItems(sourceLocale),
    ...glossarySearchItems(sourceLocale),
    ...(sourceLocale==='tr'?turkishBlogSearchItems():localizedBlogSearchItems(sourceLocale)),
    ...premiumGuideSearchItems(sourceLocale)
  ].map(item=>({...item,url:href(locale,item.path)}));
};

function exploreLinks(locale){
  const t=labels[locale];
  return [
    ['/bugunun-gokyuzu',t.sky],['/sinastri',t.synastry],['/kadim-gokyuzu',t.ancient],['/ruya-yorumlari',t.dreams],
    ['/numeroloji',t.numerology],['/ay-takvimi',t.moon],['/blog',t.blog],['/tarot-kartlari',t.tarotLibrary],
    ['/astroloji-kutuphanesi',t.library],['/advanced-astrology',t.advanced],['/ruya-sembolleri',t.dreamSymbols],
    ['/astroloji-sozlugu',t.glossary]
  ].map(([path,text])=>`<a href="${href(locale,path)}">${text}</a>`).join('')+'<a href="/bugunun-gokyuzu" hidden aria-hidden="true" tabindex="-1"></a>';
}
function desktopNav(locale){
  const t=labels[locale];
  return `<nav class="nav desktop-nav" aria-label="${t.menu}">
    <a class="nav-layer nav-layer-reading" href="${href(locale,'/gunluk-kart')}"><span>${t.daily}</span></a>
    <a class="nav-layer nav-layer-reading" href="${href(locale,'/tarot')}"><span>${t.tarot}</span></a>
    <a class="nav-layer nav-layer-sky" href="${href(locale,'/astroloji')}"><span>${t.astrology}</span></a>
    <a class="nav-layer nav-layer-sky" href="${href(locale,'/haftalik-burc')}"><span>${t.weekly}</span></a>
    <details class="desktop-explore nav-layer nav-layer-archive"><summary aria-haspopup="true" aria-expanded="false" aria-controls="desktop-explore-panel"><span>${t.explore}</span><i class="nav-chevron" aria-hidden="true"></i></summary><div class="desktop-explore-panel" id="desktop-explore-panel" role="menu"><div class="desktop-explore-intro"><small>${t.knowledge}</small><strong>${t.exploreIntro}</strong></div><div class="desktop-explore-links">${exploreLinks(locale)}</div></div></details>
  </nav>`;
}
function headerLanguage(locale,path){
  const t=locale==='tr'?'Dil':locale==='en'?'Language':locale==='el'?'Γλώσσα':'Idioma';
  const languageName=code=>code==='tr'?'Türkçe':code==='en'?'English':code==='el'?'Ελληνικά':'Español';
  const codeLabel=code=>code==='el'?'GR':code.toUpperCase();
  return `<details class="header-language"><summary aria-label="${t}"><span aria-hidden="true">◎</span><strong>${codeLabel(locale)}</strong></summary><div class="header-language-panel">${['tr','en','el','es'].map(code=>`<a href="${href(code,path)}"${code===locale?' aria-current="page"':''}><span>${codeLabel(code)}</span> <small>${languageName(code)}</small></a>`).join('')}</div></details>`;
}
function group(title,links,locale,key,order){
  const id=`mobile-group-${key}`;
  return `<section class="mobile-nav-group"><button class="mobile-group-toggle" type="button" aria-expanded="true" aria-controls="${id}"><span class="mobile-group-title"><i aria-hidden="true">${order}</i>${title}</span><span class="mobile-group-indicator" aria-hidden="true">−</span></button><div class="mobile-nav-grid" id="${id}">${links.map(([path,text])=>`<a href="${href(locale,path)}">${text}</a>`).join('')}</div></section>`;
}
function mobileLanguage(locale,path){
  const languageLabel=locale==='tr'?'Dil':locale==='en'?'Language':locale==='el'?'Γλώσσα':'Idioma';
  const languageName=code=>code==='tr'?'Türkçe':code==='en'?'English':code==='el'?'Ελληνικά':'Español';
  const codeLabel=code=>code==='el'?'GR':code.toUpperCase();
  return `<section class="mobile-language" aria-label="${languageLabel}"><div class="mobile-language-heading"><span aria-hidden="true">◎</span><strong>${languageLabel}</strong><small>MYTHBORN / GLOBAL</small></div><div class="mobile-language-grid">${['tr','en','el','es'].map(code=>`<a href="${href(code,path)}"${code===locale?' aria-current="page"':''}><span>${codeLabel(code)}</span><small>${languageName(code)}</small></a>`).join('')}</div></section>`;
}
function mobileNav(locale,path='/'){
  const t=labels[locale];
  return `<div class="mobile-menu-backdrop" data-mobile-backdrop hidden></div><nav class="mobile-nav" id="mobile-nav" aria-label="${t.menu}" aria-hidden="true"><a href="/bugunun-gokyuzu" hidden aria-hidden="true" tabindex="-1"></a>
    <div class="mobile-nav-head"><a class="brand" href="${href(locale,'/')}"><img src="/images/mythborn-emblem.png" alt=""><span>MYTHBORN</span></a><button class="mobile-nav-close" type="button" aria-label="${t.close}" data-mobile-close><span aria-hidden="true">×</span></button></div>
    <p class="mobile-nav-kicker">MYTHBORN · ${t.menu}</p>
    ${mobileLanguage(locale,path)}
    ${group(t.tarotGroup,[['/gunluk-kart',t.daily],['/tarot',t.three],['/ask',t.love],['/kariyer',t.career],['/otuz-gun',t.month],['/katina',t.katina]],locale,'tarot','01')}
    ${group(t.astroGroup,[['/astroloji',t.astroCentre],['/haftalik-burc',t.weeklyLong],['/bugunun-gokyuzu',t.sky],['/sinastri',t.synastry],['/ay-takvimi',t.moon],['/astroloji-kutuphanesi',t.library]],locale,'astrology','02')}
    ${group(t.exploreGroup,[['/kadim-gokyuzu',t.ancient],['/ruya-yorumlari',t.dreams],['/numeroloji',t.numerology],['/blog',t.blog],['/tarot-kartlari',t.tarotLibrary],['/ruya-sembolleri',t.dreamSymbols],['/astroloji-sozlugu',t.glossary]],locale,'explore','03')}
  </nav>`;
}
function knowledgeHub(locale){
  const t=labels[locale],items=[
    ['78',t.tarotLibrary,'/tarot-kartlari'],['42',t.library,'/astroloji-kutuphanesi'],['51',t.dreamSymbols,'/ruya-sembolleri'],
    ['25',t.glossary,'/astroloji-sozlugu'],['✦',t.advanced,'/advanced-astrology'],['⌕',t.search,'/arama']
  ];
  return `<section class="section knowledge-hub" data-layer="archive"><p class="eyebrow">${t.knowledge}</p><h2>${t.knowledgeTitle}</h2><p class="lead left-lead">${t.knowledgeCopy}</p><div class="knowledge-hub-grid">${items.map(([tag,title,path])=>{const englishOnly=locale==='es'&&!spanishRouteSet.has(path);return `<a class="knowledge-hub-card" href="${href(locale,path)}"><small>${tag}</small><h3>${title}</h3>${englishOnly?`<em class="locale-note" lang="es">${t.availableEnglish}</em>`:''}<span>${t.explore} →</span></a>`}).join('')}</div></section>`;
}
function homePathwaysSchema(locale){
  const items={
    tr:[['Bugünün Gökyüzü','Gerçek zamanlı gezegen konumları ve günün belirgin açıları.','/bugunun-gokyuzu'],['Doğum Haritası','Gerçek astronomik verilerle doğum haritası hesaplama.','/astroloji'],['3 Kart Tarot','Geçmiş, şimdi ve yakın gelecek için ücretsiz sembolik açılım.','/tarot'],['Haftalık Burç','On iki burç için haftalık enerji ve farkındalık rehberi.','/haftalik-burc']],
    en:[['Today’s Sky','Real-time planetary positions and the day’s notable aspects.','/bugunun-gokyuzu'],['Birth Chart','Birth-chart calculation based on real astronomical data.','/astroloji'],['3-Card Tarot','A free symbolic reading for past, present and near future.','/tarot'],['Weekly Horoscope','Weekly energy and reflection guidance for all twelve signs.','/haftalik-burc']],
    el:[['Ο Σημερινός Ουρανός','Θέσεις πλανητών σε πραγματικό χρόνο και οι κύριες όψεις της ημέρας.','/bugunun-gokyuzu'],['Γενέθλιος Χάρτης','Υπολογισμός γενέθλιου χάρτη με πραγματικά αστρονομικά δεδομένα.','/astroloji'],['Ταρώ 3 Καρτών','Δωρεάν συμβολική ανάγνωση για παρελθόν, παρόν και κοντινό μέλλον.','/tarot'],['Εβδομαδιαίο Ωροσκόπιο','Εβδομαδιαία καθοδήγηση ενέργειας και στοχασμού για τα δώδεκα ζώδια.','/haftalik-burc']],
    es:[['El cielo de hoy','Posiciones planetarias en tiempo real y aspectos destacados del día.','/bugunun-gokyuzu'],['Carta natal','Cálculo de carta natal basado en datos astronómicos reales.','/astroloji'],['Tarot de 3 cartas','Lectura simbólica gratuita para pasado, presente y futuro cercano.','/tarot'],['Horóscopo semanal','Guía semanal de energía y reflexión para los doce signos.','/haftalik-burc']]
  }[locale];
  return {'@context':'https://schema.org','@type':'ItemList','@id':`${SITE}${href(locale,'/')}#essential-paths`,name:locale==='tr'?'Mythborn başlangıç yolları':locale==='en'?'Mythborn essential paths':locale==='el'?'Βασικές διαδρομές Mythborn':'Rutas esenciales de Mythborn',numberOfItems:items.length,itemListElement:items.map(([name,description,path],position)=>({'@type':'ListItem',position:position+1,item:{'@type':'Thing',name,description,url:`${SITE}${href(locale,path)}`}}))};
}

function languageSwitcher(locale,path){
  return `<nav class="language-switcher" aria-label="Language"><a href="${href('tr',path)}"${locale==='tr'?' aria-current="page"':''}>TR</a><a href="${href('en',path)}"${locale==='en'?' aria-current="page"':''}>EN</a><a href="${href('el',path)}"${locale==='el'?' aria-current="page"':''}>GR</a><a href="${href('es',path)}"${locale==='es'?' aria-current="page"':''}>ES</a></nav>`;
}
function sponsorBand(locale){
  const copy={
    tr:{label:'SPONSORLU BAĞLANTILAR',caption:'SEÇİLMİŞ MARKALAR · 2026',visit:'Ziyaret et',items:[['TEYFİK GÖKDEMİR','Uluslararası ticaret ve stratejik ortaklıklar','https://teyfikgokdemir.com/'],['CTSEG','Uluslararası ticaret','https://ctseg.com.tr/'],['QCT STUDIO','Dijital tasarım ve teknoloji','https://qctstudio.com/'],['QCT COMMERCE','Ticaret operasyonları','https://qctcommerce.com/']]},
    en:{label:'SPONSORED LINKS',caption:'SELECTED BRANDS · 2026',visit:'Visit',items:[['TEYFİK GÖKDEMİR','International trade and strategic partnerships','https://teyfikgokdemir.com/'],['CTSEG','International trade','https://ctseg.com.tr/'],['QCT STUDIO','Digital design & technology','https://qctstudio.com/'],['QCT COMMERCE','Commerce operations','https://qctcommerce.com/']]},
    el:{label:'ΧΟΡΗΓΟΥΜΕΝΟΙ ΣΥΝΔΕΣΜΟΙ',caption:'ΕΠΙΛΕΓΜΕΝΕΣ ΜΑΡΚΕΣ · 2026',visit:'Επίσκεψη',items:[['TEYFİK GÖKDEMİR','Διεθνές εμπόριο και στρατηγικές συνεργασίες','https://teyfikgokdemir.com/'],['CTSEG','Διεθνές εμπόριο','https://ctseg.com.tr/'],['QCT STUDIO','Ψηφιακός σχεδιασμός και τεχνολογία','https://qctstudio.com/'],['QCT COMMERCE','Εμπορικές λειτουργίες','https://qctcommerce.com/']]},
    es:{label:'ENLACES PATROCINADOS',caption:'MARCAS SELECCIONADAS · 2026',visit:'Visitar',items:[['TEYFİK GÖKDEMİR','Comercio internacional y alianzas estratégicas','https://teyfikgokdemir.com/'],['CTSEG','Comercio internacional','https://ctseg.com.tr/'],['QCT STUDIO','Diseño digital y tecnología','https://qctstudio.com/'],['QCT COMMERCE','Operaciones comerciales','https://qctcommerce.com/']]}
  }[locale];
  const item=([name,category,url],clone=false)=>`<a class="sponsor-marquee-item sponsor-${name.toLowerCase().replaceAll(' ','-')}" href="${url}" target="_blank" rel="noopener noreferrer"${clone?' tabindex="-1"':''} aria-label="${name} — ${category}"><small>${category}</small><strong>${name}</strong><span>${copy.visit} <b aria-hidden="true">↗</b></span></a>`;
  const items=copy.items.map(entry=>item(entry)).join('');
  const clonedItems=copy.items.map(entry=>item(entry,true)).join('');
  return `<aside class="sponsor-band" aria-label="${copy.label}"><div class="sponsor-band-caption"><span>${copy.label}</span><i aria-hidden="true"></i><small>${copy.caption}</small></div><div class="sponsor-marquee"><div class="sponsor-marquee-track"><div class="sponsor-marquee-group">${items}</div><div class="sponsor-marquee-group" aria-hidden="true">${clonedItems}</div></div></div></aside>`;
}
function footer(locale){
  const copy={
    tr:{tag:'Tarot, astroloji ve sembolik farkındalık için etik ve ücretsiz bir keşif alanı.',readings:'Açılımlar',learn:'Bilgi Merkezi',legal:'Yasal',privacy:'Gizlilik Politikası',terms:'Kullanım Koşulları',cookies:'Çerez Politikası',manage:'Çerez tercihlerini yönet',notice:'KVKK Aydınlatma Metni',rights:'Tüm hakları saklıdır.',note:'Eğlence, eğitim ve kişisel farkındalık amaçlıdır.'},
    en:{tag:'An ethical, free space for Tarot, astrology and symbolic self-reflection.',readings:'Readings',learn:'Knowledge Centre',legal:'Legal',privacy:'Privacy Policy',terms:'Terms of Use',cookies:'Cookie Policy',manage:'Manage cookie preferences',notice:'Turkish Data Protection Notice',rights:'All rights reserved.',note:'For entertainment, education and personal reflection.'},
    el:{tag:'Ένας δωρεάν και δεοντολογικός χώρος για Ταρώ, αστρολογία και συμβολικό αυτοστοχασμό.',readings:'Αναγνώσεις',learn:'Κέντρο Γνώσης',legal:'Νομικά',privacy:'Πολιτική Απορρήτου',terms:'Όροι Χρήσης',cookies:'Πολιτική Cookies',manage:'Διαχείριση προτιμήσεων cookies',notice:'Ενημέρωση Προστασίας Δεδομένων Τουρκίας',rights:'Με επιφύλαξη παντός δικαιώματος.',note:'Για ψυχαγωγία, εκπαίδευση και προσωπικό στοχασμό.'},
    es:{tag:'Un espacio ético y gratuito para el Tarot, la astrología y la reflexión simbólica.',readings:'Lecturas',learn:'Centro de conocimiento',legal:'Legal',privacy:'Política de privacidad',terms:'Términos de uso',cookies:'Política de cookies',manage:'Gestionar preferencias de cookies',notice:'Aviso turco de protección de datos',rights:'Todos los derechos reservados.',note:'Para entretenimiento, educación y reflexión personal.'}
  }[locale],t=labels[locale];
  const links=(items)=>items.map(([path,text])=>`<a href="${href(locale,path)}">${text}</a>`).join('');
  return `<footer class="site-footer"><div class="site-footer-grid"><div class="site-footer-brand"><a class="site-footer-logo" href="${href(locale,'/')}"><img src="/images/mythborn-emblem.png" alt=""><span>MYTHBORN</span></a><p>${copy.tag}</p><a href="mailto:info@mythborn.co">info@mythborn.co</a></div><div class="site-footer-column"><h3>${copy.readings}</h3><nav>${links([['/gunluk-kart',t.daily],['/tarot',t.three],['/ask',t.love],['/katina',t.katina]])}</nav></div><div class="site-footer-column"><h3>${copy.learn}</h3><nav>${links([['/astroloji-kutuphanesi',t.library],['/tarot-kartlari',t.tarotLibrary],['/ruya-sembolleri',t.dreamSymbols],['/astroloji-sozlugu',t.glossary],['/blog',t.blog]])}</nav></div><div class="site-footer-column"><h3>${copy.legal}</h3><nav>${links([['/gizlilik',copy.privacy],['/kullanim-kosullari',copy.terms],['/cerezler',copy.cookies],['/kvkk',copy.notice]])}<button type="button" data-consent-manage>${copy.manage}</button></nav></div><figure class="site-footer-guardian" aria-hidden="true"><img src="/images/mikael_angel.png" width="1254" height="1254" loading="lazy" decoding="async" alt=""></figure></div><div class="site-footer-bottom"><span>© 2026 Mythborn. ${copy.rights}</span><span>${copy.note}</span></div></footer>`;
}
function legalMain(locale,path){
  const content={
    tr:{
      '/gizlilik':['Gizlilik Politikası','Mythborn, hesap ve güvenlik için gerekli verileri yalnız belirtilen amaçlarla işler. Veriler üçüncü taraflara reklam amacıyla satılmaz. Erişim, düzeltme veya silme talebi için info@mythborn.co adresine yazabilirsiniz.'],
      '/kvkk':['KVKK Aydınlatma Metni','Bu metin, Türkiye’de 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamındaki veri işleme faaliyetlerini açıklar. Kimlik ve iletişim verileri üyelik, güvenlik ve yasal yükümlülükler için sınırlı biçimde işlenir.'],
      '/kullanim-kosullari':['Kullanım Koşulları','Mythborn içerikleri eğlence, eğitim ve kişisel farkındalık amaçlıdır. Kesin gelecek bilgisi, tıbbi, hukuki veya finansal tavsiye sunmaz. Hizmeti hukuka uygun ve başkalarının haklarına saygılı biçimde kullanmanız gerekir.'],
      '/cerezler':['Çerez Politikası','Zorunlu çerezler oturum, güvenlik ve tercihlerin korunması için kullanılır. İsteğe bağlı analitik çerezler yalnız açık tercihinizle etkinleşir; tercihinizi tarayıcınızdan istediğiniz zaman sıfırlayabilirsiniz.']
    },
    en:{
      '/gizlilik':['Privacy Policy','Mythborn processes only the data needed for accounts, security and the purposes described here. Personal data is not sold for advertising. You may request access, correction or deletion at info@mythborn.co.'],
      '/kvkk':['Turkish Data Protection Notice','This notice explains processing governed by Turkey’s Personal Data Protection Law No. 6698 (KVKK). It is not presented as local UK, EU or US law. Identity and contact data are processed only for membership, security and legal obligations.'],
      '/kullanim-kosullari':['Terms of Use','Mythborn content is for entertainment, education and personal reflection. It does not provide deterministic predictions or medical, legal or financial advice. You must use the service lawfully and respect the rights of others.'],
      '/cerezler':['Cookie Policy','Essential cookies support sessions, security and saved preferences. Optional analytics cookies are enabled only with your choice, which you can reset in your browser at any time.']
    },
    el:{
      '/gizlilik':['Πολιτική Απορρήτου','Το Mythborn επεξεργάζεται μόνο τα δεδομένα που απαιτούνται για λογαριασμούς, ασφάλεια και τους σκοπούς που περιγράφονται εδώ. Τα προσωπικά δεδομένα δεν πωλούνται για διαφήμιση. Για πρόσβαση, διόρθωση ή διαγραφή επικοινωνήστε στο info@mythborn.co.'],
      '/kvkk':['Ενημέρωση Προστασίας Δεδομένων Τουρκίας','Η παρούσα ενημέρωση αφορά την επεξεργασία βάσει του τουρκικού Νόμου 6698 περί Προστασίας Προσωπικών Δεδομένων (KVKK). Δεν παρουσιάζεται ως ελληνική ή ενωσιακή νομοθεσία.'],
      '/kullanim-kosullari':['Όροι Χρήσης','Το περιεχόμενο προορίζεται για ψυχαγωγία, εκπαίδευση και προσωπικό στοχασμό. Δεν παρέχει βέβαιες προβλέψεις ούτε ιατρικές, νομικές ή οικονομικές συμβουλές.'],
      '/cerezler':['Πολιτική Cookies','Τα απαραίτητα cookies υποστηρίζουν συνεδρίες, ασφάλεια και αποθηκευμένες προτιμήσεις. Τα προαιρετικά αναλυτικά cookies ενεργοποιούνται μόνο με την επιλογή σας.']
    },
    es:{
      '/gizlilik':['Política de privacidad','Mythborn procesa únicamente los datos necesarios para las cuentas, la seguridad y los fines descritos. Los datos personales no se venden con fines publicitarios. Puedes solicitar acceso, corrección o eliminación en info@mythborn.co.'],
      '/kvkk':['Aviso turco de protección de datos','Este aviso explica el tratamiento regido por la Ley turca de Protección de Datos Personales n.º 6698 (KVKK). No se presenta como legislación local española o latinoamericana.'],
      '/kullanim-kosullari':['Términos de uso','El contenido de Mythborn es para entretenimiento, educación y reflexión personal. No ofrece predicciones deterministas ni asesoramiento médico, jurídico o financiero.'],
      '/cerezler':['Política de cookies','Las cookies esenciales respaldan las sesiones, la seguridad y las preferencias guardadas. Las cookies analíticas opcionales solo se activan con tu elección.']
    }
  }[locale][path];
  return `<main id="ana-icerik"><section class="section legal-page"><p class="eyebrow">MYTHBORN</p><h1>${content[0]}</h1><p class="lead left-lead">${content[1]}</p><h2>${locale==='tr'?'İletişim':locale==='en'?'Contact':locale==='el'?'Επικοινωνία':'Contacto'}</h2><p><a href="mailto:info@mythborn.co">info@mythborn.co</a></p></section></main>`;
}
function notFoundPage(locale){
  const t={
    tr:['Sayfa bulunamadı','Aradığınız sayfa burada değil.','Ana sayfaya dön'],
    en:['Page not found','The page you requested is not here.','Return home'],
    el:['Η σελίδα δεν βρέθηκε','Η σελίδα που ζητήσατε δεν υπάρχει εδώ.','Επιστροφή στην αρχική'],
    es:['Página no encontrada','La página solicitada no está disponible aquí.','Volver al inicio']
  }[locale];
  return `<!doctype html><html lang="${localeInfo[locale].html}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>404 — Mythborn</title><link rel="stylesheet" href="/app.css"><link rel="stylesheet" href="/final.css"></head><body><div class="shell"><header class="topbar"><a class="brand" href="${href(locale,'/')}"><img src="/images/mythborn-emblem.png" alt=""><span>MYTHBORN</span></a>${desktopNav(locale)}</header><main id="ana-icerik"><section class="section"><h1>${t[0]}</h1><p>${t[1]}</p><a class="btn btn-primary" href="${href(locale,'/')}">${t[2]}</a></section></main>${footer(locale)}</div></body></html>`;
}
function searchPage(locale){
  const t=labels[locale],title=t.search;
  const schema=JSON.stringify({'@context':'https://schema.org','@type':'WebSite',name:'Mythborn',url:SITE,potentialAction:{'@type':'SearchAction',target:`${SITE}${href(locale,'/arama')}?q={search_term_string}`,'query-input':'required name=search_term_string'}});
  return `<!doctype html><html lang="${localeInfo[locale].html}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} — Mythborn</title><meta name="description" content="${t.knowledgeCopy}"><link rel="canonical" href="${SITE}${href(locale,'/arama')}"><link rel="stylesheet" href="/app.css"><link rel="stylesheet" href="/final.css"><link rel="stylesheet" href="/mobile-menu-clean.css"><script type="application/ld+json">${schema}</script></head><body><div class="shell"><header class="topbar"><a class="brand" href="${href(locale,'/')}"><img src="/images/mythborn-emblem.png" alt=""><span>MYTHBORN</span></a>${desktopNav(locale)}${headerLanguage(locale,'/arama')}<button class="mobile-menu-button" type="button" aria-label="${t.open}" aria-expanded="false" aria-controls="mobile-nav"><span></span></button></header>${mobileNav(locale,'/arama')}<main id="ana-icerik"><section class="section search-page"><p class="eyebrow">${t.knowledge}</p><h1>${title}</h1><form role="search" data-site-search><label>${title}<input type="search" name="q" autocomplete="off"></label><label>${t.exploreGroup}<select name="category"><option value="">${t.exploreGroup}</option><option value="tarot">${t.tarot}</option><option value="astrology">${t.astrology}</option><option value="dream">${t.dreams}</option><option value="journal">${t.blog}</option></select></label><button class="btn btn-primary" type="submit">${title}</button></form><div class="search-results" aria-live="polite" data-search-results></div></section></main>${footer(locale)}</div><script>window.MYTHBORN_LOCALE=${JSON.stringify(locale)}</script><script src="/search.js" defer></script><script src="/shell.js" defer></script></body></html>`;
}
function decorate(html,locale,path,accessState,localizedPage=null){
  const t=labels[locale];
  if(localizedPage){
    const localizedMain=localizedPage.main.replace(/(href|action)="\/en(\/[^"?#]*)?(["?#][^"]*)?"/g,(_match,attribute,route='',suffix='')=>`${attribute}="${href('es',route||'/')}${suffix}"`);
    html=html.replace(/<title>[\s\S]*?<\/title>/i,`<title>${escapeMetaContent(localizedPage.title)}</title>`)
      .replace(/<meta name="description" content="[^"]*">/i,`<meta name="description" content="${escapeMetaContent(localizedPage.description)}">`)
      .replace(/<main\b[\s\S]*?<\/main>/i,localizedMain)
      .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g,'')
      .replace(/window\.MYTHBORN_LOCALE=[^;]*;/g,`window.MYTHBORN_LOCALE=${JSON.stringify(locale)};`);
  }
  html=html.replace(/\/el(?=\/|["?#])/g,'/gr').replaceAll('>EL<','>GR<');
  html=html.replace(/<a\b([^>]*class="(?:brand|site-footer-logo)"[^>]*)>/g,(_match,attributes)=>`<a${attributes.replace(/href="[^"]*"/,`href="${href(locale,'/')}"`)}>`);
  html=html.replace(/<html lang="[^"]*"/,`<html lang="${localeInfo[locale].html}"`);
  html=html.replace(/<nav class="nav(?: [^"]*)?"[\s\S]*?<\/nav>/,desktopNav(locale));
  html=html.replace(/<footer\b[\s\S]*?<\/footer>/,footer(locale));
  const localizedMain=locale==='es'?null:(corePage(locale,path)||discoveryPage(locale,path));
  if(localizedMain&&!html.includes('data-premium-paywall'))html=html.replace(/<main\b[\s\S]*?<\/main>/,localizedMain);
  if(['/gizlilik','/kvkk','/kullanim-kosullari','/cerezler'].includes(path))html=html.replace(/<main\b[\s\S]*?<\/main>/,legalMain(locale,path));
  if(!html.includes('<header')){
    const sharedHeader=`<div class="shell"><header class="topbar"><a class="brand" href="${href(locale,'/')}"><img src="/images/mythborn-emblem.png" alt=""><span>MYTHBORN</span></a>${desktopNav(locale)}${headerLanguage(locale,path)}<button class="mobile-menu-button" type="button" aria-label="${t.open}" aria-expanded="false" aria-controls="mobile-nav"><span></span></button></header>${mobileNav(locale,path)}`;
    html=html.replace(/<body([^>]*)>/,`<body$1>${sharedHeader}`).replace('</body>','</div></body>');
  }
  if(!html.includes('desktop-nav'))html=html.replace('</header>',`${desktopNav(locale)}</header>`);
  if(!html.includes('header-language'))html=html.replace('</header>',`${headerLanguage(locale,path)}</header>`);
  if(!html.includes('mobile-menu-button'))html=html.replace('</header>',`<button class="mobile-menu-button" type="button" aria-label="${t.open}" aria-expanded="false" aria-controls="mobile-nav"><span></span></button></header>${mobileNav(locale,path)}`);
  if(!html.includes('site-footer'))html=html.replace('</main>',`</main>${footer(locale)}`);
  html=html.replace(/<nav class="(?:language-switcher|lang)"[\s\S]*?<\/nav>/g,'');
  if(!html.includes('skip-link'))html=html.replace(/<body([^>]*)>/,`<body$1><a class="skip-link" href="#ana-icerik">${locale==='tr'?'Ana içeriğe geç':locale==='en'?'Skip to main content':locale==='el'?'Μετάβαση στο κύριο περιεχόμενο':'Saltar al contenido principal'}</a>`);
  html=html.replace(/<body([^>]*)>/,`<body$1 data-route="${path}">`);
  const accessBanner=earlyAccessBanner(locale,accessState);
  if(accessBanner&&!html.includes('data-early-access'))html=html.replace(/<body([^>]*)>/,`<body$1>${accessBanner}`);
  html=html.replace(/<main(?![^>]*\bid=)([^>]*)>/,`<main id="ana-icerik"$1>`);
  if(path==='/'&&!html.includes('knowledge-hub'))html=html.replace('</main>',`${knowledgeHub(locale)}</main>`);
  const answerGuide=toolGuideSection(locale,path);
  if(answerGuide&&!html.includes('data-tool-answer-guide'))html=html.replace('</main>',`${answerGuide}</main>`);
  if(!html.includes('sponsor-band'))html=html.replace('<footer class="site-footer">',`${sponsorBand(locale)}<footer class="site-footer">`);
  const canonical=`${SITE}${href(locale,path)}`;
  const localizedMeta=locale==='es'?null:(toolGuideMeta(locale,path)||coreMeta(locale,path)||discoveryMeta(locale,path));
  const pageMeta=localizedMeta||(localizedPage?{title:localizedPage.title,description:localizedPage.description}:null);
  if(pageMeta){
    html=html.replace(/<title>[^<]*<\/title>/,`<title>${pageMeta.title}</title>`);
    html=upsertMetaDescription(html,pageMeta.description);
    const localizedSchema={'@context':'https://schema.org','@type':'WebPage',name:pageMeta.title,headline:pageMeta.title,description:pageMeta.description,url:canonical,inLanguage:localeInfo[locale].html,isPartOf:{'@type':'WebSite',name:'Mythborn',url:SITE}};
    const extraSchemas=[...(discoverySchema(locale,path)||[]),...toolGuideSchema(locale,path),...(path==='/'?[homePathwaysSchema(locale)]:[])];
    html=html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g,'').replace('</head>',`<script type="application/ld+json">${JSON.stringify(localizedSchema)}</script>${extraSchemas.map(schema=>`<script type="application/ld+json">${JSON.stringify(schema)}</script>`).join('')}</head>`);
  }
  const documentTitle=html.match(/<title>([^<]*)<\/title>/)?.[1]||'Mythborn';
  const documentDescription=html.match(/<meta name="description" content="([^"]*)">/)?.[1]||labels[locale].knowledgeCopy;
  const pageTitle=locale==='tr'?(html.match(/<meta property="og:title" content="([^"]*)">/)?.[1]||documentTitle):documentTitle;
  const pageDescription=locale==='tr'?(html.match(/<meta property="og:description" content="([^"]*)">/)?.[1]||documentDescription):documentDescription;
  const heroPreload=path==='/'?'<link rel="preload" as="image" type="image/avif" href="/images/cinematic/home/hero-celestial-1440.avif" imagesrcset="/images/cinematic/home/hero-celestial-640.avif 640w, /images/cinematic/home/hero-celestial-960.avif 960w, /images/cinematic/home/hero-celestial-1440.avif 1440w" imagesizes="100vw" fetchpriority="high">':'';
  const criticalAccessCss=`<style>html{scrollbar-gutter:stable}${path==='/'?'.premium-home-hero{display:grid!important;grid-template-columns:minmax(0,.82fr) minmax(390px,1.18fr)!important;gap:34px;align-items:center!important}.premium-home-hero>.hero-sky-card{min-height:744px;align-self:start}@media(max-width:1000px){.premium-home-hero{grid-template-columns:1fr!important}.premium-home-hero>.hero-sky-card{min-height:0}}':''}</style>`;
  const hasSpanish=spanishRouteSet.has(path);
  const alternateLinks=`<link rel="alternate" hreflang="tr" href="${SITE}${href('tr',path)}"><link rel="alternate" hreflang="en" href="${SITE}${href('en',path)}"><link rel="alternate" hreflang="el" href="${SITE}${href('el',path)}">${hasSpanish?`<link rel="alternate" hreflang="es" href="${SITE}${href('es',path)}">`:''}<link rel="alternate" hreflang="x-default" href="${SITE}${href('tr',path)}">`;
  html=html
    .replace(/<link rel="canonical" href="[^"]*">/g,'')
    .replace(/<link rel="alternate" hreflang="[^"]+" href="[^"]*">/g,'')
    .replace(/<meta (?:property|name)="(?:og:title|og:description|og:image(?::(?:width|height|alt))?|og:locale|twitter:image(?::alt)?|twitter:title|twitter:description)"[^>]*>/g,'')
    .replace('</head>',`${criticalAccessCss}<link rel="canonical" href="${canonical}">${alternateLinks}<link rel="stylesheet" href="/mobile-menu-clean.css"><link rel="stylesheet" href="/cinematic.css">${path==='/'?'<link rel="stylesheet" href="/home-experience.css">':''}${heroPreload}<meta property="og:locale" content="${locale==='tr'?'tr_TR':locale==='en'?'en_US':locale==='el'?'el_GR':'es_ES'}"><meta property="og:title" content="${pageTitle}"><meta property="og:description" content="${pageDescription}"><meta property="og:image" content="${socialImage}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="${socialImageAlt[locale]}"><meta name="twitter:title" content="${pageTitle}"><meta name="twitter:description" content="${pageDescription}"><meta name="twitter:image" content="${socialImage}"><meta name="twitter:image:alt" content="${socialImageAlt[locale]}"></head>`);
  if(!html.includes('SearchAction'))html=html.replace('</head>',`<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@type':'WebSite',name:'Mythborn',url:SITE,potentialAction:{'@type':'SearchAction',target:`${SITE}${href(locale,'/arama')}?q={search_term_string}`,'query-input':'required name=search_term_string'}})}</script></head>`);
  html=html.replace('</head>',`<script>window.MYTHBORN_LOCALE=${JSON.stringify(locale)}</script></head>`);
  const needsDiscoveryClient=locale==='es'
    ?['/bugunun-gokyuzu','/ay-takvimi','/sinastri'].includes(path)
    :Boolean(discoveryPage(locale,path));
  if(locale!=='tr'&&needsDiscoveryClient){
    html=html.replace(/<script src="\/(?:discover|sky|synastry)\.js" defer><\/script>/g,'');
    html=html.replace('</body>','<script src="/discovery-localized.js" defer></script></body>');
  }
  if(!html.includes('/shell.js'))html=html.replace('</body>','<script src="/shell.js" defer></script></body>');
  if(path==='/'&&!html.includes('/home-sky.js'))html=html.replace('</body>','<script type="module" src="/home-sky.js"></script></body>');
  if(!html.includes('/cinematic.js'))html=html.replace('</body>','<script src="/cinematic.js" defer></script></body>');
  if(!html.includes('/refinement.css'))html=html.replace('</head>','<style>@media(max-width:560px){.tarot-lib .tarot-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}}</style><link rel="stylesheet" href="/refinement.css"><link rel="stylesheet" href="/premium-free.css"></head>');
  if(!html.includes('/refinement.js'))html=html.replace('</body>','<script src="/refinement.js" defer></script></body>');
  html=html.replace(/<img src="\/images\/mythborn-emblem\.png" alt=""(?:\s+[^>]*)?>/g,'<img src="/images/mythborn-emblem.png" alt="" width="275" height="257" decoding="async">');
  return html;
}

export default {
  async fetch(request,env,ctx){
    const incoming=new URL(request.url);
    if(incoming.pathname==='/el'||incoming.pathname.startsWith('/el/')){
      incoming.pathname='/gr'+incoming.pathname.slice(3);
      return Response.redirect(incoming.toString(),301);
    }
    if(incoming.pathname==='/llms.el.txt')return Response.redirect(`${SITE}/llms.gr.txt`,301);
    if(incoming.pathname==='/llms.txt')return new Response(llms.tr,{headers:{'content-type':'text/plain; charset=utf-8','cache-control':'public, max-age=3600','x-content-type-options':'nosniff'}});
    if(incoming.pathname==='/llms.en.txt')return new Response(llms.en,{headers:{'content-type':'text/plain; charset=utf-8','cache-control':'public, max-age=3600','x-content-type-options':'nosniff'}});
    if(incoming.pathname==='/llms.gr.txt')return new Response(llms.el,{headers:{'content-type':'text/plain; charset=utf-8','cache-control':'public, max-age=3600','x-content-type-options':'nosniff'}});
    if(incoming.pathname==='/llms.es.txt')return new Response(llms.es,{headers:{'content-type':'text/plain; charset=utf-8','cache-control':'public, max-age=3600','x-content-type-options':'nosniff'}});
    const accessState=premiumState(env,new Date());
    if(incoming.pathname==='/api/search-index'){
      const requested=incoming.searchParams.get('locale'),locale=requested==='en'?'en':requested==='el'||requested==='gr'?'el':requested==='es'?'es':'tr';
      return new Response(JSON.stringify({locale,count:searchItems(locale).length,items:searchItems(locale)}),{headers:{'content-type':'application/json; charset=utf-8','cache-control':'public, max-age=3600'}});
    }
    if(['/shell.js','/search.js','/home-sky.js','/live-sky-model.js','/home-experience.css','/premium-access.js','/premium-access.css','/paywall.css','/discovery-localized.js','/mobile-menu-clean.css','/cinematic.js','/cinematic.css','/refinement.js','/refinement.css','/premium-free.css'].includes(incoming.pathname))return env.ASSETS.fetch(request);
    if(incoming.pathname==='/weekly.js'){
      const asset=await env.ASSETS.fetch(request);
      return new Response((await asset.text()).replaceAll("startsWith('/el')","startsWith('/gr')"),{status:asset.status,headers:asset.headers});
    }
    if(incoming.pathname==='/menu.js'){
      const asset=await env.ASSETS.fetch(request);
      const script=(await asset.text())
        .replace("if(nav&&!nav.querySelector('[href=\"/bugunun-gokyuzu\"]'))","if(false&&nav&&!nav.querySelector('[href=\"/bugunun-gokyuzu\"]'))")
        .replace("if(mobile&&!mobile.querySelector('[href=\"/bugunun-gokyuzu\"]'))","if(false&&mobile&&!mobile.querySelector('[href=\"/bugunun-gokyuzu\"]'))")
        .replace("const home=document.querySelector('main.home');if(home){","const home=document.querySelector('main.home:not([data-server-home])');if(home){");
      return new Response(script,{status:asset.status,headers:asset.headers});
    }
    const locale=localeFrom(incoming.pathname),clean=cleanPath(incoming.pathname,locale);
    if(locale==='es'&&clean!=='/arama'&&!spanishRouteSet.has(clean))return Response.redirect(`${SITE}/en${clean}`,302);
    if(clean==='/arama')return new Response(decorate(searchPage(locale),locale,clean,accessState),{headers:{'content-type':'text/html; charset=utf-8','content-language':localeInfo[locale].html}});
    if(await routeRequiresPremium(clean,accessState))return new Response(decorate(paywallPage(locale,clean),locale,clean,accessState),{status:200,headers:{'content-type':'text/html; charset=utf-8','content-language':localeInfo[locale].html,'cache-control':'private, no-store'}});
    let forwarded=request;
    if(locale==='el'||locale==='es'){
      const internal=new URL(request.url);
      internal.pathname=`/${locale==='el'?'el':'en'}${clean}`;
      forwarded=new Request(internal.toString(),request);
    }
    const response=await platform.fetch(forwarded,env,ctx);
    const type=response.headers.get('content-type')||'';
    if(!type.includes('text/html')){
      if(incoming.pathname==='/sitemap.xml'){
        const xml=(await response.text()).replace(/\/el(?=\/|["<])/g,'/gr');
        const spanishEntries=spanishRoutes.map(path=>`<url><loc>${SITE}${href('es',path)}</loc>${blogDates[path]?`<lastmod>${blogDates[path]}</lastmod>`:''}<xhtml:link rel="alternate" hreflang="tr" href="${SITE}${href('tr',path)}"/><xhtml:link rel="alternate" hreflang="en" href="${SITE}${href('en',path)}"/><xhtml:link rel="alternate" hreflang="el" href="${SITE}${href('el',path)}"/><xhtml:link rel="alternate" hreflang="es" href="${SITE}${href('es',path)}"/><xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${href('tr',path)}"/></url>`).join('');
        return new Response(xml.replace('</urlset>',`${spanishEntries}</urlset>`),{status:response.status,headers:response.headers});
      }
      return response;
    }
    const headers=new Headers(response.headers);
    headers.set('content-language',localeInfo[locale].html);
    const source=response.status===404?notFoundPage(locale):await response.text();
    const localizedPage=locale==='es'?loadSpanishPage(clean):null;
    return new Response(decorate(source,locale,clean,accessState,localizedPage),{status:response.status,headers});
  }
};
