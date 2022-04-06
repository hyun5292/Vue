<template>
  <div class="memo">
    <div class="act">
      <button class="btn btn-primary" @click="add()">+추가</button>
    </div>
    <ul>
      <li v-for="(d, idx) in state.data" :key="idx">{{ d }}</li>
    </ul>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";

export default {
  setup() {
    const state = reactive({
      data: []
    });
    
    const add = () => {
      state.data.push("추가된 내용");
    };

    axios.get("/api/memos").then((res) => {
      state.data = res.data;
    });
    
    return { state, add };
  },
}
</script>

<style lang="scss" scoped> /* scoped는 이 파일 안에서만 쓴다는 얘기 */
.memo {
  .act {
    padding: 10px 5px 5px 5px;
    text-align: right;
  }
  ul {
    margin: 0;
    padding: 0;
    border: 1px solid #eee;
    list-style: none;

    li {
      margin: 10px 0;
      padding: 15px;
      border: 1px solid #eee;
    }
  }
}
</style>