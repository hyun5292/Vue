<template>
  <div id="app" class="container">
    <h1 class="text-center">경원이의 하루</h1>
    <!-- 이 정도면 v-model은 만능인 것인가…? -->
    <input 
      v-model="todoText"
      class="w-100 p-2" 
      type="text" 
      placeholder="Type todo"
      @keyup.enter="addTodo"
    >
    <hr>
    <TodoItem 
      v-for="todo in todos" 
      :key="todo.id"
      :todo="todo"
      @toggle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo"
    />
    <!-- :todo는 props -->

    {{ todos }}
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      todoText: '',
      todos: [
        { id: 1, text: '9시까지 출근하기', checked: false },
        { id: 2, text: '시스템 조사하기(?)', checked: false },
      ]
    }
  },
  methods: {
    deleteTodo(id) {
      // const index = this.todos.findIndex(todo => {
      //   return todo.id === id;
      // });

      // this.todos.splice(index, 1);
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(e) {
      this.todos.push({
        id: Math.random(),  //중복될 수 있지만 임시로 한 것
        text: e.target.value,
        checked:false
      });
      //input 박스에 내용 입력하고 enter 누르면 빈칸이 되도록 하는 것
      this.todoText = '';
    },
    toggleCheckbox({id, checked}) {
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });

      this.todos[index].checked = checked;
    }
  }
}
</script>

<style>
/* 이건 글씨가 작아서 내가 임의로 추가한 것 */
body { font-size: 1.5rem !important; }
</style>