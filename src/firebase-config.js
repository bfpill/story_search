import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgf9Ewbs57I2EWRVAXv1ONrFnKQOt-_os",
  authDomain: "baggetters-38a7c.firebaseapp.com",
  databaseURL: "https://baggetters-38a7c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "baggetters-38a7c",
  storageBucket: "baggetters-38a7c.appspot.com",
  messagingSenderId: "1014384090485",
  appId: "1:1014384090485:web:d5820ac76c3b473f3e073c",
  measurementId: "G-5X70KYHLKQ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);