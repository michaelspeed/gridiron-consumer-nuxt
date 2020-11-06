export const state = () => ({
  addressadd: false
})

export const mutations = {
  toggleAddAddress(state){
    state.addressadd = !state.addressadd
  }
}

export const actions = {
  toggleSetAddress({commit}) {
    commit('toggleAddAddress')
  }
}
