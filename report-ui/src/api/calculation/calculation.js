import request from '@/api/axios'

// 分页查询
export const reqPageList = data => {
  return request({
    url: '/analysis-service/calculate/queryByPage',
    method: 'post',
    data
  })
}

// 新增
export const reqAddDeviceType = data => {
  return request({
    url: '/analysis-service/calculate/create',
    method: 'post',
    data
  })
}

// 编辑
export const reqEditDeviceType = data => {
  return request({
    url: '/analysis-service/calculate/updateById',
    method: 'post',
    data
  })
}

// 删除
export const reqDeleteDeviceType = data => {
  return request({
    url: '/analysis-service/calculate/deleteByIds',
    method: 'post',
    data
  })
}

// 根据id查明细
export const reqDetail =  data => {
  return request({
    url: '/analysis-service/calculate/queryById',
    method: 'post',
    data
  })
}

// 根据监控项id 拉取监控项树结构
export const reqItemTree = data => {
  return request({
    url: '/analysis-service/item/tree',
    method: 'post',
    data
  })
}

// 计算执行sql 语句 
export const reqExecuteSql = data => {
  return request({
    url: '/analysis-service/calculate/executeSql',
    method: 'post',
    data
  })
}
