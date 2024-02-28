import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

  return (
    <div className='bg-black '>
        <div className='-mt-64 pl-12 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Discover"} movies={movies.discoverMovies}/>
        <MovieList title={"Top Shows"} movies={movies.topShows}/>
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer