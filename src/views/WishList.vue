<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import WishHeader from '../components/Areas/WishHeader.vue';
import AddWishItem from '../components/Modals/AddWishItem.vue';
import WishItemCard from '../components/Cards/WishItemCard.vue';
import ConfirmModal from '../components/Modals/ConfirmModal.vue';

import { wishlistStore } from '../store/wishlist';

const wishliststore = wishlistStore();
const { getAllWishItems } = wishliststore;
let modalsState = reactive({
  isAddItemModalOpen: false,
  isConfirmModalOpen: true
})

function handleModal(modalName: string, state: boolean) {
  if(modalName === 'modal-add'){
    modalsState.isAddItemModalOpen = state;
  } else {
    modalsState.isConfirmModalOpen = state;
  }
}

onMounted(async () => {
  getAllWishItems();
})

</script>

<template>
  <div class="wishlist--container">
    <confirm-modal v-if="modalsState.isConfirmModalOpen" @close-modal="handleModal('modal-confirm', false)"/>
    <add-wish-item v-if="modalsState.isAddItemModalOpen" @close-modal="handleModal('modal-add', false)"/>
    <h3>Lista de desejos</h3>
    <wish-header @open-modal="handleModal('modal-add', true)"/>
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