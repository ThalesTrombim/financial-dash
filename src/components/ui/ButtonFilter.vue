<template>
  <button class="button-filter--container">
    <mdicon name="FilterOutline" class="input-icon" size="20"/>
    <span>Sort</span>
    <mdicon name="TriangleSmallDown" size="24"/>
  </button>
</template>

<style lang="scss" setup>
@use '../../styles/colors.scss' as colors;
.button-filter {
  &--container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 6px 0;
    width: 100px;

    border: 1px solid colors.$gray-light;
    border-radius: 10px;
    color: colors.$gray-light;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>