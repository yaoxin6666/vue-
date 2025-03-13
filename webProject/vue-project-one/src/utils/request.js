import store from '@/store'
import axios from 'axios'
import { Toast } from 'vant'
// 创建axios实例，将来对创建出来的实例进行配置
// 好处：不会污染原始的axios
const instance = axios.create({
  baseURL: 'http://smart-shop.itheima.net/index.php?s=/api',
  timeout: 5000
})
// 自定义配置-请求/响应 拦截器
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 节流处理，防止多次无效点击
  Toast.loading({
    message: '加载中...',
    forbidClick: true, // 禁止背景点击
    loadingType: 'spinner', // loading样式
    duration: 0// 不会自动消失
  })
  const token = store.getters.token
  if (token) {
    config.headers['Access-Token'] = token
    config.headers.platform = 'H5'
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么(默认axios会多包装一层，需要响应拦截器处理一下)
  const result = response.data
  // console.log(result)

  if (result.status !== 200) {
    // Toast 默认采用单例模式，即同一时间只会存在一个 Toast
    Toast(result.message)
    return Promise.reject(result.message)
  } else {
    // 正确情况，直接走业务核心逻辑，清除loading效果
    Toast.clear()
  }
  return result
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})
// 导出
export default instance
