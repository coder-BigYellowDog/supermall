import { request } from './request'

export function getCategoryRequest(){
  // 返回Promise对象，数据在category中再做处理
  return request({
    url: '/category'
  })
}