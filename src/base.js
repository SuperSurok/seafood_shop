import Rebase from "re-base";
import firebase from "firebase";

const fireBaseApp = firebase.initializeApp({
  apiKey: "AIzaSyApGi3hJWzoTa0xyCkaid-fLWY4slcmgzs",
  authDomain: "catch-of-the-day-64680.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-64680.firebaseio.com",
});

const base = Rebase.createClass(fireBaseApp.database());

// This is a named export
export {fireBaseApp};

// This is a default export

export default base ;