<script lang="ts" setup>
import { collection, doc, setDoc } from '@firebase/firestore';
import { db } from '../../firebase';
import { reactive } from 'vue';

const emit = defineEmits(['close-modal'])

interface NewItemtypes {
  name: string
  amount: number | null
  link: string
  imageUrl: string,
  isFavorite: boolean
}

const newItem: NewItemtypes = reactive({
  name: '',
  amount: 0,
  link: '',
  imageUrl: '',
  isFavorite: false
})

function handleModalClick(event: any) {
  if(event.target.id === 'overlay') {
    emit('close-modal');
  }
} 

async function handleAddItem() {
  const { name, amount, link, imageUrl } = newItem;

  console.log(newItem);
  console.log(name);
  const newItemRef = doc(collection(db, 'wishlist'));

  await setDoc(newItemRef, {
    name,
    amount, 
    link, 
    imageUrl
  })
}

</script>

<template>
  <div class="addwishitem--backdrop" @click="handleModalClick" id="overlay">
    <base-card class="addwishitem--container" height-auto>
      <form>
        <h3>Adicionar item</h3>
        <div class="addwishitem--inputs">
          <label for="item_name">Nome do item</label>
          <input type="text" id="item_name" v-model="newItem.name">
        </div>
        <div class="addwishitem--inputs">
          <label for="item_price">Média de valor do item</label>
          <input type="text" id="item_price" v-model="newItem.amount" v-on:focus="newItem.amount = null">
        </div>
        <div class="addwishitem--inputs">
          <label for="item_url">Link</label>
          <input type="text" id="item_url" v-model="newItem.link">
        </div>
        <div class="addwishitem--inputs">
          <label for="item_image">Link imagem do item</label>
          <input type="text" id="item_image" v-model="newItem.imageUrl">
        </div>
        <div class="addwishitem--button-area">
          <base-button button-label="Cancelar" is-gray @click.prevent="emit('close-modal')"/>
          <base-button button-label="Adicionar" @click.prevent="handleAddItem"/>
        </div>
      </form>
    </base-card>
  </div>
</template>

<style lang="scss" setup>
@use '../../styles/themes.scss';
@use '../../styles/colors.scss' as colors;

.addwishitem {
  &--backdrop {
    background: rgba($color: #000000, $alpha: 0.4);
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  &--container {
    width: 50%;
    form {
      padding: 24px 48px;
      h3 {
        margin-bottom: 24px;
      }
    }
  }
  &--inputs {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: 16px 0;
    font-size: 14px;
    font-weight: 500;

    input {
      padding: 6px;
      border: none;
      outline: none;

      border-bottom: 1px solid colors.$gray-light;

      &:focus {
        border-bottom: 2px solid colors.$gray-light;
      }
    }
  }
  &--button-area {
    display: flex;
    gap: 32px;
    margin-top: 32px;
  }
}

</style>