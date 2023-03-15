import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js"

const firebaseConfig = {
  apiKey: "AIzaSyAyq2Pj9DL6tHROKTrjdIloKpV8EoS4x8s",
  authDomain: "tcc-project-firebase.firebaseapp.com",
  projectId: "tcc-project-firebase",
  storageBucket: "tcc-project-firebase.appspot.com",
  messagingSenderId: "1068230174634",
  appId: "1:1068230174634:web:ff6d8f3edf4ae6c2d1add3",
  measurementId: "G-Q36CP9DVGH"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export{
    app
}