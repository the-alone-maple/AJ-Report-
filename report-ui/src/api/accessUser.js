import request from '@/utils/request'

export function accessUserList (params) {
  return request({
    url: 'accessUser/pageList',
    method: 'GET',
    params,
  })
}

export function accessUserAdd (data) {
  return request({
    url: 'accessUser',
    method: 'post',
    data
  })
}

export function accessUserDeleteBatch (data) {
  return request({
    url: 'accessUser/delete/batch',
    method: 'post',
    data
  })
}

export function accessUserUpdate (data) {
  return request({
    url: 'accessUser',
    method: 'put', data,
  })
}

export function accessUserDetail (data) {
  return request({
    url: 'accessUser/' + data.id,
    method: 'get',
    params: { accessKey: data.accessKey }
  })
}


export function getRoleTree (loginName) {
  return request({
    url: 'accessUser/roleTree/' + loginName,
    method: 'get',
  })
}

export function saveRoleTree (data) {
  return request({
    url: 'accessUser/saveRoleTree',
    method: 'post',
    data
  })
}


export default { accessUserList, accessUserAdd, accessUserDeleteBatch, accessUserUpdate, accessUserDetail, getRoleTree, saveRoleTree }
