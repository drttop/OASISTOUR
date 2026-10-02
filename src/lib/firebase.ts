import type { FirebaseApp } from 'firebase/app';
import type { Firestore } from 'firebase/firestore';

export interface FirebaseBundle {
  app: FirebaseApp;
  db: Firestore;
  fs: typeof import('firebase/firestore');
}

let bundlePromise: Promise<FirebaseBundle> | null = null;
let cachedDb: Firestore | null = null;
let cachedFs: typeof import('firebase/firestore') | null = null;
let isQuotaExceeded = false;

const QUOTA_STORAGE_KEY = 'oasis_firestore_quota_exceeded_timestamp';
const QUOTA_COOLDOWN_MS = 2 * 60 * 60 * 1000; // 2 hours cooldown

// Check if quota exhaustion was previously recorded
if (typeof window !== 'undefined') {
  try {
    const raw = sessionStorage.getItem(QUOTA_STORAGE_KEY);
    if (raw) {
      const timestamp = parseInt(raw, 10);
      if (!isNaN(timestamp) && Date.now() - timestamp < QUOTA_COOLDOWN_MS) {
        isQuotaExceeded = true;
      } else {
        sessionStorage.removeItem(QUOTA_STORAGE_KEY);
      }
    }
  } catch {
    // ignore
  }
}

export const getIsQuotaExceeded = (): boolean => isQuotaExceeded;

export const disableFirestoreNetwork = async (
  db?: Firestore,
  fs?: typeof import('firebase/firestore')
): Promise<void> => {
  const targetDb = db || cachedDb;
  const targetFs = fs || cachedFs;
  if (targetDb && targetFs) {
    try {
      await targetFs.disableNetwork(targetDb);
    } catch {
      // ignore if already disabled or offline
    }
  }
};

export const handleFirestoreError = async (
  err: any,
  db?: Firestore,
  fs?: typeof import('firebase/firestore')
): Promise<boolean> => {
  if (!err) return false;
  const msg = String(err?.message || err?.code || err);
  const isQuota =
    err?.code === 'resource-exhausted' ||
    msg.includes('RESOURCE_EXHAUSTED') ||
    msg.includes('Quota limit exceeded') ||
    msg.includes('quota metric') ||
    msg.includes('Quota exceeded') ||
    msg.includes('Quota limit');

  if (isQuota) {
    isQuotaExceeded = true;
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem(QUOTA_STORAGE_KEY, String(Date.now()));
      } catch {
        // ignore
      }
    }
    await disableFirestoreNetwork(db, fs);
    return true;
  }
  return false;
};

/**
 * Lazy loads Firebase App, Firestore SDK, and configuration.
 * Isolates the ~400KB bundle from critical render path and guards against quota exhaustion loops.
 */
export const loadFirebase = async (): Promise<FirebaseBundle> => {
  if (bundlePromise) return bundlePromise;

  bundlePromise = (async () => {
    const [{ initializeApp }, fsModule, configModule] = await Promise.all([
      import('firebase/app'),
      import('firebase/firestore'),
      import('../../firebase-applet-config.json').then((m) => m.default || m),
    ]);

    // Silence internal backoff warnings from Firestore SDK
    try {
      fsModule.setLogLevel('silent');
    } catch {
      // ignore
    }

    const firebaseConfig = configModule;

    // Detect if database ID changed to a new DB and reset stale quota locks
    if (typeof window !== 'undefined' && firebaseConfig.firestoreDatabaseId) {
      try {
        const lastDb = localStorage.getItem('oasis_current_db_id');
        if (lastDb && lastDb !== firebaseConfig.firestoreDatabaseId) {
          sessionStorage.removeItem(QUOTA_STORAGE_KEY);
          isQuotaExceeded = false;
        }
        localStorage.setItem('oasis_current_db_id', firebaseConfig.firestoreDatabaseId);
      } catch {
        // ignore
      }
    }

    const app = initializeApp(firebaseConfig);
    const db = firebaseConfig.firestoreDatabaseId
      ? fsModule.getFirestore(app, firebaseConfig.firestoreDatabaseId)
      : fsModule.getFirestore(app);

    cachedDb = db;
    cachedFs = fsModule;

    // If quota was already marked as exceeded in this session, immediately disable network to prevent retry streams
    if (isQuotaExceeded) {
      try {
        await fsModule.disableNetwork(db);
      } catch {
        // ignore
      }
    }

    return { app, db, fs: fsModule };
  })();

  return bundlePromise;
};

export const getDb = async (): Promise<Firestore> => {
  if (cachedDb) return cachedDb;
  const { db } = await loadFirebase();
  return db;
};

export default loadFirebase;
