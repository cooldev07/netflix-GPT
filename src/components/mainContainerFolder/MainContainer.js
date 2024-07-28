import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from "./VideoTitle"
const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies)
   if(movies===null)return;
    const mainMovie= movies[0];
    const {original_title,overview,id}=mainMovie;
    // dispatch(addBackgroundVideoMovie(backgroundVideoMovie))
  return (
    <div className='w-[100%] pt-[30%] bg-black md:pt-0'>
        <VideoBackground movieId={id}/>
        <VideoTitle title={original_title} overview={overview}/>
    </div>
  )
}
export default MainContainer
