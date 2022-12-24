<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import WishHeader from '../components/Areas/WishHeader.vue';
import AddWishItem from '../components/Modals/AddWishItem.vue';
import WishItemCard from '../components/Cards/WishItemCard.vue';
import ConfirmModal from '../components/Modals/ConfirmModal.vue';

import { wishlistStore } from '../store/wishlist';

const wishliststore = wishlistStore();
const { getAllWishItems } = wishliststore;
let isModalOpen = ref<boolean>(false);

function handleModal(state: boolean) {
  isModalOpen.value = state;
}

onMounted(async () => {
  getAllWishItems();
})

</script>

<template>
  <div class="wishlist--container">
    <confirm-modal />
    <add-wish-item v-if="isModalOpen" @close-modal="handleModal(false)"/>
    <h3>Lista de desejos</h3>
    <wish-header @open-modal="handleModal(true)"/>
    <div class="wishlist-cards--content">
      <wish-item-card 
        v-for="item in wishliststore.wishlist" 
        v-bind="item"
        :key="item.id"
      />
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