import { createStore } from "vuex";
import axios from "axios";

export const store = new createStore({
    state: {
        products: {}
    },
    mutations: {
        'SET_STORE' (state, products) {
            state.products = products;
        }
    },
    actions: {
        initStore: ({commit}) => {
            axios.get('http://localhost:3000/products')
                .then((response) => {
                    console.log(response.data.products);
                    commit('SET_STORE',response.data.products)
                })
        }
    },
    getters: {
        products: state => state.products
    }
})