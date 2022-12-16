<script lang="ts" setup>
import WishHeader from '../components/Areas/WishHeader.vue';
</script>

<template>
  <div class="wishlist--container">
    <h3>Lista de desejos</h3>
    <wish-header />
  </div>
</template>

<style lang="scss" scoped>
.wishlist--container {
  h3 {
    margin-bottom: 32px;
  }
}
</style>