import {GetCurrentUserDocument} from "~/gql";

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
  },
  async autoLogin({commit}) {
    let client = await this.app.apolloProvider.defaultClient
    await client.query({
      query: GetCurrentUserDocument
    })
      .then(value => {
        if(value.data.GetCurrentUser) {
          commit('setUser', value.data.GetCurrentUser)
        }
      })
  }
}
