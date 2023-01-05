<script lang="ts" setup>
import ProfileArea from '../components/Areas/ProfileArea.vue';
import ProductsListArea from '../components/Areas/ProductsListArea.vue';
import ChartCard from '../components/Cards/ChartCard.vue';
import AreaHeader from '../components/Areas/AreaHeader.vue';
import ProductsProgressArea from '../components/Areas/ProductsProgressArea.vue';
import CalendarArea from '../components/Areas/CalendarArea.vue';
import { onMounted } from 'vue';

import { savingsStore } from '../store/investments';
const savings = savingsStore();

onMounted(() => {
  savingsStore().getSavingItems();
})

</script>

<template>
  <div class="dashboard-view--container">
    <area-header 
      with-link 
      left-title="My profile"
      right-title="LISTA DE PRODUTOS" 
      class="dash-area-profile--header"
    />

    <profile-area class="dash-area--1" />

    <chart-card :infos="savings.getSavingsAmount" class="chart-area" />

    <products-list-area class="dash-area--2" />

    <area-header 
      left-title="PROGRESS"
      right-title="CALENDAR" 
      is-lower-left-title
      class="dash-area-progress--header"
    />

    <products-progress-area class="dash-area--3"/>

    <calendar-area class="dash-area--4"/>
    
  </div>
</template>

<style lang="scss" scoped>
.dashboard-view--container {
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 50px auto 80px 300px;
  column-gap: 24px;
  grid-template-areas:
    "profile-header profile-header profile-header"
    "profile chart products"
    "progress-header progress-header progress-header"
    "progress progress calendar"
  ;
}

.dash-area-profile--header {
  grid-area: profile-header;
}
.dash-area-progress--header {
  grid-area: progress-header;
  margin-top: 48px;
  margin-bottom: 24px;
}
.dash-area--1 {
  grid-area: profile;
}
.chart-area {
  grid-area: chart;
}
.dash-area--2 {
  grid-area: products;
}
.dash-area--3 {
  grid-area: progress;
}
.dash-area--4 {
  grid-area: calendar;
}


</style>