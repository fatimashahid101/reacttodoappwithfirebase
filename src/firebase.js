import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAxKcSsCF10iRPMDaVaa2z4M1UJY2UXuCE",
    authDomain: "todoappinreactwithfirebase.firebaseapp.com",
    projectId: "todoappinreactwithfirebase",
    storageBucket: "todoappinreactwithfirebase.appspot.com",
    messagingSenderId: "403075583085",
    appId: "1:403075583085:web:5c0a17a3c07f0f4f718364",
    measurementId: "G-9G8NKVLQL7"
  });

  const db = firebaseApp.firestore();

  export default db;