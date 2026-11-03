# Mythborn.co — Görsel Varlıklar ve Sanat Üretim Planı

**Tarih:** 2026-11-04  
**Bütçe ve Maliyet İlkesi:** Sıfır ücretli stok fotoğraf, sıfır ücretli görsel API'si, sıfır telifli lisans riski.  
**Teknoloji:** Yerel saf SVG vektörleri, CSS3 radyal degrade ışımaları, HTML5 Canvas ve NASA JPL / Public Domain astronomik haritalar.

---

## 1. Görsel Varlık Mimarisi ve Format Matrisi

| Varlık Grubu | Format | Boyut Bütçesi | Üretim Yöntemi | Lisans / Kaynak | Performans Etkisi |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Arka Planı** | Saf CSS + Hafif WebP | < 45 KB | CSS radial-gradient + NASA Hubble/James Webb public domain yıldız alanı | Kamu Malı (NASA/STScI) | Sıfır CLS, anında render |
| **12 Zodyak Sembolü** | Saf Vektör SVG | < 2 KB (her biri) | Geometrik 1px ince hatlı glifler ve takımyıldız çizgileri | Özgün kod içi SVG | 0ms ağ gecikmesi (inline) |
| **10 Gezegen Glifi** | Saf Vektör SVG | < 1 KB (her biri) | Klasik astronomik/astrolojik simgeler (Güneş'ten Plüton'a) | Özgün kod içi SVG | Inline render |
| **4 Element İkonu** | Saf Vektör SVG | < 1.5 KB | Ateş, Toprak, Hava, Su simyasal üçgenleri ve dalgaları | Özgün kod içi SVG | Inline render |
| **Ay Evreleri (8 Evre)** | Saf Vektör SVG | < 2 KB | Matematiksel yay eğrileriyle (arc) çizilen ay aydınlanması | Özgün kod içi SVG | Anlık render |
| **Doğum Haritası Çarkı** | Dinamik SVG | < 15 KB (DOM) | `astronomy-engine` koordinatlarıyla çizilen 360° interaktif SVG | Kodla üretilen yerel matematik | Etkileşimli, sıfır piksel bozulması |
| **Sosyal Paylaşım (OG)** | WebP (1200x630) | < 80 KB | 5 dil için hazırlanmış marka logosu, zodyak çarkı ve altın çerçeve | Özgün statik WebP | CDN önbellekli |
| **Favicon & Logo İkonu** | SVG + ICO | < 5 KB | Stilize kozmik pusula ve 8 köşeli yıldız glifi | Özgün vektör | Tarayıcı önbellekli |

---

## 2. 12 Zodyak İkonografi ve Tasarım Şartnamesi

12 Burcun görsel temsili rastgele çizimler değil, geometrik takımyıldız arketiplerine dayanmalıdır:
1. **Koç (Aries):** İlkbahar ekinoksu başlangıcı, yukarı doğru genişleyen altın boynuz geometrisi.
2. **Boğa (Taurus):** Toprak elementinin hilal ve daire birleşimi, stabilite ve köklenme glifi.
3. **İkizler (Gemini):** Dualite sütunları, zihinsel bağlantı kirişleri.
4. **Yengeç (Cancer):** Ay kabuğu ve içe dönük sarmal tohum motifi.
5. **Aslan (Leo):** Kalp ve Güneş tacının kıvrımlı kuyruk formu.
6. **Başak (Virgo):** Hasat başağı ve arınmış simya sembolü.
7. **Terazi (Libra):** Ufuk çizgisi üzerindeki Güneş ve denge terazisi.
8. **Akrep (Scorpio):** Dönüşüm iğnesi ve su altı akıntısı.
9. **Yay (Sagittarius):** Gökyüzüne doğrultulmuş 45° altın ok.
10. **Oğlak (Capricorn):** Dağ keçisi boynuzu ve deniz kuyruğu birleşimi.
11. **Kova (Aquarius):** Kolektif bilincin çift paralel elektrik dalgası.
12. **Balık (Pisces):** İki zıt yöne yüzen ve gümüş kordonla bağlı ruh balıkları.

---

## 3. Doğum Haritası ve Transit Veri Görselleştirmesi

### Neden Yapay Zekâ Görsel Üretimi (DALL-E / Midjourney) Harita Çiziminde Kullanılamaz?
- Yapay zekâ difüzyon modelleri harfleri, sayıları ve 360 derecelik açı ilişkilerini rastgele "uydurur" (hallucination).
- Bir doğum haritasında 1 derecelik hata yükselen burcu veya evi tamamen değiştirir.
- **Çözüm:** Harita görselleştirmesi `%100` deterministik ve matematiksel SVG motoruyla (`<circle>`, `<line>`, `<text>`) kodlanmalıdır.

### Harita Katmanları:
1. **Zemin Çemberi:** `#0a0d14` koyu disk.
2. **Ev Çizgileri:** 12 eşit (Whole Sign) veya orantılı (Placidus) sektör çizgisi.
3. **Açı Çizgileri (Aspects):**
   - Üçgen (120°) ve Sekstil (60°): `rgba(90, 190, 150, 0.65)` (Uyumlu zümrüt yeşili)
   - Kare (90°) ve Karşıt (180°): `rgba(235, 87, 87, 0.65)` (Gerilim yakutu)
   - Kavuşum (0°): `rgba(212, 175, 55, 0.85)` (Odaklanmış altın)
4. **Gezegen Konumları:** Doğum anındaki ekliptik boylamına tam oturtulmuş SVG glifleri.

---

## 4. Sosyal Paylaşım (Open Graph) Görsel Stratejisi

5 Dil için dinamik ve önceden optimize edilmiş 1200x630 piksel OG görselleri:
- Arka plan: Obsidyen mavi gökyüzü, ince altın koordinat çizgileri.
- Sol alan: Mythborn amblemi ve dil bazlı ana başlık ("Doğum Haritası Hesaplama", "Birth Chart Calculator").
- Sağ alan: 12 burç takımyıldız çarkı.
- Dosya boyutu: WebP formatında `< 65 KB` (Google ve sosyal tarayıcılar için anında yükleme).

---

## 5. Ücretsiz Üretim Alternatifleri ve Lisans Durumu

- **Yerel Kodlama:** İkonlar ve haritalar tamamen `src/astrology-platform/` altında JS/SVG fonksiyonları olarak oluşturulacaktır. Dış kütüphaneye veya ücretli servise ihtiyaç yoktur (`VERIFIED`).
- **Kamu Malı Astronomi:** İhtiyaç duyulan uzay dokuları NASA/Hubble açık lisanslı arşivinden (Public Domain) alınacaktır (`VERIFIED`).
- **Görsel Üretim Servisi:** Ücretli hiçbir API (OpenAI DALL-E, Midjourney API vb.) kullanılmayacaktır (`VERIFIED`).
