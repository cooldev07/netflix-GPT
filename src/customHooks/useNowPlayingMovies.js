import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import {addNowPlayingMovies} from "../utils/movieSlice"

export function useNowPlayingMovies(){
    const dispatch=useDispatch()
    // memoisation
    const nowPlayingMovies=useSelector((store)=>store.movies.nowPlayingMovies);
    const getTopRatedMovies=async()=>{
      const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);
      const json=await data.json()
      dispatch(addNowPlayingMovies(json.results))
      };
    useEffect(()=>{
      // memoisation
      if(!nowPlayingMovies)
      {
      getTopRatedMovies()
      }
    },[])
}