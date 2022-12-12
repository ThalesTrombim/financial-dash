<template>
  <base-card>
    <div class="product-card--container">
      <div class="product-card--description">
        <product-description />
        <p>price</p>
      </div>  
      <div class="product-card--buttons">
        <base-button button-label="comprei"/>
        <base-button button-label="descartar" isGray/>
      </div>
    </div>
  </base-card>
</template>

<style lang="scss" scoped>
@use '../../styles/colors.scss' as colors;
.product-card {
  &--container {
    height: auto;
  }
  &--description {
    display: flex;
    gap: 64px;
    margin-bottom: 32px;
    
    p {
      color: colors.$green-light;
    }
  }

  &--buttons {
    display: flex;
    gap: 24px;
  }
}
</style>