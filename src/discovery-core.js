const prefix=locale=>locale==='en'?'/en':locale==='el'?'/gr':'';
const path=(locale,value)=>`${prefix(locale)}${value}`;
const locales={
  en:{
    sky:['REAL-TIME ASTROLOGY','Today’s Sky','See the current zodiac positions of the Sun, Moon and planets, together with the day’s strongest major aspects.','Calculating current planetary positions…'],
    synastry:['TWO REAL BIRTH CHARTS','Synastry — Relationship Chart','Compare two people’s planetary positions through real aspects for emotion, communication, attraction and commitment.'],
    moon:['THE LUNAR CYCLE','Moon Calendar','See today’s approximate Moon phase, illumination and the theme of the current cycle.','Preparing lunar data…'],
    dream:['A SYMBOLIC MAP OF THE DREAM','Dream Interpretation','Explore the dream through its emotional tone, people, place, recurring pattern and current waking-life context.'],
    numerology:['NAME AND DATE OF BIRTH','Numerology','Calculate a life-path number from your birth date and an expression number from your name.'],
    compatibility:['RELATIONSHIP DYNAMICS','Zodiac Compatibility','Compare the elements and modalities of two signs as symbolic relationship dynamics.'],
    ancient:['HISTORY, CULTURE AND SYMBOL','Ancient Sky Traditions','Explore Maya time cycles, Mesopotamian sky traditions and nature-centred reflection without collapsing distinct cultures into one modern system.'],
    form:{date:'Date of birth',time:'Time of birth',place:'Place of birth',unknown:'Birth time unknown',first:'First person',second:'Second person',calculate:'Calculate synastry',name:'Full name',numbers:'Calculate my numbers',dream:'Describe your dream in detail',emotion:'Dominant feeling on waking',context:'What has occupied you recently?',interpret:'Explore my dream',yourSign:'Your sign',otherSign:'Other person’s sign',compare:'Explore compatibility'}
  },
  el:{
    sky:['ΑΣΤΡΟΛΟΓΙΑ ΣΕ ΠΡΑΓΜΑΤΙΚΟ ΧΡΟΝΟ','Ο Σημερινός Ουρανός','Δες τις τρέχουσες ζωδιακές θέσεις Ήλιου, Σελήνης και πλανητών μαζί με τις ισχυρότερες κύριες όψεις της ημέρας.','Υπολογίζονται οι τρέχουσες πλανητικές θέσεις…'],
    synastry:['ΔΥΟ ΠΡΑΓΜΑΤΙΚΟΙ ΓΕΝΕΘΛΙΟΙ ΧΑΡΤΕΣ','Συναστρία — Χάρτης Σχέσης','Σύγκρινε τις πλανητικές θέσεις δύο ανθρώπων μέσα από πραγματικές όψεις για συναίσθημα, επικοινωνία, έλξη και δέσμευση.'],
    moon:['Ο ΣΕΛΗΝΙΑΚΟΣ ΚΥΚΛΟΣ','Σεληνιακό Ημερολόγιο','Δες τη σημερινή κατά προσέγγιση φάση της Σελήνης, τον φωτισμό και το θέμα του κύκλου.','Προετοιμάζονται τα σεληνιακά δεδομένα…'],
    dream:['ΣΥΜΒΟΛΙΚΟΣ ΧΑΡΤΗΣ ΤΟΥ ΟΝΕΙΡΟΥ','Ερμηνεία Ονείρων','Εξερεύνησε το όνειρο μέσα από το συναίσθημα, τα πρόσωπα, τον τόπο, την επανάληψη και το πλαίσιο της καθημερινής ζωής.'],
    numerology:['ΟΝΟΜΑ ΚΑΙ ΗΜΕΡΟΜΗΝΙΑ ΓΕΝΝΗΣΗΣ','Αριθμολογία','Υπολόγισε τον αριθμό διαδρομής ζωής από την ημερομηνία γέννησης και τον αριθμό έκφρασης από το όνομα.'],
    compatibility:['ΔΥΝΑΜΙΚΗ ΣΧΕΣΗΣ','Συμβατότητα Ζωδίων','Σύγκρινε τα στοιχεία και τις ποιότητες δύο ζωδίων ως συμβολικές δυναμικές σχέσης.'],
    ancient:['ΙΣΤΟΡΙΑ, ΠΟΛΙΤΙΣΜΟΣ ΚΑΙ ΣΥΜΒΟΛΟ','Αρχαίες Ουράνιες Παραδόσεις','Εξερεύνησε τους κύκλους χρόνου των Μάγια, τις μεσοποταμιακές ουράνιες παραδόσεις και τον στοχασμό στη φύση, χωρίς συγχώνευση διαφορετικών πολιτισμών.'],
    form:{date:'Ημερομηνία γέννησης',time:'Ώρα γέννησης',place:'Τόπος γέννησης',unknown:'Άγνωστη ώρα γέννησης',first:'Πρώτο άτομο',second:'Δεύτερο άτομο',calculate:'Υπολογισμός συναστρίας',name:'Ονοματεπώνυμο',numbers:'Υπολογισμός αριθμών',dream:'Περιέγραψε το όνειρο αναλυτικά',emotion:'Κυρίαρχο συναίσθημα στο ξύπνημα',context:'Τι σε απασχολεί τελευταία;',interpret:'Εξερεύνηση ονείρου',yourSign:'Το ζώδιό σου',otherSign:'Το άλλο ζώδιο',compare:'Εξερεύνηση συμβατότητας'}
  }
};
const wrap=(content,body)=>`<main><section class="section discovery-hero"><p class="eyebrow">${content[0]}</p><h1>${content[1]}</h1><p class="lead left-lead">${content[2]}</p>${body}</section></main>`;
const person=(f,p,name,title)=>`<fieldset><legend>${title}</legend><div class="synastry-fields"><label>${f.date}<input required type="date" name="${name}BirthDate"></label><label>${f.time}<input type="time" name="${name}BirthTime"></label><label>${f.place}<input required name="${name}BirthPlace" maxlength="100" placeholder="${p}"></label><label class="check-label"><input type="checkbox" name="${name}TimeUnknown"> ${f.unknown}</label></div></fieldset>`;
const ancientCards={
  en:[['MAYA','Maya Time Cycles','Tzolk’in, Haab, the Calendar Round and Long Count in historical context.','/maya-zaman-donguleri'],['MESOPOTAMIA','Sumer, Babylon and Assyria','From celestial omen records to the mathematical zodiac and personal horoscopes.','/mezopotamya-astrolojisi'],['NATURAL RHYTHMS','Nature and Sky','Seasons, directions, the Moon and local natural cycles without claiming one universal tradition.','/doga-gokyuzu-donguleri'],['SAFE REFLECTION','Trauma-Informed Astrology','Choice, boundaries and safety instead of diagnosis or deterministic claims.','/travma-bilincli-astroloji']],
  el:[['ΜΑΓΙΑ','Κύκλοι Χρόνου των Μάγια','Tzolk’in, Haab, Ημερολογιακός Γύρος και Μακρά Αρίθμηση στο ιστορικό τους πλαίσιο.','/maya-zaman-donguleri'],['ΜΕΣΟΠΟΤΑΜΙΑ','Σουμέριοι, Βαβυλώνιοι και Ασσύριοι','Από τα αρχεία ουράνιων οιωνών στον μαθηματικό ζωδιακό και τα προσωπικά ωροσκόπια.','/mezopotamya-astrolojisi'],['ΦΥΣΙΚΟΙ ΡΥΘΜΟΙ','Φύση και Ουρανός','Εποχές, κατευθύνσεις, Σελήνη και τοπικοί κύκλοι χωρίς ισχυρισμό μίας καθολικής παράδοσης.','/doga-gokyuzu-donguleri'],['ΑΣΦΑΛΗΣ ΣΤΟΧΑΣΜΟΣ','Αστρολογία με Επίγνωση Τραύματος','Επιλογή, όρια και ασφάλεια αντί για διάγνωση ή ντετερμινιστικούς ισχυρισμούς.','/travma-bilincli-astroloji']]
};
export function discoveryPage(locale,route){
  if(locale==='tr')return null;
  const t=locales[locale],f=t.form,place=locale==='en'?'London, United Kingdom':'Αθήνα, Ελλάδα';
  if(route==='/bugunun-gokyuzu')return wrap(t.sky,`<div class="discovery-tool sky-tool" data-current-sky><p>${t.sky[3]}</p></div>`);
  if(route==='/ay-takvimi')return wrap(t.moon,`<div class="discovery-tool moon-tool" data-moon-calendar><p>${t.moon[3]}</p></div>`);
  if(route==='/sinastri')return wrap(t.synastry,`<form class="discovery-tool synastry-tool" data-synastry-form>${person(f,place,'first',f.first)}${person(f,place,'second',f.second)}<button class="btn btn-primary" type="submit">${f.calculate}</button><p class="form-message" data-synastry-message aria-live="polite"></p></form><div class="discovery-result" data-synastry-result hidden aria-live="polite"></div>`);
  if(route==='/numeroloji')return wrap(t.numerology,`<form class="discovery-tool compact-tool" data-numerology-form><label>${f.name}<input required name="name" maxlength="100"></label><label>${f.date}<input required type="date" name="birthDate"></label><button class="btn btn-primary" type="submit">${f.numbers}</button></form><div class="discovery-result" data-numerology-result hidden aria-live="polite"></div>`);
  if(route==='/ruya-yorumlari')return wrap(t.dream,`<form class="discovery-tool dream-depth-form" data-dream-form><label>${f.dream}<textarea required name="dream" minlength="40" maxlength="5000"></textarea></label><label>${f.emotion}<select name="emotion">${(locale==='en'?['Curiosity','Fear','Calm','Longing','Sadness']:['Περιέργεια','Φόβος','Ηρεμία','Νοσταλγία','Θλίψη']).map(value=>`<option>${value}</option>`).join('')}</select></label><label>${f.context}<input name="wakingContext" maxlength="300"></label><button class="btn btn-primary" type="submit">${f.interpret}</button></form><div class="discovery-result" data-dream-result hidden aria-live="polite"></div>`);
  if(route==='/burc-uyumu')return wrap(t.compatibility,`<form class="discovery-tool compact-tool" data-compatibility-form><label>${f.yourSign}<select name="first"></select></label><label>${f.otherSign}<select name="second"></select></label><button class="btn btn-primary" type="submit">${f.compare}</button></form><div class="discovery-result" data-compatibility-result hidden aria-live="polite"></div>`);
  if(route==='/kadim-gokyuzu')return wrap(t.ancient,`<div class="editorial-grid">${ancientCards[locale].map(([tag,title,text,url])=>`<article class="editorial-card"><small>${tag}</small><h3>${title}</h3><p>${text}</p><a href="${path(locale,url)}">${locale==='en'?'Read guide':'Άνοιγμα οδηγού'}</a></article>`).join('')}</div>`);
  return null;
}
export function discoveryMeta(locale,route){
  if(locale==='tr')return null;
  const key={'/bugunun-gokyuzu':'sky','/sinastri':'synastry','/ay-takvimi':'moon','/ruya-yorumlari':'dream','/numeroloji':'numerology','/burc-uyumu':'compatibility','/kadim-gokyuzu':'ancient'}[route];
  if(!key)return null;
  const t=locales[locale][key];
  return {title:`${t[1]} — Mythborn`,description:t[2]};
}
