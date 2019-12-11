import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import All from '@/pages/all/All'
import Details from '@/pages/details/Details'
import Count from '@/pages/components/Count'
import Recursive from '@/recursive/Recursive'

Vue.use(Router)

export default new Router({
  mode:"history",
  //只有调用了history.pushState()的时候才会触发这个方法，也就是当我们点击浏览器中的“<-” "->"的时候
  scrollBehavior (to, from, savedPosition) {
    console.log(savedPosition)
    if(savedPosition){
      // 直接返回当前位置
      return savedPosition
    }else{
      // 返回到起点
      // 用这个方法实现期望滚动到哪一位置
      return { x: 0, y: 0 }
    }
  },
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
    },
    {
      path: '/count',
      name: 'Count',
      component: Count
    },
    {
      path: '/recursive',
      name: 'Recursive',
      component: Recursive
    }
  ]
})
