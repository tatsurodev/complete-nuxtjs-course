<template>
  <section class="container">
    <h1>Introduction:</h1>
    <gallery/>
    <!-- Q. 写真の下のコンテンツ部分に余白をintroduction, tech, historyページの全てに設けるにはどうしたらよいか？ -->
    <!-- A. index.vueはnuxtタグを通じて出力され、nuxtタグはdefault.vueでmain componentによってネストされている。よって、main componentに余白用のcssを追加する -->
    <div
      class="description"
    >The Toyota Land Cruiser (Japanese: トヨタ ランドクルーザー Toyota Rando-kurūzā) is a series of four-wheel drive vehicles produced by the Japanese car maker Toyota. It is Toyota's longest running series. Production of the first generation Land Cruiser began in 1951 (90 units) as Toyota's version of a Jeep-like vehicle. The Land Cruiser has been produced in convertible, hardtop, station wagon and cab chassis versions. The Land Cruiser's reliability and longevity has led to huge popularity, especially in Australia where it is the best-selling body-on-frame, four-wheel drive vehicle. Toyota also extensively tests the Land Cruiser in the Australian outback – considered to be one of the toughest operating environments in both temperature and terrain. In Japan, the Land Cruiser is exclusive to Toyota Japanese dealerships called Toyota Store.</div>
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
h1 {
  font-family: inpact;
  color: green;
}
.description {
  font-size: 16px;
  line-height: 24px;
  margin: 10px;
}
</style>
