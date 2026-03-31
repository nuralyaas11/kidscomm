// Import fungsi-fungsi teras Firebase dari CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// GANTIKAN DENGAN KONFIGURASI FIREBASE SEBENAR ANDA
const firebaseConfig = {
    apiKey: "API_KEY_ANDA",
    authDomain: "PROJECT_ID.firebaseapp.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi perkhidmatan yang akan digunakan (Auth & Firestore)
const auth = getAuth(app);
const db = getFirestore(app);

// Export (keluarkan) variabel ini supaya boleh digunakan oleh fail HTML lain
export { app, auth, db };