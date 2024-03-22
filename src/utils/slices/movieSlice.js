import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        discoverMovies: null,
        allTimeFav: null,
        topRatedMovies: null,
        trailerVideo: null,
        movieInfo: null,
        castInfo: null,
        movieVideos: null,
        castMovies: null,
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
        addallTimeFav: (state, action) => {
            state.allTimeFav = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addMovieInfo: (state, action) => {
            state.movieInfo = action.payload;
        },
        clearMovieInfo: (state, action) => {
            state.movieInfo = null;
        },
        addCastInfo: (state, action) => {
            state.castInfo = action.payload;
        },
        addMovieVideos: (state, action) => {
            state.movieVideos = action.payload;
        },
        addCastMovies: (state, action) => {
            state.castMovies = action.payload;
        },
        clearCastMovies: (state, action) => {
            state.castMovies = null;
        }
    },
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addDiscoverMovies, addallTimeFav, addTopRatedMovies, addMovieInfo, addCastInfo, addMovieVideos, clearMovieInfo, addCastMovies, clearCastMovies } = movieSlice.actions;

export default movieSlice.reducer;