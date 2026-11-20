import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { chromium } from 'playwright-core';

const args = process.argv.slice(2);
const getArg = (flag, fallback) => {
  const index = args.indexOf(flag);
  return index !== -1 && args[index + 1] ? args[index + 1] : fallback;
};

const baseUrl = getArg('--url', 'http://127.0.0.1:4173/devquest/?showcase=design-system');
const outDir = resolve(getArg('--out', resolve(process.cwd(), '..', 'tmp-visual-checks')));

mkdirSync(outDir, { recursive: true });

const VIEWPORTS = [
  { name: 'desktop-dark-1440x900', width: 1440, height: 900, theme: 'dark', isMobile: false },
  { name: 'desktop-light-1440x900', width: 1440, height: 900, theme: 'light', isMobile: false },
  { name: 'mobile-dark-390x844', width: 390, height: 844, theme: 'dark', isMobile: true },
  { name: 'mobile-light-390x844', width: 390, height: 844, theme: 'light', isMobile: true },
];

async function launchBrowser() {
  for (const channel of ['msedge', 'chrome']) {
    try {
      return await chromium.launch({ channel, headless: true });
    } catch {
      // Try next installed browser channel
    }
  }
  throw new Error('Could not launch Edge or Chrome via playwright-core.');
}

const browser = await launchBrowser();
let hasFailure = false;

try {
  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      isMobile: vp.isMobile,
      hasTouch: vp.isMobile,
      deviceScaleFactor: vp.isMobile ? 2 : 1,
    });
    const page = await context.newPage();
    const consoleErrors = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    page.on('pageerror', (err) => {
      consoleErrors.push(err.message);
    });

    const targetUrl = new URL(baseUrl);
    targetUrl.searchParams.set('theme', vp.theme);

    await page.goto(targetUrl.toString(), { waitUntil: 'networkidle' });
    await page.evaluate(async (theme) => {
      document.documentElement.setAttribute('data-theme', theme);
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }
    }, vp.theme);
    await page.waitForTimeout(250);

    const metrics = await page.evaluate(() => {
      const overflowPx = Math.max(
        0,
        document.documentElement.scrollWidth - window.innerWidth
      );
      const buttons = Array.from(document.querySelectorAll('button')).filter(
        (el) => el.offsetParent !== null
      );
      const minButtonHeight = buttons.length
        ? Math.min(...buttons.map((b) => Math.round(b.getBoundingClientRect().height)))
        : 0;
      return {
        theme: document.documentElement.getAttribute('data-theme'),
        overflowPx,
        minButtonHeight,
        buttonCount: buttons.length,
      };
    });

    const filePath = resolve(outDir, `${vp.name}.png`);
    await page.screenshot({ path: filePath, fullPage: true });

    const status =
      consoleErrors.length === 0 && metrics.overflowPx === 0 ? 'PASS' : 'FAIL';
    if (status === 'FAIL') {
      hasFailure = true;
    }

    console.log(
      `[${status}] ${vp.name} | theme=${metrics.theme} | overflow=${metrics.overflowPx}px | minBtnH=${metrics.minButtonHeight}px | errors=${consoleErrors.length} | file=${filePath}`
    );
    if (consoleErrors.length > 0) {
      console.error('  Console errors:', consoleErrors);
    }

    await context.close();
  }
} finally {
  await browser.close();
}

if (hasFailure) {
  process.exit(1);
}
