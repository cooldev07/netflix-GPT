import React from 'react'
import { useSelector } from 'react-redux';
const SelectedMovieTrailer = () => {

    let a=useSelector((store)=>store.movies.selectedMoviesTrailer);
if(!a || !a.length===0)return
  return  <div>
      <div className='w-[100%] pt-[30%] bg-black md:pt-0'>
      <iframe
    className='w-[100%] aspect-video'
    src={`https://www.youtube.com/embed/${a[0]?.key}?autoplay=1&mute=1&loop=1&playlist=${a[0]?.key}&controls=0`}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
>
</iframe>

   </div>
    </div>
}

export default SelectedMovieTrailer
