// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDm3W_hUYXIb-J8wR5P6yd1PclxA7-HW0",
  authDomain: "pharma-app-cb174.firebaseapp.com",
  projectId: "pharma-app-cb174",
  storageBucket: "pharma-app-cb174.appspot.com",
  messagingSenderId: "361070728977",
  appId: "1:361070728977:web:5a1c2e550c4df3e717deb0",
  measurementId: "G-X4HCNPK3T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
