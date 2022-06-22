import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD2rMv1rjrtr8lxr_ORi08e2lkyh2sM2P4",
    authDomain: "clone-6a865.firebaseapp.com",
    projectId: "clone-6a865",
    storageBucket: "clone-6a865.appspot.com",
    messagingSenderId: "127706941114",
    appId: "1:127706941114:web:a8054755bd4637f4252483",
    measurementId: "G-TR7KTCGG98"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth, db, provider};
