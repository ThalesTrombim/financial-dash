<script lang="ts" setup>
import UpdateSpendingCard from '../components/Cards/UpdateSpendingCard.vue';

import { savingsStore } from '../store/investments';
import { onMounted } from 'vue';

const savingsstore = savingsStore();
const { getSavingItems } = savingsstore;

onMounted(() => {
  getSavingItems()
});

</script>

<template>
  <div class="update-infos--container">
    <h3>Atualizar compras e investimentos</h3> 
    <div>
      <update-spending-card 
        v-for="saving in savingsstore.savingsList"
        :key="saving.id"
        :title="saving.title" 
        :amount="saving.amount"
        :is-economy="saving.isEconomy"
        :ref-id="saving.id"
      />
    </div>
  </div>
</template>