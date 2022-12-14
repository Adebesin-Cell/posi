import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

// Firebase configs
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: 'G-W9CFEC023Q',
};

const initFirebase = function () {
  if (typeof globalThis.window !== undefined) {
    initializeApp(firebaseConfig);
    console.log('Firebase initialized successfully!!');
  } else {
    console.log('Error');
  }
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const realtimeDB = getDatabase(app);
const storage = getStorage(app);

export { initFirebase, db, realtimeDB, storage, app };
