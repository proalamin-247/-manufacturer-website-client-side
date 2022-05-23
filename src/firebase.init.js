import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDePwMAw8UPuAGKfp-IrpMXVqn8b7RrzY0",
    authDomain: "manufacturer-website-8e809.firebaseapp.com",
    projectId: "manufacturer-website-8e809",
    storageBucket: "manufacturer-website-8e809.appspot.com",
    messagingSenderId: "254516502494",
    appId: "1:254516502494:web:c636e7442ccdbf0c95074f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;