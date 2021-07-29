import md5 from 'js-md5';

function jsonString (obj) {
  if (isObject(obj)) {
    return sortObjByKey(obj);
  } else if (isArray(obj)) {
    var sortArray = [];
    for (var i = 0; i < obj.length; i++) {
      if (isObject(obj[i])) {
        sortArray.push(sortObjByKey(obj[i]));
      } else {
        return obj;
      }
    }
    return sortArray;
  } else {
    return obj;
  }
}

// 将通讯录按照 ABCD字母的顺序排序
function sortObjByKey (obj) {
  var keys = Object.keys(obj).sort();
  var newObj = {}
  for (var i = 0; i < keys.length; i++) {
    var index = keys[i];
    newObj[index] = jsonString(obj[index]);
  }
  return newObj;
}


//判断是否是数组
function isArray (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

//判断是否是对象
function isObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

export default {
  /**
   * 第一步，将data中参数，按key升序，排除null值，用&拼接，得tempSignStr
   * 第二步，"time=%s&" + tempSignStr + "&token=%s"
   * 第三步，md5(第二步结果)
   */
  sign: function (token, data) {
    if (typeof (data) == "undefined" || data == null) {
      data = {};
    }
    var gatewayRequest = {};//currentPage pageSize orderBy data  time token sign isFrom
    var time = new Date().getTime();
    //找出data中值非null的key，同时排除分页参数
    //ignoreKeyList data中哪些key不参与签名
    var dataKeyArray = [];
    var excludeKeyArray = ['currentPage', 'pageSize', 'orderBy', 'ignoreKeyList'];
    for (var key in data) {
      if (data[key] == null) {
        continue;
      }
      if (excludeKeyArray.indexOf(key) >= 0) {
        gatewayRequest[key] = data[key];
        delete data[key];
        if (key === 'ignoreKeyList') {
          //遍历ignoreKeyList，不参与签名校验
          for (var i = 0; i < data[key].length; i++) {
            delete data[data[key][i]];
          }
        }
        continue;
      }
      dataKeyArray.push(key);
    }
    //将key按升序排列
    dataKeyArray.sort();

    //生成签名串"time=%s&" + tempSignStr + "&token=%s"
    var tempSignStr = "time=" + time;
    for (var i = 0; i < dataKeyArray.length; i++) {
      var key = dataKeyArray[i];
      var value = data[key];
      tempSignStr += "&";
      tempSignStr += key;
      tempSignStr += "=";
      tempSignStr += JSON.stringify(jsonString(value));
    }
    tempSignStr += "&token=";
    tempSignStr += token;
    var signStr = md5(tempSignStr);
    gatewayRequest['data'] = data;
    gatewayRequest['time'] = time;
    gatewayRequest['token'] = token;
    gatewayRequest['sign'] = signStr;
    gatewayRequest['isFrom'] = "PC";
    return gatewayRequest;
  }

}
/**
 * 密码加盐后MD5
 * @param {HTMLElement} elm
 *
 */
export function transPsw (val) {
  return md5(val + 'gaea')
}
