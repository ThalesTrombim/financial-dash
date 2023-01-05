<script setup lang="ts">
import { onMounted } from 'vue';
import TheHeader from './components/TheHeader/index.vue';
// import DefaultView from './views/DefaultViewOld.vue';
import DefaultView from './views/DefaultView.vue';
import { authStore } from './store/auth';

const authstore = authStore();

const { tryLogin } = authstore;

onMounted(() => {
  tryLogin()
})
</script>

<template>
  <!-- <the-header /> -->
  <default-view />
</template>

<style>
@import url('./styles/styles.scss');
</style>
