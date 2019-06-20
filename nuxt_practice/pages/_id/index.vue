<template>
  <div class="description">{{ introduction }}</div>
</template>

<script>
export default {
  // introduction, spec, historyのデータは個別のページでしか使用しないのでmutationsでstateとして保存する必要なし
  asyncData(context) {
    return context.$axios
      .get("http://localhost:9000/introduction/" + context.params.id)
      .then(res => {
        if (res.data[0]) {
          return { introduction: res.data[1] };
        } else {
          return { introduction: "Introduction not available..." };
        }
      })
      .catch(err => {
        return { introduction: "Introduction not avaibale..." };
      });
  },
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
