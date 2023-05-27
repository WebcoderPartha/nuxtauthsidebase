export default defineNuxtConfig({
    modules: ['@sidebase/nuxt-auth'],
    auth: {
        globalAppMiddleware: true,
            
    },
    runtimeConfig: {
        apiBaseUrl: 'http://127.0.0.1:8000/api'
    }
 })