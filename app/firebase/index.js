import firebase from 'firebase';

try {
  let config = {
    apiKey: "AIzaSyBle3dphpOAf3FikJ9nDW4quiV6Ad0XPxk",
    authDomain: "todos-b5d20.firebaseapp.com",
    databaseURL: "https://todos-b5d20.firebaseio.com",
    projectId: "todos-b5d20",
    storageBucket: "todos-b5d20.appspot.com",
    messagingSenderId: "360723613550"
  };
  firebase.initializeApp(config);
}
catch(e) {

}
export let firebaseRef = firebase.database().ref();

export default firebase;
