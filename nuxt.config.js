export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'NuxtTemplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  ],
  styleResources: {
    scss: '@/assets/scss/core/_global.scss'
  },
  plugins: [

    {
      src: '~plugins/vue-slider-component.js',
      ssr: false
    }
  ],

  components: true,

  buildModules: [
    '@aceforth/nuxt-optimized-images'
  ],
  optimizedImages: {
    optimizeImages: true
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],

  axios: {},

  build: {
    // transpile: ['vuetify'] //IE11
    postcss: [
      require('autoprefixer')({
        grid: 'autoplace'
      }),
      require('cssnano')({
        preset: [
          'default', {
            discardComments: {
              removeAll: true
            }
          }
        ]
      }),
      require('postcss-sort-media-queries')({
        sort: require('sort-css-media-queries')
      })
    ]
  }
}
