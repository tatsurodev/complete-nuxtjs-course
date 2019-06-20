<template>
  <section class="container">
    <gallery/>
    <nuxt-child></nuxt-child>
  </section>
</template>

<script>
import gallery from "~/components/gallery.vue";

export default {
  components: {
    gallery
  },
  validate({ params, query, store }) {
    if (/^\d+$/.test(params.id) && params.id < store.state.list.length) {
      return true;
    } else {
      throw new Error("Illegal ID Value...");
    }
  },
  fetch(context) {
    context.$axios
      .get("http://localhost:9000/image/" + context.params.id)
      .then(res => {
        // 画像取得成功
        if (res.data[0]) {
          // context.params.idが車のid, res.data[1]が車の画像パス
          context.store.commit("set_image", [context.params.id, res.data[1]]);
          // 画像取得失敗で失敗画像のプレースホルダー
        } else {
          context.store.commit("set_image", [
            context.params.id,
            "./error.jpeg"
          ]);
        }
      })
      .catch(err => {
        context.store.commit("set_image", [context.params.id, "./error.jpeg"]);
      });
  }
};
</script>

<style>
</style>
