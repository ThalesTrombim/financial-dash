<script lang="ts" setup>
const emit = defineEmits(['close-modal']);

function handleModalClick(event: any) {
  if(event.target.id === 'overlay') {
    emit('close-modal');
  }
} 
</script>

<template>
  <div id="overlay" class="confirm-modal overlay" @click="handleModalClick">
    <base-card height-auto class="confirm-modal--container">
      testando
    </base-card>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/themes.scss';
</style>