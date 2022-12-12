<script setup lang="ts">
import DashboardView from './DashboardView.vue';
import SettingsView from './SettingsView.vue';

import { appViewStore } from '../store/appview';

const store = appViewStore();

function handleApplicationView(view: string) {
  switch(view) {
    case 'DASH': return DashboardView;
    // case 'PROJECTS': return SettingsView;
    // case 'MESSAGES': return TheBanner;
    case 'SETTINGS': return SettingsView;
    default: return null;
  }
}
</script>

<template>
  <div class="defaultview--container">
    <component :is="handleApplicationView(store.appviewState)" />
  </div>
</template>

<style scoped lang="scss"> 
@use '../styles/colors.scss' as colors;

.defaultview {
  &--container {
    background: colors.$bg-white;
    height: calc(100vh - 169px);
  }
}

</style>