import Vue from 'vue'
import App from './App.vue'
// 拡張子がない場合、下記の優先順位でimportされる。まずjsファイルを探して、なければディレクトリ名/index.jsを探す
// 1. router.js
// 2. router/index.js
import router from './router'
import store from './store'

import '@/plugins/iview'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
