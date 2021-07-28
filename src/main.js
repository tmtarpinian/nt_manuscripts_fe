import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import BaseCard from './components/layout/BaseCard.vue';
import router from './router';
import store from './store/index';

const app = createApp(App);

app.use(store);
app.use(router);
app.component('base-card', BaseCard);

app.mount('#app');
