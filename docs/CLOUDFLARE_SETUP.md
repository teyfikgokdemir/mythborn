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
5. `0005_oauth_identities.sql`

## 3. Preview değişkenleri ve secret'lar

Aşağıdaki değerleri preview Worker'a ekle:

```bash
npx wrangler secret put PAYMENT_WEBHOOK_SECRET --name mythborn-preview
npx wrangler secret put TURNSTILE_SECRET --name mythborn-preview
npx wrangler secret put GOOGLE_CLIENT_SECRET --name mythborn-preview
npx wrangler secret put APPLE_PRIVATE_KEY --name mythborn-preview
```

Düz metin değişkenleri:

- `ADMIN_EMAILS`: yönetim paneline erişecek e-posta adresleri, virgülle ayrılır.
- `TURNSTILE_SITE_KEY`: Cloudflare Turnstile site anahtarı.
- `GOOGLE_CLIENT_ID`: Google OAuth Web Application istemci kimliği.
- `APPLE_CLIENT_ID`: Apple Developer içindeki Services ID.
- `APPLE_TEAM_ID`: Apple Developer Team ID.
- `APPLE_KEY_ID`: Sign in with Apple anahtar kimliği.

E-posta sağlayıcısı bağlanana kadar `EMAIL` binding'i olmayabilir. Bu durumda doğrulama ve şifre sıfırlama uçları `pending_provider` döndürür; sahte gönderim başarısı göstermez.

## 4. Google ile giriş kurulumu

Google Cloud Console'da bir OAuth 2.0 Web Application oluştur.

Production için Authorized redirect URI:

```text
https://mythborn.co/api/auth/oauth/google/callback
```

Preview için kullanılan sabit Worker alan adı ayrıca eklenmelidir:

```text
https://<preview-worker-domain>/api/auth/oauth/google/callback
```

Authorized JavaScript origin olarak ilgili production ve preview originlerini ekle. Secret değerini yalnız Cloudflare secret olarak sakla; repoya veya `wrangler.jsonc` içine yazma.

Google girişinin aktif görünmesi için hem `GOOGLE_CLIENT_ID` hem `GOOGLE_CLIENT_SECRET` tanımlı olmalıdır.

## 5. Apple ile giriş kurulumu

Apple Developer hesabında:

1. Mythborn alan adı için App ID oluştur veya mevcut App ID'yi kullan.
2. Sign in with Apple özelliğini etkinleştir.
3. Bir Services ID oluştur ve bunu `APPLE_CLIENT_ID` olarak kullan.
4. Web Authentication Configuration içinde domain ve return URL tanımla.
5. Sign in with Apple anahtarı üret, `.p8` dosyasını bir kez güvenli biçimde indir.

Production Return URL:

```text
https://mythborn.co/api/auth/oauth/apple/callback
```

Preview Return URL:

```text
https://<preview-worker-domain>/api/auth/oauth/apple/callback
```

Apple private key Cloudflare'a girilirken satır sonları korunmalıdır. Panel tek satır istiyorsa `\n` kaçışlı biçim kullanılabilir. Kod her iki biçimi de işleyecek şekilde hazırlanmıştır.

Apple girişinin aktif görünmesi için `APPLE_CLIENT_ID`, `APPLE_TEAM_ID`, `APPLE_KEY_ID` ve `APPLE_PRIVATE_KEY` birlikte tanımlı olmalıdır.

## 6. Preview deploy

```bash
npm run preview
```

Deploy öncesinde audit otomatik çalışır. Preview URL üzerinden şu akışlar test edilmelidir:

- Ana sayfa ve mobil menü
- İlk üç ücretsiz seçim
- Üyelik duvarı
- E-posta ile kayıt ve giriş
- Google ile kayıt ve giriş
- Apple ile kayıt ve giriş
- Aynı doğrulanmış e-posta için hesap birleştirme
- OAuth iptali, hatalı state ve süresi dolmuş akış
- Kaldığı yerden devam
- Tam sonuç ve PNG paylaşım kartı
- Hesap geçmişi
- Üyelik iptali
- Hesap silme
- `/yonetim` yönetici paneli
- Turnstile ve hız sınırı davranışı

## 7. Production D1

```bash
npm run db:create
```

Çıktıdaki production `database_id` değeri `wrangler.jsonc` içindeki `DB` binding'ine eklenir. Ardından:

```bash
npm run db:migrate:production
```

Preview ve production aynı D1 veritabanını kullanmamalıdır.

## 8. Production secret'ları

```bash
npx wrangler secret put PAYMENT_WEBHOOK_SECRET
npx wrangler secret put TURNSTILE_SECRET
npx wrangler secret put GOOGLE_CLIENT_SECRET
npx wrangler secret put APPLE_PRIVATE_KEY
```

Cloudflare panelinde ayrıca:

- `ADMIN_EMAILS`
- `TURNSTILE_SITE_KEY`
- `GOOGLE_CLIENT_ID`
- `APPLE_CLIENT_ID`
- `APPLE_TEAM_ID`
- `APPLE_KEY_ID`
- E-posta sağlayıcısının `EMAIL` binding'i
- Ödeme sağlayıcısının gerekli ek secret'ları

ayarlanmalıdır.

## 9. OAuth güvenlik kontrolleri

Yayın öncesinde aşağıdakiler doğrulanmalıdır:

- Google ve Apple callback adresleri tam olarak eşleşiyor.
- OAuth `state` ve nonce doğrulaması başarısız istekleri reddediyor.
- Google PKCE doğrulaması çalışıyor.
- Google e-postası yalnız `email_verified=true` olduğunda kullanılıyor.
- Apple JWT imzası güncel Apple public key'iyle doğrulanıyor.
- `iss`, `aud`, `exp` ve nonce kontrolleri uygulanıyor.
- Mevcut e-posta hesabı kopyalanmıyor; sağlayıcı kimliği aynı hesaba bağlanıyor.
- Silinmiş kullanıcı hesabı otomatik yeniden etkinleştirilmiyor.
- OAuth cookie'leri HttpOnly, Secure ve kısa ömürlü.
- Giriş sonrası yönlendirme yalnız güvenli site içi yollara izin veriyor.

## 10. Production yayın kapısı

Production deploy yalnızca şu koşullar sağlandığında yapılmalıdır:

- GitHub Actions kalite kontrolü başarılı
- Preview üzerinde mobil ve masaüstü QA tamamlandı
- Google ve Apple gerçek sağlayıcı testleri geçti
- OAuth hesap birleştirme testi geçti
- E-posta doğrulama ve şifre sıfırlama çalıştı
- Gerçek ödeme sandbox akışı geçti veya ödeme sistemi kapalı olarak doğrulandı
- Webhook tekrar gönderim testi geçti
- Yönetici paneli yalnızca yetkili e-postada açıldı
- Yasal metinlerde ticari unvan, adres ve sağlayıcı bilgileri kesinleştirildi
- D1 yedeği ve geri dönüş planı hazırlandı

Son yayın komutu:

```bash
npm run deploy
```
