import Vue from 'vue'
import VueRouter from 'vue-router'
import welcome from '@/components/welcomeCom.vue'
import contact from '@/components/contactCom.vue'
import skills from '@/components/skillsCom.vue'
import projects from '@/components/projectsCom.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/skills',
      name: 'skills',
      component: skills
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects
    },
  ]
});

