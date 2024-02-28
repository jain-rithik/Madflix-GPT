import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        discoverMovies: null,
        topShows: null,
        topRatedMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addDiscoverMovies: (state, action) => {
            state.discoverMovies = action.payload;
        },
        addTopShows: (state, action) => {
            state.topShows = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    },
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addDiscoverMovies, addTopShows, addTopRatedMovies } = movieSlice.actions;

export default movieSlice.reducer;