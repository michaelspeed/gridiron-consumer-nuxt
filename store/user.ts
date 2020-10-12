export const state = () => ({
  user: null,
  address: []
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  autoLoginUser(state, user) {
    state.user = user
  },
  logout(state) {
    state.user = null
  }
}

export const actions = {
  loginUser({commit}, payload) {
    commit('setUser', payload)
  },
  removeUser({commit}) {
    commit('logout')
  }
}
