import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        products: [],
        searchName: ''
    },
    mutations: {
        getProductsFromApi: (state, products) => {
            state.products = products
        },
        getSearch: (state, value) => {
            state.searchName = value
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
        }
    },
    getters: {
        productsState(state) {
            return state.products
        },
        searchItemName(state) {
            return state.searchName
        }
    }
})

export default store
