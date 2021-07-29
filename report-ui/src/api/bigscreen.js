import request from '@/utils/request'

// 保存大屏设计
export function insertDashboard(data) {
  return request({
    url: 'reportDashboard',
    method: 'post',
    data,
  })
}

// 预览、查询大屏详情
export function detailDashboard(data) {
  return request({
    url: 'reportDashboard/' + data,
    method: 'get',
  })
}

// 数据集查询
export function queryAllDataSet(data) {
  return request({
    url: 'dataSet/queryAllDataSet',
    method: 'get',
  })
}

// 获取数据集信息
export function detailBysetId(data) {
  return request({
    url: 'dataSet/detailBysetId/' + data,
    method: 'get',
  })
}

// 获取动态数据
export function getData(data) {
  return request({
    url: 'reportDashboard/getData',
    method: 'post',
    data,
  })
}
