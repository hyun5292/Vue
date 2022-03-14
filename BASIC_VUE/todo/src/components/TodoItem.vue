<template>
    <!-- 제 16장 자식 컴포넌트에서 데이터 보내기(Props) -->
    <div class="mb-2 d-flex form-inline">
        <input 
            type="checkbox" 
            :checked="todo.checked"
            @change="toggleCheckbox"
        >
        <span 
            class="ml-3 flex-grow-1"
            :class="todo.checked ? 'text-muted' : ''"
            :style="todo.checked ? 'text-decoration: line-through': ''"
        >
            {{ todo.text }}
        </span>
        <button 
            class="btn btn-danger btn-sm ml-2"
            @click="clickDelete"
        >
            Delete
        </button>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        toggleCheckbox(e) {
            this.$emit('toggle-checkbox', {
                id: this.todo.id,
                checked: e.target.checked
            });
        },
        clickDelete() {
            this.$emit('click-delete', this.todo.id);
        }
    }
}
</script>

<style>

</style>