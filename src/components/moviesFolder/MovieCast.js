import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {IMG_CDN_URL} from "../../utils/constant"
// 
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MovieCast = () => {
  const selectedMoviesCast=useSelector((store)=>store.movies.selectedMoviesCast);
  const movieInfo=useSelector((store)=>store.movies.selectedMoviesDetails);
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll:4,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className='bg-black h-[100vh]'>
      <h1 className='text-white text-4xl font-bold'>Cast</h1>
<Slider {...settings}>
  {selectedMoviesCast?.cast?.map((cast) => {
    return (
      <div 
        key={cast.id}
        className='cursor-pointer mr-11 h-[300px] w-[200px] p-4 bg-black rounded-lg shadow-lg flex flex-col items-center'>
        <img 
          className='h-[200px] w-full object-cover object-center rounded-lg mb-4'
          src={IMG_CDN_URL + cast.profile_path} 
          alt={cast.name} 
        />
        <div className='text-center'>
          <p className='text-lg font-semibold text-white'>{cast.name}</p>
          <p className='text-gray-400'>{cast.character}</p>
        </div>
      </div>
    )
  })}      
</Slider>
{/* {} */}
<div className="m-4 bg-gray-950 text-white p-10 rounded-lg shadow-lg w-80">
      <h1 className="text-xl font-bold mb-4">Movie Details:</h1>
      <p className="mb-2"><strong>Budget:</strong> {movieInfo?.budget}</p>
      <p className="mb-2"><strong>Revenue:</strong> {movieInfo?.revenue}</p>
      <p className="mb-2"><strong>Status:</strong> {movieInfo?.status}</p>
      <p className="mb-2"><strong>Ratings:</strong> {movieInfo?.vote_average}</p>
    </div>
    </div>
  )
}

export default MovieCast
