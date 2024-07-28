import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {IMG_CDN_URL} from "../../utils/constant"
import { API_OPTIONS } from '../../utils/constant'
import { addSelectedMovies,addselectedMoviesDetails,addSelectedMoviesCast, addSelectedMoviesTrailer} from "../../utils/movieSlice"
import Header from '../Header'
import MovieCast from '../moviesFolder/MovieCast'
import SelectedMovieTrailer from './SelectedMovieTrailer'
const Selectedmovie = () => {
  const selectedMovieTrailer=useSelector((store)=>store.movies.selectedMovieTrailer)
  const dispatch=useDispatch()
  const selectedmovie=useSelector((store)=>store.movies.selectedMovies)
  const selectedMoviesDetails=useSelector((store)=>store.movies.selectedMoviesDetails)
  const imagePath=selectedmovie?.poster_path;
  const movieId=selectedmovie?.id;
  // movie details
  const movieName=selectedMoviesDetails?.original_title;
  const date=selectedMoviesDetails?.release_date;
  const genure=selectedMoviesDetails?.genres?.map((val)=>val.name).join(",")
  const runTime=selectedMoviesDetails?.runtime;
  const tagline=selectedMoviesDetails?.tagline;
  const overview=selectedMoviesDetails?.overview;
const backgroundImagePath=selectedMoviesDetails?.backdrop_path;
async function getMoiveDetails(){
const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,API_OPTIONS);
const json=await data.json();
dispatch(addselectedMoviesDetails(json))
}
async function getMovieCast(){
  const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,API_OPTIONS)
  const json=await data.json();
  dispatch(addSelectedMoviesCast(json))
}

async function getMovieVideo(){
  const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
  const json=await data.json()
  const a=json.results.filter((val)=>val.type=="Trailer"||val.type=="Teaser");
  dispatch(addSelectedMoviesTrailer(a))
}


useEffect(()=>{
getMovieVideo()
getMoiveDetails()
getMovieCast()
},[])
  return (
    <div className=''>
      <Header/>
     { <SelectedMovieTrailer />}
      <div className= ' bg-cover bg-center h-[540px] pt-[10%] flex items-center justify-center gap-4 '
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${IMG_CDN_URL + backgroundImagePath})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"

    }}
      >
        {/* image container */}
        <div
        >
          <img
          className=' w-[250px] rounded-lg'
          src={IMG_CDN_URL+imagePath} alt='poster'/>
        </div>
        {/* movie details */}
        <div className='w-[40%] flex flex-col  gap-5'>
          <h1
          className='text-white text-3xl font-bold'
          >{movieName}</h1>
          <ul
           className='text-white'>
            <li>Date:<span
            className='text-gray-400'
            >{date}</span></li>
            <li>Genure:<span
            className='text-gray-400'
            >{genure}</span></li>
            <li>Runtime:<span
            className='text-gray-400'
            >{runTime}</span></li>
          </ul>
          <h2
          className='text-white'
          >Tagline:
          <span className='text-gray-400'>
          {tagline}
          </span>
          </h2>
          <h2 
          className='text-white max-w-[80%] hidden md:block'
          >Overview:{overview}</h2>
        </div>
      </div>
      <MovieCast/>
    </div>
  )
}

export default Selectedmovie
