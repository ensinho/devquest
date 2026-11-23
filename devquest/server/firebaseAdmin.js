import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

/**
 * Firebase Admin singleton. Credentials come from FIREBASE_SERVICE_ACCOUNT_B64
 * (a base64 JSON with project_id, client_email, private_key) stored as an
 * encrypted Vercel environment variable. The service account only holds
 * roles/datastore.user and roles/firebaseauth.admin.
 */
let cached = null;

function readCredentials() {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_B64;
  if (!raw) throw new Error('FIREBASE_SERVICE_ACCOUNT_B64 is not configured');
  const json = JSON.parse(Buffer.from(raw, 'base64').toString('utf8'));
  return { projectId: json.project_id, clientEmail: json.client_email, privateKey: json.private_key };
}

export function getAdmin() {
  if (cached) return cached;
  const app = getApps()[0] ?? initializeApp({ credential: cert(readCredentials()) });
  const db = getFirestore(app);
  try {
    db.settings({ ignoreUndefinedProperties: true });
  } catch {
    // settings() throws if Firestore was already used in this instance
  }
  cached = { app, auth: getAuth(app), db };
  return cached;
}
