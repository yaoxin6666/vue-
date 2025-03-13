import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/common.less'
// 全部导入
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)
import '@/utils/vant-ui.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
