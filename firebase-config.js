// Import fungsi-fungsi teras Firebase dari CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// GANTIKAN DENGAN KONFIGURASI FIREBASE SEBENAR ANDA
const firebaseConfig = {
    apiKey: "AIzaSyA6uxUhruVVqdllVVTupBDDwyt4mkhGSUk",
    authDomain: "kidscomm-75b4a.firebaseapp.com",
    projectId: "kidscomm-75b4a",
    storageBucket: "kidscomm-75b4a.firebasestorage.app",
    messagingSenderId: "800324716023",
    appId: "1:800324716023:web:fb7e8222bf85fc21321af2",
    measurementId: "G-EHDP3MPLD1"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi perkhidmatan yang akan digunakan (Auth & Firestore)
const auth = getAuth(app);
const db = getFirestore(app);

// Export (keluarkan) variabel ini supaya boleh digunakan oleh fail HTML lain
export { app, auth, db };