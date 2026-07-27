const enc = new TextEncoder();

const toHex = (bytes) => [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, '0')).join('');
const randomHex = (size = 24) => {
  const bytes = new Uint8Array(size);
  crypto.getRandomValues(bytes);
  return toHex(bytes);
};

async function sha256(value) {
  return toHex(await crypto.subtle.digest('SHA-256', enc.encode(value)));
}

async function derivePassword(password, salt) {
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', hash: 'SHA-256', salt: enc.encode(salt), iterations: 210000 },
    key,
    256
  );
  return toHex(bits);
}

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...headers }
  });
}

function readCookie(request, name) {
  const cookie = request.headers.get('cookie') || '';
  const hit = cookie.split(';').map((x) => x.trim()).find((x) => x.startsWith(`${name}=`));
  return hit ? decodeURIComponent(hit.slice(name.length + 1)) : null;
}

const sessionCookie = (token, maxAge = 60 * 60 * 24 * 30) =>
  `mythborn_session=${encodeURIComponent(token)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`;

async function body(request) {
  try { return await request.json(); } catch { return null; }
}

function validEmail(value) {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

function registrationError(error, env) {
  console.error('registration_failed', error);
  const detail = env.ENVIRONMENT === 'preview' ? ` (${error?.message || 'bilinmeyen hata'})` : '';
  return json({ error: `Hesap oluşturulamadı${detail}.`, code: 'REGISTER_FAILED' }, 500);
}

export async function register(request, env) {
  if (!env.DB) return json({ error: 'Üyelik veritabanı henüz bağlanmadı.' }, 503);
  const input = await body(request);
  const email = input?.email?.trim().toLowerCase();
  const password = input?.password;
  if (!validEmail(email) || typeof password !== 'string' || password.length < 10) {
    return json({ error: 'Geçerli bir e-posta ve en az 10 karakterli şifre gerekli.' }, 400);
  }

  try {
    const exists = await env.DB.prepare('SELECT id FROM users WHERE email = ? AND deleted_at IS NULL').bind(email).first();
    if (exists) return json({ error: 'Bu e-posta ile bir hesap zaten var.' }, 409);

    const userId = crypto.randomUUID();
    const salt = randomHex(16);
    const passwordHash = await derivePassword(password, salt);
    const sessionId = crypto.randomUUID();
    const token = randomHex(32);
    const tokenHash = await sha256(token);
    const expiresAt = new Date(Date.now() + 30 * 86400000).toISOString();

    await env.DB.prepare('INSERT INTO users (id,email,password_hash,password_salt) VALUES (?,?,?,?)')
      .bind(userId, email, passwordHash, salt).run();
    try {
      await env.DB.prepare("INSERT INTO subscriptions (id,user_id,status,plan_code,amount_kurus) VALUES (?,?,'inactive','mythborn_monthly_115',11500)")
        .bind(crypto.randomUUID(), userId).run();
      await env.DB.prepare('INSERT INTO sessions (id,user_id,token_hash,expires_at,user_agent) VALUES (?,?,?,?,?)')
        .bind(sessionId, userId, tokenHash, expiresAt, request.headers.get('user-agent') || '').run();
    } catch (error) {
      await env.DB.prepare('DELETE FROM users WHERE id=?').bind(userId).run().catch(() => {});
      throw error;
    }

    return json({ ok: true, user: { id: userId, email, membership: 'inactive' } }, 201, { 'set-cookie': sessionCookie(token) });
  } catch (error) {
    if (String(error?.message || '').includes('UNIQUE constraint failed: users.email')) {
      return json({ error: 'Bu e-posta ile bir hesap zaten var.' }, 409);
    }
    return registrationError(error, env);
  }
}

export async function login(request, env) {
  if (!env.DB) return json({ error: 'Üyelik veritabanı henüz bağlanmadı.' }, 503);
  const input = await body(request);
  const email = input?.email?.trim().toLowerCase();
  const password = input?.password;
  if (!validEmail(email) || typeof password !== 'string') return json({ error: 'E-posta veya şifre hatalı.' }, 400);

  const user = await env.DB.prepare('SELECT id,email,password_hash,password_salt FROM users WHERE email = ? AND deleted_at IS NULL').bind(email).first();
  if (!user || await derivePassword(password, user.password_salt) !== user.password_hash) {
    return json({ error: 'E-posta veya şifre hatalı.' }, 401);
  }

  const token = randomHex(32);
  const tokenHash = await sha256(token);
  const expiresAt = new Date(Date.now() + 30 * 86400000).toISOString();
  await env.DB.prepare('INSERT INTO sessions (id,user_id,token_hash,expires_at,user_agent) VALUES (?,?,?,?,?)')
    .bind(crypto.randomUUID(), user.id, tokenHash, expiresAt, request.headers.get('user-agent') || '').run();
  return json({ ok: true, user: { id: user.id, email: user.email } }, 200, { 'set-cookie': sessionCookie(token) });
}

export async function currentUser(request, env) {
  if (!env.DB) return null;
  const token = readCookie(request, 'mythborn_session');
  if (!token) return null;
  const tokenHash = await sha256(token);
  return env.DB.prepare(`SELECT u.id,u.email,u.email_verified_at,s.status AS membership_status,s.current_period_end
    FROM sessions x JOIN users u ON u.id=x.user_id LEFT JOIN subscriptions s ON s.user_id=u.id
    WHERE x.token_hash=? AND x.expires_at>CURRENT_TIMESTAMP AND u.deleted_at IS NULL`).bind(tokenHash).first();
}

export async function me(request, env) {
  const user = await currentUser(request, env);
  if (!user) return json({ authenticated: false }, 401);
  return json({ authenticated: true, user });
}

export async function logout(request, env) {
  const token = readCookie(request, 'mythborn_session');
  if (env.DB && token) await env.DB.prepare('DELETE FROM sessions WHERE token_hash=?').bind(await sha256(token)).run();
  return json({ ok: true }, 200, { 'set-cookie': sessionCookie('', 0) });
}

export async function saveResult(request, env) {
  const user = await currentUser(request, env);
  if (!user) return json({ error: 'Sonucu kaydetmek için giriş yapmalısın.' }, 401);
  const input = await body(request);
  if (!input?.archetypeCode || !input?.archetypeName || !Number.isFinite(input?.desireValue)) return json({ error: 'Geçersiz sonuç.' }, 400);
  const id = crypto.randomUUID();
  const shareToken = randomHex(12);
  await env.DB.prepare(`INSERT INTO results (id,user_id,archetype_code,archetype_name,desire_value,score_json,answer_json,share_token)
    VALUES (?,?,?,?,?,?,?,?)`).bind(id, user.id, input.archetypeCode, input.archetypeName, Math.round(input.desireValue), JSON.stringify(input.scores || {}), JSON.stringify(input.answers || []), shareToken).run();
  return json({ ok: true, id, shareToken }, 201);
}

export async function resultHistory(request, env) {
  const user = await currentUser(request, env);
  if (!user) return json({ error: 'Giriş gerekli.' }, 401);
  const rows = await env.DB.prepare('SELECT id,archetype_code,archetype_name,desire_value,share_token,created_at FROM results WHERE user_id=? ORDER BY created_at DESC LIMIT 50').bind(user.id).all();
  return json({ results: rows.results || [] });
}
