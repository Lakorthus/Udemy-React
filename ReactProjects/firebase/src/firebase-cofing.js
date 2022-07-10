
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcHxiwyG2evTiNDfjsaRNwaK-Xs7Rs_dc",
  authDomain: "prueba-udemy-react.firebaseapp.com",
  projectId: "prueba-udemy-react",
  storageBucket: "prueba-udemy-react.appspot.com",
  messagingSenderId: "7036165806",
  appId: "1:7036165806:web:c38cbe9fe350f82569d73f",
  measurementId: "G-L13DPLGMDW",
};


const app = initializeApp(firebaseConfig);

const auth = app.auth();
export { auth };
