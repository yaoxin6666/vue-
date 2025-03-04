import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Friend from './views/Friend.vue';
import Find from './views/Find.vue';
import My from './views/My.vue';
Vue.config.productionTip = false
Vue.use(VueRouter)//VueRouter插件初始化
const router=new VueRouter({
  routes:[
    {path:'/find',component:Find},
    {path:'/my',component:My},
    {path:'/friend',component:Friend},
  ]
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
