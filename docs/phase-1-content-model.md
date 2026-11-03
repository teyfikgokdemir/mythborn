# Mythborn.co — Aşama 1: İçerik ve Veri Modeli (Content & Data Model)

Bu doküman, astroloji platformundaki astronomik veri çekirdeği, burç yorumları, harita modelleri ve etik içerik kurallarının veri şemalarını belirler.

---

## 1. Doğum Haritası Veri Modeli (Natal Chart Schema)

### Girdi (Input)
```typescript
interface NatalChartInput {
  birthDate: string;       // "YYYY-MM-DD"
  birthTime?: string;      // "HH:mm" (24 saat)
  timeUnknown: boolean;    // true ise saat 12:00 kabul edilir; ASC/evler üretilmez
  birthPlace: string;      // "Şehir, Ülke"
  locale: "tr" | "en" | "el" | "es" | "ar";
}
```

### Çıktı (Calculated Output)
```typescript
interface NatalChartOutput {
  engine: {
    name: "Astronomy Engine";
    version: "2.1.19";
    coordinateSystem: "Geocentric Ecliptic Longitude";
    accuracy: "±1 arcminute";
    houseSystem: "Equal House" | null;
  };
  birth: {
    inputDate: string;
    inputTime: string | null;
    utcTimestamp: string;  // ISO 8601 UTC
    timezone: string;      // IANA örn: "Europe/Istanbul"
    coordinates: {
      latitude: number;
      longitude: number;
      name: string;
    };
  };
  angles: {
    ascendant: ZodiacPlacement;
    descendant: ZodiacPlacement;
    midheaven: ZodiacPlacement;
    imumCoeli: ZodiacPlacement;
  } | null;
  planets: PlanetPlacement[];
  houses: HouseCusp[];
  aspects: AspectItem[];
  summary: {
    sunSign: string;
    moonSign: string;
    risingSign: string | null;
    dominantElement: "Ateş" | "Toprak" | "Hava" | "Su";
    elementDistribution: Record<string, number>;
  };
}
```

---

## 2. Güncel Gökyüzü ve Efemeris Modeli (Live Sky Model)

```typescript
interface LiveSkyData {
  calculatedAtUtc: string;     // ISO 8601 UTC
  localTimeIstanbul: string;   // Europe/Istanbul saati
  dataAsOf: string;            // Doğrulama zaman damgası
  dataVersion: string;         // örn: "2026.11.04-rev1"
  planets: {
    name: string;              // "Güneş", "Ay", "Merkür", vb.
    symbol: string;            // ☉, ☽, ☿, ♀, ♂, ♃, ♄, ♅, ♆, ♇
    longitude: number;         // 0 - 359.9999°
    sign: string;              // Koç ... Balık
    degree: number;            // 0 - 29.99°
    isRetrograde: boolean;     // Retro durumu (hız vektörü negatif mi)
    speedPerDay: number;       // Günlük ilerleme hızı (derece/gün)
  }[];
  moonPhase: {
    phaseName: "Yeniay" | "Hilal" | "İlkdördün" | "Büyüyen Ay" | "Dolunay" | "Küçülen Ay" | "Sondördün" | "Balsamik";
    illuminationPercentage: number; // % 0 - 100
    nextExactNewMoon: string;       // ISO UTC
    nextExactFullMoon: string;      // ISO UTC
  };
  activeAspects: {
    body1: string;
    body2: string;
    aspectType: "Kavuşum" | "Sekstil" | "Kare" | "Üçgen" | "Karşıt";
    exactAngle: number;
    orb: number;
    isApplying: boolean;       // Yaklaşan mı uzaklaşan mı
  }[];
  retrogradesList: {
    planet: string;
    sign: string;
    startDate: string;
    endDate: string;
  }[];
}
```

---

## 3. Otomatik Burç Yorumu Modeli (Horoscope Content Model)

```typescript
interface HoroscopeEntry {
  id: string;                  // "horoscope-2026-11-04-koc-daily"
  sign: string;                // "koc", "boga", ...
  period: "daily" | "weekly" | "monthly" | "yearly";
  dateRange: {
    start: string;             // YYYY-MM-DD
    end: string;               // YYYY-MM-DD
  };
  astronomicalTrigger: {
    keyEvent: string;          // örn: "Ay Yengeç geçişi ve Güneş-Satürn üçgeni"
    relevantAspects: string[];
    isVerifiedAstronomy: true; // Astronomik olayın doğrulanmış matematiksel varlığı
  };
  translations: {
    tr: LocalizedHoroscopeBody;
    en: LocalizedHoroscopeBody;
    el: LocalizedHoroscopeBody;
    es: LocalizedHoroscopeBody;
    ar: LocalizedHoroscopeBody;
  };
  contentVersion: number;
  dataAsOf: string;
  translationStatus: "complete" | "draft" | "review_required";
  reviewStatus: "approved" | "pending";
}

interface LocalizedHoroscopeBody {
  headline: string;
  theme: string;
  bodyText: string;
  focusAreas: {
    mind: string;
    relations: string;
    energy: string;
  };
}
```

---

## 4. Yasaklı İçerik ve Etik Filtreleme Kuralları (Content Safety Policy)

Otomatik içerik üretim şablonlarında ve yapay zekâ taslak destekleyicilerinde aşağıdaki unsurlar **KESİNLİKLE YASAKTIR**:

1. **Kesin Kehanet Yasağı:** "Yarın hayatının aşkıyla karşılaşacaksın", "Pazartesi günü kaza geçireceksin" gibi kesin determinist iddialar bulunamaz. Dil her zaman sembolik, olasılıksal ve farkındalık odaklıdır.
2. **Sağlık, Teşhis ve Tedavi İddiası Yasağı:** Tıbbi tavsiye, organ/hastalık teşhisi veya tedavi iması yapılamaz.
3. **Finansal ve Yatırım Tavsiyesi Yasağı:** "Bu hafta borsaya girin", "Kripto para alın" gibi spekülatif ifadeler engellenir.
4. **Korku Temelli Satış Yasağı:** "Lanetlisiniz", "Büyük felaket kapıda, hemen danışmanlık alın" tarzı manipülatif dil kesinlikle filtrelenir.
5. **Uydurma Astronomi Yasağı:** Gökyüzünde o tarihte gerçekleşmeyen bir gezegen kavuşumu veya sahte retro bilgisi içerik motoruna aktarılamaz.
6. **Yasal Sorumluluk Reddi (Disclaimer):** Tüm burç ve harita sayfalarında "Kişisel farkındalık, kültürel sembolizm ve eğlence amaçlıdır. Profesyonel psikolojik, hukuki veya tıbbi tavsiye yerine geçmez" ibaresi zorunludur.
