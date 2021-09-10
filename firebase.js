
import firebase from "firebase";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBW4LsGDQQl5rgKtdO_ORkXQvm5xy6ng_Y",
    authDomain: "facebook-build-3d0d1.firebaseapp.com",
    projectId: "facebook-build-3d0d1",
    storageBucket: "facebook-build-3d0d1.appspot.com",
    messagingSenderId: "222420441124",
    appId: "1:222420441124:web:71f79cb9724b2470b0e0b1"

  };


  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db = app.firestore();
  const storage = firebase.storage();

  export {db, storage};