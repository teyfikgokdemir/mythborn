# Mythborn.co — Aşama 2: Veri Çekirdeği ve Efemeris Uygulama Planı

**Tarih:** 2026-11-04  
**Kapsam:** Aşama 2 (Data Core, Çevrimdışı Geocoding ve Astronomik Hesaplama Çekirdeği).  
**Güvenlik:** Yalnızca onay sonrası başlatılacaktır. Production'a dokunulmayacak, yalnızca preview ortamına dağıtılacaktır.

---

## 1. Görev Dağılımı ve İş Adımları

### Görev 2.1: Çevrimdışı Şehir ve Koordinat Sözlüğü
- **Hedef:** `src/data/major-cities.json` dosyasını oluşturmak.
- **Kapsam:** Türkiye'nin 81 ili + 100 global başkent (enlem, boylam, zaman dilimi UTC ofseti).
- **Dosya Boyutu:** `< 18 KB`.

### Görev 2.2: Geocoding Fallback ve Dayanıklılık
- **Hedef:** `src/astrology.js` içindeki geocoding fonksiyonunu hibrit hale getirmek.
- **Mantık:** Önce yerel `major-cities.json` taranır (0ms). Bulunamazsa Open-Meteo'ya `AbortSignal.timeout(3500)` ile istek atılır. Hata durumunda varsayılan başkente güvenle düşülür.

### Görev 2.3: Astronomik Efemeris Çekirdeği (`src/astrology-platform/data-core.js`)
- **Hedef:** `astronomy-engine` kullanarak saf matematiksel gökyüzü analiz motorunu yazmak.
- **Fonksiyonlar:**
  1. `calculatePlanetPositions(date, latitude, longitude)`: 10 gezegen boylamı ve hızı.
  2. `detectRetrogrades(date)`: Hız vektöründen retro ve durağan gezegen tespiti.
  3. `calculateAspects(planetA, planetB)`: Kavuşum (0°), Sekstil (60°), Kare (90°), Üçgen (120°), Karşıt (180°) ve orb payı.
  4. `calculateMoonPhases(year, month)`: Yeniay, ilkdördün, dolunay, sondördün tam saatleri.

### Görev 2.4: Test Otomasyonu (`scripts/astrology-data-core-test.mjs`)
- 1975 İstanbul referans haritası doğrulama testi.
- 2026 Merkür ve Mars retroları tarih doğrulaması.
- Aspect orb sınırları testi.
- Hız ve bellek testi (< 10ms çalışma süresi).

### Görev 2.5: Preview Dağıtımı ve Dokümantasyon
- `npm run preview` ile izole `mythborn-preview` Worker'ına dağıtım.
- `docs/progress.md` ve `docs/handoff.md` güncellemesi.

---

## 2. Kabul Kriterleri (Definition of Done)

1. Tüm hesaplamalar yerel kodda çalışmalı; hiçbir dış ücretli servis çağrılmamalıdır.
2. `npm run audit` ve `npm audit` sıfır hatayla geçmelidir.
3. Preview ortamı 200 OK ile çalışmalı, production ortamı kesinlikle etkilenmemelidir.
