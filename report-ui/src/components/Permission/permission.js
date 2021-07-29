import { hasPermission } from '@/utils/auth'
export default {
  inserted(el, binding, vnode) {
    const { value } = binding // v-permission 绑定的权限值
    var checkFlag = hasPermission(value)
    if(checkFlag == false && el.parentNode ){
      el.parentNode.removeChild(el)
    }
  },
}
