import { describe, it, expect } from 'vitest';
import { sanitizeClientInfo, parseUserAgent, geoFromRequest, localDateKey, previousDateKey, hashIp } from './metadata.js';

describe('metadata', () => {
  it('whitelists and caps client info', () => {
    const out = sanitizeClientInfo({
      deviceId: 'abc12345-ok',
      timezone: 'America/Fortaleza',
      screen: { w: 1440, h: 900, dpr: 2, evil: 'x' },
      theme: 'purple',
      referrer: 'https://www.linkedin.com/feed/?trk=secret',
      injected: { $where: 1 },
      utm: { source: 'linkedin', medium: 'a'.repeat(200) },
    });
    expect(out.deviceId).toBe('abc12345-ok');
    expect(out.screen).toEqual({ w: 1440, h: 900, dpr: 2 });
    expect(out.theme).toBeUndefined();
    expect(out.referrer).toBe('https://www.linkedin.com/feed/');
    expect(out.injected).toBeUndefined();
    expect(out.utm.medium).toHaveLength(64);
  });

  it('rejects bad device ids and time zones', () => {
    const out = sanitizeClientInfo({ deviceId: '../../etc', timezone: 'Mars/Base' });
    expect(out.deviceId).toBeUndefined();
    expect(out.timezone).toBeUndefined();
  });

  it('summarises user agents', () => {
    const ua = parseUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1');
    expect(ua).toMatchObject({ browser: 'Safari', os: 'iOS', deviceType: 'mobile', browserMajor: 17 });
    expect(parseUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/130.0 Safari/537.36 Edg/130.0').browser).toBe('Edge');
  });

  it('reads Vercel geo headers at city precision only', () => {
    const geo = geoFromRequest({ headers: { 'x-vercel-ip-country': 'BR', 'x-vercel-ip-city': 'S%C3%A3o%20Paulo', 'x-vercel-ip-latitude': '-23.5' } });
    expect(geo).toEqual({ country: 'BR', city: 'São Paulo' });
  });

  it('hashes the IP instead of storing it', () => {
    const h = hashIp({ headers: { 'x-forwarded-for': '203.0.113.7, 10.0.0.1' } });
    expect(h).toMatch(/^[0-9a-f]{24}$/);
    expect(h).not.toContain('203');
  });

  it('computes local day keys for streaks', () => {
    const ms = Date.UTC(2026, 10, 23, 2, 0);
    expect(localDateKey(ms, 'America/Fortaleza')).toBe('2026-11-22');
    expect(localDateKey(ms, 'UTC')).toBe('2026-11-23');
    expect(previousDateKey('2026-03-01')).toBe('2026-02-28');
  });
});
