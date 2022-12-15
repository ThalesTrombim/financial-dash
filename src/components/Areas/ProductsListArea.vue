<script lang="ts" setup>
import ProductCard from '../Cards/ProductCard.vue';
</script>

<template>
  <div class="productslist-area--container">
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