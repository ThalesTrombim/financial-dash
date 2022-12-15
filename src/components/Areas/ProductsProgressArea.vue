<script lang="ts" setup>
import ProductsProgress from '../Cards/ProductsProgress.vue';
</script>

<template>
  <div class="productsprogress-area--container">
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
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
  }
}
</style>