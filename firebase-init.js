// Firebase initialization (compat) for Websight
// Uses the Websight Firebase project and exposes window.db + window.auth.

// eslint-disable-next-line no-undef
firebase.initializeApp({
  apiKey: "AIzaSyD7lX8xhI8lTuACEdpwiz3AI6jENyjk4Y0",
  authDomain: "websight-f893b.firebaseapp.com",
  projectId: "websight-f893b",
  storageBucket: "websight-f893b.firebasestorage.app",
  messagingSenderId: "719125438242",
  appId: "1:719125438242:web:f537da064fa26d22c18f7b",
  measurementId: "G-WHGQKR5DN8",
});

// eslint-disable-next-line no-undef
window.db = firebase.firestore();

// eslint-disable-next-line no-undef
window.auth = firebase.auth();

// Ensure we have a stable user id (anonymous auth).
// eslint-disable-next-line no-undef
window.auth.onAuthStateChanged(async (user) => {
  try {
    if (!user) {
      // eslint-disable-next-line no-undef
      await window.auth.signInAnonymously();
    }
  } catch (e) {
    console.error("Anonymous auth failed:", e);
  }
});
