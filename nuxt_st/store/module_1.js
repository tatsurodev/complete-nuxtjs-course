export const state = () => ({
  msg: 'msg in store/module_1.js state MODULE'
})
export const mutations = {
  reset_msg(state, arg) {
    state.msg = arg
  }
}
