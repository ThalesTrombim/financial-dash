<script setup lang="ts">
import { onMounted } from 'vue';
import TheHeader from './components/TheHeader/index.vue';
import DefaultView from './views/DefaultView.vue';
import { authStore } from './store/auth';

const authstore = authStore();

const { tryLogin } = authstore;

onMounted(() => {
  tryLogin()
})
</script>

<template>
  <the-header />
  <default-view />
</template>

<style scoped>
@import url('./styles/main.scss');
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
