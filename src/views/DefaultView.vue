<script setup lang="ts">
import DashboardView from './DashboardView.vue';
import SettingsView from './SettingsView.vue';
import ProductsView from './ProductsView.vue';

import { appViewStore } from '../store/appview';
import { themeStore } from '../store/theme';
const themestore = themeStore();

const store = appViewStore();

function handleApplicationView(view: string) {
  switch(view) {
    case 'DASH': return DashboardView;
    case 'PRODUCTS': return ProductsView;
    // case 'MESSAGES': return TheBanner;
    case 'SETTINGS': return SettingsView;
    default: return null;
  }
}
</script>

<template>
  <div class="defaultview--container" :class="themestore.themeState+'-bg'">
    <component :is="handleApplicationView(store.appviewState)" />
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/themes.scss';

.defaultview {
  &--container {
    min-height: calc(100vh - 149px);
    padding: 28px 5%;
  }
}
</style>