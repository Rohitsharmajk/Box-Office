import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB3fd0EU14Zs1kDf8ClS0F1uy8T7A-KZbY",
  authDomain: "movie-website-7c91d.firebaseapp.com",
  projectId: "movie-website-7c91d",
  storageBucket: "movie-website-7c91d.appspot.com",
  messagingSenderId: "94874484214",
  appId: "1:94874484214:web:5423d797f73befae61dbd7",
  measurementId: "G-WC8TBYCY6D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);