<template>
    <div>
        <TodoItem 
            v-for="todo in todos" 
            :key="todo.id"
            :todo="todo"
            @toggle-checkbox="toggleCheckbox"
            @click-delete="deleteTodo"
        />
        <!-- :todo는 props -->
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
    components: {
        TodoItem
    },
    computed: {
        todos() {
            return this.$store.state.todos;
        }
    },
    methods: {
        toggleCheckbox(value) {
            this.$emit('toggle-checkbox', value);
        },
        deleteTodo(todoId) {
            this.$emit('click-delete', todoId);
        }
    }
}
</script>

<style>

</style>