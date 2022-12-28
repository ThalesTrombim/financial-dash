import { defineStore } from 'pinia';

import { db } from '../firebase';
import { collection, CollectionReference, updateDoc, doc, onSnapshot, deleteDoc } from 'firebase/firestore';

import { InvestimentsTypes } from '../types';

export const savingsStore = defineStore('savings', {
  state: () => {
    return {
      savingsList: [] as InvestimentsTypes[],
    }
  },
  actions: {
    async getSavingItems() {
      onSnapshot(collection(db,"savings") as CollectionReference<InvestimentsTypes>, res => {
        const newSavingsList = [] as InvestimentsTypes[];

        res.docs.map(item => {
          newSavingsList.push({ ...item.data(), id: item.id })
          this.savingsList = newSavingsList;
        })
      })
    },
    // async handleFavorite(id: string, newVal: boolean) {
    //   const itemRef = doc(db, 'wishlist', id);

    //   await updateDoc(itemRef, { isFavorite: newVal});
    // },
    // async deleteItemFromWishList(id: string) {
    //   await deleteDoc(doc(db, "wishlist", id));
    // }
  },
})
