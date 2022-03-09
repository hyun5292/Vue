<template>
    <div>
        <label for="">Name</label>
        <!-- 
        <input 
            type="text"
            :value="name" 
            style="padding: 20px; border: 2px solid green;"
           @input="$emit('update-name', $event)"
        >
        -->
        <input 
            type="text"
            :value="value" 
            style="padding: 20px; border: 2px solid green;"
           @input="$emit('input', $event.target.value)"
        >
        <!-- @input="updateName" -->
    </div>
</template>

<script>
export default ({
    props: {
        // name: {
        //     type: String,
        //     required: true
        // }
        value: {
            type: String,
            required: true
        }
    },
    // methods: {
    //     updateName(e) {
    //         //원하는 이벤트 이름, 보내고 싶은 값
    //         this.$emit('update-name', e.target.value);
    //     }
    // }
})
</script>
