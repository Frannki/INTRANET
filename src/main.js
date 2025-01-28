import './assets/main.css';

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Button from "primevue/button";
import Aura from '@primevue/themes/aura';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import InputText from "primevue/inputtext";

import Password from "primevue/password";


const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
    },
});
app.use(router)
app.component("InputText", InputText);
app.component("Password", Password);
app.use(PrimeVue);
app.use(createPinia());
app.component('Button', Button);
app.mount('#app');
