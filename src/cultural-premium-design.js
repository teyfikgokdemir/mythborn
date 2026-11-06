export const premiumStyles = `<style>:root{--night:#080910;--ink:#f3eadb;--gold:#c9a874;--line:rgba(201,168,116,.20);--mist:#b9b5b2}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:radial-gradient(ellipse 70% 35% at 85% 4%,#25223a 0,transparent 70%),#080910;color:var(--ink);font:16px/1.65 system-ui,-apple-system,"Segoe UI",sans-serif}body::before{content:"";position:absolute;inset:0 0 auto;height:960px;pointer-events:none;opacity:.35;background:radial-gradient(circle at 45% 35%,rgba(202,158,100,.11),transparent 38%)}.shell{position:relative;width:min(1320px,calc(100% - 88px));margin:auto}a{color:inherit}.top{display:flex;align-items:center;justify-content:space-between;gap:24px;min-height:94px;border-bottom:1px solid var(--line)}.brand{display:inline-flex;align-items:center;gap:13px;text-decoration:none;letter-spacing:.21em;font:700 15px system-ui,sans-serif}.brand:before{content:"✧";font:29px Georgia,serif;color:var(--gold);line-height:1}.nav{display:flex;gap:34px;align-items:center}.nav a{text-decoration:none;font:500 12px system-ui,sans-serif;color:#c6c2c2;transition:color .2s}.nav a:hover,.langs a:hover,.card a:hover{color:var(--gold)}.mobile-nav{display:none}a:focus-visible,summary:focus-visible{outline:2px solid var(--gold);outline-offset:5px}.eyebrow,.kicker{font:600 11px/1.4 system-ui,sans-serif;letter-spacing:.22em;text-transform:uppercase;color:var(--gold)}.hero{position:relative;min-height:740px;display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);align-items:center;gap:48px;padding:74px 0 110px}.hero-copy{position:relative;z-index:2;padding-bottom:35px}.hero h1{font:400 clamp(64px,6.8vw,112px)/.98 Georgia,"Times New Roman",serif;letter-spacing:-.046em;max-width:760px;margin:27px 0 30px;text-wrap:balance}.hero h1 span{color:var(--gold);font-style:italic}.lead{font:400 clamp(17px,1.4vw,20px)/1.9 system-ui,sans-serif;color:var(--mist);max-width:670px}.hero-copy .lead{max-width:550px}.hero .portrait{position:relative;width:100%;height:620px;margin:0;border:none;background:#11121c;overflow:hidden;box-shadow:0 40px 90px rgba(0,0,0,.4)}.portrait:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(5,6,12,.82) 100%);pointer-events:none}.portrait img{width:100%;height:100%;object-fit:cover;object-position:center 26%;display:block;filter:saturate(.76) contrast(1.07)}.caption{position:absolute;bottom:18px;inset-inline:24px;z-index:1;font:11px/1.4 system-ui,sans-serif;color:#e3dbd0;opacity:.8}.hero-mark{position:absolute;top:15px;inset-inline-start:-35px;width:280px;height:280px;border:1px solid rgba(201,168,116,.1);border-radius:50%;pointer-events:none}.hero-mark:before,.hero-mark:after{content:"";position:absolute;inset:24px;border:1px solid rgba(201,168,116,.075);border-radius:50%}.hero-mark:after{inset:65px}.section-head{display:flex;align-items:end;justify-content:space-between;gap:30px;margin:0 0 32px}.section-head h2,.feature-copy h2{font:400 clamp(36px,4.2vw,64px)/1.1 Georgia,serif;letter-spacing:-.025em;margin:12px 0}.section-head p{color:var(--mist);max-width:390px;font-size:15px}.cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;padding:0 0 118px}.card{position:relative;display:flex;flex-direction:column;min-height:350px;overflow:hidden;padding:38px;background:linear-gradient(145deg,rgba(51,44,57,.72),rgba(13,14,22,.93));border:1px solid var(--line);transition:border-color .2s,transform .2s}.card:nth-child(2){background:radial-gradient(circle at 82% 12%,rgba(121,91,53,.18),transparent 58%),#13121b}.card:nth-child(3){background:radial-gradient(circle at 75% 20%,rgba(60,76,96,.26),transparent 58%),#10131c}.card:hover{transform:translateY(-4px);border-color:rgba(201,168,116,.55)}.card-index{display:block;font:11px system-ui,sans-serif;letter-spacing:.2em;color:var(--gold);margin-bottom:58px}.card h2{font:400 clamp(28px,2.5vw,42px)/1.15 Georgia,serif;margin:0 0 17px}.card p{font:15px/1.8 system-ui,sans-serif;color:var(--mist);margin:0 0 30px}.card a{font:600 12px system-ui,sans-serif;letter-spacing:.06em;color:var(--gold);text-decoration:none;margin-top:auto}.feature-band{display:grid;grid-template-columns:1fr 1fr;min-height:450px;margin:0 0 130px;border-block:1px solid var(--line)}.feature-art{display:grid;place-items:center;min-height:420px;background:radial-gradient(circle,rgba(185,134,83,.19),transparent 44%),repeating-radial-gradient(circle at center,transparent 0 59px,rgba(201,168,116,.09) 60px 61px,transparent 62px 95px),#10111a}.feature-symbol{display:grid;place-items:center;width:200px;height:200px;border:1px solid rgba(201,168,116,.35);border-radius:50%;font:100px Georgia,serif;color:var(--gold)}.feature-copy{padding:70px clamp(35px,6vw,105px);display:flex;flex-direction:column;justify-content:center}.feature-copy p:not(.eyebrow){color:var(--mist);font:16px/1.9 system-ui,sans-serif}.feature-copy a{color:var(--gold);text-decoration:none;font:600 12px system-ui,sans-serif;letter-spacing:.08em;margin-top:20px}.copy{max-width:1140px;margin:75px auto 110px;padding:0;background:none;border:0}.copy>h1,.article-body>h1{font:400 clamp(49px,6.2vw,86px)/1.04 Georgia,serif;letter-spacing:-.035em;margin:12px 0 24px}.copy>.lead{max-width:770px}.topic-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px;margin:55px 0}.topic{background:#11121b;border:1px solid var(--line);padding:35px;min-height:215px}.topic h2{font:400 29px/1.2 Georgia,serif;margin:0 0 18px}.topic p,.article-body section p{font:15px/1.9 system-ui,sans-serif;color:var(--mist);margin:0}.article-body{max-width:860px}.article-body section{padding:35px 0;border-top:1px solid var(--line)}.article-body section h2{font:400 33px Georgia,serif}.footer{border-top:1px solid var(--line);padding:58px 0 42px;display:grid;grid-template-columns:1fr auto;gap:18px 40px}.footer-brand{font:700 15px system-ui,sans-serif;letter-spacing:.2em;margin:0}.footer-disclaimer{grid-column:1/-1;max-width:780px;color:#86858a;font:12px/1.65 system-ui,sans-serif;margin:5px 0 0}.langs{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.langs a{display:inline-block;border:1px solid var(--line);text-decoration:none;color:var(--mist);padding:5px 10px;font:600 11px system-ui,sans-serif}.site-bottom{font:11px system-ui,sans-serif;color:#85818a;grid-column:1/-1;padding-top:14px}.nav a[aria-current=page]{color:var(--gold)}[dir=rtl] .hero h1{letter-spacing:0}[dir=rtl] .brand{letter-spacing:.12em}@media(max-width:900px){.shell{width:min(100% - 48px,1320px)}.hero{grid-template-columns:1fr 1fr;min-height:600px;gap:30px}.hero .portrait{height:500px}.hero h1{font-size:clamp(49px,6.8vw,80px)}.nav{gap:17px}.cards{gap:12px}.card{padding:25px}}@media(max-width:700px){.shell{width:min(100% - 32px,1320px)}.top{min-height:76px}.top>.nav{display:none}.mobile-nav{display:block;position:relative}.mobile-nav summary{list-style:none;cursor:pointer;font:600 12px system-ui,sans-serif;color:var(--gold);border:1px solid var(--line);padding:9px 15px}.mobile-nav summary::-webkit-details-marker{display:none}.mobile-nav nav{position:absolute;z-index:10;top:43px;inset-inline-end:0;width:min(270px,85vw);display:grid;gap:14px;padding:24px;border:1px solid var(--line);background:#12131c;box-shadow:0 20px 50px #0008}.mobile-nav nav a{font:500 14px system-ui,sans-serif;text-decoration:none}.hero{display:flex;flex-direction:column;align-items:stretch;min-height:0;gap:24px;padding:56px 0 72px}.hero-copy{padding:0}.hero h1{font-size:clamp(49px,12vw,74px);margin:20px 0}.hero .portrait{height:470px}.hero-mark{display:none}.section-head{display:block}.cards,.topic-grid,.feature-band{grid-template-columns:1fr}.cards{padding-bottom:75px}.card{min-height:290px;padding:29px}.card-index{margin-bottom:38px}.feature-art{min-height:280px}.feature-copy{padding:50px 24px}.feature-band{margin-bottom:75px}.copy{margin:55px 0 75px}.topic-grid{margin-top:35px}.topic{min-height:0;padding:25px}.footer{grid-template-columns:1fr;padding-top:40px}.footer-disclaimer{grid-column:1}.site-bottom{grid-column:1}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}</style>`;
export const premiumCopy = {
  "tr": {
    "kicker": "KEŞİF ALANLARI",
    "section": "Sembollerin ardındaki hikâyeler",
    "sectionLead": "Kadim anlatılardan modern farkındalığa, her bölüm farklı bir dünyaya açılıyor.",
    "featureKicker": "MYTHBORN DÜNYASI",
    "featureTitle": "Görünmeyeni değil, anlamı keşfet.",
    "featureLead": "Mitoloji, semboller ve ritüellerin izini sürerek kültürlerin ortak hafızasına yakından bakın.",
    "featureLink": "Kütüphaneye göz at",
    "heroLine": [
      "Kadim Bilgelik",
      "İçsel Keşif"
    ],
    "about": "Bir keşif yolculuğu",
    "copyright": "© 2026 MYTHBORN · Maya Vanga"
  },
  "en": {
    "kicker": "EXPLORE",
    "section": "Stories behind the symbols",
    "sectionLead": "From ancient narratives to mindful practice, each theme opens a different world.",
    "featureKicker": "THE MYTHBORN WORLD",
    "featureTitle": "Discover meaning beyond mystery.",
    "featureLead": "Follow the traces of mythology, symbols and ritual through the shared memory of cultures.",
    "featureLink": "Explore the library",
    "heroLine": [
      "Ancient Wisdom",
      "Inner Discovery"
    ],
    "about": "A journey of discovery",
    "copyright": "© 2026 MYTHBORN · Maya Vanga"
  },
  "el": {
    "kicker": "ΕΞΕΡΕΥΝΗΣΗ",
    "section": "Ιστορίες πίσω από τα σύμβολα",
    "sectionLead": "Από αρχαίες αφηγήσεις μέχρι την ενσυνείδητη πρακτική, κάθε θέμα ανοίγει έναν διαφορετικό κόσμο.",
    "featureKicker": "Ο ΚΟΣΜΟΣ ΤΟΥ MYTHBORN",
    "featureTitle": "Ανακαλύψτε το νόημα πέρα από το μυστήριο.",
    "featureLead": "Ακολουθήστε τη μυθολογία, τα σύμβολα και τις τελετουργίες στη συλλογική μνήμη των πολιτισμών.",
    "featureLink": "Εξερευνήστε τη βιβλιοθήκη",
    "heroLine": [
      "Αρχαία Σοφία",
      "Εσωτερική Ανακάλυψη"
    ],
    "about": "Ένα ταξίδι ανακάλυψης",
    "copyright": "© 2026 MYTHBORN · Maya Vanga"
  },
  "es": {
    "kicker": "DESCUBRE",
    "section": "Historias detrás de los símbolos",
    "sectionLead": "De los relatos antiguos a la atención consciente, cada tema abre un mundo diferente.",
    "featureKicker": "EL MUNDO MYTHBORN",
    "featureTitle": "Descubre el significado más allá del misterio.",
    "featureLead": "Sigue la huella de la mitología, los símbolos y los rituales en la memoria compartida de las culturas.",
    "featureLink": "Explorar biblioteca",
    "heroLine": [
      "Sabiduría Ancestral",
      "Descubrimiento Interior"
    ],
    "about": "Un viaje de descubrimiento",
    "copyright": "© 2026 MYTHBORN · Maya Vanga"
  },
  "ar": {
    "kicker": "مجالات الاستكشاف",
    "section": "حكايات وراء الرموز",
    "sectionLead": "من الحكايات القديمة إلى الوعي المعاصر، يفتح كل موضوع عالماً مختلفاً.",
    "featureKicker": "عالم ميثبورن",
    "featureTitle": "اكتشف المعنى وراء الغموض.",
    "featureLead": "تتبع أثر الأساطير والرموز والطقوس في الذاكرة المشتركة للثقافات.",
    "featureLink": "استكشف المكتبة",
    "heroLine": [
      "حكمة عريقة",
      "اكتشاف الذات"
    ],
    "about": "رحلة اكتشاف",
    "copyright": "© 2026 MYTHBORN · Maya Vanga"
  }
};
