<script lang="ts" setup>
import { GChart } from 'vue-google-charts';

const chartData = [
  ['Year', 'Sales', 'Expenses', 'Profit'],
  ['2014', 1000, 400, 200],
  ['2015', 1170, 460, 250],
  ['2016', 660, 1120, 300],
  ['2017', 1030, 540, 350]
];
const chartOptions = {
  curveType: 'function',
  title: 'Company Performance',
  subtitle: 'Sales, Expenses, and Profit: 2014-2017',
}

</script>

<template>
  <base-card>
    <GChart 
    type="LineChart"
    :data="chartData"
    :options="chartOptions"
    />
  </base-card>
</template>