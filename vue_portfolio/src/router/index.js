import Vue from 'vue'
import VueRouter from 'vue-router'
import welcome from '@/components/welcomeCom.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    }
  ]
});

