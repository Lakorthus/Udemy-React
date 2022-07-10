// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcHxiwyG2evTiNDfjsaRNwaK-Xs7Rs_dc",
  authDomain: "prueba-udemy-react.firebaseapp.com",
  projectId: "prueba-udemy-react",
  storageBucket: "prueba-udemy-react.appspot.com",
  messagingSenderId: "7036165806",
  appId: "1:7036165806:web:c38cbe9fe350f82569d73f",
  measurementId: "G-L13DPLGMDW"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth()

export {auth}