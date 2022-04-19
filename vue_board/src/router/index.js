import Vue from 'vue'
import VueRouter from 'vue-router'
import Read from '@/components/readCom.vue';
import Create from '@/components/createCom.vue';
import Detail from '@/components/detailCom.vue';

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Read',
      component: Read
    },
    {
      path: '/create/:contentId?',
      name: 'Create',
      component: Create
    },
    {
      path: '/detail/:contentId',
      name: 'Detail',
      component: Detail
    },
  ]
})
