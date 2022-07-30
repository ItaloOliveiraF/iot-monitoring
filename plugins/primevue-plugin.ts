import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';

import Card from 'primevue/card';
import Button from 'primevue/button';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(PrimeVue, {ripple: true});
    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.component('Card', Card);
    nuxtApp.vueApp.component('Toast', Toast);
    nuxtApp.vueApp.component('Button', Button);
})