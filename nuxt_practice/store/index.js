export const state = () => ({
  list: []
});

export const mutations = {
  set_list(state, arg) {
    state.list = arg
  }
}

export const actions = {
  async nuxtServerInit(store, context) {
    try {
      const response = await context.$axios.get('http://localhost:9000/home');
      // db errorなし
      if (response.data[0]) {
        store.commit('set_list', response.data[1]);
        // db errorあり
      } else {
        context.error({
          message: 'database error...'
        })
      }
      // 取得中にerror発生
    } catch (e) {
      context.error({
        message: e.message
      })
    }
  }
}
