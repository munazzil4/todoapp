// src/firebase.js

import firebase from 'firebase/app';
import 'firebase/firestore'; // Add other services you need, e.g., 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBp_1sYBwangx4saJ0IRR11ln7gMTdKZRA",
    authDomain: "todoapp-80e17.firebaseapp.com",
    databaseURL: "https://todoapp-80e17-default-rtdb.firebaseio.com",
    projectId: "todoapp-80e17",
    storageBucket: "todoapp-80e17.appspot.com",
    messagingSenderId: "917179670217",
    appId: "1:917179670217:web:7b245fdad55735f480b718",
    measurementId: "G-RGTE0CV3J4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Firebase services you need
export const firestore = firebase.firestore();
// export const auth = firebase.auth(); // if using authentication

export default firebase;
