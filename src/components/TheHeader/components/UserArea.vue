<script lang="ts" setup>
import { ref } from 'vue';
import { authStore } from '../../../store/auth';

const authstore = authStore();
const { signInWithGoogle } = authstore;

interface UserInfoType {
  imgUrl: String,
  name: String
}

const userInfos = ref<UserInfoType>({
  imgUrl: 'https://github.com/ThalesTrombim.png',
  name: 'Thales'
}) 

</script>

<template>
  <div class="user-area--container">
    <base-button v-if="!authstore.isAuthenticated" button-label="Login" :method="signInWithGoogle"/> 
    <div v-else class="user-area--authenticated">
      <button class="user-area--alert-icon">
        <mdicon name="BellOutline" width="20px"/> 
      </button>
      <div 
        class="user-area--image"
        :style="{ 'background-image': 'url(' + userInfos.imgUrl + ')' }"
      >
      </div>
      <span class="user-area--name">
        Hello {{ authstore.fistName }}!
      </span>
      <button class="user-area--alert-icon">
        <mdicon name="TriangleSmallDown" /> 
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../../styles/colors.scss' as colors;

.user-area {
  &--container {
    display: flex;
    align-items: center;
  }
  &--authenticated {
    display: flex;
    gap: 16px;
    align-items: center;
  }
  &--alert-icon {
    color: colors.$gray-light;
  }
  &--image {
    width: 40px;
    height: 40px;
    background-position: center;
    background-size: cover;
    border-radius: 40px;
  }
  &--name {
    color: colors.$gray-light;
  }
}

</style>

