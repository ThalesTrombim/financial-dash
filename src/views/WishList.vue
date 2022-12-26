<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { wishlistStore } from '../store/wishlist';

import WishHeader from '../components/Areas/WishHeader.vue';
import AddWishItem from '../components/Modals/AddWishItem.vue';
import WishItemCard from '../components/Cards/WishItemCard.vue';

const wishliststore = wishlistStore();

const { getAllWishItems } = wishliststore;

let modalsState = reactive({
  isAddItemModalOpen: false,
  isConfirmModalOpen: false
})

onMounted(async () => {
  getAllWishItems();
})

function handleModal(state: boolean) {
  modalsState.isAddItemModalOpen = state;
}

</script>

<template>
  <div class="wishlist--container">
    <add-wish-item v-if="modalsState.isAddItemModalOpen" @close-modal="handleModal(false)"/>
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