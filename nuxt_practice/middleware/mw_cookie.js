export default function (context) {
  // universal modeでは最初server sideで起動し、後にclient sideで動くので、cookieをチェックする時、server sideかclient sideかをチェック処理が必要
  // process.serverがtrueならserver side, process.clientがtrueならclient side
  // cookie-universal-nuxt moduleを使うとチェックしてくれるので不要
  // if (process.server) {
  //   console.log(context.req.headers.cookie)
  // } else {
  //   console.log(document.cookie, 'this is client side.')
  // }
  // 全てのcookie
  // const all = context.app.$cookies.getAll()
  // console.log(all)
  // cookie指定して取得
  console.log(context.app.$cookies.get('signed'))
}
