<template>
  <div id="history">
    <gallery/>
    <div class="content">{{ $store.state.car_info.history }}</div>
  </div>
</template>

<script>
import gallery from "@/components/gallery";
export default {
  components: {
    gallery
  }
};
</script>

<style scoped>
</style>
