import { configureStore } from '@reduxjs/toolkit'
import cardReducers from './features/cartFeatures'
import productFeatures from './features/productFeatures'
import { apiSlice } from './features/api/apiSlice'
import authSlice from './features/auth/authSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, // [apiSlice.reducerPath] is the same as [api
        cart: cardReducers,
        product: productFeatures,
        auth: authSlice,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware().concat(apiSlice.middleware)],
    devTools: process.env.NODE_ENV !== 'production',
})