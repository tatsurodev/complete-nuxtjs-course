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
  },
  validate({ params, query, store }) {
    if (/^\d+$/.test(params.id) && params.id < store.state.list.length) {
      return true;
    } else {
      throw new Error("Illegal ID Value...");
    }
  }
};
</script>

<style>
</style>
