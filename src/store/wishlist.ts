import { defineStore } from 'pinia';

import { db } from '../firebase';
import { getDocs, collection, CollectionReference } from 'firebase/firestore';

export const wishlistStore = defineStore('wishtlist', {
  state: () => {
    return {
      wishlist: [] as wishItem[],
    }
  },
  actions: {
    async getAllWishItems() {
      const result = await getDocs(collection(db, 'wishlist') as CollectionReference<wishItem>)
      result.docs.map((item) => {
        // console.log(item.data())
        this.wishlist.push(item.data())
      })
    }
  }
})

interface wishItem {
  name: string
  link: string
  imageUrl: string
  amount: number
  isFavorite: boolean
}
