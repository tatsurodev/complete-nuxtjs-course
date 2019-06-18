<template>
  <div class="description">{{ $store.state.list[$route.params.id].introduction }}</div>
</template>

<script>
export default {
  head() {
    return {
      title: "Introduction",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Introduction"
        }
      ]
    };
  }
};
</script>

<style>
</style>
