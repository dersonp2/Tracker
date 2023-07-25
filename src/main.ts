import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/js/all'
import roteador from '@/roteador'

createApp(App)
.use(roteador)
.mount('#app')
