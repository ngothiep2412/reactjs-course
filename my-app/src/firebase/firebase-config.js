import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDR-gPeX7IG2F5u37xjn21R_FVgXydY1dI",
  authDomain: "learn-firebase-b9f9c.firebaseapp.com",
  projectId: "learn-firebase-b9f9c",
  storageBucket: "learn-firebase-b9f9c.appspot.com",
  messagingSenderId: "973297665032",
  appId: "1:973297665032:web:ac5b75f9428414450e3dbd",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Init services
export const db = getFirestore(app);

export const auth = getAuth(app);
