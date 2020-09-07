import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBIc7kFQMz6wbEPLrtwwKHlL37VFTLcGA8",
    authDomain: "crowndb-c8777.firebaseapp.com",
    databaseURL: "https://crowndb-c8777.firebaseio.com",
    projectId: "crowndb-c8777",
    storageBucket: "crowndb-c8777.appspot.com",
    messagingSenderId: "118941180144",
    appId: "1:118941180144:web:83f945482790ec79302235",
    measurementId: "G-DD1H4QKZDD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;