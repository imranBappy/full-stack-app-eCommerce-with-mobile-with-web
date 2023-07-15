/* eslint-disable no-undef */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL || 'http://localhost:5000',
        prepareHeaders: (headers, state, endPoints) => {
            return headers;
        }
    }),
    tagTypes: ["Brands", "Users", 'Categories', 'Products'],
    endpoints: () => ({}),

})

export default apiSlice