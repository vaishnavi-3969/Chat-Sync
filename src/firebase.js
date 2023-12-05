// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC-_3VqcHq-SAMcFiFKwpCZS0rtOY8-olk",
    authDomain: "resto-reservations-ll.firebaseapp.com",
    projectId: "resto-reservations-ll",
    storageBucket: "resto-reservations-ll.appspot.com",
    messagingSenderId: "433322574109",
    appId: "1:433322574109:web:75889d45ad4a1b3d10a1f4",
    measurementId: "G-QRDRTV3Q19"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore();


