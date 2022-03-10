<template>
    <!-- 제 16장 자식 컴포넌트에서 데이터 보내기(Props) -->
    <div>
        <input type="checkbox" :checked="todo.checked">
        <span class="m-3">{{ todo.text }}</span>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>