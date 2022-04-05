<template>
  <div class="ground">
    <Header />
    <Memo />
    <Footer />
  </div>
</template>

<script>
import Header from './comHeader.vue';
import Memo from './comMemo.vue';
import Footer from './comFooter.vue';

export default {
  components: {
    Header,
    Memo,
    Footer,
  }
}
</script>

<style>

</style>