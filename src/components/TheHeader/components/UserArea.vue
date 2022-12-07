<script lang="ts" setup>
import { ref } from 'vue';

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
    <button class="user-area--alert-icon">
      <mdicon name="BellOutline" width="20px"/> 
    </button>
    <div 
      class="user-area--image"
      :style="{ 'background-image': 'url(' + userInfos.imgUrl + ')' }"
    >
    </div>
    <span class="user-area--name">
      Hello {{ userInfos.name }}!
    </span>
    <button class="user-area--alert-icon">
      <mdicon name="TriangleSmallDown" /> 
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use '../../../styles/colors.scss' as colors;

.user-area {
  &--container {
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

