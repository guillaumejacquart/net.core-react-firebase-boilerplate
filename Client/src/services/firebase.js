import firebase from "firebase/app";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCZeumB35TMEcrInQ92-nx2RFPjxM_Fljc",
  authDomain: "loves-pounding.firebaseapp.com",
  databaseURL: "https://loves-pounding.firebaseio.com",
  projectId: "loves-pounding",
  storageBucket: "loves-pounding.appspot.com",
  messagingSenderId: "936240455899"
};
firebase.initializeApp(config);

export default firebase;
