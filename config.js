import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDNba472eA7cjnHnIwo_xANI1q48sfkTfU",
  authDomain: "book-santa-b9683.firebaseapp.com",
  projectId: "book-santa-b9683",
  storageBucket: "book-santa-b9683.appspot.com",
  messagingSenderId: "41263434899",
  appId: "1:41263434899:web:408d1e8dd188deb8f69166"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
