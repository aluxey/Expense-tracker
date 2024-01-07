import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKZ7cAD86fPHX9srkx5axGRQrWLgD0K9w",
  authDomain: "expense-tracker-6ce49.firebaseapp.com",
  projectId: "expense-tracker-6ce49",
  storageBucket: "expense-tracker-6ce49.appspot.com",
  messagingSenderId: "1089954671812",
  appId: "1:1089954671812:web:34805157955ce0b7c6ad91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()