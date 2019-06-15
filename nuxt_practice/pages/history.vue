<template>
  <section class="container">
    <h1 class="heading">History:</h1>
    <gallery/>
    <div class="history">{{ $store.state.history }}</div>
  </section>
</template>

<script>
import gallery from "~/components/gallery.vue";

export default {
  components: {
    gallery
  }
};
</script>

<style>
</style>
