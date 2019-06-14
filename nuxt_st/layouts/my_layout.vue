<template>
  <div>
    <div id="header" style="background: orange">
      <b>
        <i>My Layout Header</i>
      </b>
    </div>
    <!-- custom layoutの作成ではroot componentを表示するためのnuxtタグとcssのscopedが必須 -->
    <nuxt/>
    <div id="footer" style="background: teal">
      <b>
        <i>My Layout Footer</i>
      </b>
    </div>
  </div>
</template>
<style scoped>
</style>
