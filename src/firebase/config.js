import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaY4rfcT7AY-jcE5JoPAUu7dtJaQtRCXU",
  authDomain: "newcars-9463f.firebaseapp.com",
  projectId: "newcars-9463f",
  storageBucket: "newcars-9463f.appspot.com",
  messagingSenderId: "868614874695",
  appId: "1:868614874695:web:3ea4c2083b82eb541cb362"
};

const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)