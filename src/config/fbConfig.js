import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//Initialize FireBase
var firebaseConfig = {
    apiKey: "AIzaSyDQioCEYW5T35Kq8nfCAMUA6YOLI8cDeaA",
    authDomain: "project-plan-48907.firebaseapp.com",
    projectId: "project-plan-48907",
    storageBucket: "project-plan-48907.appspot.com",
    messagingSenderId: "745938197739",
    appId: "1:745938197739:web:b113485157f71e49c032ae",
    measurementId: "G-5HPFZNZ5RH"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;