<script lang="ts" setup>
import { themeStore } from '../../store/theme';
const themestore = themeStore();
</script>

<template>
  <div class="profilearea-header--container area" :class="themestore.themeState">
    <h3>My profile</h3>
    <div>
      <span class="title-span">LISTA DE PRODUTOS</span>
      <a href="#">show all</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/themes.scss';

.profilearea-header--container {
  // display: flex;
  display: grid;
  column-gap: 48px;
  justify-content: space-between;
  grid-template-columns: 2fr 1fr;
  padding-bottom: 24px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 14px;
      font-weight: 500;
    }
  }
}
</style>