// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAelBZn-36Mrp10aEW5SgxGzp4vjYjkQF4",
  authDomain: "clone-22885.firebaseapp.com",
  projectId: "clone-22885",
  storageBucket: "clone-22885.appspot.com",
  messagingSenderId: "1012359083863",
  appId: "1:1012359083863:web:4bb433898fef007db37012",
  measurementId: "G-YKZ059DEZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { db, auth }