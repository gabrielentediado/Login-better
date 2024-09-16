
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword}  from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestores.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase

function mostrarMensagem(message, divId){

    var messageDiv = document.getElementById(divId);
    messageDiv.style.display="block";
    me

};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const signUp = document.getElementById('submitSignUp')
signUp.addEventListener('click', (event)=>{
    event.preventDefault();
    const email = document.getElementById('rEmail').value;
    const password = document.getElementById('rPassword').value;
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;
    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, password)
    .then((userCredential)=>{
        const user = userCredential.user;
        const userData={
            emai: email,
            firstName: firstName,
            lastName: lastName

        };

    })
})
