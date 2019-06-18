export default function (context) {
  // stateにアクセス
  console.log(context.store.state.msg);
  console.log(context.store.state.module_1.msg);
  // mutationsにアクセス
  console.log(context.store.commit('reset_msg', 'hi from mw'));
  console.log(context.store.commit('module_1/reset_msg', 'hi from mw'));
  // vue instanceにアクセス
  context.app.head.title = 'title by Mw'
}
