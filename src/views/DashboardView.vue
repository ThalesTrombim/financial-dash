<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import ProfileCard from '../components/Cards/ProfileCard.vue';

const teste = new Date();

const today = [
  {
    key: 'today',
    highlight: true,
    dates: new Date(),
  },
]

</script>

<template>
  <div class="dashboard-view--container">
    <profile-card />
    <base-card>
      <v-calendar :attributes="today" />
    </base-card>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-view--container {
  display: flex;
}
</style>