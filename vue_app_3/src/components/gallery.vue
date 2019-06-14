<template>
  <div id="gallery">
    <Card>
      <img src="@/assets/suv.jpeg">
      <h2>{{ $store.state.car_info.brand }} {{ $store.state.car_info.model }}</h2>
    </Card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#gallery {
  margin: 20px;
}
</style>
