<script lang="ts" setup>
import { ref } from 'vue';
import WishHeader from '../components/Areas/WishHeader.vue';
import AddWishItem from '../components/Modals/AddWishItem.vue';

let isModalOpen = ref<boolean>(true);

function handleModal(state: boolean) {
  isModalOpen.value = state;
}
// function ha
</script>

<template>
  <div class="wishlist--container">
    <add-wish-item v-if="isModalOpen" @close-modal="handleModal(false)"/>
    <h3>Lista de desejos</h3>
    <wish-header @open-modal="handleModal(true)"/>
  </div>
</template>

<style lang="scss" scoped>
.wishlist--container {
  h3 {
    margin-bottom: 32px;
  }
}
</style>