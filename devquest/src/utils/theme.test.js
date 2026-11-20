import { describe, it, expect } from 'vitest';
import {
  isValidTheme,
  resolveInitialTheme,
  toggleThemeValue,
  applyTheme,
} from './theme.js';

describe('theme utilities', () => {
  it('validates only dark and light theme names', () => {
    expect(isValidTheme('dark')).toBe(true);
    expect(isValidTheme('light')).toBe(true);
    expect(isValidTheme('neon')).toBe(false);
    expect(isValidTheme(null)).toBe(false);
  });

  it('prioritizes URL query param over stored preference and system media query', () => {
    expect(
      resolveInitialTheme({
        search: '?theme=light',
        storedTheme: 'dark',
        prefersLight: false,
      })
    ).toBe('light');

    expect(
      resolveInitialTheme({
        search: '?theme=dark',
        storedTheme: 'light',
        prefersLight: true,
      })
    ).toBe('dark');
  });

  it('falls back to stored preference, then system preference, defaulting to dark', () => {
    expect(resolveInitialTheme({ storedTheme: 'light', prefersLight: false })).toBe('light');
    expect(resolveInitialTheme({ storedTheme: null, prefersLight: true })).toBe('light');
    expect(resolveInitialTheme({ storedTheme: 'invalid', prefersLight: false })).toBe('dark');
  });

  it('toggles cleanly between dark and light', () => {
    expect(toggleThemeValue('dark')).toBe('light');
    expect(toggleThemeValue('light')).toBe('dark');
  });

  it('applies data-theme attribute safely to a document-like object', () => {
    const attrs = {};
    const fakeDoc = {
      documentElement: {
        setAttribute: (k, v) => {
          attrs[k] = v;
        },
      },
    };

    expect(applyTheme('light', fakeDoc)).toBe('light');
    expect(attrs['data-theme']).toBe('light');

    expect(applyTheme('unsupported', fakeDoc)).toBe('dark');
    expect(attrs['data-theme']).toBe('dark');
  });
});
