import { configureStore } from '@reduxjs/toolkit'
import ProductsReducer from './reducer/ProductsReducer'

export const store = configureStore({
    reducer: {
        products: ProductsReducer
    },
});