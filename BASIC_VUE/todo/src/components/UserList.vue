<template>
  <div>
      User List
      <div v-for="user in users" :key="user.id">
          {{ user.name }}
      </div>
  </div>
</template>

<script>
//import axios from 'axios';

export default {
    // data() {
    //     return {
    //         users: []
    //     }
    // },
    created() {
        // axios.get('https://jsonplaceholder.typicode.com/users')
        //     .then(res => {
        //         this.users = res.data;
        //     });
        //     /*
        //     const a = 1;
        //     console.log(a);
        //     가 있다고 치면 
        //     axios로 부르고 밑에 작업들 먼저 하고 응답오면 다시 .then() 안에 작동
        //     */
        this.getUsers();
    },
    computed: {
        users() {
            return this.$store.state.users;
        }
    },
    methods: {
        getUsers() {
            // axios.get('https://jsonplaceholder.typicode.com/users')
            // .then(res => {
            //     this.users = res.data;
            // });
            this.$store.dispatch('getUsers');
        }
    }
}
</script>

<style>

</style>