import React from 'react'
import { LOGO } from '../utils/Logo'
import {addUser,removeUser} from "../utils/userSlice"
import { useDispatch, useSelector } from 'react-redux'
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firbase';
import {toggleGptSearchView} from "../utils/gptSlice"
import {changeLanguage, chnageLanguage} from "../utils/configSlice"
import { SUPPORTED_LANGUAGES} from "../utils/constant"
import { lang } from '../utils/languageConstants';
const Header = () => {
  const dispatch=useDispatch()
  const dipatch=useDispatch()
  const navigate=useNavigate()
  const user=useSelector(store=>store.user)
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  const language=useSelector((store)=>store.config.language)

  useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              const {email,displayName,uid} = user;
              dipatch(addUser({uid:uid,email:email,displayName:displayName}))
              if(window.location.pathname==="/"){
           navigate("/browse")
              }
              // ...
            } else {
              // User is signed out
              // ...
              dipatch(removeUser())
           navigate("/")

            }
          });
          // unsubscribe when the component unmounts
          return ()=>unsubscribe();
    },[])
  function hanldeSignout(e){
    e.preventDefault();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
dispatch(removeUser())
  }
  function handleGptSearchClick(e){
    e.preventDefault()
    dipatch(toggleGptSearchView())
  }

  function handlelanguageChange(e){
const lang=e.target.value;
dispatch(changeLanguage(lang))
  }


  return (
    <div className='flex  flex-col md:flex-row items-center justify-between w-full z-10 absolute px-8 py-2 bg-gradient-[none] bg-gradient-to-b xl:from-black
                    '>
      <img
      onClick={(e)=>{
        navigate("/browse")
      }}
      className='w-44  m-auto md:mx-0 cursor-pointer'
      src={LOGO} alt='logo'/>
    {user &&  <div className='p-2 flex justify-around  items-center gap-8 md:gap-2 md:justify-start '>
      <p className="hidden lg:flex justify-center items-center text-white pr-2 font-bold text-2xl">
        {lang[language].welcome},
              {user.displayName}
            </p>
      {/* gpt  */}
      {
        
      // <select onChange={handlelanguageChange}
      //  className='bg-gray-300 text-black border cursor-pointer border-black sm:px-1.5 sm:py-1 px-0.5 py-0.5 lg:px-2 lg:py-1 md:px-2 md:py-1 rounded-md'
      //  >
      //  { SUPPORTED_LANGUAGES.map((lang)=>{
      //    return <option 
      //    className="text-black lg:px-2 lg:py-1 md:px-2 :px-1 :py-0.5 sm:px-1.5 sm:py-0.5 md:py-1"
      //    key={lang.identifier} value={lang.identifier}>{lang.name}</option>
      //  })}
      //  </select>
      <select 
      onChange={handlelanguageChange}
      className='bg-gray-300 text-black border cursor-pointer border-black sm:px-1.5 sm:py-1 px-0.5 py-0.5 lg:px-2 lg:py-1 md:px-2 md:py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out'
    >
      {SUPPORTED_LANGUAGES.map((lang) => (
        <option 
          className="text-black p-2 lg:px-2 lg:py-1 md:px-2 px-1 py-0.5 sm:px-1.5 sm:py-0.5"
          key={lang.identifier} 
          value={lang.identifier}
        >
          {lang.name}
        </option>
      ))}
    </select>
       }
    <button
  className=' p-2    bg-purple-800 text-white rounded-lg hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300 ease-in-out'
  onClick={handleGptSearchClick}
>
  {showGptSearch ? lang[language].home : lang[language].gptSearch}
</button>

 

        {/* image */}
        {/* <p className='bg-red-600 text-white flex justify-center items-center p-4 mr-2'>{user.displayName}</p> */}
        <button
  className='bg-red-600 font-bold p-2 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out'
  onClick={hanldeSignout}
>
  {lang[language].signout}
</button>

      </div>}
    </div>
  )
}

export default Header
