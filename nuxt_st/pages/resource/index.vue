<template>
  <div id="resource">
    <b-alert show variant="info">{{ data_msg }}</b-alert>
    <hr>
    <b-alert show variant="success">{{ async_msg }}</b-alert>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "RESOURCE: pages/resource.vue",
      meta: [
        {
          // hidでオーバーラードするnuxt.config.jsのmetaタグのhidを指定する。ないと2つmetaタグ(nuxt.config.jsで設定したものとここで指定したもの)が作られてしまうので注意
          hid: "description",
          name: "resource",
          content: "RESOURCE PAGE"
        }
      ]
    };
  },
  // asyncDataで返されたdataプロパティはdataにmergeされる
  asyncData() {
    return {
      data_msg: "asyncData msg in data..."
    };
  },
  data() {
    return {
      data_msg: "msg in data..."
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
