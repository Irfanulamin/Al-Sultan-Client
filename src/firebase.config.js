// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAswrnB5s5DwNaaVjoDL5hcyEEV2PwaTs0",
  authDomain: "al-sultans-auth.firebaseapp.com",
  projectId: "al-sultans-auth",
  storageBucket: "al-sultans-auth.appspot.com",
  messagingSenderId: "301230485083",
  appId: "1:301230485083:web:c6e191d853645761b4597e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
