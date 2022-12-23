import { defineStore } from 'pinia';

import { db } from '../firebase';
import { getDocs, collection, CollectionReference, updateDoc, doc, onSnapshot } from 'firebase/firestore';

import { WishItemTypes } from '../types';

export const wishlistStore = defineStore('wishlist', {
  state: () => {
    return {
      wishlist: [] as WishItemTypes[],
    }
  },
  actions: {
    async getAllWishItems() {
      onSnapshot(collection(db,"wishlist") as CollectionReference<WishItemTypes>, res => {
        const newWishList = [] as WishItemTypes[];

        res.docs.map(item => {
          newWishList.push({ ...item.data(), id: item.id })
          this.wishlist = newWishList;
        })
      })
    },
    async handleFavorite(id: string, newVal: boolean) {
      const itemRef = doc(db, 'wishlist', id);

      await updateDoc(itemRef, { isFavorite: newVal});
    }
  },
})
