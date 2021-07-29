import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import app from './modules/app'
import user from './modules/user'
import cacheView from './modules/cachaView'
import help from './modules/help'

Vue.use(Vuex)

const initPlugin = store => {
}

const store = new Vuex.Store({
  modules: {
    app,
    user,
    cacheView,
    help
  },
  state: { },
  plugins: [initPlugin],
  actions,
  mutations,
  getters
})

export default store
