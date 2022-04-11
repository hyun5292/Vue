<template>
  <div id="app" class="container">
    <h1 class="text-center">경원이의 하루</h1>
    <!-- 이 정도면 v-model은 만능인 것인가…? -->
    <CompletedTodo />
    <AddTodo />
    <hr>
    <TodoList />
    <UserList />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import CompletedTodo from '@/components/CompletedTodo.vue';
import UserList from '@/components/UserList.vue';

export default {
  components: {
    TodoList,
    AddTodo,
    CompletedTodo,
    UserList
  },
  data() {
    return {
      todoText: '',
      
    }
  },
  methods: {
    
  }
}
</script>

<style>
/* 이건 글씨가 작아서 내가 임의로 추가한 것 */
body { font-size: 1.5rem !important; }
</style>