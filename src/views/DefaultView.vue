<script setup lang="ts">
import BaseCard from '../components/ui/BaseCard.vue';
import BaseButton from '../components/ui/BaseButton.vue';
import ProfileCard from '../components/Cards/ProfileCard.vue';
</script>

<template>
  <div class="defaultview--container">
    <profile-card />
  </div>
</template>

<style scoped lang="scss"> 
@use '../styles/colors.scss' as colors;

.defaultview {
  &--container {
    background: colors.$bg-white;
    // height: 100vh;
    display: flex;
  }
}

</style>