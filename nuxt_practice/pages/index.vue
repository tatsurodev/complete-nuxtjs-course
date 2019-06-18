<template>
  <div id="home">
    <b-alert show variant="success">
      <b>Car Total:</b>
      {{ $store.state.list.length }}
    </b-alert>
    <hr>
    <li v-for="(value, index) in $store.state.list" :key="index">
      <nuxt-link :to="'/'+index">
        <b-alert show variant="info">
          <b>{{ value.brand }}</b>
          {{ value.model }}
        </b-alert>
      </nuxt-link>
    </li>
  </div>
</template>
<script>
export default {
  middleware: "mw_cookie",
  layout: "home"
};
</script>

<style scoped>
#home {
  list-style: none;
  font-size: 18px;
  line-height: 26px;
  padding: 15px;
}
</style>
