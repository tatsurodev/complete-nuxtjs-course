<template>
  <div>
    <div id="header">
      Header by
      <b>
        <i>layouts/default.vue</i>
      </b>
    </div>

    <div id="main">
      <nuxt/>
    </div>

    <div id="footer">
      Footer by
      <b>
        <i>layouts/default.vue</i>
      </b>
    </div>
  </div>
</template>

<style>
#header {
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background: #35495e;
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
  background: #41b883;
  font-size: 18px;
  line-height: 45px;
  text-align: center;
  color: white;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
