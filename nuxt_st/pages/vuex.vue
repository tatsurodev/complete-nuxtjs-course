<template>
  <div id="vuex">
    {{ $store.state.msg }}
    <hr>
    {{ $store.state.module_1.msg }}
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#vuex {
  font-size: 22px;
  padding: 10px;
}
</style>
