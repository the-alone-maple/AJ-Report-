export default {
  timestamp2String: function (timestamp, fmt) {
    if (timestamp == null) return;
    if (fmt == null || fmt == '') fmt = 'yyyy-MM-dd hh:mm:ss';
    var date = new Date(timestamp);
    var o = {
      "M+": date.getMonth() + 1, //月份   
      "d+": date.getDate(), //日   
      "h+": date.getHours(), //小时   
      "m+": date.getMinutes(), //分   
      "s+": date.getSeconds(), //秒   
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
      "S": date.getMilliseconds() //毫秒   
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  },

  secondsFormat: function (second) {
    if (second == null || second == 0) {
      return "0秒";
    }
    var day = Math.floor(second / (24 * 3600));
    var hour = Math.floor((second - day * 24 * 3600) / 3600);
    var minute = Math.floor((second - day * 24 * 3600 - hour * 3600) / 60);
    var second = second - day * 24 * 3600 - hour * 3600 - minute * 60;

    var result = "";
    if (day > 0) {
      result = result + day + "天";
    }
    if (hour > 0) {
      result = result + hour + "时";
    }
    if (minute > 0) {
      result = result + minute + "分";
    }
    if (second > 0) {
      result = result + second + "秒";
    }
    return result;
  }
}
