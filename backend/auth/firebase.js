const firebase = require("firebase");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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
  return auth.signOut();
}

function loginWithGoogle(email, password) {
  return auth.signInWithEmialAndPassword(email, password);
}

function getPets() {
  return db.collection("pets").get();
}

module.exports = {
  firebaseCreateUser,
  signOutGoogle,
  loginWithGoogle,
  getPets,
};
