import { createStore } from "vuex";
import products from "@/store/modules/products";

export const store = new createStore({
    modules: [
        products
    ]
})