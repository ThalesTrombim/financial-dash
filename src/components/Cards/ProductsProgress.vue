<template>
  <base-card>
    <div class="products-progress--container">
      <div class="products-progress--icon">
        <mdicon name="AvTimer" />
      </div>    
      <product-description /> 
      <div class="products-progress--date">
        <div></div>
        <span>17-02-2022</span>
      </div>    
      <div class="products-progress--buttons">
        <base-button button-label="Visualizar"/>
        <base-button button-label="Editar" is-gray />
      </div>    
    </div>
  </base-card>
</template>

<style lang="scss" scoped>
@use '../../styles/colors.scss' as colors;
  .products-progress {
    &--container {
      display: flex;
      align-items: center;
      gap: 24px;
    }
    &--icon {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      background-color: colors.$bg-white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    &--date {
      display: flex;
      align-items: center;
      gap: 10px;

      div {
        width: 10px;
        height: 10px;
        background-color: colors.$green-light;
        border-radius: 10px;
      }
      span {
        font-size: 14px;
        color: colors.$gray-light;
      }
    }

    &--buttons {
      display: flex;
      align-items: center;
      gap: 24px;
    }
  }
</style>