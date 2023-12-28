import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAT7VAQ6TcnfS02jXD3TSj9IMdM96IV18U",

  authDomain: "react-hero-app-166af.firebaseapp.com",

  projectId: "react-hero-app-166af",

  storageBucket: "react-hero-app-166af.appspot.com",

  messagingSenderId: "69708498334",

  appId: "1:69708498334:web:620a472825157f8cfdc28f"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};
