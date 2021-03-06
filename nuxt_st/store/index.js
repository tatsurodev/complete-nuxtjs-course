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
  msg: 'initial msg...',
  id: 0
})

export const mutations = {
  reset_both(state, arg) {
    state.msg = arg.msg
    state.id = arg.id
  }
}
// nuxtServerInitはvuexのactionで定義
export const actions = {
  async nuxtServerInit(store, context) {
    try {
      const response = await context.$axios.get(
        "http://localhost:9000/retrieve"
      );
      store.commit("reset_both", response.data);
    } catch (err) {
      context.error({
        message: err.message
      });
    }
  }
}
