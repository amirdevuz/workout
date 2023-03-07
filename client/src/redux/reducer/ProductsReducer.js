import { createSlice } from '@reduxjs/toolkit';

const productsReducer = createSlice({
    name: 'products',
    initialState: { allProducts: [], products: [], categories: [], selectedProduct: {}, },
    reducers: {
        getAllProducts: (state, action)  => {
            state.allProducts = action.payload;
        },
        getProducts: (state, action) => {
            state.products = action.payload;
        },
        getCategories: (state, action) => {
            state.categories = action.payload;
        },
        getSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
    },
});

export const {getAllProducts, getProducts, getCategories, getSelectedProduct,} = productsReducer.actions;
export default productsReducer.reducer;