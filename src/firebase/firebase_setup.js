import { getStorage } from "firebase/storage";
// import { render } from "react-dom";
// import { storage } from "./firebase_setup";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import firebase from "";
import firebase from 'firebase/compat/app';
// import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDXw0A6R3qsdNHL_dmPj-P1xlL2yIYGIOo",
    authDomain: "react-firebase-image-upl-70313.firebaseapp.com",
    databaseURL: "gs://react-firebase-image-upl-70313.appspot.com",
    projectId: "react-firebase-image-upl-70313",
    storageBucket: "react-firebase-image-upl-70313.appspot.com",
    messagingSenderId: "200077098566",
    appId: "1:200077098566:web:a54a8e3bbebdc21f139447",
    measurementId: "G-0JEY0B47WK"
};
// firebase.initializeApp(firebaseConfig);
// const storage = firebase.storage();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export {
    storage, app as default
}