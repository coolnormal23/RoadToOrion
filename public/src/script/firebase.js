import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js'
import { getFirestore, collection, doc, addDoc, updateDoc, getDocs, getDoc } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'
const firebaseConfig = {
  apiKey: "AIzaSyD4sfCEPkV0sdJ7yzgG6a1c2NNUDUY4-l4",
  authDomain: "roadtoorion-991a3.firebaseapp.com",
  projectId: "roadtoorion-991a3",
  storageBucket: "roadtoorion-991a3.appspot.com",
  messagingSenderId: "133029562370",
  appId: "1:133029562370:web:c4f0400d4dbaa59b6f7f1b",
  measurementId: "G-JDX161CX3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

var uid = "";

document.getElementById("signinbutton").onclick = function() {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    uid = user.uid;

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });};

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});