import { defineStore } from 'pinia';

import { db } from '../firebase';
import { collection, CollectionReference, updateDoc, doc, onSnapshot } from 'firebase/firestore';

import { InvestimentsTypes } from '../types';

export const savingsStore = defineStore('savings', {
  state: () => {
    return {
      savingsList: [] as InvestimentsTypes[],
      loadingData: false as boolean
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
    async updateAmount(id: string, newAmount: number) {
      const itemRef = doc(db, 'savings', id);
      await updateDoc(itemRef, { amount: newAmount});
    }
  },
  getters: {
    getSavingsAmount(state) {
      state.loadingData = true;

      const chartData = [
        ['Categoria', 'Total', { role: 'style'}],
      ] as any;

      state.savingsList.map(item => {
        const newArray = [item.title, item.amount, item.color];
        chartData.push(newArray);
      })

      if(state.savingsList.length >= 2) {
        state.loadingData = false;
      }

      return chartData;
    }
  }
})
