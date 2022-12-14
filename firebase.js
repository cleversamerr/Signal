import { initializeApp } from "firebase/app";
import { getFirestore, collection, query } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: process.env["REACT_APP_FIREBASE_API_KEY"],
  authDomain: process.env["REACT_APP_FIREBASE_AUTH_DOMAIN"],
  projectId: process.env["REACT_APP_FIREBASE_PROJECT_ID"],
  storageBucket: process.env["REACT_APP_FIREBASE_STORAGE_BUCKET"],
  messagingSenderId: process.env["REACT_APP_FIREBASE_MESSAGING_SENDER_ID"],
  appId: process.env["REACT_APP_FIREBASE_APP_ID"],
};

initializeApp(config);

const db = getFirestore();

const auth = getAuth();

export const chatsRef = collection(db, "chats");

export default { db, auth };
