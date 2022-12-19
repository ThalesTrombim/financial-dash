<script lang="ts" setup>
import { ref } from 'vue';
import TheSearcher from '../TheHeader/components/TheSearcher.vue';
import DropdownMenu from '../ui/DropdownMenu.vue';

let showDropdown = ref(false);

function handleShowDropdown() {
  showDropdown.value = !showDropdown.value;
}
</script>

<template>
  <base-card class="wishheader--container">
    <the-searcher class="wishheader--search"/>
    <button-filter @click="handleShowDropdown" />
    <dropdown-menu v-if="showDropdown"/>
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