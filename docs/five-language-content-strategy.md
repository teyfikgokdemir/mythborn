# Mythborn.co — Beş Dilli İçerik ve Kültürel Uyum Stratejisi

**Tarih:** 2026-11-04  
**Kapsanan Diller:** Türkçe (tr), İngilizce (en), Yunanca (el - `/gr`), İspanyolca (es), Arapça (ar - RTL).  
**Temel İlke:** "Çeviri değil; kültürel ve terminolojik yerelleştirme."

---

## 1. Terminoloji ve Çeviri Sözlüğü

| Kavram / Terim | Türkçe (`tr`) | İngilizce (`en`) | Yunanca (`el` / `/gr`) | İspanyolca (`es`) | Arapça (`ar` - RTL) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Doğum Haritası** | Doğum Haritası | Birth Chart / Natal Chart | Γενέθλιος Χάρτης | Carta Natal | خريطة المولد |
| **Yükselen Burç** | Yükselen (ASC) | Rising Sign / Ascendant | Ωροσκόπος | Ascendente | البرج الطالع |
| **Güneş Burcu** | Güneş Burcu | Sun Sign | Ήλιος | Signo Solar | برج الشمس |
| **Ay Burcu** | Ay Burcu | Moon Sign | Σελήνη | Signo Lunar | برج القمر |
| **Gezegen Retrosu** | Gezegen Retrosu | Planetary Retrograde | Ανάδρομη Πορεία | Retrogradación | تراجع الكواكب |
| **Transitler** | Gezegen Transitleri | Current Transits | Διελεύσεις | Tránsitos Actuales | العبور الفلكي |
| **Sinastri (İlişki)** | Sinastri / Uyum | Synastry / Compatibility | Συναστρία | Sinastría de Pareja | التوافق الفلكي |
| **Yeniay** | Yeniay | New Moon | Νέα Σελήνη | Luna Nueva | المحاق / ولادة القمر |
| **Dolunay** | Dolunay | Full Moon | Πανσέληνος | Luna Llena | البدر |
| **Evler (1–12)** | Evler (1–12) | Houses (1–12) | Οίκοι (1–12) | Casas (1–12) | البيوت الفلكية |
| **Açılar (Açısal İlişki)**| Gezegensel Açılar | Planetary Aspects | Όψεις | Aspectos Planetarios | الاتصالات الفلكية |

---

## 2. 12 Zodyak Burç İsimleri ve Eşleştirmesi

| No | Türkçe (`tr`) | İngilizce (`en`) | Yunanca (`el`) | İspanyolca (`es`) | Arapça (`ar`) | Element | Nitelik |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Koç | Aries | Κριός | Aries | الحمل | Ateş | Öncü |
| 2 | Boğa | Taurus | Ταύρος | Tauro | الثور | Toprak | Sabit |
| 3 | İkizler | Gemini | Δίδυμοι | Géminis | الجوزاء | Hava | Değişken |
| 4 | Yengeç | Cancer | Καρκίνος | Cáncer | السرطان | Su | Öncü |
| 5 | Aslan | Leo | Λέων | Leo | الأسد | Ateş | Sabit |
| 6 | Başak | Virgo | Παρθένος | Virgo | العذراء | Toprak | Değişken |
| 7 | Terazi | Libra | Ζυγός | Libra | الميزان | Hava | Öncü |
| 8 | Akrep | Scorpio | Σκορπιός | Escorpio | العقرب | Su | Sabit |
| 9 | Yay | Sagittarius | Τοξότης | Sagitario | القوس | Ateş | Değişken |
| 10 | Oğlak | Capricorn | Αιγόκερως | Capricornio | الجدي | Toprak | Öncü |
| 11 | Kova | Aquarius | Υδροχόος | Acuario | الدلو | Hava | Sabit |
| 12 | Balık | Pisces | Ιχθύες | Piscis | الحوت | Su | Değişken |

---

## 3. Kültürel Nüanslar ve Dil Hassasiyeti

### A. Arapça (RTL & Kültürel Standartlar)
- **Tutum:** Arapça konuşulan coğrafyalarda (Körfez, Levant, Kuzey Afrika) ucuz fal (كهانة / ضرب الرمل) kültürel ve dini açıdan olumsuz karşılanır; fakat astronomik döngüler (علم الفلك / حساب المنازل والبروج) saygı görür.
- **Kural:** İçerik dili *"Geleceğinizi söylüyoruz"* şeklinde değil; *"Göksel konumların psikolojik analizi, zamanın kalitesi ve karakter dinamikleri"* şeklinde yapılandırılmalıdır.
- **RTL Tasarım:** Sayfa yönü `dir="rtl"`. Tablolar, menü çekmecesi, form girişleri ve gezinme okları tamamen aynalanır.

### B. Yunanca (`el` / Rota Kuralı: `/gr`)
- **Tutum:** Helenistik astroloji (Vettius Valens, Ptolemy) Yunanistan için kültürel bir mirastır. Klasik kavramların doğruluğu çok önemlidir.
- **Teknik Standart:** Google Search Console ve Cloudflare uyumluluğu için URL prefix'i `/gr`, HTML dil kodu ise `lang="el"` olarak korunur.

### C. İspanyolca (`es`)
- **Tutum:** Latin Amerika ve İspanya'da astroloji oldukça yaygındır ancak popüler magazin siteleri güven kaybına yol açmıştır. Profesyonel, ciddi, psikolojik derinlikli bir ton yüksek sadakat yaratır.

### D. İngilizce (`en`)
- **Tutum:** Kapsayıcı, modern, toplumsal cinsiyet stereotiplerinden uzak (gender-neutral), travma-bilinçli ve güçlendirici bir ses tonu benimsenir.

---

## 4. Eşitlik Kapısı (Parity Gate) Standartları

1. **Hiçbir İkincil Dil Eksik Bırakılamaz:** Türkçe'de yayına giren bir araç veya sayfa, aynı anda diğer 4 dilde de eksiksiz URL, canonical ve meta başlıklarıyla yayına girmelidir.
2. **Kırık Hreflang Yasaktır:** 5 dil arasındaki tüm çapraz bağlantılar (`<xhtml:link rel="alternate" hreflang="...">`) tam matris olarak birbirini doğrular.
3. **Sayfa Dili Değiştirici Güvencesi:** Kullanıcı `/dogum-haritasi` sayfasında dili İspanyolca'ya aldığında ana sayfaya değil, doğrudan `/es/carta-natal` sayfasına yönlendirilir.
