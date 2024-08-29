// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "e-state-mern.firebaseapp.com",
  projectId: "e-state-mern",
  storageBucket: "e-state-mern.appspot.com",
  messagingSenderId: "135771564838",
  appId: "1:135771564838:web:4afc5ea14fa180ee122fe7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
