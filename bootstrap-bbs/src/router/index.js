import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Board from '@/components/boardCom.vue'
import cntDetail from '@/components/cntDetailCom.vue'
import Create from '@/components/createCom.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/board/free/',
      name: 'Board',
      component: Board
    },
    {
      path: '/board/free/detail/:contentId',
      name: 'cntDetail',
      component: cntDetail
    },
    {
      path: '/board/free/create/:contentId?',
      name: 'Create',
      component: Create
    },
  ]
});