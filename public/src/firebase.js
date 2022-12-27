import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js'
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
