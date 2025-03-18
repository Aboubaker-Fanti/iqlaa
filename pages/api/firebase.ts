// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzyy9jaEWLmLE473Gb63j3w81k0872O-E",
  authDomain: "iqlaa-62bd4.firebaseapp.com",
  projectId: "iqlaa-62bd4",
  storageBucket: "iqlaa-62bd4.firebasestorage.app",
  messagingSenderId: "199625766869",
  appId: "1:199625766869:web:2bb7f35e6b1a388dacef5c",
  measurementId: "G-DFF715MLBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // ✅ Correct Firestore initialization
