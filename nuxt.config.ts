// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    
 app: {
    head: {
      charset: 'utf-8',
    //   viewport: 'width=500, initial-scale=1',
      title: 'leolee.design',
      meta: [
        // <meta name="description" content="My amazing site">
          {
              name: 'description', content: 'design.UX.UI' }
      ],
    }
  },
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
