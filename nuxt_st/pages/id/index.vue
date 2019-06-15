<template>
  <div style="padding: 15px">
    <b-card border-variant="danger" footer-bg-variant="danger" text-variant="danger">
      <p>
        <i class="fas fa-file-code"></i>
        <span>pages/id/index.vue</span>
      </p>
      <b-alert show variant="danger">
        <i class="fas fa-id-card-alt"></i>
        <b>ID:</b>
        <b>No ID Provided!</b>
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
