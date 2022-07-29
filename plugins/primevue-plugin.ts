import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";

import Card from 'primevue/card';
import Button from 'primevue/button';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(PrimeVue, {ripple: true});
    nuxtApp.vueApp.component('Card', Card);
    nuxtApp.vueApp.component('Button', Button);
})