import firebase from 'firebase'
require('firebase/firestore')

const config = {
  apiKey: 'AIzaSyC2F9WI1zWRLh7mfsFz5OFwkF6ms8onemM',
  authDomain: 'gratitude-7526f.firebaseapp.com',
  databaseURL: 'https://gratitude-7526f.firebaseio.com',
  projectId: 'gratitude-7526f',
  storageBucket: 'gratitude-7526f.appspot.com',
  messagingSenderId: '1041263885527'
}

firebase.initializeApp(config)

// console.log(firestore)

const db = firebase.firestore()
console.log(db)
export { db }
