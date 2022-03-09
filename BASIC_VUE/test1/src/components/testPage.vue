<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ name }}</p>
        <button @click="updateName">Change Name</button>
    </div>
</template>

<script>
export default ({
    props: {  //props는 자식에서 직접적인 수정 불가
        title: {
            //type: Number, //숫자일때
            type: String,
            default: 'default title',
            //required: true,
        },
        name: {
            type: String,
            default: 'default name',
        },
    },
    data() {
        return {
            //name: '박수현',
        }
    },
    methods: {
        updateName() {
            //this.name = "박수현 updated";
        }
    }
})
</script>

<style scoped>

</style>