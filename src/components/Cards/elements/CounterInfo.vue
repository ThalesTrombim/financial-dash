<script lang="ts" setup>

defineProps<{
  counter: number
  title: string
}>()

</script>

<template>
  <div>
    <span>{{ counter }}</span>
    <p>{{ title }}</p>
  </div>
</template>

<style lang="scss" scoped>
@use '../../../styles/colors.scss' as colors;
div {
  max-width: 130px;
  span {
    color: colors.$blue;
    font-weight: 700;
  }
  p {
    margin-top: 8px;
    font-size: 14px;
  }
}
</style>
