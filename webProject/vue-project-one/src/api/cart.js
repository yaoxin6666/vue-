import request from '@/utils/request'
// 添加购物车
export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/add', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}
export const getCartList = () => {
  return request.get('/cart/list')
}
// 更新购物车商品数量
export const setCartList = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/update', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}
// 删除购物车中选中商品
export const delSelCart = (cartIds) => {
  return request.post('/cart/clear', { cartIds })
}
