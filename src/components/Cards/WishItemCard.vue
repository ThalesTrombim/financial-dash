<template>
  <base-card class="wishitemcard--container" no-padding>
    <div class="wishitemcard--texts">
      <span class="title-span">Nome</span>
      <p>produto xpto </p>
    </div>
    <div class="wishitemcard--texts">
      <span class="title-span">Média de valor</span>
      <p class="value-green">R$ 2500</p>
    </div>
    <div class="wishitemcard--texts">
      <span class="title-span">Link</span>
      <p>Visualizar produto</p>
    </div>
    <div class="wishitemcard--texts">
      <img src="https://http2.mlstatic.com/D_NQ_NP_888681-MLA49448516248_032022-O.webp" alt="teste">
    </div>
    <div class="wishitemcard--actions">
      <mdicon name="Heart" class="wishitemcard--icon icon-heart"/> 
      <mdicon name="Delete" class="wishitemcard--icon icon-delete"/> 
    </div>
  </base-card>
</template>

<style lang="scss" scoped>
@use '../../styles/colors.scss' as colors;

.wishitemcard {
  &--container {
    display: flex;
    justify-content: space-between;
    padding: 20px 64px!important;
  }
  &--texts {
    display: flex;
    flex-direction: column;
    max-width: 25%;

    p {
      margin-top: 8px;
    }

    img {
      width: 50px;
      max-height: 100px;
    }
  }
  &--actions {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  &--icon {
    color: colors.$gray-light;
    cursor: pointer;
  }
}
.icon-heart:hover {
  color: #790079;
}
.icon-delete:hover {
  color: #de052e;
}
</style>