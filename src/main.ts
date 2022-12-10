import './styles/main.scss'
import App from './App.vue'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue'

const app = createApp(App)

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.use(createPinia());
app.use(mdiVue, { icons: mdijs });
app.mount('#app');
