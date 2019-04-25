import * as firebase from "firebase/app";

/**
 * Production Credentials
 */
var config = {
  apiKey: "AIzaSyBE3rnjiv4nAJsDWTXgvO902M_E8ekvync",
  authDomain: "voto-ucv.firebaseapp.com",
  databaseURL: "https://voto-ucv.firebaseio.com",
  projectId: "voto-ucv",
  storageBucket: "voto-ucv.appspot.com",
  messagingSenderId: "527855181957"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}