import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import {backgroundImage} from "../../utils/BackgroundImage"
import { useDispatch } from 'react-redux'
import { addGptMovieResult } from '../../utils/gptSlice'
const GptSearch = () => {
  const dispatch=useDispatch()
  dispatch(addGptMovieResult({movieName:[],movieResult:[]}))
  return (
    <>
    <div className='fixed -z-10' >
        <img 
        className='h-screen w-screen object-cover'
        src={backgroundImage} alt='backgroundimage'/>
      </div>
    <div className=''>
      {/* 
      gpt search bar
      gpt movie suggestion
      */}
      
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
    </>
  )
}

export default GptSearch
