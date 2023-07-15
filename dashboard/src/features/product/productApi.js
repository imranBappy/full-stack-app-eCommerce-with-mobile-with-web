import apiSlice from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `/products`,
            providesTags: ['Products']
        }),
        getProduct: builder.query({
            query: (id) => `/products/${id}`,
            providesTags: ["User"]
        }),
        postProduct: builder.mutation({
            query: (patch) => ({
                url: "/products",
                method: "POST",
                body: patch
            }),
            // cash optimistic update
            async onQueryStarted(
                arg,
                { dispatch, queryFulfilled }
            ) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(productApi.util.updateQueryData('getProducts', {}, (draft) => {
                        draft.push(data)
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
        }),
        updateProduct: builder.mutation({
            query: ({ _id, ...patch }) => ({
                url: `/products/${_id}`,
                method: 'PUT',
                body: patch
            }),
            // cash optimistic update
            async onQueryStarted(
                arg,
                { dispatch, queryFulfilled }
            ) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(productApi.util.updateQueryData('getUsers', {}, (draft) => {
                        const findIndex = draft?.findIndex((user) => user?._id === data?._id)
                        draft[findIndex].name = data.name
                        draft[findIndex].email = data.email
                        draft[findIndex].phone = data.phone
                    }))
                } catch (error) {
                    console.log(error);
                }
            }
        }),
        deleteProduct: builder.mutation({
            query: (_id) => ({
                url: `/products/${_id}`,
                method: 'DELETE',
            }),

            // cash optimistic update
            async onQueryStarted(
                arg,
                { dispatch, queryFulfilled }
            ) {
                try {
                    const res = await queryFulfilled;
                    const { data } = res;
                    dispatch(productApi.util.updateQueryData('getUsers', {}, (draft) => {
                        const findIndex = draft?.findIndex((user) => user?._id === data?._id)
                        draft.splice(findIndex, 1)
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
        }),
    })
})

export const { useGetProductsQuery, usePostProductMutation } = productApi;
