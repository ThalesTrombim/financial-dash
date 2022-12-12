<template>
  <div class="product-description--container">
    <a href="#">Product name</a>
    <span>product description</span>
  </div>
</template>

<style lang="scss" scoped>
@use '../../../styles/colors.scss' as colors;
.product-description--container {
  display: flex;
  flex-direction: column;

  a {
    font-weight: 500;
    color: #000;
    text-decoration: none;
  }
  span {
    font-size: 14px;
    color: colors.$gray-light;
  }
}
</style>