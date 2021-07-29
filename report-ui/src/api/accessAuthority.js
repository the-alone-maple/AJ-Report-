import request from '@/utils/request'

export function accessAuthorityList(params) {
  return request({
    url: 'accessAuthority/pageList',
    method: 'GET',
    params,
  })
}

export function accessAuthorityAdd(data) {
  return request({
    url: 'accessAuthority',
    method: 'post',
    data
  })
}

export function accessAuthorityDeleteBatch(data) {
  return request({
    url: 'accessAuthority/delete/batch',
    method: 'post',
    data
  })
}

export function accessAuthorityUpdate(data) {
  return request({
    url: 'accessAuthority',
    method: 'put', data,
  })
}

export function accessAuthorityDetail(data) {
  return request({
    url: 'accessAuthority/' + data.id,
    method: 'get',
    params: { accessKey: data.accessKey }
  })
}

export default { accessAuthorityList, accessAuthorityAdd, accessAuthorityDeleteBatch, accessAuthorityUpdate, accessAuthorityDetail }
