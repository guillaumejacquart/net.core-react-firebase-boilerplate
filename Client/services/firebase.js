import firebase from "firebase/app";
import "firebase/auth";

var config = {
  apiKey: process.env.firebaseApiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
