import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.css';
import router from "./router/router";

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.mount('#app');
