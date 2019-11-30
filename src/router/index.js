import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import All from '@/pages/all/All'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/all',
      name: 'All',
      component: All
    }
  ]
})
