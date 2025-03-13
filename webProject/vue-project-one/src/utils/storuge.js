const INFO_KEY = 'yx-shopping-info'
const SEARCH_HISTORY = 'yx_histroy_list'
// 获取用户信息
export const getInfo = () => {
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : { token: '', userId: '' }
}
// 设置用户信息
export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}
// 删除用户信息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}
// 获取搜索历史
export const getHistory = () => {
  const result = localStorage.getItem(SEARCH_HISTORY)
  return result ? JSON.parse(result) : []
}
// 存储搜索历史
export const setHistory = (arr) => {
  localStorage.setItem(SEARCH_HISTORY, JSON.stringify(arr))
}
