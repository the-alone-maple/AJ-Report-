/*
 * @Author: qianlishi
 * @Date: 2020-07-13 15:13:34
 * @Last Modified by: qianlishi
 * @Last Modified time: 2021-03-15 13:28:28
 */

import request from '@/utils/request'

// 数据字典接口
export function dataDictionary (dictName) {
  return request({
    url: '/gaeaDict/select/' + dictName,
    method: 'GET',
  })
}

// 图片上传接口
export function uploadImg (data) {
  return request({
    url: '/file/upload',
    method: 'POST',
    data,
  })
}
