<template>
  <div id="resource">
    <b-alert show variant="info">{{ data_msg }}</b-alert>
    <hr>
    <b-alert show variant="success">
      {{ msg }}
      <hr>
      {{ id }}
    </b-alert>
  </div>
</template>
<script>
// @nuxtjs/axios moduleで使用する場合、context.$axiosで使用できるのでimport不要
// import axios from "axios";
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
  // asyncData(context) {
  //   // asyncDataでthenを使用する時、returnを2回使用することに注意
  //   return axios
  //     .get("http://localhost:9000/retrieve")
  //     .then(res => {
  //       return res.data;
  //     })
  //     .catch(error => {
  //       // error表示
  //       // context.error({
  //       //   message: "ajax problem, sorry..."
  //       // });
  //       // redirect
  //       context.redirect("/");
  //     });
  // },
  async asyncData(context) {
    try {
      const response = await context.$axios.get(
        "http://localhost:9000/retrieve"
      );
      return response.data;
    } catch (err) {
      context.error({ message: err.message });
    }
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
