import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC6dc3PsATaOWzk7uAkWTgcZ1OnA76nIzM",
  authDomain: "the-moviehub.firebaseapp.com",
  projectId: "the-moviehub",
  storageBucket: "the-moviehub.appspot.com",
  messagingSenderId: "25047423245",
  appId: "1:25047423245:web:8562a11ebbd666885b3844"
};

const firebaseAdmin = firebase.initializeApp(firebaseConfig);
const db = firebaseAdmin.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };



