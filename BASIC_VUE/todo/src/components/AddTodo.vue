<template>
  <div>
    <input 
        v-model="todoText"
        class="w-100 p-2" 
        type="text" 
        placeholder="Type todo"
        @keyup.enter="addTodo"
    >
  </div>
</template>

<script>
export default {
    data() {
        return {
            todoText: '',
        }
    },
    methods: {
        addTodo(e) {
            this.$emit('add-todo', e.target.value);
            //input 박스에 내용 입력하고 enter 누르면 빈칸이 되도록 하는 것
            this.todoText = '';
        }
    }
}
</script>

<style>

</style>