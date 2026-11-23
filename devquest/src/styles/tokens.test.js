import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const stylesDir = dirname(fileURLToPath(import.meta.url));
const srcDir = resolve(stylesDir, '..');
const appRoot = resolve(srcDir, '..');

const readStyle = (filename) => readFileSync(resolve(stylesDir, filename), 'utf8');

function collectJsxFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...collectJsxFiles(full));
    } else if (entry.endsWith('.jsx')) {
      results.push(full);
    }
  }
  return results;
}

// Every stylesheet except the primitive palette must stay token-only.
const SCREEN_STYLESHEETS = readdirSync(stylesDir).filter(
  (file) => file.endsWith('.css') && !['tokens.primitives.css', 'tokens.css'].includes(file)
);
const SCREEN_ONLY_STYLESHEETS = SCREEN_STYLESHEETS.filter(
  (file) => !['tokens.semantic.css', 'tokens.components.css'].includes(file)
);

const RAW_COLOR_PATTERN = /#[0-9a-fA-F]{3,8}\b|\brgba?\s*\(|\bhsla?\s*\(/;
const PRIMITIVE_TOKEN_PATTERN = /var\(--primitive-/;
const IMPORTANT_PATTERN = /!important\b/;
const INLINE_STYLE_TAG_PATTERN = /<style[\s>]/i;

describe('3-layer CSS token architecture & Anti-Slop Design Gate (UIZZE / pen.dev)', () => {
  it('imports layers in strict order: primitives -> semantic -> components', () => {
    const entry = readStyle('tokens.css');
    const pIdx = entry.indexOf('./tokens.primitives.css');
    const sIdx = entry.indexOf('./tokens.semantic.css');
    const cIdx = entry.indexOf('./tokens.components.css');

    expect(pIdx).toBeGreaterThan(-1);
    expect(sIdx).toBeGreaterThan(pIdx);
    expect(cIdx).toBeGreaterThan(sIdx);
  });

  it('enforces zero raw hex/rgb/hsl colors in semantic, component, app, and screen CSS', () => {
    expect(SCREEN_STYLESHEETS).toContain('binder.css');
    for (const file of SCREEN_STYLESHEETS) {
      const css = readStyle(file);
      expect(css, `${file} must not contain raw colors`).not.toMatch(RAW_COLOR_PATTERN);
    }
  });

  it('prevents Layer 1 --primitive-* leaks in component, app, and screen CSS', () => {
    for (const file of ['tokens.components.css', ...SCREEN_ONLY_STYLESHEETS]) {
      const css = readStyle(file);
      expect(css, `${file} must reference semantic/component tokens only, never --primitive-*`).not.toMatch(
        PRIMITIVE_TOKEN_PATTERN
      );
    }
  });

  it('forbids !important specificity hacks in every screen stylesheet', () => {
    for (const file of SCREEN_ONLY_STYLESHEETS) {
      const css = readStyle(file);
      expect(css, `${file} must not use !important hacks`).not.toMatch(IMPORTANT_PATTERN);
    }
  });

  it('forbids inline <style> injections in JSX and runtime CDN scripts in index.html', () => {
    const indexHtml = readFileSync(resolve(appRoot, 'index.html'), 'utf8');
    expect(indexHtml).not.toMatch(/cdn\.tailwindcss\.com/i);
    expect(indexHtml).toContain('viewport-fit=cover');

    const jsxFiles = collectJsxFiles(srcDir);
    expect(jsxFiles.length).toBeGreaterThan(0);
    for (const filePath of jsxFiles) {
      const source = readFileSync(filePath, 'utf8');
      expect(source, `${filePath} must not inject inline <style> tags`).not.toMatch(
        INLINE_STYLE_TAG_PATTERN
      );
    }
  });

  it('defines matching core semantic tokens and companion-stage harmonies in both Dark and Light themes', () => {
    const semantic = readStyle('tokens.semantic.css');
    const [darkSection, lightSection] = semantic.split("[data-theme='light'] {");

    expect(darkSection).toBeTruthy();
    expect(lightSection).toBeTruthy();

    const requiredTokens = [
      '--color-bg',
      '--color-surface',
      '--color-surface-raised',
      '--color-surface-glass',
      '--color-node-available-bg',
      '--color-node-locked-bg',
      '--color-hero-tray-bg',
      '--color-hero-tray-divider',
      '--color-text',
      '--color-text-muted',
      '--color-primary',
      '--color-gold',
      '--color-live',
      '--color-danger',
      '--color-arcane',
      '--color-companion-ambient',
      '--color-companion-hero',
      '--focus-ring',
      '--syntax-keyword',
      '--syntax-tag',
      '--syntax-attr',
      '--syntax-string',
      '--syntax-number',
      '--syntax-function',
      '--syntax-comment',
    ];

    for (const token of requiredTokens) {
      expect(darkSection, `Dark theme missing ${token}`).toContain(`${token}:`);
      expect(lightSection, `Light theme missing ${token}`).toContain(`${token}:`);
    }

    for (const stage of ['1', '2', '3']) {
      expect(semantic).toContain(`[data-theme='dark'][data-companion-stage='${stage}']`);
      expect(semantic).toContain(`[data-theme='light'][data-companion-stage='${stage}']`);
    }
  });
});
