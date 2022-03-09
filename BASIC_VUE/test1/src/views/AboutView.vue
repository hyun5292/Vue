<template>
  <div class="about">
    <h1>This is an about page</h1>
    <testPage />
  </div>
</template>

<script>
import testPage from '@/components/testPage.vue';

export default {
  components: {
    testPage
  }
}
</script>