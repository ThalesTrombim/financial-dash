<script lang="ts" setup>
import UpdateSpendingCard from '../components/Cards/UpdateSpendingCard.vue';
</script>

<template>
  <div class="update-infos--container">
    <h3>Atualizar compras e investimentos</h3> 
    <div>
      <update-spending-card title="Apartamento" :amount=0 />
      <update-spending-card title="Mobília" :amount=0 :is-economy="false" />
      <update-spending-card title="Mac Air" :amount=0 />
    </div>
  </div>
</template>