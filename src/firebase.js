// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDeKz0y7StoKZygSiCPt49Eu-agkXvuN5E",
  authDomain: "chatapp-fdf2a.firebaseapp.com",
  projectId: "chatapp-fdf2a",
  storageBucket: "chatapp-fdf2a.appspot.com",
  messagingSenderId: "382790306975",
  appId: "1:382790306975:web:2da3d1533cc18d93ade6aa",
  measurementId: "G-Q51CQ8R0M6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const analytics = getAnalytics(app);