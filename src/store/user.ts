import { defineStore } from 'pinia';

export const userStore = defineStore('user', {
  state: () => {
    return {
      user: {
        firstName: 'Thales',
        lastName: 'Trombim',
        job: 'Web developer',
        image: 'https://github.com/ThalesTrombim.png'
      } as userTypes
    }
  },
  getters: {
    fullName: (state) => `${state.user.firstName} ${state.user.lastName}`
  }
})

interface userTypes {
  firstName: string
  lastName: string
  job: string
  image: string
}
