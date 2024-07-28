import Header from './Header'
import { useNowPlayingMovies } from '../customHooks/useNowPlayingMovies'
import MainContainer from './mainContainerFolder/MainContainer'
import SecondaryContainer from './secondaryContainer/SecondaryContainer'
import { usePopularMovies } from '../customHooks/usePopular movies'
import {useTopRatedMovies} from "../customHooks/useTopRatedMovies"
import {useUpcomingMovies} from "../customHooks/useUpcomingMovies"
import GptSearch from "./gptFolder/GptSearch"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addSelectedMovies,addselectedMoviesDetails,addSelectedMoviesCast} from "../utils/movieSlice"
import {   addGptMovieResult} from "../utils/gptSlice"
const Broswe = () => {
  const dispatch=useDispatch()
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  useEffect(()=>{
    dispatch(addselectedMoviesDetails());
    dispatch(addSelectedMoviesCast())

  },[])
  return (
    <div>
      <Header/>
      {
      showGptSearch?
      <GptSearch/>:
      (
        <>
        <MainContainer/>
        <SecondaryContainer/>
        </>
      )
      }
    </div>
  )
}

export default Broswe
