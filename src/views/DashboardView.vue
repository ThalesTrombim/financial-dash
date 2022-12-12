<script lang="ts" setup>
import ProfileCard from '../components/Cards/ProfileCard.vue';
import ProductCard from '../components/Cards/ProductCard.vue';
import ProductsProgress from '../components/Cards/ProductsProgress.vue';
import ChartCard from '../components/Cards/ChartCard.vue';
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
    <!-- <product-card /> -->
    <!-- <products-progress /> -->
    <chart-card />
  </div>
</template>

<style lang="scss" scoped>
.dashboard-view--container {
  display: flex;
}
</style>