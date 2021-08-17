import { products } from "@/assets/data";

export const state = () => ({
    productsList: products,
    myRentals: []
});

export const mutations = {
    addItem(state, id) {
        const item = state.productsList.find(product => product.id === id);
        state.myRentals.push(item);
    }
}

export const getters = {
    getProductById: (state) => (id) => {
        return state.productsList.find(product => product.id == id)
    }
}