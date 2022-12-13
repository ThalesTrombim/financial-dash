<script lang="ts" setup>
import ProfileArea from '../components/Areas/ProfileArea.vue';
import ProductsListArea from '../components/Areas/ProductsListArea.vue';
import ChartCard from '../components/Cards/ChartCard.vue';
import ProfileAreaHeader from '../components/Areas/ProfileAreaHeader.vue';

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
    <div class="dash-area-profile--header">
      <profile-area-header />
    </div>
    <div class="dash-area--1">
      <profile-area />
    </div>
    <div class="teste">
      <chart-card></chart-card>
    </div>
    <div class="dash-area--2">
      <products-list-area />
    </div>
    <div class="dash-area--3"></div>
    <div class="dash-area--4"></div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-view--container {
  display: grid;
  max-width: 90%;
  margin: auto;
  padding-top: 32px;
  // background: blue;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
  grid-template-areas:
    "profile-header profile-header profile-header"
    "profile testando products"
    "progress progress calendar"
  ;
}

.dash-area-profile--header {
  grid-area: profile-header;
}
.dash-area--1 {
  grid-area: profile;
}
.teste {
  grid-area: testando;
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