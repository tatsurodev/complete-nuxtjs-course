<template>
  <div id="error">
    <!-- <app-logo/> -->
    <AppLogo/>
    <!-- error propsは、statusCodeとmessageという2つのプロパティを持つ -->
    <div id="errorStatus">{{ error.statusCode }}</div>
    <div id="errorMsg">{{ error.message }}</div>
  </div>
</template>
<script>
import AppLogo from "@/components/AppLogo";
export default {
  // 使用するlayoutをdefaultからカスタムエラー用のものに変更
  layout: "error_layout",
  components: {
    AppLogo
  },
  // scriptタグないでアクセスする場合は、this.errorを使用
  props: ["error"]
};
</script>
<style>
#error {
  margin: 20px;
  text-align: center;
  margin-top: 50px;
}
#errorStatus {
  font-family: monospace;
  font-size: 42px;
  background: red;
  color: white;
  line-height: 60px;
  margin: 10px 15px;
}
#errorMsg {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-seif;
  font-size: 24px;
  line-height: 36px;
}
</style>
