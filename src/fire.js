import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyD-6WnXBdTOeeNmPwH6WzoWQMKPNhRFlio",
  authDomain: "task-e8e91.firebaseapp.com",
  projectId: "task-e8e91",
  storageBucket: "task-e8e91.appspot.com",
  messagingSenderId: "1079970891510",
  appId: "1:1079970891510:web:54fe31f21d55173c2e8ed7",
  measurementId: "G-0WFJSL3RYL"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
