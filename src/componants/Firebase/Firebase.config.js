// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDThy44t67YqqOw9nC2xVJHPF06AhA3OsE",
    authDomain: "brain-sailor.firebaseapp.com",
    projectId: "brain-sailor",
    storageBucket: "brain-sailor.appspot.com",
    messagingSenderId: "352181475838",
    appId: "1:352181475838:web:9edfd2de38fe462c3908af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;