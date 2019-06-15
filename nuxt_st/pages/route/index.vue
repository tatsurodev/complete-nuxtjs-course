<template>
  <div style="padding: 15px">
    <b-card border-variant="secondary" footer-bg-variant="secondary" text-variant="secondary">
      <p>
        <i class="fas fa-file-code"></i>
        <span>pages/route/index.vue</span>
      </p>
      <b-alert show variant="secondary">
        <i class="fas fa-map-marked-alt"></i>
        <span>http://localhost:300/route</span>
      </b-alert>
      <div slot="footer">
        <span style="color:white">Nested Route</span>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "pages/route/index.vue"
    };
  }
};
</script>
<style scoped>
</style>
