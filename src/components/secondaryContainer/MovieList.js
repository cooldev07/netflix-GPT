import React from 'react'
import {MovieCard} from '../moviesFolder/MovieCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MovieList = ({title,movies}) => {
  // what to change here for responsiceness
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll:2,
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
  return (
    <div className='px-6 '>
    <h1 className='text-lg text-white md:text-3xl py-4'>{title}</h1>
    <div className=''
    >
      <Slider {...settings}>
        {movies?.map((movie)=>{
          if(!movie.backdrop_path)return null;
            return <MovieCard 
            key={crypto.randomUUID()}
            movie={movie}
            movieTitle={movie.original_title}
            posterPath={movie.backdrop_path}/>
        })}
        </Slider>
    </div>
    </div>
  )
}

export default MovieList
