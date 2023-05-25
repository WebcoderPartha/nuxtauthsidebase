export default defineNuxtConfig({
    modules: ['@sidebase/nuxt-auth'],
    auth: {
        globalAppMiddleware: true
    }
 })