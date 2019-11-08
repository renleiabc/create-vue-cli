/*
 * @Author: renlei
 * @Date: 2019-11-07 14:39:43
 * @LastEditors: renlei
 * @LastEditTime: 2019-11-08 11:06:05
 * @Description: 路由文件
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.matched.length === 0) {
    //如果未匹配到路由
    from.path ? next({ path: from.path }) : next('/') //如果上级也未匹配到路由则跳转主页面，如果上级能匹配到则转上级路由
  } else {
    next() //如果匹配到正确跳转
  }
})
export default router
