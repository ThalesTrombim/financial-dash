<script lang="ts" setup>
import ProductsProgress from '../Cards/ProductsProgress.vue';
</script>

<template>
  <div class="productsprogress-area--container area">
    <ul>
      <li>
        <products-progress />
      </li>
      <li>
        <products-progress />
      </li>
      <li>
        <products-progress />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.productsprogress-area {
  &--container {
    height: 100%;
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
}
</style>