import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'

import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())
app.use(mdiVue, { icons: mdijs })
app.mount('#app')
