<script lang="ts" setup>
import { ref } from 'vue';
import { moneyValueMask, handleInputFocus } from '../../utils';
import { savingsStore } from '../../store/investments';

const emit = defineEmits(['close-modal'])
const props = defineProps<{
  amount: number
  refId: string
  mode: 'update' | 'add'
}>()

let amountLocal = ref<number>(props.amount);
let amountAdd = ref<number>(0);

function handleModalClick(event: any) {
  if(event.target.id === 'overlay') {
    emit('close-modal');
  }
} 
function handleUpdateAmounts() {
  const newAmount = amountAdd.value + props.amount;

  if(props.mode === 'add') {
    savingsStore().updateAmount(props.refId, newAmount);
    emit('close-modal');
  }
  if(props.mode === 'update') {
    savingsStore().updateAmount(props.refId, amountLocal.value);
    emit('close-modal');
  }
}

</script>

<template>
  <div class="savings-modals overlay" @click="handleModalClick" id="overlay">
    <base-card height-auto class="savings-modals--container">
      <h3>{{ mode === 'update' ? 'Atualizar' : 'Adicionar'}} valor</h3>
      <p class="value-green">{{ moneyValueMask(amountLocal) }}</p>
      <input v-if="mode === 'update'" type="number" v-model="amountLocal" @focus="handleInputFocus($event)">
      <input v-else type="number" v-model="amountAdd" @focus="handleInputFocus($event)">
      <div class="savings-modals--actions">
        <base-button button-label="Cancelar" is-gray @click="emit('close-modal')"/>
        <base-button button-label="Salvar" @click="handleUpdateAmounts"/>
      </div>
    </base-card>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/themes.scss';
@use '../../styles/colors.scss' as colors;

.savings-modals {
  &--container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    input {
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-size: 14px;
      font-weight: 500;
      text-align: center;

      padding: 6px;
      border: none;
      outline: none;

      border-bottom: 1px solid colors.$gray-light;

      &:focus {
        border-bottom: 2px solid colors.$gray-light;
      }
    }
  }
  &--actions {
    display: flex;
    gap: 24px;
  }
}
</style>