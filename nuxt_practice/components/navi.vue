<template>
  <div id="navi_bar">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link :to="'/'+$route.params.id">Introduction</nuxt-link>
    <nuxt-link :to="'/'+$route.params.id+'/spec'">
      <i class="fas fa-lock"></i>Tech Spec
    </nuxt-link>
    <nuxt-link :to="'/'+$route.params.id+'/history'">
      <i class="fas fa-lock"></i>History
    </nuxt-link>
  </div>
</template>

<style scoped>
/* このactiveクラスをuniversal cssに書くと優先順位から下記のaタグのスタイルが優先されてしまうので、ここに書く */
.active {
  background: green;
  color: white;
}

#navi_bar {
  list-style: none;
  text-align: center;
}
a {
  text-decoration: none;
  display: inline-block;
  width: 150px;
  margin: 10px;
  background: white;
  color: green;
  border: 1px green solid;
  font-size: 20px;
  line-height: 32px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px;
  border-radius: 4px;
}
#navi_bar a:hover {
  background: green;
  color: white;
  border: 1px green solid;
}
#navi_bar a:active {
  background: green;
  color: white;
  border: 1px green solid;
  text-decoration: underline;
}
</style>
