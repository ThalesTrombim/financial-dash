<script setup lang="ts">
import DashboardView from './DashboardView.vue';
import SettingsView from './SettingsView.vue';

import { appViewStore } from '../store/appview';
import { themeStore } from '../store/theme';
const themestore = themeStore();

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
  <div class="defaultview--container" :class="themestore.themeState+'-bg'">
    <component :is="handleApplicationView(store.appviewState)" />
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/themes.scss';

.defaultview {
  &--container {
    padding: 28px 0;
  }
}
</style>