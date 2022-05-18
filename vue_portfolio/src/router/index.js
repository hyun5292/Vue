import Vue from 'vue'
import VueRouter from 'vue-router'
import welcome from '@/views/welcomeView.vue'
import contact from '@/views/contactView.vue'
import skills from '@/views/skillsView.vue'
import projects from '@/components/projectsCom.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: welcome
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: contact
    },
    {
      path: '/Skills',
      name: 'Skills',
      component: skills
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: projects
    },
  ]
});

