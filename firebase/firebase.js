import { initializeApp } from "firebase/app";
import { OAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHexASt3dkYnOPvBoC1-q6vneX65sGxr8",
  authDomain: "parafazer-microsft-clone.firebaseapp.com",
  projectId: "parafazer-microsft-clone",
  storageBucket: "parafazer-microsft-clone.firebasestorage.app",
  messagingSenderId: "180102714961",
  appId: "1:180102714961:web:8d9fb39f73f6a3656e4a70",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const userCached = JSON.parse(localStorage.getItem("userCached"));
export const provider = new OAuthProvider("microsoft.com");

if (!userCached || userCached === "null") {
  onAuthStateChanged(auth, (user) => {
    localStorage.setItem("userCached", JSON.stringify(user));
  });
}
