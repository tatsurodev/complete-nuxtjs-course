export default function (context) {
  if (/^\d+$/.test(context.params.id)) {
    // idが0-100内にあるかチェック
    if (context.params.id > 0 && context.params.id < 100) {
      return true;
    } else {
      // redirect
      context.redirect('/id/1');
      // エラー表示
      // context.error({
      //   message: "ID must be between 1 and 99",
      //   statusCode: 555
      // });
    }
  } else {
    context.error("ID must be a number!");
  }
}
