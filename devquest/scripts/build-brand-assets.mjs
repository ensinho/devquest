/**
 * Generates every brand/SEO raster from the real pixel sprites + token palette:
 *   public/favicon.svg · favicon.ico · apple-touch-icon.png · icon-192/512.png
 *   icon-maskable-512.png · og-image.png (1200×630)
 * Colours are resolved from src/styles/tokens.*.css (single source of truth).
 *
 *   node scripts/build-brand-assets.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { chromium } from 'playwright-core';
import { getPixelStage, spriteToPaths } from '../src/components/companion/pixelSprites.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pub = (f) => path.join(root, 'public', f);

/* ---- token resolver ------------------------------------------------------ */
const css = ['tokens.primitives.css', 'tokens.semantic.css']
  .map((f) => readFileSync(path.join(root, 'src/styles', f), 'utf8'))
  .join('\n');
const vars = {};
for (const m of css.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) vars[m[1]] ??= m[2].trim();
const token = (name) => {
  let v = vars[name];
  for (let i = 0; i < 8 && v?.startsWith('var('); i += 1) v = vars[v.slice(4, -1).trim()];
  if (!v) throw new Error(`token ${name} not found`);
  return v;
};

const INK = token('--primitive-ink-950');
const INK_DEEP = token('--primitive-ink-975');
const SIGNAL = token('--primitive-signal-400');
const PAPER = token('--primitive-ink-100');
const MUTED = token('--primitive-ink-300');

const KEYS = ['outline', 'shade', 'body', 'light', 'belly', 'eye', 'shine', 'blush', 'accent', 'accent2'];
const palette = (stage) =>
  Object.fromEntries(
    KEYS.map((k) => [k, token(`--pixel-s${stage}-${k}`)]).concat(
      stage === 3 ? [['hat-light', token('--pixel-s3-hat-light')]] : []
    )
  );

/** Full fox (tail + body + eyes) as <path>s in a 32×32 grid. */
function foxPaths(stage, expression = 'open') {
  const data = getPixelStage(stage);
  const pal = palette(stage);
  const layers = [
    spriteToPaths(data.tail[0]),
    spriteToPaths(data.body),
    spriteToPaths(data.eyes.frames[expression], data.eyes.x, data.eyes.y),
  ];
  return layers
    .flatMap((layer) =>
      Object.entries(layer).map(([key, d]) => `<path fill="${pal[key] ?? pal.body}" d="${d}"/>`)
    )
    .join('');
}

/* ---- favicon.svg: Kitsuby's head on an ink tile ------------------------- */
// Head occupies rows 5–23 and columns 3–24 of the 32px sprite.
const headOnly = (() => {
  const data = getPixelStage(1);
  const pal = palette(1);
  const crop = data.body.map((row, y) => (y >= 5 && y <= 23 ? row : '.'.repeat(row.length)));
  const layers = [spriteToPaths(crop), spriteToPaths(data.eyes.frames.open, data.eyes.x, data.eyes.y)];
  return layers
    .flatMap((l) => Object.entries(l).map(([k, d]) => `<path fill="${pal[k]}" d="${d}"/>`))
    .join('');
})();

/** Centres the 22×19 head (centre 14,14.5) in the 32 tile, `pad` = safe-zone share per side. */
const headTransform = (pad) => `translate(16 16.5) scale(${((28 * (1 - pad * 2)) / 22).toFixed(4)}) translate(-14 -14.5)`;

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
<title>DevQuest</title>
<rect width="32" height="32" rx="7" fill="${INK}"/>
<g transform="${headTransform(0)}">${headOnly}</g>
</svg>
`;
writeFileSync(pub('favicon.svg'), faviconSvg);

/* ---- rasters through a headless browser -------------------------------- */
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ deviceScaleFactor: 1 });

async function shot(html, w, h, file) {
  await page.setViewportSize({ width: w, height: h });
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const buf = await page.screenshot({ type: 'png', omitBackground: false });
  if (file) writeFileSync(pub(file), buf);
  return buf;
}

const iconHtml = (size, { pad = 0.06, radius = 0 } = {}) => `<!doctype html><html><body style="margin:0">
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32" shape-rendering="crispEdges" style="display:block">
<rect width="32" height="32" rx="${radius}" fill="${INK}"/>
<g transform="${headTransform(pad)}">${headOnly}</g>
</svg></body></html>`;

const png32 = await shot(iconHtml(32, { pad: 0 }), 32, 32);
const png16 = await shot(iconHtml(16, { pad: 0 }), 16, 16);
await shot(iconHtml(180, { pad: 0.1 }), 180, 180, 'apple-touch-icon.png');
await shot(iconHtml(192, { pad: 0.08 }), 192, 192, 'icon-192.png');
await shot(iconHtml(512, { pad: 0.08 }), 512, 512, 'icon-512.png');
await shot(iconHtml(512, { pad: 0.2 }), 512, 512, 'icon-maskable-512.png');

/* favicon.ico = ICO container with embedded PNGs (16 + 32) */
function ico(images) {
  const header = Buffer.alloc(6 + images.length * 16);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, buf }, i) => {
    const o = 6 + i * 16;
    header.writeUInt8(size, o);
    header.writeUInt8(size, o + 1);
    header.writeUInt16LE(1, o + 4);
    header.writeUInt16LE(32, o + 6);
    header.writeUInt32LE(buf.length, o + 8);
    header.writeUInt32LE(offset, o + 12);
    offset += buf.length;
  });
  return Buffer.concat([header, ...images.map((i) => i.buf)]);
}
writeFileSync(pub('favicon.ico'), ico([{ size: 16, buf: png16 }, { size: 32, buf: png32 }]));

/* ---- og-image.png: the three forms on the night Toca --------------------- */
const fox = (stage, x, size, expr) =>
  `<svg x="${x}" y="${Math.round(562 - (size * 31) / 32)}" width="${size}" height="${size}" viewBox="0 0 32 32" shape-rendering="crispEdges">${foxPaths(stage, expr)}</svg>`;
const stars = Array.from({ length: 34 }, (_, i) => {
  const x = (i * 337) % 1200;
  const y = (i * 151) % 300;
  const s = i % 3 === 0 ? 6 : 4;
  return `<rect x="${x}" y="${y + 20}" width="${s}" height="${s}" fill="${MUTED}" opacity="${0.25 + (i % 4) * 0.12}"/>`;
}).join('');

const ogHtml = `<!doctype html><html><head>
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wdth,wght@75..125,400..700&family=Nunito:wght@600;800&display=swap" rel="stylesheet">
<style>
  body{margin:0;width:1200px;height:630px;overflow:hidden;background:${INK_DEEP};font-family:Nunito,sans-serif}
  .copy{position:absolute;left:72px;top:70px;width:600px;color:${PAPER}}
  .brand{font:600 22px Fredoka;letter-spacing:.08em;text-transform:uppercase;color:${SIGNAL}}
  h1{margin:16px 0 0;font:700 66px/1 Fredoka;font-stretch:84%;letter-spacing:-.01em;hyphens:none}
  p{margin:22px 0 0;font:600 24px/1.35 Nunito;color:${MUTED}}
  .chips{display:flex;gap:12px;margin-top:28px}
  .chip{padding:10px 18px;border-radius:999px;background:${INK};color:${PAPER};font:800 20px Nunito}
  .chip b{color:${SIGNAL}}
</style></head><body>
<svg width="1200" height="630" style="position:absolute;inset:0" shape-rendering="crispEdges">
  ${stars}
  <rect x="0" y="560" width="1200" height="70" fill="${INK}"/>
  <rect x="0" y="560" width="1200" height="6" fill="${token('--primitive-ink-800')}"/>
  ${fox(1, 610, 160, 'happy')}
  ${fox(2, 752, 214, 'open')}
  ${fox(3, 924, 262, 'happy')}
</svg>
<div class="copy">
  <div class="brand">DevQuest</div>
  <h1>Aprenda full&#8209;stack com um fox de estimação</h1>
  <p>Quests de código validadas ao vivo, Boss Fights e um mascote que evolui com você.</p>
  <div class="chips"><span class="chip"><b>22</b> quests</span><span class="chip"><b>9</b> skills</span><span class="chip">grátis</span></div>
</div>
</body></html>`;
await shot(ogHtml, 1200, 630, 'og-image.png');

await browser.close();
console.log('brand assets written to public/');
