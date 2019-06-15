<template>
  <div style="padding: 15px">
    <b-card border-variant="success" footer-bg-variant="success" text-variant="success">
      <p>
        <i class="fas fa-file-code"></i>
        <span>pages/_id/detail.vue</span>
      </p>
      <b-alert show variant="success">
        <h3>Detail Page</h3>
        <i class="fas fa-id-card-alt"></i>
        <b>ID:</b>
        <b>{{ $route.params.id }}</b>
        <hr>
        <nuxt-link :to="{ name: 'id', params: { id: $route.params.id } }">ID Page</nuxt-link>
      </b-alert>
      <div slot="footer">
        <span style="color:white">Dynamic Route</span>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  transition: {
    name: "prefix"
  },
  head() {
    return {
      title: "Dynamic Route"
    };
  }
};
</script>
<style scoped>
</style>
