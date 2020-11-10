import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDwcGWzBqlYV1wCptBFjy9ao3tmDO6eqqk",
    authDomain: "twit-clone-ae885.firebaseapp.com",
    databaseURL: "https://twit-clone-ae885.firebaseio.com",
    projectId: "twit-clone-ae885",
    storageBucket: "twit-clone-ae885.appspot.com",
    messagingSenderId: "222260589123",
    appId: "1:222260589123:web:f171c22202261fe15e1af6",
    measurementId: "G-LD8RW5D0J1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;