import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getToken, getAccessUser } from "@/utils/auth";
export default router
var whiteList = ['/login']
//  判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  
  NProgress.start()
  var token = getToken(); 
  var gaeaUser = getAccessUser();
  // 如果有token 
  if (token) {
    if (to.path == '/login') {
      next('/index')
      NProgress.done()
    }else{
      next()
    }
  }else {
    // 如果没有token  
    if ((token == null || token == '' || token ==undefined || gaeaUser == {}) && (to.meta != null && to.meta.requireAuth == true)) { // 在免登录白名单，直接进入
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      NProgress.done()
    } else {
      next()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
