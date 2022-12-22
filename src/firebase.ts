import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDGBK9oFa3Wsut_jOuuAI6B0OiyXKInXwg",
  authDomain: "dash-financial-vue.firebaseapp.com",
  projectId: "dash-financial-vue",
  storageBucket: "dash-financial-vue.appspot.com",
  messagingSenderId: "598774800836",
  appId: "1:598774800836:web:8d5f5219c795f501da8491"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();

export { auth, db };