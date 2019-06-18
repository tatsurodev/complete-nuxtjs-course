<template>
  <div class="history">{{ $store.state.list[$route.params.id].history }}</div>
</template>

<script>
export default {
  head() {
    return {
      title: "History",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "History of Land Cruiser"
        }
      ]
    };
  }
};
</script>

<style>
</style>
