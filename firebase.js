import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyCL4ux3xmIPL1WXcXjFyq-MTWJmeWxVvOo",
  authDomain: "food-delivery-main.firebaseapp.com",
  projectId: "food-delivery-main",
  storageBucket: "food-delivery-main.appspot.com",
  messagingSenderId: "832139949588",
  appId: "1:832139949588:web:480d6fa693cfc8e0515901",
  measurementId: "G-V6V1JK4K6B"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
//firebase.initializeApp(firebaseConfig);
export default firebase;
