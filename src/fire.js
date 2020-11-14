
import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyB25zKI0nmVMzayqzLl79AN-YoxTFPQKxI",
    authDomain: "react-auth-65eed.firebaseapp.com",
    databaseURL: "https://react-auth-65eed.firebaseio.com",
    projectId: "react-auth-65eed",
    storageBucket: "react-auth-65eed.appspot.com",
    messagingSenderId: "311040105825",
    appId: "1:311040105825:web:08c3f5cd94796874287920"
  };
  const fire = firebase.initializeApp(firebaseConfig);
export default fire