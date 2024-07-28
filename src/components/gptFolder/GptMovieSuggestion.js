import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "../secondaryContainer/MovieList"
const GptMovieSuggestion = () => {
  const gpt=useSelector((store)=>store.gpt)
  const {movieResults,movieNames}=gpt;
  if(!movieNames) return null;
  return (
   <div className='text-white p-4 m-4 bg-black bg-opacity-90'>
    {movieNames?.map((movie,i)=>{
     return <MovieList key={crypto.randomUUID()} title={movie} movies={movieResults[i].results}/>
    })}
    <MovieList movies={movieResults}/>
   </div>
  )
}

export default GptMovieSuggestion
