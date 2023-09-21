// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxPyrn_q5fYrDy3oCektpEvLVzdKbBNG4",
  authDomain: "journal-app-8.firebaseapp.com",
  projectId: "journal-app-8",
  storageBucket: "journal-app-8.appspot.com",
  messagingSenderId: "1009734138832",
  appId: "1:1009734138832:web:7e5d4316eee38f8eb657d5",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
