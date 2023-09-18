// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  production: true,
  apiKey: "AIzaSyCZuyXetpn7UYxgSyZ-13I56bAOD_hhz34",
  authDomain: "eienotaku-5ce77.firebaseapp.com",
  projectId: "eienotaku-5ce77",
  storageBucket: "eienotaku-5ce77.appspot.com",
  messagingSenderId: "218697815529",
  appId: "1:218697815529:web:1abcf52fa6a81d17dde778",
  measurementId: "G-VYY9C4C6DS"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
const analytics = getAnalytics( app );
