import firebaseConfig from './firebase.config';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
