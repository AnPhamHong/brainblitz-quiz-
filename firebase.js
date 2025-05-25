import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


export const firebaseConfig = {
  apiKey: "AIzaSyCC7OCLNO6oQF555F-mp1vfmVxlgymPiA0",
  authDomain: "brainblitz-quiz.firebaseapp.com",
  projectId: "brainblitz-quiz",
  storageBucket: "brainblitz-quiz.appspot.com",
  messagingSenderId: "31741779527",
  appId: "1:31741779527:web:adabd2239bd4032041db62",
  measurementId: "G-XE190GSFHF",
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
