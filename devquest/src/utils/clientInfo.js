/**
 * What the browser reports about itself for the account's device history.
 * No fingerprinting tricks: only standard, user-visible properties plus a
 * random per-browser id kept in localStorage.
 */
const DEVICE_KEY = 'devquest-device-id';
export const APP_VERSION = '2.0.0';

function deviceId(storage) {
  try {
    let id = storage.getItem(DEVICE_KEY);
    if (!id) {
      id = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `d-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
      storage.setItem(DEVICE_KEY, id);
    }
    return id;
  } catch {
    return undefined;
  }
}

function utmFrom(search) {
  const params = new URLSearchParams(search);
  const utm = {};
  for (const key of ['source', 'medium', 'campaign', 'term', 'content']) {
    const value = params.get(`utm_${key}`);
    if (value) utm[key] = value;
  }
  return Object.keys(utm).length ? utm : undefined;
}

export function collectClientInfo(theme) {
  if (typeof window === 'undefined') return {};
  const nav = window.navigator;
  const media = (q) => (window.matchMedia ? window.matchMedia(q).matches : undefined);
  return {
    deviceId: deviceId(window.localStorage),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    locale: nav.language,
    languages: Array.from(nav.languages ?? []).slice(0, 5),
    screen: { w: window.screen?.width, h: window.screen?.height, dpr: window.devicePixelRatio },
    viewport: { w: window.innerWidth, h: window.innerHeight },
    colorScheme: media('(prefers-color-scheme: dark)') ? 'dark' : 'light',
    theme,
    reducedMotion: media('(prefers-reduced-motion: reduce)'),
    touch: (nav.maxTouchPoints ?? 0) > 0,
    standalone: media('(display-mode: standalone)'),
    cores: nav.hardwareConcurrency,
    memoryGb: nav.deviceMemory,
    connection: nav.connection?.effectiveType,
    appVersion: APP_VERSION,
    referrer: document.referrer || undefined,
    landingPath: `${window.location.pathname}${window.location.search}`.slice(0, 120),
    utm: utmFrom(window.location.search),
  };
}
