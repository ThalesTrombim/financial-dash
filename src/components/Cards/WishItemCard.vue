<script lang="ts" setup>
import { moneyValueMask } from '../../utils';
import { wishlistStore } from '../../store/wishlist';
import { ref } from 'vue';

import ConfirmModal from '../Modals/ConfirmModal.vue';

interface WishItemTypes {
  name?: string
  amount: number
  link?: string
  imageUrl?: string
  isFavorite: boolean
  id: string,
}

const isConfirmModalOpen = ref<boolean>(false);
const wishliststore = wishlistStore();

const { handleFavorite, deleteItemFromWishList } = wishliststore;
const { name, amount, isFavorite, link, id, imageUrl } = defineProps<WishItemTypes>();

function handleDeleteItem() {
  isConfirmModalOpen.value = true;
}
function handleCloseModal(state: boolean) {
  isConfirmModalOpen.value = state;
}

</script>

<template>
  <base-card class="wishitemcard--container" no-padding>
    <confirm-modal 
      v-if="isConfirmModalOpen" 
      confirm-title="Você tem certeza que deseja excluir esse item?"
      @close-modal="handleCloseModal(false)"
      @continue="deleteItemFromWishList(id)"
    />
    <div class="wishitemcard--texts">
      <span class="title-span">Nome</span>
      <p>{{ name }}</p>
    </div>
    <div class="wishitemcard--texts">
      <span class="title-span">Média de valor</span>
      <p class="value-green">R$ {{ moneyValueMask(amount) }}</p>
    </div>
    <div class="wishitemcard--texts">
      <span class="title-span">Link</span>
      <a :href="link" target="_blank">Visualizar produto</a>
    </div>
    <div class="wishitemcard--texts image-area">
      <img v-if="imageUrl !== ''" :src="imageUrl" alt="teste">
    </div>
    <div class="wishitemcard--actions">
      <mdicon 
        name="Heart" 
        class="wishitemcard--icon icon-heart" 
        :class="{'is-favorite': isFavorite}"
        @click="handleFavorite(id, !isFavorite)"
      /> 
      <mdicon 
        name="Delete" 
        class="wishitemcard--icon icon-delete"
        @click="handleDeleteItem"
      /> 
    </div>
  </base-card>
</template>

<style lang="scss" scoped>
@use '../../styles/colors.scss' as colors;

.wishitemcard {
  &--container {
    display: flex;
    justify-content: space-between;
    padding: 20px 48px!important;
  }
  &--texts {
    display: flex;
    flex-direction: column;
    width: 20%;

    p, a {
      margin-top: 8px;
      text-decoration: none;
    }
    a {
      color: inherit;
      &:hover {
        color: colors.$blue;
      }
    }

    img {
      width: 50px;
      max-height: 100px;
    }

    &.image-area {
      align-items: center;
    }
  }
  &--actions {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  &--icon {
    color: colors.$gray-light;
    cursor: pointer;
  }
}
.icon-heart:hover {
  color: #790079;
}
.icon-delete:hover {
  color: #de052e;
}

.is-favorite {
  color: #790079;
}
</style>