import {GetDefaultStoreDocument} from "~/gql";

export const state = () => ({
  defstore: null
})

export const mutations = {
  setDefaultStore(state, store) {
    state.defstore = store
  }
}

export const actions = {
  async setDefault({commit}) {
    let client = await this.app.apolloProvider.defaultClient
    await client.query({
      query: GetDefaultStoreDocument
    })
      .then(value => {
        commit('setDefaultStore', value.data.GetDefaultStore)
      })
  }
}
