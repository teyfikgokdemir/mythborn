# Mythborn.co — Görsel Varlıklar ve Sanat Kataloğu (Visual Assets Catalog)

**Tarih:** 2026-11-04  
**Lisans İlkesi:** Tamamen yerel kodla üretilen matematiksel SVG'ler, özgün astronomik vektörler ve kamu malı uzay dokuları. Sıfır telifli stok, sıfır ücretli görsel API'si.

---

## 1. Varlık Envanteri ve Şartnamesi

| Dosya / Bileşen Yolu | Kullanım Amacı | Format | Boyut | Alt Metin / Açıklama | Lisans / Kaynak | Performans Notu |
| :--- | :--- | :---: | :---: | :--- | :--- | :--- |
| `public/assets/astrology/mythborn-symbol.svg` | Mythborn kozmik pusula amblemi ve favicon | SVG | ~1.4 KB | "Mythborn Celestial Emblem" | Özgün Vektör (Mythborn) | Sıfır HTTP gecikmesi, anında render |
| `public/assets/astrology/zodiac-wheel.svg` | 360° Zodyak çarkı ve 12 burç takımyıldız şablonu | SVG | ~3.0 KB | "360 Derecelik Zodyak Çarkı ve 12 Burç Evi" | Özgün Vektör (Mythborn) | Vektör, kayıpsız ölçekleme |
| `src/astrology-platform/natal-wheel.js` | Dinamik matematiksel doğum haritası ve açı çarkı | Dinamik SVG | ~12 KB | "Interactive Natal Chart Wheel" | `astronomy-engine` koordinatları | İstemci JS gerektirmez, DOM render |
| `public/assets/astrology/zodiac/*.svg` (12 Burç) | 12 Burç için bireysel arketip ve glif vektörleri | SVG | ~1.1 KB (her biri) | "[Burç Adı] Zodiac Glyph" | Özgün Vektör (Mythborn) | Vektörel, kayıpsız ölçekleme |
| `public/assets/astrology/elements/*.svg` (4 Element) | Ateş, Toprak, Hava, Su simyasal rozetleri | SVG | ~0.9 KB (her biri) | "[Element Adı] Element Symbol" | Özgün Vektör (Mythborn) | Anında render |
| `public/assets/astrology/moon/*.svg` (8 Ay Evresi) | 8 Ay evresi için matematiksel aydınlanma vektörleri | SVG | ~0.8 KB (her biri) | "[Evre Adı]" | Özgün Vektör (Mythborn) | Sıfır yükleme süresi |
| `public/assets/astrology/og/og-*.svg` (5 Dil) | 5 dilli sosyal medya Open Graph kartları (1200x630) | SVG | ~1.8 KB (her biri) | "Mythborn Open Graph Banner" | Özgün Vektör (Mythborn) | Sosyal botlar için anında yanıt |
| `src/astrology-platform/tokens.js` (Radial Glows) | Derin uzay nebula ışımaları ve kart cam efektleri | CSS3 | 0 KB | Dekoratif uzay degrade ışıması | Özgün CSS | Sıfır ağ isteği |

---

## 2. Doğrulama ve Lisans Durumu

- **Yerel Deterministik Çizim:** `VERIFIED`. Doğum haritası çarkı, açılar ve zodyak yerleşimleri deterministik SVG fonksiyonu (`renderNatalWheelSvg`) ile üretilmektedir.
- **Telif ve Lisans Bağımsızlığı:** `VERIFIED`. Harici veya ücretli görsel API'si (Midjourney, DALL-E) kullanılmamıştır; tüm varlıklar kodla üretilmiştir.
- **Performans & Erişilebilirlik:** `VERIFIED`. Tüm SVG'ler `role="img"` ve `aria-label` niteliklerine sahiptir; toplam asset yükü sayfa başına < 20 KB'dır.
