import { FieldValue, Timestamp } from 'firebase-admin/firestore';
import { getAdmin } from './firebaseAdmin.js';
import { normalizeProgress, pickProgress } from './progressEngine.js';

/**
 * Firestore layout (all writes go through this API; see firestore.rules):
 *
 *   users/{uid}                     progress + public profile   owner: read
 *   users/{uid}/events/{id}         activity log                owner: read
 *   users/{uid}/solutions/{questId} accepted code per quest     owner: read
 *   users/{uid}/private/account     account & device metadata   server only
 *   users/{uid}/private/limits      rate-limit windows, pet cooldown  server only
 *   stats/global                    aggregate counters          server only
 *   audit/{id}                      anonymised deletion log     server only
 */
export const SCHEMA_VERSION = 2;

export function refs(uid) {
  const { db } = getAdmin();
  const user = db.collection('users').doc(uid);
  return {
    db,
    user,
    account: user.collection('private').doc('account'),
    limits: user.collection('private').doc('limits'),
    events: user.collection('events'),
    solutions: user.collection('solutions'),
    stats: db.collection('stats').doc('global'),
  };
}

export function readProgress(snap, fallbackName) {
  return normalizeProgress(snap.exists ? snap.data() : {}, fallbackName);
}

export function nameFromEmail(email) {
  return (email ?? '').split('@')[0].replace(/[^\p{L}\p{N}._-]/gu, '').slice(0, 32) || 'Aventureiro';
}

export function addEvent(tx, eventsRef, event, extra = {}) {
  if (!event) return;
  tx.set(eventsRef.doc(), {
    type: event.type,
    data: event.data ?? {},
    at: FieldValue.serverTimestamp(),
    ...extra,
  });
}

export function bumpCounters(tx, statsRef, counters) {
  if (!counters || Object.keys(counters).length === 0) return;
  const patch = { updatedAt: FieldValue.serverTimestamp() };
  for (const [key, value] of Object.entries(counters)) patch[key] = FieldValue.increment(value);
  tx.set(statsRef, patch, { merge: true });
}

export function userCounters(counters) {
  const out = {};
  for (const [key, value] of Object.entries(counters ?? {})) out[`counters.${key}`] = FieldValue.increment(value);
  return out;
}

/** Converts Firestore values (Timestamps, nested maps) into JSON. */
export function toJson(value) {
  if (value instanceof Timestamp) return value.toDate().toISOString();
  if (Array.isArray(value)) return value.map(toJson);
  if (value && typeof value === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = toJson(v);
    return out;
  }
  return value;
}

export function publicUser(data, fallbackName) {
  const progress = normalizeProgress(data, fallbackName);
  return {
    ...pickProgress(progress),
    lifetimeXp: data?.lifetimeXp ?? 0,
    counters: data?.counters ?? {},
    preferences: data?.preferences ?? {},
    createdAt: toJson(data?.createdAt ?? null),
    updatedAt: toJson(data?.updatedAt ?? null),
  };
}

export { FieldValue, Timestamp };
