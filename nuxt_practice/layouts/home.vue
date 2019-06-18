<template>
  <div>
    <Header/>
    <Main>
      <nuxt/>
    </Main>
    <Footer/>
  </div>
</template>
<script>
// header, main, footerは、予約されているのでcapitalizeしてコンフリクトを避ける
import Header from "@/components/header";
import Main from "@/components/main";
import Footer from "@/components/footer";

export default {
  components: {
    Header,
    Main,
    Footer
  }
};
</script>

<style>
</style>
