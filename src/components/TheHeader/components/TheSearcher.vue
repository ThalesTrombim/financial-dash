<script lang="ts" setup>
import { defineComponent } from "@vue/runtime-core";

function handleSearch() {
  console.log('testando')
}

</script>

<template>
  <div class="the-seacher--container">
    <div class="the-seacher--input-content">
      <button @click="handleSearch" class="the-seacher--input-button">
        <mdicon name="Magnify" class="the-seacher--input-icon"/> 
      </button>
      <input type="text" class="the-seacher--input" placeholder="Search here...">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../../styles/colors.scss' as colors;

.the-seacher {
  &--input-content {
    display: flex;
    align-items: center;
    gap: 12px;

  }
  &--input-button {
    border: none;
  }
  &--input-icon {
    color: colors.$gray-light; 
    
    &:hover {
      cursor: pointer;
    }
  }
  &--input {
    border: none;
    font-size: 14px;
    padding: 4px 8px;
    width: 100%;

    &::placeholder {
      color: colors.$gray-light; 
      font-weight: 500;
    }
    &:focus {
      outline: none; 
    }
  }
}
</style>