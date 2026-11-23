import { createHash } from 'node:crypto';

/**
 * Request/device metadata, collected server-side. Privacy defaults: the raw IP
 * is never stored (salted SHA-256 prefix only), geo stops at city level (no
 * coordinates or postal code), and every client-sent field is whitelisted,
 * typed and length-capped.
 */

// eslint-disable-next-line no-control-regex -- stripping control characters is the point
const str = (value, max) => (typeof value === 'string' ? value.replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, max) : undefined);
const int = (value, min, max) => {
  const n = Number(value);
  return Number.isFinite(n) ? Math.min(max, Math.max(min, Math.round(n))) : undefined;
};
const num = (value, min, max) => {
  const n = Number(value);
  return Number.isFinite(n) ? Math.min(max, Math.max(min, Math.round(n * 100) / 100)) : undefined;
};
const bool = (value) => (typeof value === 'boolean' ? value : undefined);
const oneOf = (value, list) => (list.includes(value) ? value : undefined);

function compact(obj) {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null || v === '') continue;
    if (typeof v === 'object' && !Array.isArray(v)) {
      const inner = compact(v);
      if (Object.keys(inner).length) out[k] = inner;
    } else {
      out[k] = v;
    }
  }
  return out;
}

export function isValidTimeZone(tz) {
  if (typeof tz !== 'string' || tz.length > 64) return false;
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: tz });
    return true;
  } catch {
    return false;
  }
}

/** YYYY-MM-DD in the player's timezone (UTC when unknown). */
export function localDateKey(ms, timeZone) {
  const tz = isValidTimeZone(timeZone) ? timeZone : 'UTC';
  return new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }).format(ms);
}

export function previousDateKey(dateKey) {
  const d = new Date(`${dateKey}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

function safeReferrer(value) {
  const raw = str(value, 500);
  if (!raw) return undefined;
  try {
    const url = new URL(raw);
    return url.protocol === 'https:' || url.protocol === 'http:' ? `${url.origin}${url.pathname}`.slice(0, 200) : undefined;
  } catch {
    return undefined;
  }
}

/** Whitelists what the browser reports about itself. */
export function sanitizeClientInfo(input) {
  const c = input && typeof input === 'object' ? input : {};
  const deviceId = typeof c.deviceId === 'string' && /^[A-Za-z0-9-]{8,64}$/.test(c.deviceId) ? c.deviceId : undefined;
  return compact({
    deviceId,
    timezone: isValidTimeZone(c.timezone) ? c.timezone : undefined,
    locale: str(c.locale, 35),
    languages: Array.isArray(c.languages) ? c.languages.slice(0, 5).map((l) => str(l, 35)).filter(Boolean) : undefined,
    screen: c.screen && typeof c.screen === 'object' ? { w: int(c.screen.w, 0, 20000), h: int(c.screen.h, 0, 20000), dpr: num(c.screen.dpr, 0.5, 8) } : undefined,
    viewport: c.viewport && typeof c.viewport === 'object' ? { w: int(c.viewport.w, 0, 20000), h: int(c.viewport.h, 0, 20000) } : undefined,
    colorScheme: oneOf(c.colorScheme, ['dark', 'light']),
    theme: oneOf(c.theme, ['dark', 'light']),
    reducedMotion: bool(c.reducedMotion),
    touch: bool(c.touch),
    standalone: bool(c.standalone),
    cores: int(c.cores, 1, 256),
    memoryGb: num(c.memoryGb, 0.25, 1024),
    connection: str(c.connection, 12),
    appVersion: str(c.appVersion, 40),
    referrer: safeReferrer(c.referrer),
    landingPath: str(c.landingPath, 120),
    utm: c.utm && typeof c.utm === 'object'
      ? { source: str(c.utm.source, 64), medium: str(c.utm.medium, 64), campaign: str(c.utm.campaign, 64), term: str(c.utm.term, 64), content: str(c.utm.content, 64) }
      : undefined,
  });
}

/** Small, dependency-free user-agent summary. */
export function parseUserAgent(ua = '') {
  const s = String(ua).slice(0, 512);
  const browser =
    (/Edg\//.test(s) && 'Edge') ||
    (/OPR\/|Opera/.test(s) && 'Opera') ||
    (/SamsungBrowser/.test(s) && 'Samsung Internet') ||
    (/Firefox\//.test(s) && 'Firefox') ||
    (/Chrome\//.test(s) && 'Chrome') ||
    (/Safari\//.test(s) && 'Safari') ||
    'Outro';
  const versionMatch = s.match(/(?:Edg|OPR|SamsungBrowser|Firefox|Chrome|Version)\/(\d+)/);
  const os =
    (/Windows NT/.test(s) && 'Windows') ||
    (/iPhone|iPad|iPod/.test(s) && 'iOS') ||
    (/Android/.test(s) && 'Android') ||
    (/CrOS/.test(s) && 'ChromeOS') ||
    (/Mac OS X|Macintosh/.test(s) && 'macOS') ||
    (/Linux/.test(s) && 'Linux') ||
    'Outro';
  const isBot = /bot|crawler|spider|headless|lighthouse/i.test(s);
  const deviceType = isBot ? 'bot' : /iPad|Tablet/.test(s) ? 'tablet' : /Mobi|iPhone|Android/.test(s) ? 'mobile' : 'desktop';
  return { browser, browserMajor: versionMatch ? Number(versionMatch[1]) : null, os, deviceType, userAgent: s };
}

function header(req, name) {
  const value = req.headers[name];
  return Array.isArray(value) ? value[0] : value;
}

function decode(value) {
  if (!value) return undefined;
  try {
    return decodeURIComponent(value).slice(0, 80);
  } catch {
    return String(value).slice(0, 80);
  }
}

/** Vercel edge geo headers, city precision at most. */
export function geoFromRequest(req) {
  return compact({
    country: str(header(req, 'x-vercel-ip-country'), 2),
    region: str(header(req, 'x-vercel-ip-country-region'), 8),
    city: decode(header(req, 'x-vercel-ip-city')),
    timezone: str(header(req, 'x-vercel-ip-timezone'), 64),
  });
}

export function hashIp(req) {
  const forwarded = header(req, 'x-forwarded-for') ?? header(req, 'x-real-ip') ?? '';
  const ip = String(forwarded).split(',')[0].trim();
  if (!ip) return undefined;
  const salt = process.env.IP_HASH_SALT ?? '';
  return createHash('sha256').update(`${salt}:${ip}`).digest('hex').slice(0, 24);
}

export function hashId(value) {
  const salt = process.env.IP_HASH_SALT ?? '';
  return createHash('sha256').update(`${salt}:id:${value}`).digest('hex').slice(0, 24);
}

export { compact };
