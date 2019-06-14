<template>
  <section class="container">
    <h1>Tech Spec:</h1>
    <gallery/>
    <div class="tech">Tech Spec Content</div>
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
h1 {
  font-family: inpact;
  color: green;
}
.description {
  font-size: 16px;
  line-height: 24px;
  margin: 10px;
}
</style>
