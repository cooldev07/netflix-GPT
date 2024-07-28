import React from 'react'
import { IMG_CDN_URL } from '../../utils/constant'
import {addSelectedMovies} from "../../utils/movieSlice";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Swiper} from 'swiper/react';
const   MovieCard = ({movie,movieTitle,posterPath}) => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  if(!posterPath)return null;
  function handleMoiveDetails(e){
dispatch(addSelectedMovies(movie))
navigate("/selectedmovie")
  }
  return (
    <Swiper>
      <div
      onDoubleClick={(e)=>handleMoiveDetails(movie)}
      className='cursor-pointer mr-2  rounded-lg overflow-hidden'>
        <div className="transform transition-transform duration-300 ease-in-out hover:scale-110">
      <img 
className=' object-center h-32 object-cover rounded-lg'
src={IMG_CDN_URL+posterPath}
alt='helo'
/> 
</div>
<p className='text-gray-300'>{movieTitle}</p>
    </div>
    </Swiper>
  )
}
export {MovieCard}
