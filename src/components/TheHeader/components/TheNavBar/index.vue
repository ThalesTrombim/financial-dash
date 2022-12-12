<script lang="ts" setup>
import NavItem from './components/NavItem.vue';
import { navbarStore } from '../../../../store/navbar';

const { navItemsList } = navbarStore();
</script>

<template>
  <div class="the-navbar--container">
    <div class="the-navbar--content">
      <nav-item  
        v-for="item in navItemsList" 
        :key="item.label" 
        :item-id="item.id"
        :icon="item.icon"
        :label="item.label"
        :id-name="item.idName"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.the-navbar {
  &--container {
    display: flex;
    border-top: 1px solid #EEE;
    padding-top: 40px;
  }
  &--content {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
}
</style>