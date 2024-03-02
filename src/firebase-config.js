import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDD1vxu1sF7QwC1XaR29CrE07mJ1YQelZo",
  authDomain: "storysearch2.firebaseapp.com",
  projectId: "storysearch2",
  storageBucket: "storysearch2.appspot.com",
  messagingSenderId: "14771913483",
  appId: "1:14771913483:web:1ada36a99653b338e4580e",
  measurementId: "G-81JZQHS421"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
