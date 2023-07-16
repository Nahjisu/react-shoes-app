import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyAGTK_ISstoBLwl49JwD4VYGaZ71EpbL_I',
    authDomain: 'shoes-app-8ada2.firebaseapp.com',
    projectId: 'shoes-app-8ada2',
    storageBucket: 'shoes-app-8ada2.appspot.com',
    messagingSenderId: '1096926661791',
    appId: '1:1096926661791:web:823d7d470eb6b152f5e6aa',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
