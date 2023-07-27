// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCibMub0ClwNWpHyRlbWfpLWHOSPdsPfEE",
  authDomain: "instagram-clone-70d32.firebaseapp.com",
  projectId: "instagram-clone-70d32",
  storageBucket: "instagram-clone-70d32.appspot.com",
  messagingSenderId: "765370001271",
  appId: "1:765370001271:web:5f82e21734494106c9e372"
};

// Initialize Firebase
const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };