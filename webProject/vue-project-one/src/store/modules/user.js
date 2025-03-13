import { getInfo, setInfo } from '@/utils/storuge'
export default {
  namespaced: true,
  state () {
    return {
      userInfo: getInfo()
    }
  },
  getters: {
  },
  mutations: {
    // 设置用户信息
    setUserInfo (state, obj) {
      state.userInfo = obj
      setInfo(obj)
    }
  },
  actions: {
    // 退出登录
    logout (context) {
      context.commit('setUserInfo', {})
      context.commit('cart/setCartList', [], { root: true })
    }
  }
}
