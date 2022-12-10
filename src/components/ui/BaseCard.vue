<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use '../../styles/colors.scss' as colors;

.card {
  background: colors.$white;
  border-radius: 20px;
  padding: 20px;
  // width: 100px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
</style>