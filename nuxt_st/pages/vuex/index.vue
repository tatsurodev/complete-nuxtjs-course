<template>
  <div id="vuex">
    {{ $store.state.msg }}
    <hr>
    <!-- stateの場合、$store.state.module名.state名でドットでつなげる -->
    {{ $store.state.module_1.msg }}
    <hr>
    <!-- $store.commitでtriggerするmutation methodを指定、第二引数がmutation methodの引数となる -->
    <b-button @click="$store.commit('reset_msg', 'new msg value')">Reset MSG</b-button>
    <!-- mutationの場合、commitの引数に指定するmutaiotn methodは、module名/mutation_method名でスラッシュでつなげる -->
    <b-button
      @click="$store.commit('module_1/reset_msg', 'new module one msg value')"
    >Reset MODULE 1 MSG</b-button>
  </div>
</template>
<script>
export default {
  middleware: "mw_vuex",
  // middlewareのcontext.app.head.titleより後に呼び出されるため、ここのhead methodが最終的に設定される
  head() {
    return {
      title: "pages/vuex/index.vue"
    };
  }
};
</script>
<style scoped>
#vuex {
  font-size: 22px;
  padding: 10px;
}
</style>
