import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/layout/home.vue'
import Cart from '@/views/layout/cart.vue'
import User from '@/views/layout/user.vue'
import Categor from '@/views/layout/categor.vue'
import Layout from '@/views/layout'
import store from '@/store'
const MyOrder = () => import('@/views/myorder/inidex.vue')
const Pay = () => import('@/views/pay')
const ProDetail = () => import('@/views/prodetail')
const Search = () => import('@/views/search/index.vue')
const SearchList = () => import('@/views/search/list.vue')
const Login = () => import('@/views/login/index.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login', component: Login
    },
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      children: [
        { path: '/home', component: Home },
        { path: '/cart', component: Cart },
        { path: '/user', component: User },
        { path: '/categor', component: Categor }

      ]
    },
    {
      path: '/myorder', component: MyOrder
    },
    {
      path: '/pay', component: Pay
    },
    {
      // 动态路由传参，确认是哪个商品，路由参数中携带id
      path: '/prodetail/:id', component: ProDetail
    },
    {
      path: '/search', component: Search
    },
    {
      path: '/list', component: SearchList
    }
  ]

})
const authUrl = ['/myorder', '/pay']
router.beforeEach((to, from, next) => {
  // 访问的不是权限页面，直接放行
  if (!authUrl.includes(to.path)) {
    next()
    return
  }
  // 是权限页面，需要判断token
  const token = store.getters.token
  console.log(token)
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
