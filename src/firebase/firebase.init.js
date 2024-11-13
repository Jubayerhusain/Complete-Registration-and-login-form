import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpx5-0nZHtGSDx37KSQl8Z6MPBo2801Zc",
  authDomain: "complete-signin-and-signup.firebaseapp.com",
  projectId: "complete-signin-and-signup",
  storageBucket: "complete-signin-and-signup.firebasestorage.app",
  messagingSenderId: "256954195304",
  appId: "1:256954195304:web:73c608eb4b670345dc8add"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
