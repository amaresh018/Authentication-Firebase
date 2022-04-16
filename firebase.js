import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7FDsxsQczdbL0RiNYY4kD-QyquRm2ehY",
    authDomain: "login-7a354.firebaseapp.com",
    projectId: "login-7a354",
    storageBucket: "login-7a354.appspot.com",
    messagingSenderId: "868688274687",
    appId: "1:868688274687:web:8417ef84970180dc0698ca",
    measurementId: "G-H6R13MTQTL"
};

// Initialize Firebasezzz
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}
