import { defineStore } from 'pinia';
import UseColorMode from '@vueuse/components'

export const appViewStore = defineStore('appview', {
  state: () => ({ appviewState: 'DASH' as string }),
  actions: {
    setAppViewState(newState: string) {
      this.appviewState = newState;
    }
  }
})
