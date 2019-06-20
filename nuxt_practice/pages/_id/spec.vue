<template>
  <div class="tech">
    <ul>
      <li v-for="(value, key, index) in spec" :key="index">
        <b>{{ key }}</b>:
        <b>{{ value }}</b>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.$axios
      .get("http://localhost:9000/spec/" + context.params.id)
      .then(res => {
        if (res.data[0]) {
          return { spec: res.data[1] };
        } else {
          return { spec: "spec not available..." };
        }
      })
      .catch(err => {
        return { spec: "spec not avaibale..." };
      });
  },
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
