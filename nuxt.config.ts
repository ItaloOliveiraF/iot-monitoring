import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        "~/assets/global.css",
        "primevue/resources/themes/saga-blue/theme.css",       //theme
        "primevue/resources/primevue.min.css",                 //core css
        "primeicons/primeicons.css"                           //icons
    ]
})
