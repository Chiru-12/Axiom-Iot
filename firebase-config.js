// firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyAxZOPo_VvtRi5u1vuoPCjjz8-M7aJ-fjg",
    authDomain: "axiom-cdab9.firebaseapp.com",
    projectId: "axiom-cdab9",
    storageBucket: "axiom-cdab9.firebasestorage.app",
    messagingSenderId: "453939991968",
    appId: "1:453939991968:web:1a7e74ddeae820246880c5",
    measurementId: "G-RF1CY3B3N0"
};

// Initialize Firebase
let app, db, auth;
try {
    app = firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    auth = firebase.auth();
    console.log("✅ Firebase initialized successfully!");
} catch (error) {
    console.error("❌ Firebase initialization error:", error);
}