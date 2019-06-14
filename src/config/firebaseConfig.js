import firebase from 'firebase/app';
import 'firebase/auth';

// Replace this with your own config details
const firebaseConfig = {
  apiKey: 'AIzaSyDwEh6L7aSifT-02VBh7fQWIKUSL9f_-WA',
  authDomain: 'bridge-applications.firebaseapp.com',
  databaseURL: 'https://bridge-applications.firebaseio.com',
  projectId: 'bridge-applications',
  storageBucket: 'bridge-applications.appspot.com',
  messagingSenderId: '86911458431',
  appId: '1:86911458431:web:6dfe22d31681e997',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
