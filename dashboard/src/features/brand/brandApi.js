import apiSlice from "../api/apiSlice";

export const brandApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBards: builder.query({
            query: () => `/brand`,
            providesTags: ['Brands']
        }),
        postBrand: builder.mutation({
            query: (patch) => ({
                url: "/brand",
                method: "POST",
                body: patch
            }),
            // cash optimistic update
            invalidatesTags: ['Brands']
        }),
    })
})

export const { useGetBardsQuery, usePostBrandMutation } = brandApi;
