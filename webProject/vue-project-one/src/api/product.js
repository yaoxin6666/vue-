import request from '@/utils/request'
// 获取商品列表
export const getProductList = (obj) => {
  const { categoryId, goodsName, page } = obj
  return request.get('/goods/list', {
    params: {
      categoryId,
      goodsName,
      page
    }
  })
}
// 获取商品详情
export const getProductDetail = (goodsId) => {
  return request.get('/goods/detail',
    {
      params: {
        goodsId
      }
    }
  )
}
export const getProductComments = (goodsId, limit) => {
  return request.get('/comment/listRows',
    {
      params: {
        goodsId,
        limit
      }
    }
  )
}
