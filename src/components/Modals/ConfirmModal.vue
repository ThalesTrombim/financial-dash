<script lang="ts" setup>
const emit = defineEmits(['close-modal', 'continue']);
defineProps<{
  confirmTitle: string
}>()

function handleModalClick(event: any) {
  if(event.target.id === 'overlay') {
    emit('close-modal');
  }
} 
</script>

<template>
  <div id="overlay" class="confirm-modal overlay" @click="handleModalClick">
    <base-card height-auto class="confirm-modal--container">
      <h3>
        {{ confirmTitle }}
      </h3>
      <div class="confirm-modal--actions">
        <base-button button-label="Cancelar" is-gray @click="emit('close-modal')"/>
        <base-button button-label="Excluir" @click="emit('continue')" />
      </div>
    </base-card>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/themes.scss';

.confirm-modal {
  &--container {
    max-width: 30%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    text-align: center;
  }
  &--actions {
    display: flex;
    justify-content: space-evenly;
  }
}
</style>