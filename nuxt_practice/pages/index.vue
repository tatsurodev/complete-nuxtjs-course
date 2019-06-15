<template>
  <section class="container">
    <h1 class="heading">Introduction:</h1>
    <gallery/>
    <!-- Q. 写真の下のコンテンツ部分に余白をintroduction, tech, historyページの全てに設けるにはどうしたらよいか？ -->
    <!-- A. index.vueはnuxtタグを通じて出力され、nuxtタグはdefault.vueでmain componentによってネストされている。よって、main componentに余白用のcssを追加する -->
    <div class="description">{{ $store.state.introduction }}</div>
  </section>
</template>

<script>
import gallery from "~/components/gallery.vue";

export default {
  components: {
    gallery
  },
  head() {
    return {
      title: "Introduction",
      meta: [
        {
          hid: "description",
          name: "description",
          countent: "Toyota Land Cruiser"
        }
      ]
    };
  }
};
</script>

<style>
</style>
