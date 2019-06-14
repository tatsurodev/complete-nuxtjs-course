<template>
  <div id="introduction">
    <gallery/>
    <div class="content">{{ $store.state.car_info.introduction }}</div>
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
