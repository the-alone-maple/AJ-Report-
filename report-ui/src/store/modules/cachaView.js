
const cacheView = {
  state: {
    cacheViews: []
  },

  mutations: {
    ADD_CACHEVIEW: (state, view) => {
      if (state.cacheViews.includes(view.name)) return
      if (view.meta && view.meta.keepAlive) {
        state.cacheViews.push(view.name)
      } 
    }
  },
  actions: {
    addCachedView({ commit }, view ) {
      commit('ADD_CACHEVIEW', view)
    }
  }
}

export default cacheView
