<template>
  <div>
      User List
      <!--<div v-for="user in users" :key="user.id">-->
      <div v-for="user in people" :key="user.id">
          {{ user.name }}
      </div>
  </div>
</template>

<script>
//import axios from 'axios';
import { mapState, mapActions } from 'vuex';

export default {
    created() {
        this.getUsers();
    },
    computed: {  //mapState랑 mapGetters는 여기 안에
        // ...mapState(['users'])
        ...mapState({people: 'users'})
        // users() {
        //     return this.$store.state.users;
        // }
    },
    methods: {  //mapActions는 여기 안에
        ...mapActions(['getUsers'])
        // getUsers() {
        //     this.$store.dispatch('getUsers');
        // }
    }
}
</script>

<style>

</style>