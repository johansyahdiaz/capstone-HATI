import firebase from 'firebase-admin'

import serviceAccount from '../../../serviceAccountKey.json'

const firebaseConfig = {

    credential: firebase.credential.cert(serviceAccount),

    apiKey: "AIzaSyBDkD6qUSeF_V3t9V3XwZ25CW1a1EI1cpQ",
  
    authDomain: "hati-35191.firebaseapp.com",
  
    databaseURL: "https://hati-35191-default-rtdb.asia-southeast1.firebasedatabase.app",
  
    projectId: "hati-35191",
  
    storageBucket: "hati-35191.appspot.com",
  
    messagingSenderId: "173681181765",
  
    appId: "1:173681181765:web:3a1c90b967b135b3424f2c"
  
  };
  
  export default firebaseConfig