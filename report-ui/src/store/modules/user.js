import { login, logout } from '@/api/login'
import { setToken, delToken, setAccessUser, delAccessUser } from '@/utils/auth'

const user = {
  state: {
    token: '', // 登录后的token
    accessUser: {} // 登录后的用户对象
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      setToken(token)
    },
    SET_ACCESSUSER: (state, accessUser) => {
      state.accessUser = accessUser
      setAccessUser(accessUser)
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const userName = userInfo.userName.trim()
      const password = userInfo.password.trim()
      const captchaVerification = userInfo.captchaVerification.trim()
      var data ={
        userName, password,captchaVerification
      }
      return new Promise((resolve, reject) => {
        login(data).then(response => {
          const repCode = response.repCode
          const repData = response.repData
          if (repCode === '0000') {
            commit('SET_TOKEN', repData.token)
            commit('SET_ACCESSUSER', repData.accessUser)
            resolve(response)
          } else {
            reject(response.repMsg)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ACCESSUSER', {})
          delToken()
          delAccessUser()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_ACCESSUSER', {})
        delToken()
        delAccessUser()
        resolve()
      })
    }
  }
}

export default user
