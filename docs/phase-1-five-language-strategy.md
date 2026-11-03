# Mythborn.co — Aşama 1: Beş Dil Stratejisi ve Eşlik Politikası (Five-Language Strategy)

Mythborn platformunun en kritik rekabet avantajlarından biri, 5 dilde (Türkçe, İngilizce, Yunanca, İspanyolca, Arapça) eşit ve kesintisiz varlık göstermesidir. Bu doküman, dil mimarisini ve kalite standartlarını belirler.

---

## 1. Desteklenen Diller ve Rota Standartları

| Dil Kodu | Dil Adı | Ön Ek (Prefix) | HTML `lang` | Metin Yönü (`dir`) | Durum ve Öncelik |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **TR** | Türkçe | `/` (Kök) | `tr` | `ltr` | **Kaynak Dil (Master Source)** |
| **EN** | İngilizce | `/en` | `en` | `ltr` | Küresel Erişim Dili |
| **EL** | Yunanca | `/gr` | `el` | `ltr` | Helenistik / Akdeniz Astroloji Mirası |
| **ES** | İspanyolca | `/es` | `es` | `ltr` | İber ve Latin Amerika Erişimi |
| **AR** | Arapça | `/ar` | `ar` | `rtl` | Klasik Doğu / İslam Astronomi Mirası (Tam RTL) |

> [!IMPORTANT]
> **Yunanca Ön Ek Kuralı:** Yunanca sayfalar `/gr` dizini altında sunulur. Eski `/el` istekleri HTTP 301 kalıcı yönlendirmesiyle `/gr` adresine yönlendirilir.

---

## 2. Arapça (RTL) Özel Tasarım ve Tipografi İlkeleri

1. **Çift Yönlü Sayfa Düzeni (`dir="rtl"`):**
   - `<html lang="ar" dir="rtl">` özniteliği zorunludur.
   - Sayfa gridleri, metin blokları, ok işaretleri (`←` / `→`) ve menü simgeleri RTL ekseninde simetrik olarak aynalanır.
2. **Yazı Tipi (Typography):**
   - Arapça için okunaklı, modern sans-serif ve geleneksel Naskh/Kufi uyumlu yazı tipi hiyerarşisi (`font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Tahoma, Arial, sans-serif`).
   - Satır yüksekliği (`line-height: 1.7`) Latin harflerine göre bir miktar daha ferah tutulur.
3. **Sayı Biçimlendirmesi:**
   - Uluslararası Arap rakamları (0-9) veya Doğu Arap rakamları (٠-٩) platform genelinde tutarlı şekilde kullanılır.

---

## 3. İçerik Eşliği ve Yayın Güvenliği Kuralı (Parity Gate)

- **Eksik Dille Yayımlamama İlkesi:** 
  Eğer bir burç yorumu veya gökyüzü içeriği 5 dilin tamamında doğrulanmadıysa (`tr`, `en`, `el`, `es`, `ar`), o içerik canlıya alınamaz.
- **Taslakta Bekletme (Draft Quarantine):** 
  Örneğin İspanyolca veya Arapça çeviri henüz gözden geçirilmediyse, sistem bir önceki doğrulanmış sürümü sunmaya devam eder (`content_version` kuralı).
- **Makine Çevirisi Kalite Kontrolü:** 
  Astrolojik terimler (ör. "retrograde", "ascendant", "nakshatra", "conjunction") otomatik çevirilerde bozulmaya açıktır. Her dilde özel bir astrolojik terimler sözlüğü (`astrology-terms-map.json`) üzerinden kontrollü terim eşleme yapılır.

---

## 4. Dil Değiştirici ve Kullanıcı Deneyimi

1. **Sayfa Konumunu Koruma:**
   - Kullanıcı sayfanın ortasındayken dili değiştirdiğinde, sayfa en üste zıplamaz (`scroll-restoration` ve `window.scrollTo` koordinat koruması).
2. **Kanonik ve Hreflang Bütünlüğü:**
   - Her sayfanın `<head>` bloğunda 5 dilin tam URL'si ve `x-default` etiketi eksiksiz yer alır:
     ```html
     <link rel="alternate" hreflang="tr" href="https://mythborn.co/burclar">
     <link rel="alternate" hreflang="en" href="https://mythborn.co/en/zodiac-signs">
     <link rel="alternate" hreflang="el" href="https://mythborn.co/gr/zodia">
     <link rel="alternate" hreflang="es" href="https://mythborn.co/es/signos-del-zodiaco">
     <link rel="alternate" hreflang="ar" href="https://mythborn.co/ar/al-abraj">
     <link rel="alternate" hreflang="x-default" href="https://mythborn.co/burclar">
     ```
