import { initializeApp } from "firebase/app";
import "firebase/compat/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDSxk4yMe8RxNbJtl6dfLb4iH2VDTfkhnk",
  authDomain: "disneyplus-clone-713da.firebaseapp.com",
  projectId: "disneyplus-clone-713da",
  storageBucket: "disneyplus-clone-713da.appspot.com",
  messagingSenderId: "925814771848",
  appId: "1:925814771848:web:cae857f4e6736ae7c88f3d",
  measurementId: "G-23W79D4S6S",
};

// Initialize Firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Create Firestore
const db = firebase.firestore();
// Get the auth
const auth = getAuth(firebaseApp);
const storage = firebase.storage();
export { firebaseApp, auth, storage };
export default db;
