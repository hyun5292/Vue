import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import ServiceView from '../views/ServiceView.vue'
import QnaView from '../views/QnaView.vue'

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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
