import Vue from 'vue'
import VueRouter from 'vue-router'
import VueGoodTablePlugin from 'vue-good-table';
import MainView from '../views/MainView.vue'
import ReViewList from '../views/ReViewList.vue'
import Review from '../views/Review.vue'
import ReWriteView from '../views/RevWriteView.vue'
import ServiceView from '../views/ServiceView.vue'
import QnaListView from '../views/QnaListView.vue'
import QnaWriteView from '../views/QnaWriteView.vue'
import QnaView from '../views/QnaView.vue'
import JoinView from '../views/JoinView.vue'
import myReview from '../views/MyReview.vue'

// import the styles
import 'vue-good-table/dist/vue-good-table.css'
	
Vue.use(VueGoodTablePlugin);
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/review',
    name: 'review',
    component: Review
  },
  {
    path: '/rList',
    name: 'reviewList',
    component: ReViewList
  },
  {
    path: '/rWrite',
    name: 'rWrite',
    component: ReWriteView
  },
  {
    path: '/service',
    name: 'service',
    component: ServiceView
  },
  {
    path: '/qList',
    name: 'qnaList',
    component: QnaListView
  },
  {
    path: '/qna',
    name: 'qna',
    component: QnaView
  },
  {
    path: '/qWrite',
    name: 'qWrite',
    component: QnaWriteView
  },
  {
    path: '/join',
    name: 'join',
    component: JoinView
  },
  {
    path: '/myreview',
    name: 'myReview',
    component: myReview
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
