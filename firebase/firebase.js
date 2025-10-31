import { initializeApp } from "firebase/app";
import { OAuthProvider, getAuth, onAuthStateChanged } from "firebase/auth";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentSingleTabManager,
} from "firebase/firestore";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHexASt3dkYnOPvBoC1-q6vneX65sGxr8",
  authDomain: "parafazer-microsft-clone.firebaseapp.com",
  projectId: "parafazer-microsft-clone",
  storageBucket: "parafazer-microsft-clone.firebasestorage.app",
  messagingSenderId: "180102714961",
  appId: "1:180102714961:web:8d9fb39f73f6a3656e4a70",
};

export const app = initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentSingleTabManager(),
  }),
});

export const auth = getAuth(app);
export const provider = new OAuthProvider("microsoft.com");

export const userCached = JSON.parse(localStorage.getItem("userCached"));

if (!userCached || userCached === "null") {
  onAuthStateChanged(auth, (user) => {
    localStorage.setItem("userCached", JSON.stringify(user));
  });
}
