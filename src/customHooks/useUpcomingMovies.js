import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import {addUpcomingMovies} from "../utils/movieSlice"
import { useSelector } from 'react-redux'
export function useUpcomingMovies(){
    const dispatch=useDispatch()
    const upcomingMovies=useSelector((store)=>store.movies.upcomingMovies)
    const getUpcomingMovies=async()=>{
      const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",API_OPTIONS);
      const json=await data.json()
      dispatch(addUpcomingMovies(json.results))
      };
    useEffect(()=>{
      if(!upcomingMovies){
        getUpcomingMovies()
      }
    },[])
}