/* eslint-disable no-undef */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'
const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://e-commerce-eykj.onrender.com',
        prepareHeaders: (headers, state, endPoints) => {
            return headers;
        }
    }),
    tagTypes: ["Brands", "Users", 'Categories', 'Products'],
    endpoints: () => ({}),

})

export default apiSlice