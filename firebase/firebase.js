import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentSingleTabManager,
} from "firebase/firestore";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCu3JChcmMTcG90s5FHhkCc_FdjK9DxM34",
  authDomain: "parafazer-office.firebaseapp.com",
  projectId: "parafazer-office",
  storageBucket: "parafazer-office.firebasestorage.app",
  messagingSenderId: "918055471970",
  appId: "1:918055471970:web:c3da7a6d5d56e73687ba3b",
};

export const app = initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentSingleTabManager(),
  }),
});

export const auth = getAuth(app);

export const userCached = JSON.parse(localStorage.getItem("userCached"));

if (!userCached || userCached === "null") {
  onAuthStateChanged(auth, (user) => {
    localStorage.setItem("userCached", JSON.stringify(user));
  });
}
