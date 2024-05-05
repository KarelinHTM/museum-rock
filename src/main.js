import 'swiper/css'
import { createApp } from 'vue'
import { VueFire } from 'vuefire'
import App from './App.vue'
import { firebaseApp } from './firebase'
import './main.css'
import router from './router/router'
import store from './store'

const app = createApp(App)

app.use(VueFire, { firebaseApp }).use(router).use(store).mount('#app')
