import { apiSlice } from "../api/apiSlice";

export const blogApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postOrder: builder.mutation({
            query: (body) => ({
                url: '/orders',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Orders']
        }),
        getOrders: builder.query({
            query: (userId) => {

                console.log(userId);
                return `/orders/${userId}`
            },
            providesTags: ['Orders']
        }),

    })
})

export const { useGetOrdersQuery, usePostOrderMutation } = blogApi