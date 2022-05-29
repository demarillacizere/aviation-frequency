  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDuJJGoBc-nk4Apxxq95sxB3oc27cr8yhE",
    authDomain: "aviation-frequency.firebaseapp.com",
    projectId: "aviation-frequency",
    storageBucket: "aviation-frequency.appspot.com",
    messagingSenderId: "183320069456",
    appId: "1:183320069456:web:d4e86e1c776a3a2bbfd855",
    measurementId: "G-58LXSK0WDP"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);