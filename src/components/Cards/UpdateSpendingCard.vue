<template>
  <base-card class="updatespending-card--container">
    <span>Economias</span>
    <p class="value-green">R$ 0</p>
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