// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC6TT6ulGrRYOCnWOAdPuWXZvl6s_NCUg",
  authDomain: "madflixgpt.firebaseapp.com",
  projectId: "madflixgpt",
  storageBucket: "madflixgpt.appspot.com",
  messagingSenderId: "785864910391",
  appId: "1:785864910391:web:a094170b639737e4f381b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();