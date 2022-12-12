import { defineStore } from 'pinia';

export const themeStore = defineStore('theme', {
  state: () => ({ themeState: 'light' as themeType }),
  actions: {
    toggleTheme() {
      this.themeState = this.themeState === 'dark' ? 'light' : 'dark';
    }
  }
})

type themeType = 'light' | 'dark';
