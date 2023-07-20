import { createSlice } from "@reduxjs/toolkit";
import { clearAuth } from "../../../utils/dbManager";


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
            // clearAuth();
            state.accessToken = undefined;
            state.user = undefined;
        },
    },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;