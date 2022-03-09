<template>
    <div>
        <p>header</p>
        <slot name="header" :slotData="slotData"></slot>
        <p>Body</p>
        <slot></slot>
        <p>footer</p>
    </div>
</template>

<script>
export default ({
    props: {
        title: {
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
            slotData: 'coder'
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
p { color: orange; }
</style>