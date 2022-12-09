<script lang="ts" setup>
import { defineComponent } from 'vue';
import TheSearcher from './components/TheSearcher.vue';
import UserArea from './components/UserArea.vue';
import TheNavbar from './components/TheNavBar/index.vue';

</script>

<template>
  <div class="the-header--container">
    <div class="the-header--content">
      <the-searcher />
      <user-area />
    </div>
    <the-navbar />
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/colors.scss' as colors;
.the-header {
  &--content {
    max-width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
}
</style>