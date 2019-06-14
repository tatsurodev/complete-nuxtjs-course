/* classic mode
import vuex from 'vuex'
// vue的手法で必要
// import vue from 'vue'
// vue.use(vuex)

const store = {
  state: {
    msg: 'msg in store/index.js state'
  },
  getters: {},
  mutations: {},
  actions: {}
}

// vue的手法ではこの方法でexport
// vuex.storeメソッドでインスタンス作成してexport
// export default new vuex.Store(store)

// nuxtでは無名関数でexport
export default function () {
  return new vuex.Store(store)
}
*/

/* module mode */
export const state = () => ({
  msg: 'msg in store/index.js state MODULE'
})

export const mutations = {
  reset_msg(state, arg) {
    state.msg = arg
  }
}
