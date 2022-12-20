// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    

    modules: ['@nuxtjs/color-mode'],

    colorMode: {
        classSuffix: ''
    },

    plugins: [
        { src: '@/plugins/aos.js', ssr: false },
        // { src: '@/plugins/CanvasJS.js', ssr: false }
    ],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },



    },
    runtimeConfig: {
        public: {
            wpurl: process.env.WP_URL,
        }
    },
})
