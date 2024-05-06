import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGzw0QEyHkgBYNdnACpKvEe3jdep5Y-gs",
  authDomain: "techhaven-6e77f.firebaseapp.com",
  projectId: "techhaven-6e77f",
  storageBucket: "techhaven-6e77f.appspot.com",
  messagingSenderId: "742597989082",
  appId: "1:742597989082:web:4156e9a92640a027178be3",
  measurementId: "G-ZG2WL66PX4",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
