<script lang="ts" setup>
import SavingsModal from '../Modals/SavingsModal.vue';

import { reactive } from 'vue';
import { moneyValueMask } from '../../utils';

interface SpendindPropsTypes {
  isEconomy: boolean
  title: string
  amount: number
  refId: string
}
interface ModalTypes {
  isShowModal: boolean
  mode: 'update' | 'add'
}

let modalMode = reactive<ModalTypes>({
  isShowModal: false,
  mode: 'update'
});

function handleModal(type: 'update' | 'add') {
  modalMode.isShowModal = true;
  modalMode.mode = type;
}

withDefaults(defineProps<SpendindPropsTypes>(), {
  isEconomy: true
})
</script>

<template>
  <savings-modal 
    v-if="modalMode.isShowModal" 
    :amount="amount" 
    :ref-id="refId"
    @close-modal="modalMode.isShowModal = false"
    :mode="modalMode.mode"
  />
  <base-card class="updatespending-card--container">
    <div>
      <h3>{{ isEconomy ? 'Economias' : 'Compras' }}</h3>
      <span>{{ title }}</span>
    </div>
    <p class="value-green">{{ moneyValueMask(amount) }}</p>
    <base-button button-label="Atualizar" is-gray @click="handleModal('update')"/>
    <base-button button-label="Adicionar" @click="handleModal('add')"/>
  </base-card>
</template>

<style lang="scss" scoped>
@use '../../styles/themes.scss';
.updatespending-card {
  &--container {
    display: flex;
    align-items: center;
    width: 40%;
    margin-top: 32px;
    justify-content: space-between;
  }
}
</style>