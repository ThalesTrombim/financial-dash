<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import WishHeader from '../components/Areas/WishHeader.vue';
import AddWishItem from '../components/Modals/AddWishItem.vue';
import WishItemCard from '../components/Cards/WishItemCard.vue';

import { wishlistStore } from '../store/wishlist';

const wishliststore = wishlistStore();
const { getAllWishItems } = wishliststore;
let isModalOpen = ref<boolean>(false);

function handleModal(state: boolean) {
  isModalOpen.value = state;
}

onMounted(async () => {
  getAllWishItems();
  console.log(wishliststore.wishlist)

})

</script>

<template>
  <div class="wishlist--container">
    <add-wish-item v-if="isModalOpen" @close-modal="handleModal(false)"/>
    <h3>Lista de desejos</h3>
    <wish-header @open-modal="handleModal(true)"/>
    <div class="wishlist-cards--content">
      <wish-item-card v-for="teste in wishliststore.wishlist" :key="teste.amount"/>
      <!-- <wish-item-card />
      <wish-item-card />
      <wish-item-card /> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wishlist--container {
  h3 {
    margin-bottom: 32px;
  }
}
.wishlist-cards--content {
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 16px;
}
</style>