import firebase from 'firebase'
import firebaseConfig from '../firestore.config.json' 

firebase.initializeApp(firebaseConfig);

export default firebase;