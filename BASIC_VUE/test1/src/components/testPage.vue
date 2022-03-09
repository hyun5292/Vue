<template>
    <div>
        <p>{{ name }}</p>
        <button @click="updateName">Change Name</button>
    </div>
</template>

<script>
export default ({
    data() {
        return {
            name: '박수현',
        }
    },
    methods: {
        updateName() {
            this.name = "박수현 updated";
        }
    }
})
</script>

<style scoped>

</style>