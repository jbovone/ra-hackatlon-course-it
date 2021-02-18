const firebase = require("firebase");
//import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*
var firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.envmeasurementId,
};*/
var firebaseConfig = {
  apiKey: "AIzaSyCKB8CIyLwRw8GuKp47NIgYAfd75y0X-fw",
  authDomain: "pets-for-anyone.firebaseapp.com",
  databaseURL: "https://pets-for-anyone-default-rtdb.firebaseio.com",
  projectId: "pets-for-anyone",
  storageBucket: "pets-for-anyone.appspot.com",
  messagingSenderId: "445655345629",
  appId: "1:445655345629:web:03fc63345ba0525f172e34",
  measurementId: "G-5V3PW7RCP6",
};

// Initialize Firebase
// db.setting({timestampstampsInSnapshots: true})

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

function firebaseCreateUser(username, password) {
  return auth
    .createUserWithEmailAndPassword(username, password)
    .then((credential) => {
      console.log(credential);
      return credential;
    })
    .catch((error) => {
      return error;
    });
}

function signOutGoogle() {
  return auth
    .signOut()
    .then(() => "OK")
    .catch((err) => {
      throw err;
    });
}
function loginWithGoogle(email, password) {
  return auth
    .signInWithEmailAndPassword(email, password)
    .then(() => "OK")
    .catch((err) => {
      throw err;
    });
}

function getPets() {
  return db.collection("adopt").then((data) => {
    console.log(data);
    return [{ name: "test" }];
  });
}

function addAdopt(pet) {
  return db
    .collection("adopt")
    .add(pet)
    .then(() => "OK")
    .catch((err) => {
      throw err;
    });
}
module.exports = {
  firebaseCreateUser,
  signOutGoogle,
  loginWithGoogle,
  getPets,
};
