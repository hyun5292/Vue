<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 기본
    <testPage title="about title"/> 
    -->
    <!-- 숫자를 전달하면
    <testPage :title="title"/>
    -->
    <testPage />

  </div>
</template>

<script>
import testPage from '@/components/testPage.vue';

export default {
  components: {
    testPage
  },
  /* 숫자를 전달하면
  data() {
    return {
      title: 5
    }
  }
  */
}
</script>