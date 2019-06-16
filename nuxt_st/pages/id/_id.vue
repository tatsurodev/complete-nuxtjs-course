<template>
  <div style="padding: 15px">
    <b-card border-variant="primary" footer-bg-variant="primary" text-variant="primary">
      <p>
        <i class="fas fa-file-code"></i>
        <span>pages/id/_id.vue</span>
      </p>
      <b-alert show variant="primary">
        <i class="fas fa-id-card-alt"></i>
        <b>ID:</b>
        <!-- dynamic routeでparamsがない場合nullとして扱われ普通に’ページ表示できてしまうので、/pages/id/index.vueを作成し、paramsなしの場合に表示するエラーページを作成する -->
        <b>{{ $route.params.id }}</b>
      </b-alert>
      <div slot="footer">
        <span style="color:white">Dynamic Route</span>
      </div>
    </b-card>
    <hr>
    <nuxt-child></nuxt-child>
  </div>
</template>
<script>
export default {
  // 通常validationはparent componentに行うことが多い。child componentの_id/index.vueにのみvlaidationをつけた場合、関係のない_id/detail.vue等にはアクセスできることに注意
  // validate({ params, query, store }) {
  //   // /regex here/.test(チェックする文字列)でマッチすればtrue,　そうでなければfalse
  //   var result = /^\d+$/.test(params.id);
  //   if (result) {
  //     // idが0-100内にあるかチェック
  //     if (params.id > 0 && params.id < 100) {
  //       return true;
  //     } else {
  //       throw new Error("ID must be between 1 and 99");
  //     }
  //   } else {
  //     throw new Error("ID must be a number!");
  //   }
  // },
  transition: {
    name: "prefix"
  },
  head() {
    return {
      title: "Dynamic Route"
    };
  }
};
</script>
<style scoped>
</style>
