# Mythborn.co — Görsel Varlıklar ve Sanat Kataloğu (Visual Assets Catalog)

**Tarih:** 2026-11-04  
**Lisans İlkesi:** Tamamen yerel kodla üretilen matematiksel SVG'ler ve NASA/Hubble kamu malı uzay dokuları. Sıfır telifli stok, sıfır ücretli görsel API'si.

---

## 1. Varlık Envanteri ve Şartnamesi

| Dosya / Bileşen Yolu | Kullanım Amacı | Format | Boyut | Alt Metin / Açıklama | Lisans / Kaynak | Performans Notu |
| :--- | :--- | :---: | :---: | :--- | :--- | :--- |
| `src/astrology-platform/tokens.js` (CSS Radial Glow) | Hero arka plan derin uzay ışıması | CSS3 | 0 KB | Dekoratif uzay degrade ışıması | Özgün CSS | Sıfır HTTP isteği |
| `public/assets/astrology/zodiac-wheel.svg` | 360° Zodyak çarkı ve 12 burç takımyıldız şablonu | SVG | ~14 KB | "360 Derecelik Zodyak Çarkı ve 12 Burç Evi" | Özgün Vektör (Mythborn) | Vektör, kayıpsız ölçekleme |
| `src/astrology-platform/pages/natal-chart.js` (Dinamik SVG) | Doğum haritası gezegen ve açı yerleşimleri | İnline SVG | ~12 KB | "Kişisel Doğum Haritası Zodyak Çarkı ve Gezegensel Açılar" | `astronomy-engine` koordinatları | İstemci JS gerektirmez, DOM render |
| 12 Zodyak Sembolü (♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓) | Burç arketip kartları ve başlık ikonları | Unicode + SVG | < 1 KB | Her burcun antik astronomik glifi | Evrensel Unicode / SVG | Sıfır ağ gecikmesi |
| Gezegen Glifleri (☉ ☽ ☿ ♀ ♂ ♃ ♄ ♅ ♆ ♇) | Gezegen boylamı ve retro göstergeleri | Unicode + SVG | < 1 KB | Güneş, Ay ve 8 gezegen astronomi glifi | Evrensel Unicode / SVG | Anında metin içi render |
| Ay Evresi Simgeleri (🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘) | Gökyüzü takvimi lunasyon döngüleri | Unicode + SVG | < 1 KB | Yeniay, ilk dördün, dolunay ve son dördün evreleri | Evrensel Unicode / SVG | Sıfır yükleme süresi |
| Element Rozetleri (`.element-fire`, `.element-earth`, vb.) | Element dengesi göstergeleri | CSS / HTML | 0 KB | "Ateş, Toprak, Hava, Su Element Rozetleri" | Özgün CSS | Anında render |

---

## 2. Doğrulama Durumu

- **Yerel Deterministik Çizim:** `VERIFIED`. Harita çarkı ve açılar deterministik SVG olarak kodlanmıştır.
- **Kamu Malı Astronomi:** `VERIFIED`. Dış telifli görsel bağımlılığı yoktur.
- **Ücretli Görsel Servisi Kullanımı:** `HAYIR` (`VERIFIED`).
