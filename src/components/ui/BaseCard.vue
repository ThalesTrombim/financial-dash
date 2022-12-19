<script lang="ts" setup>
import { themeStore } from '../../store/theme';

const store = themeStore();
interface BaseCardPropsTypes {
  noPadding?: boolean
}

const props = withDefaults(defineProps<BaseCardPropsTypes>(), {
  noPadding: false,
}) 
</script>

<template>
  <div class="card" :class="[store.themeState, {'no-padding': props.noPadding}]">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/themes.scss';

.card {
  border-radius: 20px;
  padding: 20px;
  height: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.no-padding {
  padding: 0px;
}

</style>