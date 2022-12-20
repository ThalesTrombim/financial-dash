import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGBK9oFa3Wsut_jOuuAI6B0OiyXKInXwg",
  authDomain: "dash-financial-vue.firebaseapp.com",
  projectId: "dash-financial-vue",
  storageBucket: "dash-financial-vue.appspot.com",
  messagingSenderId: "598774800836",
  appId: "1:598774800836:web:8d5f5219c795f501da8491"
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

async function login() {
  return await signInWithPopup(auth, provider)
}

  // .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential?.accessToken;
  //   // The signed-in user info.
  //   const user = result.user;

  //   console.log(user, token)
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   console.log(error)
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
// });

export { login };