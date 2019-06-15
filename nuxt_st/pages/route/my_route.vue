<template>
  <div style="padding: 15px">
    <b-card border-variant="info" footer-bg-variant="info" text-variant="info">
      <p>
        <i class="fas fa-file-code"></i>
        <span>pages/route/my_route.vue</span>
      </p>
      <b-alert show variant="info">
        <i class="fas fa-map-marked-alt"></i>
        <span>http://localhost:300/route/my_route</span>
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
      title: "pages/route/my_route.vue"
    };
  }
};
</script>
<style scoped>
</style>
