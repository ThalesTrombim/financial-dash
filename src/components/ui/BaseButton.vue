<script setup lang="ts">

interface PropsTypes {
  buttonLabel: string
  isGray?: boolean,
  method?: any
}

function handleMethod() {
  if(props.method) {
    props.method();
  }
}

const props = withDefaults(defineProps<PropsTypes>(), {
  isGray: false
})

</script>

<template>
  <button class="base-button" :class="{'base-button--gray': props.isGray}" @click="handleMethod()">
    {{ buttonLabel }}
  </button>
</template>

<style scoped lang="scss">
@use '../../styles/colors.scss' as colors;
.base-button {
  background-image: linear-gradient(to right, colors.$blue , colors.$blue-light);

  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 14px;
  color: colors.$white;

  &:hover {
    filter: brightness(.9);
  }
}
.base-button--gray {
  background: transparent;
  border: 2px solid colors.$gray-light;
  color: colors.$gray-light;
  padding: 6px 16px;
}
</style>