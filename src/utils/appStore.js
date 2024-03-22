import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import moviesReducer from "./slices/movieSlice";
import gptReducer from "./slices/gptSlice";
import configReducer from "./slices/configSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        config: configReducer,
    }
})

export default appStore;