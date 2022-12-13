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
  display: grid;
  column-gap: 24px;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "area-1 area-2 area-3";

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-area: area-3;

    span {
      font-size: 14px;
      font-weight: 500;
    }
  }
}
</style>