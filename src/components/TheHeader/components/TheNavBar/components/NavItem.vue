<script lang="ts" setup>
import { navbarStore } from '../../../../../store/navbar'; 

const { itemSelected } = navbarStore();

const props = defineProps<{
  itemId: number,
  icon: string,
  label: string,
}>()

function handleNavItemClick() {
  console.log('click', props.itemId)
  console.log('click', props.itemSelected)
}
</script>

<template>
  <a href="#" class="nav-item--container" @click="handleNavItemClick">
    <div class="nav-item--content">
      <mdicon :name="props.icon" class="the-seacher--input-icon"/>
      <span>{{ label }}</span> 
    </div>
    <div :class="[itemId === itemSelected ? 'borderActive' : '']" class="nav-item--border"></div>
  </a>
</template>

<style lang="scss" scoped>
@use '../../../../../styles/colors.scss' as colors;

.nav-item {
  &--container {
    text-decoration: none;

    &:hover {
      .nav-item--border {
        background-color: colors.$blue;
      }
    }
  }
  &--content {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    color: colors.$blue;
  }
  &--border {
    width: 100%;
    height: 4px;
    margin-top: 20px;
    border-radius: 10px;
  }
}
.borderActive {
  background-color: colors.$blue;
}
</style>