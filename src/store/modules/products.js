import axios from "axios";

const state = {
    products: []
};

const mutations = {
    'SET_STORE'(state, products) {
        state.products = products;
    }
};

const actions = {
    initStore: ({commit}) => {
        axios.get('http://localhost:3000/products')
            .then((response) => {
                console.log(response.data.products);
                commit('SET_STORE', response.data.products);
            });
    }
};

const getters = {
    products: state => state.products
};

export default {
    state,
    getters,
    actions,
    mutations
}
