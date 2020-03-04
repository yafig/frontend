module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'yafig-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'YAFIG Frontend in NuxtJS' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'}
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
	  '@nuxtjs/auth'
  ],
  axios: {
	  baseURL: 'https://app.fakejson.com'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: 'q/G0Eh7AmU?token=HoyqjBs1mE9itMb1TO7aZw', method: 'post', propertyName: 'token'},
          user: {url: 'q/G0Eh7AmU?token=HoyqjBs1mE9itMb1TO7aZw', method: 'get', propertyName: 'user_name'},
          logout: false
        }
      }
    }
  }
}

