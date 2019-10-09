import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index'
import Course from '@/pages/course'
import Clock from '@/pages/clock'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base:'/demo/',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    },
    {
      path: '/clock',
      name: 'Clock',
      component: Clock
    }
  ]
})
