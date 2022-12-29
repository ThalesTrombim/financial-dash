import { defineStore } from 'pinia';

import { db } from '../firebase';
import { collection, CollectionReference, updateDoc, doc, onSnapshot, deleteDoc } from 'firebase/firestore';

import { WishItemTypes } from '../types';

interface WishItemTypesStore extends WishItemTypes {
  id: string
}

export const wishlistStore = defineStore('wishlist', {
  state: () => {
    return {
      wishlist: [] as WishItemTypesStore[],
    }
  },
  actions: {
    async getAllWishItems() {
      onSnapshot(collection(db,"wishlist") as CollectionReference<WishItemTypesStore>, res => {
        const newWishList = [] as WishItemTypesStore[];

        res.docs.map(item => {
          newWishList.push({ ...item.data(), id: item.id })
          this.wishlist = newWishList;
        })
      })
    },
    async handleFavorite(id: string, newVal: boolean) {
      const itemRef = doc(db, 'wishlist', id);

      await updateDoc(itemRef, { isFavorite: newVal});
    },
    async deleteItemFromWishList(id: string) {
      await deleteDoc(doc(db, "wishlist", id));
    }
  },
})
