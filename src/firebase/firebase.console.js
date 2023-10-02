// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaDuH_XJ_w666dQRAuCwYaLW36kUEbr4w",
    authDomain: "dragon-news-auth-7d46f.firebaseapp.com",
    projectId: "dragon-news-auth-7d46f",
    storageBucket: "dragon-news-auth-7d46f.appspot.com",
    messagingSenderId: "908739766827",
    appId: "1:908739766827:web:5a60848e469ab2d358986e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;