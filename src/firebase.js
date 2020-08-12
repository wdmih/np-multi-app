import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyBQQfwa8JbhhmOwxZNDVT2I29S9hISTLHA',
  authDomain: 'np-multiapp.firebaseapp.com',
  databaseURL: 'https://np-multiapp.firebaseio.com',
  projectId: 'np-multiapp',
  storageBucket: 'np-multiapp.appspot.com',
  messagingSenderId: '123880721840',
  appId: '1:123880721840:web:fb235456d28f1247f5da75'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const firebaseAuth = firebase.auth()
export const firebaseDB = firebase.database()
