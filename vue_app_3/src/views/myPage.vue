<template>
  <div id="myPage">
    <h1>My Own Page</h1>
    <h2>myPage.vue in src/views/</h2>
    <myComp/>
  </div>
</template>
<script>
import myComp from "@/components/myComp";
export default {
  components: {
    myComp
  }
};
</script>
