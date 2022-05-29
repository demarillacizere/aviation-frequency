const firebase = require("firebase");
firebaseConfig = {
    apiKey: "AIzaSyDuJJGoBc-nk4Apxxq95sxB3oc27cr8yhE",
    authDomain: "aviation-frequency.firebaseapp.com",
    projectId: "aviation-frequency",
    storageBucket: "aviation-frequency.appspot.com",
    messagingSenderId: "183320069456",
    appId: "1:183320069456:web:d4e86e1c776a3a2bbfd855",
    measurementId: "G-58LXSK0WDP"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Receiver = db.collection("Receivers");
module.exports = Receiver;
