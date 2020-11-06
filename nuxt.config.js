export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  server: {
    host: '0.0.0.0',
    port: 9090, // default: 3000
  },
  mode: 'universal',
  target: 'server',
  head: {
    title: 'gridiron-consumer-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [
      {src: '/js/jquery.js', body: true},
      {src: '/js/bootstrap.js', body: true},

      {src: '/js/owl.carousel.min.js', body: true},
      {src: '/js/slick.js', body: true},
      {src: '/js/countdown.js', body: true},
      {src: '/js/bootstrap-slider.min.js', body: true},
      {src: '/js/main.js', body: true},
      {src: 'https://checkout.razorpay.com/v1/checkout.js', body: true}
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      {
        rel: 'stylesheet',
        href:
          'https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
      },
      {
        rel: 'stylesheet',
        href:
          '/css/bootstrap-slider.css'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/owl.carousel.min.css'},
      { rel: 'stylesheet', href: '/css/slick.css'},
      { rel: 'stylesheet', href: '/css/slick-theme.css'},
      { rel: 'stylesheet', href: '/css/owl.theme.default.min.css'},
      { rel: 'stylesheet', href: '/css/style.css'},
    ]
  },
  vue: {
    config: {
      devtools: true
    }
  },

  loading: {color: '#41b883'},

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'framevuerk/dist/framevuerk-nuxt.min.css',
    {src: 'ant-design-vue/dist/antd.less', lang: 'less'},
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/framevuerk',
    '~/plugins/antd-vue-plugin.ts',
    {src: '~/plugins/jquery-plugin.ts', mode: 'client'},
    {src: '~/plugins/slick-plugin.ts', mode: 'client'},
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    ['@nuxtjs/vuetify', {}]
  ],

  vuetify: {
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#9C27B0', // #E53935
          secondary: '#BA68C8',
          accent: '#FFCA28', // #3F51B5
        },
      },
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/apollo'
  ],

  apollo: {
    tokenName: 'gridiron-key',
    cookieAttributes: {
      secure: false,
    },
    authenticationType: 'Basic',
    clientConfigs: {
      default: {
        httpEndpoint: 'http://optimus.assammart.shop/'
        /*httpEndpoint: 'http://localhost:5588/admin-api',*/
      }
    },
    defaultOptions: {
      $query: {
        loadingKey: 'loading'
      },
    },
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': '#9C27B0',
            'component-background': '#ffffff'
          }
        }
      }
    }
  }
}
