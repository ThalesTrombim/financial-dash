<script lang="ts" setup>
import ProfileCard from '../Cards/ProfileCard.vue';
import ChartCard from '../Cards/ChartCard.vue';
</script>

<template>
<div class="profilearea-container">
  <div class="profilearea-myprofile">
    <!-- <div class="profilearea-myprofile--header">
      <span>My profile</span>
    </div> -->
    <div class="profilearea-myprofile--cards">
      <profile-card />
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.profilearea-container {
  width: 100%;
}
.profilearea-myprofile--header {
  font-size: 20px;
  margin-bottom: 24px;
}
.profilearea-myprofile--cards {
  justify-content: space-between;
}

</style>