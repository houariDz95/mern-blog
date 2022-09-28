// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDg96gLgMzwi9Arwb_5aYWcbkbYG0xPc5E",
  authDomain: "blogger-mern.firebaseapp.com",
  projectId: "blogger-mern",
  storageBucket: "blogger-mern.appspot.com",
  messagingSenderId: "106746341301",
  appId: "1:106746341301:web:4fc2bd60d86f3396efdbfc",
  measurementId: "G-WPFJE220DW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new  GoogleAuthProvider(app)
export { auth, provider}