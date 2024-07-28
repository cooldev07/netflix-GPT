import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
  <div className=' w-full aspect-video left-0 top-0  pt-[48%] px-6 md:px-14 lg:px-12 md:pt-[15%]  absolute  text-white md:bg-gradient-to-r md:from-black'>
      <h1 className='md:text-2xl md:mb-4 mb-4 lg:text-4xl xl:text-6xl font-bold'>{title}</h1>
      <h2 className='hidden lg:inline-block py-6 text-lg w-[32%]'>{overview}</h2>
      <div className="flex">
        <button className='bg-white flex justify-center items-center text-black p-2  md:px-12  text-lg  rounded-lg hover:bg-opacity-80'>
          ▶️Play
          </button>
        <button className=' mx-2 hidden lg:flex justify-center items-center bg-gray-500 text-white p-4 px-12  text-lg  rounded-lg '>
          ℹ️More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
