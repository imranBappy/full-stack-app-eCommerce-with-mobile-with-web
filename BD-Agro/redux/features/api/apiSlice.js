import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.API_URL || `https://bd-agro.onrender.com`


export const apiSlice = createApi({
    reducerPath: "api",

    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NODE_ENV === 'production' ? baseUrl : baseUrl,
        prepareHeaders: (headers, { getState, endpoint }) => {
            // let token = getState()
            // token = token.auth.accessToken;
            // if (token) {
            //     headers.set("authorization", `${token}`);
            // }
            return headers;
        },
    }),
    tagTypes: ['Products', 'Product', 'Brands', 'Orders'],
    endpoints: (builder) => ({}),
})



