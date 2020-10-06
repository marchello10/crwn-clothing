import firebase from 'firebase/app';
//these will be automatically attached to firebase keyword
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBkOkj-aSZWfGfyB_yvWjSs_0DB3Cxsu9U",
    authDomain: "crwn-db-e00da.firebaseapp.com",
    databaseURL: "https://crwn-db-e00da.firebaseio.com",
    projectId: "crwn-db-e00da",
    storageBucket: "crwn-db-e00da.appspot.com",
    messagingSenderId: "25569562059",
    appId: "1:25569562059:web:d1ed9c34b92a68afd5ba4e"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;