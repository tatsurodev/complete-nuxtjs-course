<template>
  <div style="padding: 15px">
    <b-card border-variant="primary" footer-bg-variant="primary" text-variant="primary">
      <p>
        <i class="fas fa-file-code"></i>
        <span>pages/route.vue</span>
      </p>
      <b-alert show variant="primary">
        <i class="fas fa-map-marked-alt"></i>
        <span>http://localhost:300/route</span>
        <b>{{ $route.query.msg }}</b>
      </b-alert>
      <div slot="footer">
        <span style="color:white">Nested Route</span>
      </div>
    </b-card>
    <hr>
    <!-- nuxt-childタグで子コンポーネント(/pages/route/以下にあるvueファイル)を表示する ex. /routeなら/pages/route/index.vueを、 /route/my_routeなら/pages/route/my_route.vueを表示する-->
    <!-- titleは、親より子のものが優先される -->
    <nuxt-child></nuxt-child>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "pages/route.vue"
    };
  }
};
</script>
<style scoped>
</style>
