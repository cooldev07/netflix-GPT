import React from 'react'
import Login from './Login'
import Broswe from './Broswe'
import Selectedmovie from "./selectedMovies/SelectedMovie"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const Body = () => {
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Broswe/>
        },
        {
            path:"/selectedmovie",
            element:<Selectedmovie/>
        }
    ])


  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}


export default Body
