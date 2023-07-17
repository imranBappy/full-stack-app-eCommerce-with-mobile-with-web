import apiSlice from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // endpoint hire
        register: builder.mutation({
            query: (date) => ({
                url: "/register",
                method: "POST",
                body: date
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem('auth', JSON.stringify({
                        accessToken: result.data.accessToken,
                        user: result.data.user,
                    }));
                    dispatch(userLoggedIn({
                        accessToken: result.data.accessToken,
                        user: result.data.user,
                    }))
                } catch (error) {
                    console.log(error);
                }
            }
        }),
        login: builder.mutation(({
            query: (data) => ({
                url: "/auth",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem('auth', JSON.stringify({
                        accessToken: result.data.accessToken,
                        user: result.data.data
                    }));
                    dispatch(userLoggedIn({
                        accessToken: result.data.accessToken,
                        user: result.data.data
                    }))
                } catch (error) {
                    console.log(error);
                }
            }
        }))

    })
})

export const { useLoginMutation, useRegisterMutation } = authApi