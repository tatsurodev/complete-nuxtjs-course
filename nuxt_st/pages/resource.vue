<template>
  <div id="resource">
    <!-- asset folderは、相対もしくは絶対パスで指定 -->
    <img src="~/assets/asset.jpg" alt>
    <!-- 動的リンクにはassets folderのファイルは使えない、下記のコードは正しくリンクされない -->
    <!-- <img :src="image[0]" alt> -->
    <hr>
    <!-- static folderは、/file_nameのみ -->
    <!-- <img src="/static.jpg" alt> -->
    <img :src="image[1]" alt>
    <hr>
    <div id="frame"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      image: ["~/assets/asset.jpg", "/static.jpg"]
    };
  }
};
</script>
<style scoped>
#resource {
  text-align: center;
}
#frame {
  margin: 0 auto;
  width: 300px;
  height: 225px;
  /* cssの背景に画像を指定する時、static folderはそのまま使用できる ex. url('/file_name')
  が、assets folderのファイルは、絶対・相対パス共にエラーとなる。~assets/file_nameとしないといけない */
  background-image: url("~assets/asset.jpg");
}
</style>
