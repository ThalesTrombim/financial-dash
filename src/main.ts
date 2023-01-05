import './styles/main.scss'
import App from './App.vue'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
import VCalendar from 'v-calendar';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'v-calendar/dist/style.css';

// OLD
import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue'
import ProductDescription from './components/Cards/elements/ProductDescription.vue';
import CounterInfo from './components/Cards/elements/CounterInfo.vue';
import ButtonFilter from './components/ui/ButtonFilter.vue';


// NEW 
import TitleCard from './components/ui/Texts/TitleCard.vue';
import TitleView from './components/ui/Texts/TitleView.vue';
import Text from './components/ui/Texts/Text.vue';

const app = createApp(App);

app.use(VCalendar, {})
// OLD
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('product-description', ProductDescription);
app.component('counter-info', CounterInfo);
app.component('button-filter', ButtonFilter);

// NEW 

app.component('title-card', TitleCard);
app.component('title-view', TitleView);
app.component('text', Text);

app.use(createPinia());
app.use(mdiVue, { icons: mdijs });
app.mount('#app');
