# Mythborn.co — Teknik ve Mimari Kararlar (Implementation Decisions)

**Tarih:** 2026-11-04  
**Durum:** Aktif / Yürütülüyor  
**Kapsam:** Ultra Elit Global Astroloji Platformu Master Uygulama Kararları

---

## 1. Mimari Kararlar

### Karar 1: Tamamen İstemcisiz ve Sunucu Taraflı Deterministik Çekirdek
- **Gerekçe:** Web crawler'larının (Google, Bing, Yandex, Applebot) JavaScript çalıştırmadan tam HTML içeriğini görmesi ve Core Web Vitals (INP, LCP) skorlarının 100/100 kalması için tüm harita ve gökyüzü analizleri sunucuda (Cloudflare Worker) oluşturulup saf HTML/CSS/SVG olarak sunulur.
- **Teknoloji:** `astronomy-engine` (Don Cross, MIT Lisansı). Sıfır harici API, sıfır ağ gecikmesi, Cloudflare Worker içinde < 4ms yürütme süresi.

### Karar 2: "Obsidian & Celestial Gold" Görsel Sanat Yönetimi
- **Gerekçe:** Fal sitelerinin ucuz mor/pembe neonlarından ve Z kuşağı monokrom brutalizminden ayrışan, Kinfolk ve Aesop kalitesinde editoryal lüks.
- **Palet:** `#050608` (Obsidyen uzay), `#0a0d14` (Nebula camı), `#d4af37` (Göksel mat altın), `#f5f2eb` (Yıldız tozu fildişi).
- **Tipografi:** Display serif (*Cormorant Garamond* / *Georgia*) + Okuma dostu modern sans (*Inter* / *system-ui*). Arapça için zarif *Amiri* / *IBM Plex Sans Arabic*.

### Karar 3: Saf Vektörel ve Matematiksel SVG Görsel Sistemi
- **Gerekçe:** Yapay zekâ difüzyon modelleri (DALL-E, Midjourney) açı ve derece hesaplarında halüsinasyon gördüğü için harita çarkları ve açı çizgileri `%100` matematiksel SVG ile kodlanır.
- **İkonografi:** 1px ince hatlı geometrik zodyak ve gezegen glifleri kod içinde yerel SVG olarak tutulur (`0ms` ek ağ isteği).

### Karar 4: İki Kademeli Çevrimdışı/Hibrit Geocoding
- **Gerekçe:** Open-Meteo servis kesintisi veya rate limit durumunda doğum haritası hesaplayıcısının çökmesini engellemek.
- **Çözüm:** `src/data/major-cities.json` (Türkiye'nin 81 ili + 100 dünya başkenti). Yerel sözlükte varsa 0ms'de yanıt döner; bulunamazsa Open-Meteo'ya `AbortSignal.timeout(3500)` ile istek atılır.

### Karar 5: 24 Saat Zaman ve Europe/Istanbul Standardı
- **Gerekçe:** AM/PM kısaltmaları çok dilli pazarlarda (özellikle Türkçe, Yunanca ve İspanyolca) kafa karışıklığı yaratır.
- **Standart:** Tüm saatler `HH:mm` formatında (Örn: `14:30`, `21:45`). Temel gösterim Europe/Istanbul (TSI), parantez içinde UTC.

### Karar 6: Doğal Burç Etiketleme ve Dil Paritesi
- **Gerekçe:** "Koç 12 Burç" gibi yapay SEO tekrarlarını kaldırıp kullanıcı dostu doğal başlıklar (`Koç Burcu Rehberi`, `Aries Guide`, `Οδηγός Κριού`, `Guía de Aries`, `دليل برج الحمل`) kullanmak.

### Karar 7: Güvenli Preview İzolasyonu ve Mock Formlar
- **Gerekçe:** Canlı üretim sistemine (`mythborn.co`) ve canlı D1 veritabanına (`mythborn-membership`) hiçbir sahte veya test verisinin yazılmaması.
- **Standart:** Preview worker'ı (`mythborn-preview`) `x-robots-tag: noindex, nofollow` ile korunur. Form gönderimleri test/mock modunda çalışır.
