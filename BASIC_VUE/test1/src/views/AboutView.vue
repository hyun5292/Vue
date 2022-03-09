<template>
  <div class="about">
    <h1>This is an about page</h1>
    <testPage>
      <!-- v-slot은 줄여서 # -->
      <!-- <template #header="props"> -->
      <template #header="{ slotData }">
        <div>
          <!-- <h1>hello {{ props.slotData }}</h1> -->
          <h1>hello {{ slotData }}</h1>
          <h3>hi</h3>
        </div>
      </template>
      <!-- v-slot은 줄여서 # -->
      <template #default>  <!-- 이름이 정해지지 않은 template은 default -->
        Me too Body
      </template>
    </testPage>
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