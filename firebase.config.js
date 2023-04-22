// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdqU8oEokK3hzKlVh_wJJMqazZJmD43-M",
    authDomain: "the-news-dragon-53d2d.firebaseapp.com",
    projectId: "the-news-dragon-53d2d",
    storageBucket: "the-news-dragon-53d2d.appspot.com",
    messagingSenderId: "718265271580",
    appId: "1:718265271580:web:07b402ec6f6d0ed5d5e6d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;