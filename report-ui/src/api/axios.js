import axios from 'axios';
import { Message, MessageBox } from 'element-ui';
axios.defaults.baseURL = process.env.BASE_API
const service = axios.create({
  withCredentials: false,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  }
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error 
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code == 200) {
      return res
    }

    else if (res.code == '50014') {
      //登录超时或被登出，弹确认框，用户确认后，跳转到登录页面
      MessageBox({
        message: "当前登录已失效或异地登录，请重新登录",
        type: 'error',
        duration: 3 * 1000,
      }).then(() => {
        sessionStorage.clear();
        localStorage.clear();
        window.location.href = "/";
      }).catch(err => {
      })
    } else if (res.code == "3100" || res.code == "3101") {
      return res;
    }
    else {
      Message({
        message: res.repMsg || res.message,
        type: 'error',
        duration: 3 * 1000
      })
      return res;
    }
  },
  error => {
    var errorStatus = error.response.code;
    var errorData = error.response.data;
    var messageTxt = "";
    if (errorStatus != 200) {
      messageTxt = "服务器内部错误，请联系管理员";
    } else {
      messageTxt = '失败原因：' + errorData.code + '--' + errorData.repMsg;
    }
    Message({
      message: messageTxt,
      type: 'error',
      duration: 5 * 1000
    })
  }
)

export default service
