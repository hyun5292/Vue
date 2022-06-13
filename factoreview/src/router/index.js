import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import ServiceView from '../views/ServiceView.vue'
import QnaView from '../views/QnaView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/service',
    name: 'service',
    component: ServiceView
  },
  {
    path: '/qna',
    name: 'qna',
    component: QnaView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
