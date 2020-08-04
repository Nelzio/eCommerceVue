import * as firebase from 'firebase/app'
import 'firebase/firestore'

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC96nT8jLxjTXB4C8mYyaHfXQ-ReYNhx_4",
    authDomain: "cs-ecommerce.firebaseapp.com",
    databaseURL: "https://cs-ecommerce.firebaseio.com",
    projectId: "cs-ecommerce",
    storageBucket: "cs-ecommerce.appspot.com",
    messagingSenderId: "715525896574",
    appId: "1:715525896574:web:1db6198f63fe93c96e1b2f",
    measurementId: "G-4RZCVTEDWM"
};

firebase.initializeApp(firebaseConfig);


export default firebase;