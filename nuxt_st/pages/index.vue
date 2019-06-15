<template>
  <section class="container">
    <div>
      <i style="font-size: 66px" class="fab fa-500px"></i>
      <app-logo/>
      <h1 class="title">nuxt_st</h1>
      <h2 class="subtitle">Nuxt.js project</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  // 文字列で指定した場合、enter時のみtransitionが得られ、leave時はなし
  // transition: 'prefix',
  // objectで指定した場合、文字列で指定したときより詳細に指定できる
  transition: {
    duration: 1000,
    // anime.cssで作成、インストール(/assets/anime.css)したanimationが適用する
    enterActiveClass: "animated slideInUp",
    leaveActiveClass: "animated slideOutDown"
  },
  // layoutの指定がない場合、default.vueが読み込まれる
  // layout: "my_layout",
  head() {
    return {
      title: "HOME: pages/index.vue",
      meta: [
        {
          // hidでオーバーラードするnuxt.config.jsのmetaタグのhidを指定する。ないと2つmetaタグ(nuxt.config.jsで設定したものとここで指定したもの)が作られてしまうので注意
          hid: "description",
          name: "description",
          content: "HOME PAGE"
        }
      ]
    };
  },
  components: {
    AppLogo
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
