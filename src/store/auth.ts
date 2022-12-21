import { defineStore } from 'pinia';
import { auth } from '../firebase';
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';

export const authStore = defineStore('auth', {
  state: () => {
    return {
      user: {
        name: '',
        job: '',
        image: ''
      } as userTypes,
      isAuthenticated: false
    }
  },
  actions: {
    async signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      if(result.user) {
        const { displayName, photoURL} = result.user

        this.setUser({
          name: displayName,
          image: photoURL,
          job: 'Web Developer',
        })
      }
      
    },
    setUser({ name, image, job}: userTypes) {
      this.user.name = name;
      this.user.image = image;
      this.user.job = job;

      this.isAuthenticated = true
    },
    tryLogin() {
      auth.onAuthStateChanged(user => {
        if(user) {
          this.setUser({
            name: user.displayName,
            image: user.photoURL,
            job: 'Web Developer',
          })
        }
      })
    }
  },
  getters: {
    fistName(state) {
      return state.user.name.split(" ", 3)[0];
    },
  }
})

interface userTypes {
  name: string | any
  job: string
  image: string | any
}