import { getAuth } from "firebase/auth";    
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBSpGfVC1Z5bXuLmFRa6rZ7MminX0SBhs8",
  authDomain: "audiophile-4a3f1.firebaseapp.com",
  projectId: "audiophile-4a3f1",
  storageBucket: "audiophile-4a3f1.appspot.com",
  messagingSenderId: "962763137440",
  appId: "1:962763137440:web:f01f93fcf4da0606c0c4c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)