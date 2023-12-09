// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6cmDV-xl0GoILT7ERxXkqi_BiW4lTTNM",
  authDomain: "netflix-gpt-785dd.firebaseapp.com",
  projectId: "netflix-gpt-785dd",
  storageBucket: "netflix-gpt-785dd.appspot.com",
  messagingSenderId: "815637164352",
  appId: "1:815637164352:web:0a72ee2fb57de551a10aa5",
  measurementId: "G-RMTW1CHMWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);