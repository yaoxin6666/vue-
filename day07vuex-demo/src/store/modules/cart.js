import axios from 'axios'
export default {
  namespaced: true,
  state () {
    return {
      list: []
    }
  },
  mutations: {
    upDateList (state, newList) {
      state.list = newList
    },
    handleCount (state, obj) {
      const goods = state.list.find(item => item.id === obj.id)
      goods.count = obj.newCount
    }
  },
  actions: {
    async  getList (context) {
      const result = await axios.get('http://localhost:3000/cart')
      console.log(result)

      context.commit('upDateList', result.data)
    },
    async getChangeCount (context, obj) {
      await axios.patch(`http://localhost:3000/cart/${obj.id}`, {
        count: obj.newCount
      })
      context.commit('handleCount', {
        id: obj.id,
        newCount: obj.newCount
      })
    }
  },
  getters: {
    total (state) {
      return state.list.reduce((sum, item) => sum + item.count, 0)
    },
    totalPrice (state) {
      return state.list.reduce((sum, item) => sum + item.count * item.price, 0)
    }
  }
}
