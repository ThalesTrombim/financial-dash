<script lang="ts" setup>

const today = [
  {
    key: 'today',
    highlight: true,
    dates: new Date(),
  },
]
</script>

<template>
  <base-card class="calendar-area--container">
    <v-calendar 
      :attributes='today'
    />
  </base-card>
</template>

<style scoped>
.calendar-area--container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>