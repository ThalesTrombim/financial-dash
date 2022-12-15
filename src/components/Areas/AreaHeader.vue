<script lang="ts" setup>
import { themeStore } from '../../store/theme';
const themestore = themeStore();

interface HeaderPropsTypes {
  withLink?: boolean
  leftTitle: string
  rightTitle: string
  isLowerLeftTitle?: boolean
}

const props = withDefaults(defineProps<HeaderPropsTypes>(), {
  withLink: false,
  isLowerRightTitle: false
})
</script>

<template>
  <div class="profilearea-header--container area" :class="themestore.themeState">
    <h3 :class="{ 'title-span': isLowerLeftTitle }">{{ leftTitle }}</h3>
    <div>
      <span class="title-span">{{ rightTitle }}</span>
      <a v-if="props.withLink" class="link-blue" href="#">show all</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/themes.scss';

.profilearea-header--container {
  display: grid;
  column-gap: 24px;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "area-1 area-2 area-3";
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-area: area-3;

    a {
      text-decoration: none;
      font-weight: 500;
    }
  }
}
</style>