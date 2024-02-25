// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFtT5zDA8saU8r-GSb5xq3f-9SZsuCYYA",
  authDomain: "netflixgpt-60473.firebaseapp.com",
  projectId: "netflixgpt-60473",
  storageBucket: "netflixgpt-60473.appspot.com",
  messagingSenderId: "344490809903",
  appId: "1:344490809903:web:5ccf6a6e31334d0bec44da",
  measurementId: "G-GF14M3H7G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();