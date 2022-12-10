import { defineStore } from 'pinia';

export const appViewStore = defineStore('appview', {
  state: () => ({ appviewState: 'DASH' as string }),
  actions: {
    setAppViewState(newState: string) {
      this.appviewState = newState;
    }
  }
})
