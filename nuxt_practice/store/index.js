// export const state = () => {
//   return {sample: 'this is object literal'}
// }
// 上記のと下記のstateは同意
// 上記は、アロー関数で一行の処理をreturnしているので { return } が省略できる。よって中身のオブジェクトリテラルの {sample: 'this is object literal } のみを記述することになるが、スコープの {} と混同するので {} の外に () を追加する。アロー関数でオブジェクトリテラルを返す時、({}) とすることに注意
export const state = () => ({
  list: []
});

export const mutations = {
  set_list(state, arg) {
    state.list = arg
  },
  set_image(state, arg) {
    // 車データのオブジェクト入ったstore.listの配列に画像データを追加する
    // arg[0] = context.params.id
    // arg[1] = imagePromise.data[1]
    state.list[arg[0]].image = arg[1]
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
