import request from '@/api/axios'

// 查询字典
export function queryForCodeSelect(params={}) {
  return request({
    url: '/auth-service/dict/queryForCodeSelect',
    method: 'post',
    data: params
  })
}

// 查询标题
export function querytitleByCategory(params) {
  return request({
    url: '/auth-service/help/querytitleByCategory',
    method: 'post',
    data: params
  })
}

// 关键词查询
export function searchKeyWord(params = {}) {
  return request({
    url: '/auth-service/help/searchKeyWord',
    method: 'post',
    data: params
  })
}

export function queryById(data) {
  return request({
    url: '/auth-service/help/queryById',
    method: 'post',
    data
  })
}
