import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        products: [],
        basket: [],
        searchName: ''
    },
    mutations: {
        getProductsFromApi: (state, products) => {
                state.products = products
        },
        getSearch: (state, value) => {
            state.searchName = value
        },
        getCardTobasket: (state, products) => {
            state.basket.push(products)
        },
        setBasket: (state,productInBasket) => {
            state.basket = productInBasket
        }
    },
    actions: {
        productsGet({commit}) {
           return axios ('http://localhost:3000/products', {
            method: "GET"
           }) 
           .then((products) => {
                commit('getProductsFromApi', products.data)
                return products.data
            })
        },
        getSearchName({commit}, value) {
            commit('getSearch',value)
        },
        basketPush({commit, state}, product) {
            setTimeout(() => {
                commit('getCardTobasket', product)
                const productIds = state.basket.map((product) => {
                    return product.id
                })
                localStorage.setItem('id', JSON.stringify(productIds))
              },2000)
        },
        loadBasket({commit, state}) {
          const localId = JSON.parse(localStorage.getItem('id'))
          if (Array.isArray(localId)) {
          const productInBasket = localId.map((id) => {
                return state.products.find((product) => {
                    return id === product.id
                })
            })
            commit('setBasket',productInBasket)
          }
        }
    },
    getters: {
        productsState(state) {
            return state.products 
        },
        searchItemName(state) {
            return state.searchName
        },
        basketState(state) {
            return state.basket
        },
        inBasket(state) {
            return (id) => {
                return Boolean(
                    state.basket.find((product) => {
                        return product.id === id
                    })
                )
            }
        }
    }
})

export default store
