<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'TheSearcher'
})
</script>

<template>
  <div class="the-seacher--container">
    <div class="the-seacher--input">
      <mdicon name="Magnify" class="the-seacher--input-icon"/> 
      <input type="text" class="the-seacher--input" placeholder="search here...">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../../styles/colors.scss' as colors;

.the-seacher {
  &--input-icon {
    color: colors.$gray-light;    
  }
  &--input {
    border: none;
  }
}
</style>