export default function (context) {
  // universal modeでは最初server sideで起動し、後にclient sideで動くので、cookieをチェックする時、server sideかclient sideかをチェック処理が必要
  // process.serverがtrueならserver side, process.clientがtrueならclient side
  if (process.server) {
    console.log(context.req.headers.cookie)
  } else {
    console.log(document.cookie, 'this is client side.')
  }
}
