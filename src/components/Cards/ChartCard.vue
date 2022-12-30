<script lang="ts" setup>
import { GChart } from 'vue-google-charts';
import { savingsStore } from '../../store/investments';

const savings = savingsStore();

defineProps<{
  infos: any
}>()

const chartOptions = {
  chartArea: {
    left: 30,
    right: 0,
  },
  titleTextStyle: {
    fontSize: 16
  },
}
</script>

<template>
  <base-card>
    <div style="height: 100%">
      <h3>Investimentos</h3>
      <p v-if="savings.loadingData">Loading</p>
      <GChart 
        v-else-if="infos"
        type="ColumnChart"
        :data="infos"
        :options="chartOptions"
      />
    </div>
  </base-card>
</template>
