import {localCartSSD} from "~/utils/global-constants";

export interface IProdVar {
  id: string,
  name: string,
  assetUrl: string
}

export interface IProdStore {
  id: string
  storeName: string
}

export interface IProdVarPrice {
  id: string
  price: number
}

export interface ICartItem {
  variant: IProdVar,
  store: IProdStore,
  price: IProdVarPrice,
  quantity: number
}

export const state = () => ({
  cart: [],
  cartOpen: false
})

export const mutations = {
  AddToCart(state, cartItem: ICartItem) {
    state.cart.push(cartItem)
    localStorage.setItem(localCartSSD, state.cart)
  },
  RemoveFromCart(state, index) {
    state.cart.splice(index, 1)
    localStorage.setItem(localCartSSD, state.cart)
  },
  AddQuantity(state, index) {
    state.cart[index].quantity = state.cart[index].quantity + 1
    localStorage.setItem(localCartSSD, state.cart)
  },
  RemoveQuantity(state, index) {
    if (state.cart[index].quantity === 1) {
      state.cart.splice(index, 1)
    } else {
      state.cart[index].quantity = state.cart[index].quantity - 1
    }
    localStorage.setItem(localCartSSD, state.cart)
  },
  ToggleCartOpen(state) {
    state.cartOpen = !state.cartOpen
  }
}

export const actions = {
  addToCart({commit}, payload: ICartItem) {
    commit('AddToCart', payload)
  },
  removeFromCart({commit}, index) {
    commit('RemoveFromCart', index)
  },
  addQuantity({commit}, index) {
    commit('AddQuantity', index)
  },
  removeQuantity({commit}, index) {
    commit('RemoveQuantity', index)
  },
  toggleCart({commit}) {
    commit('ToggleCartOpen')
  }
}
