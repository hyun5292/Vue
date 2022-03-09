<template>
  <div>
    <h1>This is Home page</h1>
    <testPage />
  </div>
</template>

<script>
import testPage from '@/components/testPage.vue';

export default ({
  components: {
    testPage
  },
  data() {
    return {
      name: '박수현'
    }
  }
})
</script>

<!-- scoped는 이 컴포넌트 안에서만 style을 적용하도록 한다는 의미 -->
<!-- 화면에 들어갔을 때 기본적으로 vue파일이 열리고 그 안에서 또 나뉘는 것이 컴포넌트 -->
<style scoped>
h1 {
  color: red;
}
</style>