const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  target: 'static',

  head: {
    title: 'Daniel Parker',
    script: [
      { src: 'https://www.google-analytics.com/analytics.js', defer: true }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'software, consulting, developer' },
      { property: 'og:title', content: 'Daniel Parker' },
      {
        property: 'og:description',
        content: 'Software Development Consultant'
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://danielparker.com.au/me.jpg' },
      { property: 'og:url', content: 'https://danielparker.com.au' },
      { property: 'twitter:title', content: 'Daniel Parker' },
      {
        property: 'twitter:description',
        content: 'Software Development Consultant'
      },
      {
        property: 'twitter:image',
        content: 'https://danielparker.com.au/me.jpg'
      },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:creator', content: '@GeneralistDev' },
      {
        hid: 'description',
        name: 'description',
        content: 'Software Development Consultant'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [{ rel: 'stylesheet', type: 'text/css', href: 'https://pro.fontawesome.com/releases/v5.15.1/css/all.css', integrity: 'sha384-9ZfPnbegQSumzaE7mks2IYgHoayLtuto3AS6ieArECeaR8nCfliJVuLh/GaQ1gyM', crossorigin: 'anonymous' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['@/assets/colors.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~plugins/ga.js', ssr: false }],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ,
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://danielparker.com.au',
    exclude: ['/consulting/*', '/consulting', '/cv', '/contact'],
    gzip: true,
    generate: true,
    routes: [
      {
        url: '/consulting/',
        priority: 1
      },
      '/contact/',
      '/cv/'
    ]
  },

  manifest: {
    name: 'Daniel Parker',
    short_name: 'Daniel P',
    lang: 'en',
    background_color: '#fff',
    display: 'standalone',
    description: 'Software Development Consultant'
  }
}
