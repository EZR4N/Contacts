import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "contacts-973e4.firebaseapp.com",
    projectId: "contacts-973e4",
    storageBucket: "contacts-973e4.firebasestorage.app",
    messagingSenderId: "714320131195",
    appId: "1:714320131195:web:2acd31e787eb1aff1d1ede"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);