<script lang="ts" setup>
import { moneyValueMask } from '../../utils';

interface SpendindPropsTypes {
  isEconomy: boolean
  title: string
  amount: number
}

withDefaults(defineProps<SpendindPropsTypes>(), {
  isEconomy: true
})
</script>

<template>
  <base-card class="updatespending-card--container">
    <div>
      <h3>{{ isEconomy ? 'Economias' : 'Compras' }}</h3>
      <span>{{ title }}</span>
    </div>
    <p class="value-green">{{ moneyValueMask(amount) }}</p>
    <base-button button-label="Atualizar" is-gray />
    <base-button button-label="Adicionar" />
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