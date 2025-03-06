import Home from '@/views/Home'
import Search from '@/views/Search'
import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '@/views/NotFound.vue'
Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  routes: [{path:'/',redirect:'/home'},
    { path: '/home', component: Home },
    {name:'Search', path: '/search/:words?', component: Search },
 {path:'*',component:NotFound}
  ],
  mode:'history'
})

export default router