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
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/themes.scss';
.productslist-area {
  &--container {
    width: 100%;

    ul {
      list-style: none;
    }
  }
}
</style>