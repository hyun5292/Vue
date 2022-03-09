<template>
  <div>
    <h1>This is Home page</h1>
    <form action="">
      <!--
      <label for="">Name</label>
      <input type="text" v-model="name" style="padding: 20px; border: 2px solid green;"><br/>
      -->
      <!-- <InputField :name="name" @update-name="updateName"/> -->
      <!-- <InputField :name="name" @update-name="name = $event.target.value"/> -->
      <InputField v-model="name" />
      <button>Submit</button>
    </form>
    {{ name }}
  </div>
</template>

<script>
import InputField from '@/components/InputField.vue';

export default ({
  components: {
    InputField
  },
  data() {
    return {
      name: ''
    }
  },
  // methods: {
  //   updateName(name) {
  //     this.name = name;
  //   }
  // }
})
</script>

<!-- scoped는 이 컴포넌트 안에서만 style을 적용하도록 한다는 의미 -->
<!-- 화면에 들어갔을 때 기본적으로 vue파일이 열리고 그 안에서 또 나뉘는 것이 컴포넌트 -->
<style scoped>
h1 {
  color: red;
}
</style>