import { createApp } from 'vue';
import store from './store/index.js'

import App from './App.vue';
import router from './router/index.js';
import './global.css'

createApp(App).use(router).use(store).mount('#app');
