export default function (context) {
  // cookieありはログインしている
  if (context.app.$cookies.get('is_login')) {

    // cookieなしでログインしていない、この時alertを出したいがserver sideだと使えないので場合分ける必要がある
  } else {
    // server sideはダイレクトにurlにアクセスしようとしている
    if (process.server) {
      context.redirect('/' + context.params.id)
      // client sideでリンクからサクセスしようとしている
    } else {
      alert("Please login first...")
      context.redirect('/')
    }
  }
}
