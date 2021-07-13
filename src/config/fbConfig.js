import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCqFcUroZdNTYVZCAgSZlFze3ec11bADq4",
    authDomain: "team-play-xyz.firebaseapp.com",
    databaseURL: "https://team-play-xyz-default-rtdb.firebaseio.com",
    projectId: "team-play-xyz",
    storageBucket: "team-play-xyz.appspot.com",
    messagingSenderId: "405818087751",
    appId: "1:405818087751:web:17c436822ff8b35400d462",
    measurementId: "G-558F3XCSLQ",
    
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});
  export default firebase;