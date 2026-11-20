import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const stylesDir = dirname(fileURLToPath(import.meta.url));
const readStyle = (filename) => readFileSync(resolve(stylesDir, filename), 'utf8');

const RAW_COLOR_PATTERN = /#[0-9a-fA-F]{3,8}\b|\brgba?\s*\(|\bhsla?\s*\(/;

describe('3-layer CSS token architecture guardrails', () => {
  it('imports layers in strict order: primitives -> semantic -> components', () => {
    const entry = readStyle('tokens.css');
    const pIdx = entry.indexOf('./tokens.primitives.css');
    const sIdx = entry.indexOf('./tokens.semantic.css');
    const cIdx = entry.indexOf('./tokens.components.css');

    expect(pIdx).toBeGreaterThan(-1);
    expect(sIdx).toBeGreaterThan(pIdx);
    expect(cIdx).toBeGreaterThan(sIdx);
  });

  it('enforces zero raw hex/rgb/hsl colors in semantic, component, app, and showcase CSS', () => {
    for (const file of ['tokens.semantic.css', 'tokens.components.css', 'app.css', 'showcase.css']) {
      const css = readStyle(file);
      expect(css, `${file} must not contain raw colors`).not.toMatch(RAW_COLOR_PATTERN);
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
      '--color-text',
      '--color-text-muted',
      '--color-primary',
      '--color-gold',
      '--color-live',
      '--color-danger',
      '--color-arcane',
      '--color-companion-ambient',
      '--focus-ring',
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
