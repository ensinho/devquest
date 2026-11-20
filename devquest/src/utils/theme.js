export const THEME_STORAGE_KEY = 'devquest-theme';
export const SUPPORTED_THEMES = Object.freeze(['dark', 'light']);

export function isValidTheme(value) {
  return value === 'dark' || value === 'light';
}

export function resolveInitialTheme({ search = '', storedTheme = null, prefersLight = false } = {}) {
  const params = new URLSearchParams(search);
  const queryTheme = params.get('theme');
  if (isValidTheme(queryTheme)) {
    return queryTheme;
  }

  if (isValidTheme(storedTheme)) {
    return storedTheme;
  }

  return prefersLight ? 'light' : 'dark';
}

export function toggleThemeValue(currentTheme) {
  return currentTheme === 'light' ? 'dark' : 'light';
}

export function applyTheme(theme, doc = typeof document !== 'undefined' ? document : null) {
  const safeTheme = isValidTheme(theme) ? theme : 'dark';
  if (doc?.documentElement) {
    doc.documentElement.setAttribute('data-theme', safeTheme);
  }
  return safeTheme;
}

export function initTheme() {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  let storedTheme = null;
  try {
    storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    storedTheme = null;
  }

  const prefersLight =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: light)').matches;

  const initial = resolveInitialTheme({
    search: window.location.search,
    storedTheme,
    prefersLight,
  });

  return applyTheme(initial);
}

export function persistTheme(theme) {
  const safeTheme = applyTheme(theme);
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, safeTheme);
    } catch {
      // Ignore storage failures in restricted contexts
    }
  }
  return safeTheme;
}

/**
 * Resolves a CSS custom property (e.g. '--color-live') to a #rrggbb hex string
 * for canvas-based renderers like open-bot-avatar without hardcoding colors in CSS.
 */
export function resolveTokenHex(tokenName, fallbackHex = '#2dd4bf') {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return fallbackHex;
  }
  const raw = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(tokenName)
    .trim();

  if (/^#[0-9a-fA-F]{6}$/.test(raw)) {
    return raw;
  }
  if (/^#[0-9a-fA-F]{3}$/.test(raw)) {
    return `#${raw[1]}${raw[1]}${raw[2]}${raw[2]}${raw[3]}${raw[3]}`;
  }
  const rgbMatch = raw.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
  if (rgbMatch) {
    const toHex = (n) => Number(n).toString(16).padStart(2, '0');
    return `#${toHex(rgbMatch[1])}${toHex(rgbMatch[2])}${toHex(rgbMatch[3])}`;
  }
  return fallbackHex;
}
