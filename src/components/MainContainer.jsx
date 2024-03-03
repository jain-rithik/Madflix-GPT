import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return; //early return
    
    const mainMovie = movies[14];

    const {original_title, overview, id } = mainMovie;

  return (
    <div className='md:pt-0 bg-black pt-[35%]'>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer