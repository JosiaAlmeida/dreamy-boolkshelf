export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dreamy-boolkshelf',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css',
      },
      {
        rel: 'stylesheet',
        href: 'assets/style/globalStyle.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/apollo',
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  publicRuntimeConfig: {
    axios: {
      baseURL: `${process.env.SQUIDEX_URL}/api/content/${process.env.SQUIDEX_APP_NAME}`
    },
    squidex: {
      content: `${process.env.SQUIDEX_URL}/api/content/${process.env.SQUIDEX_APP_NAME}`,
      assets: `${process.env.SQUIDEX_URL}/api/apps/${process.env.SQUIDEX_APP_NAME}/assets`,
      url: process.env.SQUIDEX_URL,
      appName: process.env.SQUIDEX_APP_NAME,
      clientId: process.env.SQUIDEX_CLIENT_ID,
      clientSecret: process.env.SQUIDEX_CLIENT_SECRET,
    }
  },
  axios: {
    baseURL: `${process.env.SQUIDEX_URL}/api/content/${process.env.SQUIDEX_APP_NAME}`
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: `${process.env.SQUIDEX_URL}/api/content/${process.env.SQUIDEX_APP_NAME}/graphql`,
      }
    }
  },
  i18n: {
    langDir: 'lang/',
    locales: [
      { code: 'pt', file: 'pt.js' },
      { code: 'en', file: 'en.js' },
    ],
    defaultLocale: 'pt',
    vueI18n: {
      fallbackLocale: 'pt',
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
