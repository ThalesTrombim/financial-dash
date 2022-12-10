<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue';
import TheHeader from './components/TheHeader/index.vue';
import DefaultView from './views/DefaultView.vue';
</script>

<template>
  <the-header />
  <default-view />
  <!-- <HelloWorld msg="Vite + Vue" /> -->
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
