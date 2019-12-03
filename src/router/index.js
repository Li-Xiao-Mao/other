import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import All from '@/pages/all/All'
import Details from '@/pages/details/Details'

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
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    }
  ]
})
