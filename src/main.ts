import './styles/main.scss'
import App from './App.vue'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
import VCalendar from 'v-calendar';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'v-calendar/dist/style.css';

import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue'
import ProductDescription from './components/Cards/elements/ProductDescription.vue';
import CounterInfo from './components/Cards/elements/CounterInfo.vue';

const app = createApp(App)
app.use(VCalendar, {})

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('product-description', ProductDescription);
app.component('counter-info', CounterInfo);

app.use(createPinia());
app.use(mdiVue, { icons: mdijs });
app.mount('#app');
