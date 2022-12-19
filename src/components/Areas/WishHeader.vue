<script lang="ts" setup>
import TheSearcher from '../TheHeader/components/TheSearcher.vue';
</script>

<template>
  <base-card class="wishheader--container">
    <the-searcher class="wishheader--search"/>
    <button-filter />
    <base-button button-label="Adicionar item"/>
  </base-card>
</template>

<style scoped>
.wishheader--container {
  display: flex;
  gap: 24px;
  justify-content: flex-end;
}
.wishheader--search {
  justify-self: flex-start;
}
</style>