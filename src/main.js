import { createApp } from 'vue';

import App from './App.vue';
import router from './router/router.js';
import store from './store/index.js';

import AOS from 'aos';
import 'aos/dist/aos.css';


const app = createApp(App);

app.use(store);

app.use(router);

AOS.init();

app.mount('#app');
