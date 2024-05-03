import 'swiper/css'
import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import router from './router/router'
import store from './store'

const app = createApp(App)

app.use(router).use(store).mount('#app')