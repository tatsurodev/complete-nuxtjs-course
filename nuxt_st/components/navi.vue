<template>
  <div id="navi">
    <!-- router-linkタグはnuxtではnuxt-link -->
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link :to="{ name: 'resource'}">Resource</nuxt-link>
    <nuxt-link to="/ui">UI</nuxt-link>
    <nuxt-link to="/vuex">Vuex</nuxt-link>
    <nuxt-link to="/route">Route</nuxt-link>
    <!-- nested routeへの名前付きリンクは、folder-file_nameでフォルダ名(または親コンポーネント名)と子コンポーネント名をハイフンでつなげて指定 -->
    <nuxt-link :to="{ name: 'route-my_route' }">Route: my_route</nuxt-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#navi {
  margin: 10px 0 20px 0;
  text-align: center;
}
#navi a {
  text-decoration: none;
  display: inline-block;
  padding: 5px 10px 5px 10px;
  padding: 5px 10px 5px 10px;
  font-size: 20px;
  line-height: 24px;
}
#navi a:hover {
  background: #007bff;
  color: white;
  border-radius: 4px;
}
</style>
