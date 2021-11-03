import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkDWUnsicJUFXLx8-3sAhsAJukNSnNYco",
    authDomain: "linkedin-clone-8dd97.firebaseapp.com",
    projectId: "linkedin-clone-8dd97",
    storageBucket: "linkedin-clone-8dd97.appspot.com",
    messagingSenderId: "1027104739834",
    appId: "1:1027104739834:web:bcc0efdcc2c6213176d443",
    measurementId: "G-L7VL4ZRHTB"
};    
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };