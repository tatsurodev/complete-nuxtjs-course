<template>
  <section class="container">
    <h1 class="heading">Tech Spec:</h1>
    <gallery/>
    <div class="tech">
      <ul>
        <li v-for="(value, key, index) in $store.state.spec" :key="index">
          <b>{{ key }}</b>:
          <b>{{ value }}</b>
        </li>
      </ul>
    </div>
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
