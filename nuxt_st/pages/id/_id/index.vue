<!-- urlがlocalhost:3000/id/の時、/pages/id/index.vueと/pages/_id/index.vueが参照されるが、エラーページ用のid/index.vueよりdynamic routeの_id/index.vueの方が優先される -->
<template>
  <div style="padding: 15px">
    <b-card border-variant="info" footer-bg-variant="info" text-variant="info">
      <p>
        <i class="fas fa-file-code"></i>
        <span>pages/id/_id/index.vue</span>
      </p>
      <b-alert show variant="info">
        <i class="fas fa-id-card-alt"></i>
        <b>ID:</b>
        <b>{{ $route.params.id }}</b>
        <hr>
        <!-- 名前付きrouteは、folder-file_nameで、paramsでidの動的パラメータ部を渡す -->
        <nuxt-link :to="{ name: 'id-id-detail', params: { id: $route.params.id } }">Detail Page</nuxt-link>
      </b-alert>
      <div slot="footer">
        <span style="color:white">Dynamic Route</span>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
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
