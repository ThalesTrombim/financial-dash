<script lang="ts" setup>
import { userStore } from '../../store/user';
import CounterInfo from './elements/CounterInfo.vue';

const store = userStore();

const { fullName } = store;
</script>

<template>
  <base-card>
    <div class="profile-card--container">
      <div class="profile-card--infos">
        <div>
          <h3>{{ fullName }}</h3>
          <span>{{ store.user.job }}</span>
        </div>
        <base-button button-label="Edit profile"/>
      </div>

      <img :src="store.user.image" alt="">
    </div>
    <div class="profile-card--counters">
      <counter-info :counter=0 title="Produtos adquiridos"/>
      <counter-info :counter=0 title="Total investido"/>
      <counter-info :counter=0 title="Total reserva"/>
      <counter-info :counter=0 title="Média de investimento/mês"/>
    </div>
  </base-card>
</template>

<style lang="scss" scoped>
@use '../../styles/colors.scss' as colors;
.profile-card {
  &--container {
    display: flex;
    gap: 48px;
    align-items: center;
    justify-content: space-between;
    padding-right: 32px;
    padding-bottom: 20px;
    border-bottom: 1px solid #EEE;

    span {
      font-size: 14px;
      color: colors.$gray-light;
    }
    img {
      width: 80px;
      height: 80px;
      border-radius: 80px;
      align-self: center;
      justify-self: center;
    }
  }

  &--infos {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &--counters {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    padding-top: 36px;
  }
}
</style>