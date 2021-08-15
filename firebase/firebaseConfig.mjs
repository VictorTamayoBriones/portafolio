import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCusX-UEQWnYpskzRsxmadTwBs-twdVQZg",
    authDomain: "activities-apps.firebaseapp.com",
    databaseURL: "https://activities-apps-default-rtdb.firebaseio.com",
    projectId: "activities-apps",
    storageBucket: "activities-apps.appspot.com",
    messagingSenderId: "188333224372",
    appId: "1:188333224372:web:29feaedd302204ccf142e1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export  {db};