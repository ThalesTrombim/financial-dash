import { defineStore } from 'pinia';
import { ref } from 'vue';

export const navbarStore = defineStore('navbar', {
  state: () => {
    return {
      navItemsList: [
        {
          id: 1,
          icon: 'Speedometer',
          label: 'Dashboard'
        },
        {
          id: 2,
          icon: 'LeadPencil',
          label: 'My projects'
        },
        {
          id: 3,
          icon: 'LinkVariant',
          label: 'Community'
        },
        {
          id: 4,
          icon: 'EmailOutline',
          label: 'Messages'
        },
        {
          id: 5,
          icon: 'ChartScatterPlot',
          label: 'Reports'
        },
        {
          id: 6,
          icon: 'CogOutline',
          label: 'Settings'
        }
      ] as NavItems [],
      selectedItem: 1 as number
    }
  },
  actions: {
    setSelectedItem(newValue: number) {
      this.selectedItem = newValue;
    }
  }
})

interface NavItems {
  id: number
  icon: string
  label: string
}
