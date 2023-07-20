/* eslint-disable no-undef */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseUrl = process.env.REACT_APP_API_URL || 'https://e-commerce-eykj.onrender.com'
//'https://e-commerce-eykj.onrender.com'

const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, state, endpoints) => {
        const token = state.getState().auth?.accessToken;
        if (token) headers.set("Authorization", `${token}`)
        return headers;
    },
})

const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: async (args, api, extraOptions) => {
        const result = await baseQuery(args, api, extraOptions);
        if (result?.error?.status === 401) {
            api.dispatch(userLoggedOut());
            localStorage.clear();
        }
        return result;

    },
    tagTypes: ["Brands", "Users", 'Categories', 'Products'],
    endpoints: () => ({}),

})

export default apiSlice