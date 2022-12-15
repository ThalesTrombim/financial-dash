<template>
  <base-card>
    <div class="shoppingsummary-area--container">
      <counter-info 
        :counter=0
        title="Lista de desejos"
      />
      <counter-info 
        :counter=0
        title="itens Adquiridos"
      />
      <counter-info 
        :counter=0
        title="Total gasto"
      />
      <counter-info 
        :counter=0
        title="Ultima compra"
      />
    </div>
  </base-card>
</template>

<style scoped>
.shoppingsummary-area--container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8px;
  row-gap: 8px;
}

</style>