import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import Loader from '../Loader'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return <Loader />;
    
    const mainMovie = movies[Math.floor(Math.random() * movies.length)];

    const {original_title, overview, id } = mainMovie;

  return (
    <div className='md:pt-0 bg-black relative w-full'>
        <VideoTitle title={original_title} overview={overview} id={id} />
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer