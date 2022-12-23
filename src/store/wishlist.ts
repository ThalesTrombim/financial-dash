import { defineStore } from 'pinia';

import { db } from '../firebase';
import { getDocs, collection, CollectionReference } from 'firebase/firestore';

import { WishItemTypes } from '../types';

export const wishlistStore = defineStore('wishlist', {
  state: () => {
    return {
      wishlist: [] as WishItemTypes[],
    }
  },
  actions: {
    async getAllWishItems() {
      const result = await getDocs(collection(db, 'wishlist') as CollectionReference<WishItemTypes>)
      result.docs.map((item) => {
        this.wishlist.push({ ...item.data(), id: item.id })
      })
    }
  },
})
