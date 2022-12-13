<script lang="ts" setup>
import ProductCard from '../Cards/ProductCard.vue';
import { themeStore } from '../../store/theme';
const themestore = themeStore();

</script>

<template>
  <div class="productslist-area--container area" :class="themestore.themeState">
    <ul>
      <li>
        <product-card />
      </li>
      <li>
        <product-card />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/themes.scss';
.productslist-area {
  &--container {
    // width: 100%;
    height: 100%;
    ul {
      height: 100%;
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}
</style>