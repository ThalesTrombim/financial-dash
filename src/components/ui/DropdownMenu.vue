<template>
  <base-card no-padding class="dropdown-menu--container">
    <ul>
      <li>Adicionados recentes</li>
      <li>Maior preço</li>
      <li>Menor preço</li>
      <li>A - Z</li>
      <li>Z - A</li>
    </ul>
  </base-card>
</template>

<style lang="scss" scoped>
@use '../../styles/colors.scss' as colors;
.dropdown-menu {
  &--container {
    list-style: none;
    position: absolute;
    margin-top: 45px;
    margin-right: 110px;
    max-height: 145px;

    ul {
      list-style: none;
      cursor: pointer;

      :first-child {
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
      }
      :last-child {
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
      }
      li {
        padding: 5px 15px;
        &:hover {
          background: colors.$blue;
          color: colors.$white;
        }
      }
    }
  }
}
</style>