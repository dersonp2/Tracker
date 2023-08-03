// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/js/all'
import roteador from '@/roteador'
import { createPinia } from 'pinia'

createApp(App)
.use(roteador)
.use(createPinia())
.mount('#app')
