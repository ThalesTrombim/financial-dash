<script lang="ts" setup>
import { GChart } from 'vue-google-charts';

const chartData = [
  ['Mesês', 'Compras', 'Guardadado'],
  ['Jan', 1000, 400],
  ['Fev', 1170, 460],
  ['Mar', 660, 1120],
  ['Abril', 2500, 540],
  ['Abril', 5000, 540],
  ['Abril', 1030, 540],
];
const chartOptions = {
  curveType: 'function',
  chartArea: {
    left: 30,
    right: 0,
  },
  legend: {
    position: 'in',
  },
  titleTextStyle: {
    fontSize: 16
  },
  colors: ['#497fff', '#0fc688']
}

</script>

<template>
  <base-card>
    <div style="height: 100%">
      <h3>Investimentos</h3>
      <GChart 
        type="LineChart"
        :data="chartData"
        :options="chartOptions"
      />
    </div>
  </base-card>
</template>
