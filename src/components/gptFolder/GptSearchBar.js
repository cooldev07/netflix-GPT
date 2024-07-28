import React, { useRef, useState } from 'react'
import {lang} from '../../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
// 
import {  addGptMovieResult} from "../../utils/gptSlice"
import { API_OPTIONS} from "../../utils/constant"
const Groq=require("groq-sdk")
// import Groq from "groq-sdk";
 const  GptSearchBar = () => {
  let recommendationMovies=[]
  const language=useSelector((store)=>store.config.language)
  const searchText=useRef(null)
  const dispatch=useDispatch()
// search movie in tmdb
const searchMovieTMDB=async function(movie){
const data=await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,API_OPTIONS );
const json=await data.json();
return json;
}
async function  hanldeGptSearchClick(e){
    e.preventDefault()
    const gptQuery="Act as a movie recommendation system and suggest some movies for the querry :"+searchText.current.value+ " .only give me name of 5 movies,comma separated like the example result given ahead and the result content should only movies text there should no other text.Example Result:avatar,indian 2,star,friends,don"
    const groq = new Groq({ apiKey:"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",
      dangerouslyAllowBrowser: true 
    });
  const chatCompletion = await getGroqChatCompletion();
let a=chatCompletion.choices[0]?.message.content || ""
recommendationMovies=a.split(",")
 function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: gptQuery,
      },
    ],
    model: "llama3-8b-8192",
  });
}

// mapping the for each movie for tmdb result
const promiseArray=recommendationMovies?.map((val)=>searchMovieTMDB(val))
const tmdbResults= await Promise?.all(promiseArray)
dispatch(addGptMovieResult({movieNames:recommendationMovies,movieResults:tmdbResults}));
  }
  return (
    <div className='pt-[37%] z-20 md:pt-[13%] lg:pt-[10%] flex justify-center items-center  '>
    <form
      className='w-[92%] md:w-1/2 bg-black p-6 rounded-lg shadow-lg'
      onSubmit={(e) => e.preventDefault()}
    >
      <div className='grid grid-cols-12 gap-4'>
        <input
          ref={searchText}
          className='col-span-9 p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700'
          type='text'
          placeholder={lang[language].placeholderText}
        />
        <button
          className='col-span-3 py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-800 transition duration-300 ease-in-out'
          onClick={hanldeGptSearchClick}
        >
          {lang[language].search}
        </button>
      </div>
    </form>
  </div>
  )
}

export default GptSearchBar
