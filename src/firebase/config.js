// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWsq4dTF7rljl_5A5zYs3KG6cfXVcEu74",
  authDomain: "join-the-waitlist.firebaseapp.com",
  projectId: "join-the-waitlist",
  storageBucket: "join-the-waitlist.appspot.com",
  messagingSenderId: "289719172376",
  appId: "1:289719172376:web:5abb417c209d6f8a8af26d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {app, db}