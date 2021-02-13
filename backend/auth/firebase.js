const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "pets-for-anyone",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

firebase.initializeApp(firebaseConfig);
function firebaseAuthCreate(email, password) {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      return user;
    })
    .catch((error) => {
      return error;
    });
}
function loginWithGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((snap) => snap.user);
}
function signOutGoogle() {
  firebase.auth().signOut();
}

module.exports = { firebaseAuthCreate };
