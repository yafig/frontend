module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'YAFIG - Yet Another Free (OSS) Instagram-clone',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'YAFIG Frontend in NuxtJS' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
	  '@nuxtjs/axios',
    '@nuxtjs/auth',
    'nuxt-buefy',
    "@nuxtjs/google-analytics"
  ],
  axios: {
	  baseURL: 'http://localhost:5000'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: 'login', method: 'post', propertyName: 'token'},
          user: {url: 'login', method: 'get', propertyName: 'username'},
          logout: false
        }
      }
    }
  },
  googleAnalytics: {
    id: "UA-159838013-1"
  },
  plugins: [
    {src: "~plugins/ga.js", mode: "client"}
  ]
}

