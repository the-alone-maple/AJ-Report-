import request from '@/utils/request'

export function accessRoleList (params) {
  return request({
    url: 'accessRole/pageList',
    method: 'GET',
    params,
  })
}

export function accessRoleAdd (data) {
  return request({
    url: 'accessRole',
    method: 'post',
    data
  })
}

export function accessRoleDeleteBatch (data) {
  return request({
    url: 'accessRole/delete/batch',
    method: 'post',
    data
  })
}

export function accessRoleUpdate (data) {
  return request({
    url: 'accessRole',
    method: 'put', data,
  })
}

export function accessRoleDetail (data) {
  return request({
    url: 'accessRole/' + data.id,
    method: 'get',
    params: { accessKey: data.accessKey }
  })
}

export function accessRoleAuthorityTree (roleCode) {
  return request({
    url: 'accessRole/authorityTree/' + roleCode,
    method: 'get',
  })
}

export function saveAuthorityTree (data) {
  return request({
    url: 'accessRole/saveAuthorityTree',
    method: 'post',
    data
  })
}


export default { accessRoleList, accessRoleAdd, accessRoleDeleteBatch, accessRoleUpdate, accessRoleDetail, accessRoleAuthorityTree, saveAuthorityTree }
