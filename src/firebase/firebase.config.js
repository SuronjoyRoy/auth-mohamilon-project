// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2jgAf-b7n9TFsvv7aYyJe6KXBMP1Dgtk",
  authDomain: "auth-mohamilon-project-f4bac.firebaseapp.com",
  projectId: "auth-mohamilon-project-f4bac",
  storageBucket: "auth-mohamilon-project-f4bac.appspot.com",
  messagingSenderId: "790693868393",
  appId: "1:790693868393:web:abbc72ca73b84b9ee483f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;