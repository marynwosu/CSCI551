import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: 'AIzaSyAkb3h79dDh_CSQ4VgpOKcwF0TzE6E70WE',
  authDomain: 'crypto-quasar-404718.firebaseapp.com',
  projectId: 'crypto-quasar-404718',
  storageBucket: 'crypto-quasar-404718.appspot.com',
  messagingSenderId: '181032388909',
  appId: 'G-0PGMBYK3W6',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default app;
