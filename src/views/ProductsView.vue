<script lang="ts" setup>
import AreaHeader from '../components/Areas/AreaHeader.vue';
import ProductsProgressArea from '../components/Areas/ProductsProgressArea.vue';
import ShoppingSummaryArea from '../components/Areas/ShoppingSummaryArea.vue';
</script>

<template>
  <div class="productsview--container">
    
    <area-header 
      left-title="Produtos" 
      right-title="Resumo de compras" 
      class="productsview--header"
    />

    <products-progress-area class="productsview--content"/>

    <shopping-summary-area class="productsview--sidecard"/>
    <!-- <div class="productsview--sidecard">side</div> -->
  </div>
</template>

<style lang="scss" setup>
.productsview--container {
  display: grid;
  // height: 100%;
  // height: 100vh;
  column-gap: 24px;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 50px auto auto;
  grid-template-areas:
    "header header header"
    "content content sidecard"
    "content content ."
    "content content ."
  ;
}

.productsview--header {
  grid-area: header;
}
.productsview--content {
  grid-area: content;
}
.productsview--sidecard {
  grid-area: sidecard;
}
</style>