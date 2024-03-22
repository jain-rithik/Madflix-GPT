import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: "en",
        forgotPass: false,
        onlineStatus: "online",
        otherURL: false,
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        },
        setForgotPass: (state, action) => {
            state.forgotPass = action.payload;
        },
        setOnlineStatus: (state, action) => {
            state.onlineStatus = action.payload;
        },
        setOtherURL: (state, action) => {
            state.otherURL = action.payload;
        }
    }
})

export const { changeLanguage, setForgotPass, setOnlineStatus, setOtherURL } = configSlice.actions;

export default configSlice.reducer;