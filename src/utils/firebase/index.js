import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIHdPHk8anWom_7x8Kud2aIfi5nHjpEaM",
  authDomain: "devstree-login.firebaseapp.com",
  projectId: "devstree-login",
  storageBucket: "devstree-login.appspot.com",
  messagingSenderId: "334831842134",
  appId: "1:334831842134:web:cea5ea4338cc1f14ac9cf7",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
