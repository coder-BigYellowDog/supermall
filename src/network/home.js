import { request } from './request'

export function getHomeMultidataRequest(){
    // 返回 Promise 对象
    return request({
        url: '/home/multidata'
    })
}

export function getHomeGoodsRequest(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}