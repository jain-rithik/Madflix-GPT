import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false,
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        toggleGPTSearchView: (state) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        clearMovieResults: (state, action) => {
            state.movieNames = null;
            state.movieResults = null;
        },
        setHomePage: (state) => {
            state.showGPTSearch = false;
        }
    }
})

export const {toggleGPTSearchView, addGptMovieResult, setHomePage, clearMovieResults} = gptSlice.actions;

export default gptSlice.reducer;