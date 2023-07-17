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
            query: ({ _id, product }) => ({
                url: `/products/${_id}`,
                method: 'PATCH',
                body: product
            }),
            // cash optimistic update
            async onQueryStarted(
                arg,
                { dispatch, queryFulfilled }
            ) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(productApi.util.updateQueryData('getProducts', {}, (draft) => {
                        const findIndex = draft?.products?.findIndex((prod) => prod?._id === data?._id)
                        draft.products[findIndex].name = data.name
                        draft.products[findIndex].price = data.price
                        draft.products[findIndex].stock = data.stock
                        draft.products[findIndex].thumbnail = data.thumbnail
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
                    dispatch(productApi.util.updateQueryData('getProducts', {}, (draft) => {
                        const findIndex = draft?.products?.findIndex((prod) => prod?._id === data?._id)
                        draft.products.splice(findIndex, 1)
                        draft.length--;
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
        }),
    })
})

export const { useGetProductsQuery, usePostProductMutation, useDeleteProductMutation, useUpdateProductMutation } = productApi;
