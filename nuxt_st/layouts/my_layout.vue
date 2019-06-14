<template>
  <div>
    <div id="header">
      <b>
        <i>My Layout Header</i>
      </b>
    </div>
    <!-- custom layoutの作成ではroot componentを表示するためのnuxtタグとcssのscopedが必須 -->
    <nuxt/>
    <div id="footer">
      <b>
        <i>My Layout Footer</i>
      </b>
    </div>
  </div>
</template>
<style scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background: orange;
  line-height: 50px;
  z-index: 999;
  text-align: center;
  color: white;
  font-size: 20px;
}
#main {
  padding-top: 50px;
  padding-bottom: 45px;
}
#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 45px;
  width: 100%;
  background: teal;
  font-size: 18px;
  line-height: 45px;
  text-align: center;
  color: white;
}
</style>
