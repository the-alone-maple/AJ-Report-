
import { getStorageItem } from '@/utils/storage';
// 字典
export function basecode(value, dicName) {
  if (value === undefined || value === null) {
    return ''
  }
  if (dicName === undefined || dicName === null) {
    return value
  }

  var basecode = getStorageItem('queryForCodeSelect')
  var dictList = basecode[dicName]
  var dictLabel = value
  for (var i = 0; i < dictList.length; i++) {
    var codeItem = dictList[i]
    if(codeItem.value == value || codeItem.labelEng == value){
      dictLabel = codeItem.label
      break
    }
  }
  return dictLabel;
}


// 根据字典值获取数据
export function getDataByCode(keyCode) {
  var dict = basecode[this.keyCode]
  let list = []
  for (var key in dict) {
      list.push({
          'value': key,
          'text': dict[key]
      })
  }
  return list
}

//保留两位小数
export function fixed(value){
var intVal = null;
if(typeof value == 'string' && /^[0-9.]+$/.test(value)){
  intVal = parseInt(value);
}
if(typeof value == 'number'){
  intVal = value;
}
if(intVal == null){
  return value;
}else{
  return (Math.round(value*100)/100).toFixed(2);
}
}

// 时间戳转日期
export function formatTimestamp(value) {
  if (value == null) {
    return ''
  }
  var date = new Date(value)
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  var d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  var h = date.getHours()
  h = h < 10 ? ('0' + h) : h
  var minute = date.getMinutes()
  var second = date.getSeconds()
  minute = minute < 10 ? ('0' + minute) : minute
  second = second < 10 ? ('0' + second) : second
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
}


// 时间戳转日期
export function formatDate(value) {
  if (value == null) {
    return ''
  }
  var date = new Date(value)
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  var d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  return y + '-' + m + '-' + d
}