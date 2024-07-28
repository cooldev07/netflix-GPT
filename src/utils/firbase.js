// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWEurUcThnzk6jHbWdovUUmJk5uNTYWAk",
  authDomain: "netflixgpt-4c841.firebaseapp.com",
  projectId: "netflixgpt-4c841",
  storageBucket: "netflixgpt-4c841.appspot.com",
  messagingSenderId: "832370678668",
  appId: "1:832370678668:web:f476d5382e603600b414a9",
  measurementId: "G-F1YVS1K3DK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);