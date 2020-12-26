export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Caribbeans',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A website design and development agency' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Caribbeans' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: ''
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: ''
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: ''
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/caribbeans/scripts/focus-visible.min.js', async: true, defer: true }
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/main.css',
  ],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/composition-api.js',
    '~/plugins/lang.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-i18n'
  ],

  // i18n
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English',
      },
      {
        code: 'es',
        iso: 'es-ES',
        file: 'es-ES.js',
        name: 'Español',
      }
    ],
    vueI18n: {
      fallbackLocale: 'en'
    },
    defaultLocale: 'en',
    parsePages: false,
    detectBrowserLanguage: false,
    seo: false,
    lazy: true,
    langDir: 'i18n/'
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  generate: {
    dir: 'docs',
    fallback: '404.html'
  },
  router: {
    base: '/caribbeans/'
  },
  target: 'static',
  postcss: {
    // Add plugin names as key and arguments as value
    // Install them before as dependencies with npm or yarn
    plugins: {
      'postcss-focus-visible': {}
    }
  }
  // server: {
  //   host: '0.0.0.0',
  //   port: process.env.PORT || 5500
  // }
}
