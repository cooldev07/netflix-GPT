import React from 'react'
import MovieList from '../secondaryContainer/MovieList';
import { useSelector } from 'react-redux';
const SecondaryContainer = () => {
const movies=useSelector((store)=>store.movies );
  return (
    movies.nowPlayingMovies&&( <div
    className='bg-black md:mt-[28%] lg:mt-[20%] xl:mt-[10%] 2xl:mt-none'
    >
      <div   className='md:-mt-72 mt-0 pl-4 md:pl-12 relative z-20 '>
<MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
<MovieList 
title={"Popular"} movies={movies.popularMovies}/>
<MovieList 
title={"Top Rated"} movies={movies.topRatedMovies}/>
<MovieList 
title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
</div>
    </div>) 
  )
}

export default SecondaryContainer
