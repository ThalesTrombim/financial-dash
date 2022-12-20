import { defineStore } from 'pinia';
import { login } from '../firebase';

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
    async loginAction() {
      const result = await login();
      console.log(result)
      if(result.user) {
        const { displayName, photoURL} = result.user

        this.setUser({
          name: displayName,
          image: photoURL,
          job: 'Web Developer',
        })
        this.isAuthenticated = true
      }
      
    },
    setUser({ name, image, job}: userTypes) {
      this.user.name = name;
      this.user.image = image;
      this.user.job = job;
    }
  },
  getters: {
    fistName(state) {
      return state.user.name.split(" ", 3)[0];
    }

  }
})

interface userTypes {
  name: string | any
  job: string
  image: string | any
}