import { defineStore } from 'pinia';

export const navbarStore = defineStore('navbar', {
  state: () => {
    return {
      navItemsList: [
        {
          id: 1,
          icon: 'Speedometer',
          label: 'Dashboard',
          idName: 'DASH'
        },
        {
          id: 2,
          icon: 'LeadPencil',
          label: 'My projects',
          idName: 'PROJECTS'
        },
        // {
        //   id: 3,
        //   icon: 'LinkVariant',
        //   label: 'Community'
        // },
        {
          id: 4,
          icon: 'EmailOutline',
          label: 'Messages',
          idName: 'MESSAGES'
        },
        // {
        //   id: 5,
        //   icon: 'ChartScatterPlot',
        //   label: 'Reports'
        // },
        {
          id: 6,
          icon: 'CogOutline',
          label: 'Settings',
          idName: 'SETTINGS'
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
  label: string,
  idName: string
}
