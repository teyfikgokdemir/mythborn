# Mythborn Cloudflare Kurulumu

Bu belge preview ve production ortamlarının güvenli biçimde ayağa kaldırılması içindir.

## 1. Ön koşullar

- Node.js 20 veya üzeri
- Cloudflare hesabı
- `npm install`
- `npx wrangler login`

## 2. Preview D1 veritabanı

```bash
npm run db:create:preview
```

Komut çıktısındaki `database_id` değerini geçici preview yapılandırmasına ekle. Binding adı kesinlikle `DB` olmalıdır.

Migration'ları uygula:

```bash
npm run db:migrate:preview
```

Uygulanması gereken migration'lar:

1. `0001_membership.sql`
2. `0002_account_lifecycle.sql`
3. `0003_admin_operations.sql`
4. `0004_abuse_protection.sql`

## 3. Preview değişkenleri ve secret'lar

Aşağıdaki değerleri preview Worker'a ekle:

```bash
npx wrangler secret put PAYMENT_WEBHOOK_SECRET --name mythborn-preview
npx wrangler secret put TURNSTILE_SECRET --name mythborn-preview
```

Düz metin değişkenleri:

- `ADMIN_EMAILS`: yönetim paneline erişecek e-posta adresleri, virgülle ayrılır.
- `TURNSTILE_SITE_KEY`: Cloudflare Turnstile site anahtarı.

E-posta sağlayıcısı bağlanana kadar `EMAIL` binding'i olmayabilir. Bu durumda doğrulama ve şifre sıfırlama uçları `pending_provider` döndürür; sahte gönderim başarısı göstermez.

## 4. Preview deploy

```bash
npm run preview
```

Deploy öncesinde audit otomatik çalışır. Preview URL üzerinden şu akışlar test edilmelidir:

- Ana sayfa ve mobil menü
- İlk üç ücretsiz seçim
- Üyelik duvarı
- Kayıt ve giriş
- Kaldığı yerden devam
- Tam sonuç ve PNG paylaşım kartı
- Hesap geçmişi
- Üyelik iptali
- Hesap silme
- `/yonetim` yönetici paneli
- Turnstile ve hız sınırı davranışı

## 5. Production D1

```bash
npm run db:create
```

Çıktıdaki production `database_id` değeri `wrangler.jsonc` içindeki `DB` binding'ine eklenir. Ardından:

```bash
npm run db:migrate:production
```

Preview ve production aynı D1 veritabanını kullanmamalıdır.

## 6. Production secret'ları

```bash
npx wrangler secret put PAYMENT_WEBHOOK_SECRET
npx wrangler secret put TURNSTILE_SECRET
```

Cloudflare panelinde ayrıca:

- `ADMIN_EMAILS`
- `TURNSTILE_SITE_KEY`
- E-posta sağlayıcısının `EMAIL` binding'i
- Ödeme sağlayıcısının gerekli ek secret'ları

ayarlanmalıdır.

## 7. Production yayın kapısı

Production deploy yalnızca şu koşullar sağlandığında yapılmalıdır:

- GitHub Actions kalite kontrolü başarılı
- Preview üzerinde mobil ve masaüstü QA tamamlandı
- Gerçek ödeme sandbox akışı geçti
- E-posta doğrulama ve şifre sıfırlama çalıştı
- Webhook tekrar gönderim testi geçti
- Yönetici paneli yalnızca yetkili e-postada açıldı
- Yasal metinlerde ticari unvan, adres ve sağlayıcı bilgileri kesinleştirildi
- D1 yedeği ve geri dönüş planı hazırlandı

Son yayın komutu:

```bash
npm run deploy
```
