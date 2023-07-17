import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    accessToken: undefined,
    user: undefined,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn(state, action) {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        userLoggedOut(state) {
            console.log(1111, localStorage.getItem("auth"));
            if (localStorage.getItem("auth")) {
                localStorage.removeItem("auth");
            }
            state.accessToken = undefined;
            state.user = undefined;
        },
    },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;