import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies} from "../utils/movieSlice"
import { useSelector } from 'react-redux'
export function useTopRatedMovies(){
    const dispatch=useDispatch()
    const topRatedMovies=useSelector((store)=>store.movies.topRatedMovies)

    const getNowPlayingMovies=async()=>{
      const data=await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",API_OPTIONS);
      const json=await data.json()
      dispatch(addTopRatedMovies(json.results))
      };
    useEffect(()=>{
      if(!topRatedMovies){
  getNowPlayingMovies()
      }
    },[])
}