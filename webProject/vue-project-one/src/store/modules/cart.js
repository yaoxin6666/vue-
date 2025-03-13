import { delSelCart, getCartList, setCartList } from '@/api/cart'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  getters: {
    // 获取所有商品累加总数
    cartTotal (state) {
      return state.cartList.reduce((sum, item) => sum + item.goods_num, 0)
    },
    // 获取选中商品项
    selCartList (state) {
      return state.cartList.filter(item => item.isChecked)
    },
    // 获取选中商品总价
    selCartPrice (state, getters) {
      return getters.selCartList.reduce((sum, item) => sum + item.goods_num * item.goods.goods_price_min, 0).toFixed(2)
    },
    // 选中总数
    selCartNum (state, getters) {
      return getters.selCartList.reduce((sum, item) => sum + item.goods_num, 0)
    },
    // 是否全选
    isAllChecked (state) {
      return state.cartList.every(item => item.isChecked)
    }
  },
  mutations: {
    // 更新购物车列表
    setCartList (state, newList) {
      state.cartList = newList
    },
    // 切换复选框状态
    toggleCheck (state, goodsId) {
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      goods.isChecked = !goods.isChecked
    },
    // 切换全部复选框状态
    toggleAllCheck (state, flag) {
      state.cartList.forEach(item => { item.isChecked = flag })
    },
    // 更新商品数量
    changeCartNum (state, { goodsId, goodsNum }) {
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      goods.goods_num = goodsNum
    }

  },
  actions: {
    // 获取购物车列表
    async  getCartAction (context) {
      const { data } = await getCartList()
      data.list.forEach(item => {
        item.isChecked = true
      })
      context.commit('setCartList', data.list)
    },
    // 更改商品数量
    async changeCartNum (context, { goodsId, goodsNum, goodsSkuId }) {
      context.commit('changeCartNum', { goodsId, goodsNum })
      const res = await setCartList(goodsId, goodsNum, goodsSkuId)
      console.log(res)
    },
    // 删除商品
    async  delSelCart (context) {
      const selCartList = context.getters.selCartList
      const cartIds = selCartList.map(item => item.id)
      const res = await delSelCart(cartIds)
      Toast('删除成功')
      context.dispatch('getCartAction')
      console.log(res)
    }

  }
}
