// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC05ASXN05-0WYD983hCAZhU0pW2F6O6CM",
  authDomain: "fanicha-c29e0.firebaseapp.com",
  projectId: "fanicha-c29e0",
  storageBucket: "fanicha-c29e0.firebasestorage.app",
  messagingSenderId: "1011537236176",
  appId: "1:1011537236176:web:6d8859606d3b1a0fae8ed5",
  measurementId: "G-8007CCYJ1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);