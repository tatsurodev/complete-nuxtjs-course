<template>
  <div id="app">
    <div id="header">
      <span id="title">Header Set in App.vue</span>
    </div>
    <!-- #mainはrouter-viewのcontentをfixedのheader,footerから余白を入れて守る -->
    <div id="main">
      <div id="nav">
        <router-link to="/">Introduction</router-link>|
        <router-link to="/spec">Tech Spec</router-link>|
        <router-link to="/history">History</router-link>
      </div>
      <router-view/>
    </div>

    <div id="footer">
      <span>Footer Set in App.vue</span>
    </div>
  </div>
</template>

<style>
.content {
  font-size: 16px;
  text-align: left;
  margin: 20px;
}
#header {
  position: fixed;
  top: 0;
  left: 0;
  height: 45px;
  width: 100%;
  background: red;
  line-height: 45px;
}
#title {
  font-size: 22px;
  color: white;
  font-family: impact;
}
#main {
  padding-top: 45px;
  padding-bottom: 50px;
}
#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 45px;
  width: 100%;
  background: red;
  line-height: 45px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
