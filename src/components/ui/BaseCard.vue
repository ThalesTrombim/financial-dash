<script lang="ts" setup>
import { themeStore } from '../../store/theme';

const store = themeStore();
</script>

<template>
  <div class="card" :class="store.themeState">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/themes.scss';

.card {
  border-radius: 20px;
  padding: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

</style>