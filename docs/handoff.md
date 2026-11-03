# Mythborn.co — Devralma ve Handoff Dokümanı

Bu doküman, herhangi bir insan yazılımcı veya yapay zekâ asistanının projeyi hiçbir belirsizlik yaşamadan kaldığı yerden devralabilmesi için hazırlanmıştır.

---

## 1. Proje ve Ortam Özeti

* **Aktif Branch:** `work/astrology-platform-phase0`
* **Son Commit Hashleri:**
  * `e01a7a6` — `feat: add multilingual horoscope pipeline pilot`
  * `fd773af` — `feat: implement multilingual p0 astrology experiences`
  * `4cf4c3d` — `feat: add free astronomy data core`
  * `804c871` — `data: add offline city and timezone dictionary`
  * `786271f` — `design: implement ultra-elite astrology visual system`
* **Preview Ortamı:** `https://mythborn-preview.teyfikgokdemir.workers.dev`
  * Worker: `mythborn-preview`
  * D1 Binding: `mythborn-membership-preview` (`82d3d933-282d-4369-b68e-cee26b66349b`)
  * Vars: `ASTROLOGY_PREVIEW_ENABLED=true`, `GOZDE_LAUNCH_ENABLED=true`, `ENVIRONMENT=preview`
* **Production Ortamı:** `mythborn.co`
  * Worker: `mythborn`
  * D1 Binding: `mythborn-membership`
  * **DURUMU: KESİNLİKLE DOKUNULMADI, DEPLOY EDİLMEDİ.**

---

## 2. Tamamlanan Mimari ve Bileşenler

1. **Çevrimdışı Şehir Sözlüğü (`src/data/major-cities.json`):**
   * 81 Türkiye ili ve 20 küresel başkent/merkez.
   * Koordinatlar, IANA zaman dilimleri (`tz`, `timezone`).
   * Çift yönlü normalizasyon (Türkçe karakter ve aksan uyumu).

2. **Ücretsiz Astronomik Veri Çekirdeği (`src/astrology-platform/data-core.js`):**
   * `astronomy-engine` v2.1.19 (MIT lisanslı) tabanlı.
   * Güneş, Ay ve 8 gezegen boylamı, enlemi ve günlük hız analizi.
   * Anlık retrograd tespiti (günlük hız negatif olan gezegenler).
   * Ay fazları (açı derecesi, % aydınlanma, yaklaşan Yeniay ve Dolunay).
   * Yerel yıldız zamanı (Sidereal Time) ve ekliptik eğiklik (`eps=23.4392911°`) ile hesaplanan ASC, MC, DSC, IC ve 12 Eşit Ev.
   * Doğum saati bilinmiyorsa güvenli kısmi çıktı (`timeUnknown=true`).
   * 5 dilli Zodyak eşlemesi (TR, EN, EL, ES, AR).
   * Katı 24 saat zaman formatı (`HH:mm`, TSI ve UTC).

3. **P0 Astroloji Sayfaları (`src/astrology-platform/pages/`):**
   * `home.js`: 3 saniyelik değer teklifi, Big Three Triad, hızlı doğum haritası giriş kutusu, anlık gökyüzü/ay durumu, 12 doğal etiketli burç kartı (tekrar eden etiketler temizlendi).
   * `natal-chart.js`: Doğum bilgileri giriş formu, Zodyak Çarkı SVG gösterimi, gezegen ve ev tablosu, açı kalıpları, etik feragatname. Kişisel veri içeren URL üretmez.
   * `zodiac.js`: 12 doğal başlıklı burç arketipi rehberi.
   * `sky-calendar.js`: Canlı ay durumu ve 2026 Kasım-Aralık lunasyon takvimi.
   * `retrogrades.js`: Aktif retrolar ve 2026 gezegen retroları rehberi.
   * `transits.js`: Canlı transit gökyüzü ve etkin açılar.
   * `synastry.js`: 2 haritalı ilişki ve açı karşılaştırma motoru.
   * `glossary.js`: 16 temel kavramlık 5 dilli astroloji sözlüğü.

4. **Otomatik Burç Yorumlama Pilotu (`src/astrology-platform/horoscope-pipeline.js`):**
   * 12 burç x 5 dil kural tabanlı günlük yorum motoru.
   * Etik süzgeç: Deterministik vaat, felaket tellallığı, finansal ve tıbbi tavsiye barındırmaz.
   * `/api/astrology/daily-horoscope` JSON endpoint'i.

5. **Testler ve Güvenlik:**
   * `node scripts/astrology-data-core-test.mjs`: 11/11 birim testi geçerli.
   * `node scripts/verify-live-preview.mjs`: Canlı preview üzerinde 15/15 kontrol başarılı.
   * `npm run audit`: 71 dosya sözdizim ve ortam izolasyonu denetimini geçti.
   * `npm audit`: 0 güvenlik açığı.

---

## 3. Kredi ve Bütçe Durumu

* **Toplam Bütçe:** 236 Kredi
* **Kullanılan:** 74 Kredi
* **Kalan:** 162 Kredi
