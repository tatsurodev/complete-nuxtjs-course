<template>
  <div class="tech">
    <ul>
      <li v-for="(value, key, index) in $store.state.list[$route.params.id].spec" :key="index">
        <b>{{ key }}</b>:
        <b>{{ value }}</b>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  middleware: "lock",
  head() {
    return {
      title: "Tech Spec",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Tech Spec"
        }
      ]
    };
  }
};
</script>

<style>
</style>
