import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from "@/page/Index"

Vue.use(Router)

export default new Router({
  // 1.配置路由跳转时滚动行为
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  // 2.配置路由
  // {
  //     path: '/',
  //     redirect: '/root'
  //   },
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/root',
      name: 'root',
      component: {
        Left: () => import('@/page/rootLeft.vue'),
        Middle: () => import('@/page/rootMiddle.vue'),
        Right: () => import('@/page/rootRight.vue')
      }
    },
    {
      path: '/test',
      name: 'test',
      component: () => import(/* webpackChunkName:"test" */'@/page/test.vue')
    }
  ]

})
