import { randomUUID } from 'node:crypto';
import { getAdmin } from './firebaseAdmin.js';
import { HttpError } from './errors.js';

const MAX_BODY_BYTES = 64 * 1024;

function allowedOrigins() {
  const list = (process.env.ALLOWED_ORIGINS ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  for (const host of [process.env.VERCEL_URL, process.env.VERCEL_BRANCH_URL, process.env.VERCEL_PROJECT_PRODUCTION_URL]) {
    if (host) list.push(`https://${host}`);
  }
  if (process.env.VERCEL_ENV !== 'production') {
    list.push('http://localhost:5173', 'http://localhost:5199', 'http://localhost:3000');
  }
  return new Set(list);
}

/** Browsers send Origin on cross-site and on same-site non-GET requests; it must be ours. */
function assertOrigin(req) {
  const origin = req.headers.origin;
  if (!origin) return;
  if (!allowedOrigins().has(origin)) {
    throw new HttpError(403, 'origin_denied', 'Origem não permitida.');
  }
}

async function authenticate(req) {
  const match = /^Bearer\s+([A-Za-z0-9._-]+)$/.exec(req.headers.authorization ?? '');
  if (!match) throw new HttpError(401, 'auth_required', 'Faça login para continuar.');
  let decoded;
  try {
    decoded = await getAdmin().auth.verifyIdToken(match[1], true);
  } catch (err) {
    if (err?.code === 'auth/id-token-revoked' || err?.code === 'auth/user-disabled') {
      throw new HttpError(401, 'session_revoked', 'Sua sessão foi encerrada. Entre de novo.');
    }
    throw new HttpError(401, 'invalid_token', 'Sessão inválida ou expirada. Entre de novo.');
  }
  const provider = decoded.firebase?.sign_in_provider ?? 'unknown';
  if (provider === 'anonymous') throw new HttpError(403, 'account_required', 'Crie uma conta para sincronizar.');
  return {
    uid: decoded.uid,
    email: decoded.email ?? null,
    emailVerified: decoded.email_verified === true,
    provider,
    authTime: (decoded.auth_time ?? 0) * 1000,
    isAdmin: decoded.admin === true,
  };
}

function log(level, payload) {
  const line = JSON.stringify({ level, at: new Date().toISOString(), ...payload });
  if (level === 'error') console.error(line);
  else console.log(line);
}

/**
 * Wraps a Vercel Node function: security headers, origin check, method
 * routing, JSON body guard, Firebase ID-token auth (with revocation check),
 * optional admin role, and uniform error envelopes { error: { code, message } }.
 */
export function createHandler(methods, { auth = true, admin = false } = {}) {
  return async function handler(req, res) {
    const requestId = randomUUID();
    const started = Date.now();
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Request-Id', requestId);
    let uid;
    try {
      assertOrigin(req);
      const run = methods[req.method];
      if (!run) {
        res.setHeader('Allow', Object.keys(methods).join(', '));
        throw new HttpError(405, 'method_not_allowed', 'Método não suportado.');
      }
      if (req.method === 'POST' || req.method === 'PATCH' || req.method === 'PUT') {
        if (!String(req.headers['content-type'] ?? '').startsWith('application/json')) {
          throw new HttpError(415, 'unsupported_media_type', 'Envie JSON.');
        }
        if (Number(req.headers['content-length'] ?? 0) > MAX_BODY_BYTES) {
          throw new HttpError(413, 'payload_too_large', 'Requisição grande demais.');
        }
        if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
          throw new HttpError(400, 'invalid_body', 'Corpo JSON inválido.');
        }
      }
      const ctx = { req, res, requestId, status: 200 };
      if (auth) {
        ctx.user = await authenticate(req);
        uid = ctx.user.uid;
        if (admin && !ctx.user.isAdmin) throw new HttpError(403, 'forbidden', 'Acesso restrito.');
      }
      const body = await run(ctx);
      if (!res.headersSent) res.status(ctx.status).json(body ?? { ok: true });
      log('info', { requestId, method: req.method, path: req.url, status: ctx.status, ms: Date.now() - started, uid });
    } catch (err) {
      if (err instanceof HttpError) {
        if (!res.headersSent) {
          res.status(err.status).json({ error: { code: err.code, message: err.message, ...(err.details ? { details: err.details } : {}) }, requestId });
        }
        log('warn', { requestId, method: req.method, path: req.url, status: err.status, code: err.code, ms: Date.now() - started, uid });
        return;
      }
      log('error', { requestId, method: req.method, path: req.url, message: err?.message, stack: err?.stack, uid });
      if (!res.headersSent) {
        res.status(500).json({ error: { code: 'internal', message: 'Erro interno. Tente de novo em instantes.' }, requestId });
      }
    }
  };
}

/**
 * Fixed-window limiter stored in users/{uid}/private/limits, evaluated inside
 * the caller's transaction so it can't be raced. Returns the fields the caller
 * must merge into the limits document (one write per transaction).
 */
export function consumeRate(snap, { bucket, limit, windowMs, now }) {
  const data = snap.exists ? snap.data() : {};
  const current = data[bucket] ?? { start: 0, count: 0 };
  const fresh = now - current.start >= windowMs;
  const count = fresh ? 1 : current.count + 1;
  if (count > limit) {
    throw new HttpError(429, 'rate_limited', 'Calma, aventureiro! Muitas ações seguidas. Tente em alguns segundos.');
  }
  return { [bucket]: { start: fresh ? now : current.start, count } };
}
