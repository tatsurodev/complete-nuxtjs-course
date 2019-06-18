<template>
  <section class="container">
    <gallery/>
    <nuxt-child></nuxt-child>
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
