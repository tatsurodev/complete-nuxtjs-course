module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'nuxt_st',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css'
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // webpack4以降でvendorはdeprecated, vendorは何度も読み込まれることを防ぐが目的
    // vendor: ['bootstrap-vue']
  },
  // cdnはここでは使えないのでheadセクションでインストールする
  css: ['@/assets/page_structure.css', '@/assets/transition.css'],
  // pluginはファイルパス
  // plugins: ['@/plugins/bootstrap.js'],
  // nuxt modulesは事前にインストールされたpluginで、パケージ名のみの指定で使える。plugins folder以下に設定ファイルを書く必要もないのでpluginより便利
  modules: [
    'bootstrap-vue/nuxt'
  ],
  router: {
    // Q.タブのactiveクラス付与のベストソリューションは？
    // A. query dataも考慮すると$route.pathから選択タブを判定するのがベスト、ただ面倒
    // linkExactActiveClassをただのactiveクラスに名称変更
    // linkExactActiveClassの問題点は、query data使用時に使えないこと ex. /route?msg=helloの時 Route:my_routeタグがactiveにならない
    // linkExactActiveClass: 'active',
    // linkActiveClassの問題点は、Homeタブが常にアクティブになり、nested routeで親コンポーネントのタグ(/route)が子コンポーネント(/route/my_route)選択時にactiveになってしまうこと
    // linkActiveClass: 'active',
  }
}
