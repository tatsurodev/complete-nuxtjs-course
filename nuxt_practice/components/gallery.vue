<template>
  <div id="gallery">
    <img src="@/assets/suv.jpeg" alt="land cruiser">
    <b-alert show variant="info">
      <b>{{ $store.state.brand }}</b>
      {{ $store.state.model }}
    </b-alert>
  </div>
</template>

<style scoped>
#gallery {
  text-align: center;
  border: 1px rgb(201, 201, 201) solid;
  border-radius: 5px;
}
#gallery img {
  width: 360px;
}
#gallery h2 {
  font-size: 24px;
  line-height: 60px;
}
</style>
