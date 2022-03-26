import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBQwCbGTwzq-PPyyTQL6q4DTh-BU_ux2sc",
    authDomain: "elibrary-3bc12.firebaseapp.com",
    projectId: "elibrary-3bc12",
    storageBucket: "elibrary-3bc12.appspot.com",
    messagingSenderId: "49567139746",
    appId: "1:49567139746:web:08ded6ba31e50175fe54fb"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();