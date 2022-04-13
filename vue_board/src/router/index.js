import Vue from 'vue'
import VueRouter from 'vue-router'
import Read from '@/components/readCom.vue';
import Create from '@/components/createCom.vue';

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Read',
      component: Read
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
  ]
})
