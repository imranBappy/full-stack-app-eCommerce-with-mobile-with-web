import apiSlice from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `/category`,
            providesTags: ['Categories']
        }),
        postCategory: builder.mutation({
            query: (patch) => ({
                url: "/category",
                method: "POST",
                body: patch
            }),
            invalidatesTags: ['Categories']
        }),
    })
})

export const { useGetCategoriesQuery, usePostCategoryMutation } = categoryApi;
