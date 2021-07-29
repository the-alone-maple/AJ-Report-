const help = {
  state: {
    id: 0,
    val: '',
    title: ''
  },
  mutations: {
    setCategory(state, val) {
      state.id = 0
      state.val = val.value
      state.title = val.label
    }
  }
}

export default help