<template>
  <div id="error_page">
    <ul>
      <li v-for="(value,key,index) in error" :key="index">
        <b>{{ key }}</b>:
        <b>{{ value }}</b>
      </li>
    </ul>
    <hr>
    <img src="/error.jpeg" alt="error">
    <hr>
    <a href="http://localhost:3000/">
      <i class="fas fa-home"></i>
    </a>
  </div>
</template>
<script>
export default {
  props: ["error"],
  layout: "error_layout",
  head() {
    return {
      title: this.error.message,
      meta: [
        { hid: "description", name: "description", content: this.error.message }
      ]
    };
  }
};
</script>
<style scoped>
#error_page {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 22px;
  line-height: 36px;
}
#error_page img {
  margin: 10px;
  width: 45%;
}
#error_page a {
  font-size: 24px;
  color: green;
  text-decoration: none;
}
#error_page a:hover {
  text-decoration: underline;
}
</style>
