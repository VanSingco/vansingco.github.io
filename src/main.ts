import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto';
import './assets/main.css'

const app = createApp(App)

app.use(VueScrollTo);

app.use(router)

app.mount('#app')
