<template>
  <div>
    <div id="header">Header: error_layout.vue in layouts</div>

    <div id="main">
      <nuxt/>
    </div>

    <div id="footer">Footer error_layout.vue in layouts</div>
  </div>
</template>
<style scoped>
/* scopedがないと、layoutフォルダ内のファイルが使用、不使用に関わらずアルファベット順に読み込まれるので、同様のcss要素が指定してあると他のlayoutファイルのcssが効いてしまう可能性があるので、scopedをつけてcssの汚染を防ぐ */
#header {
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background: red;
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
  background: red;
  font-size: 18px;
  line-height: 45px;
  text-align: center;
  color: white;
}
</style>
