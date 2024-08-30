import React, { useState,useRef } from 'react'
import Header from './Header'
import {backgroundImage} from "../utils/BackgroundImage"
import chackValidateData from "../utils/validate"
// firebase
import { updateProfile } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
// 
import { auth } from '../utils/firbase';
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
// 
import { useSelector } from 'react-redux';
import {lang} from "../utils/languageConstants"
const Login = () => {
  const language=useSelector((store)=>store.config.language)
    const [isSigninForm,setIsSigninFrom]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    const fullname=useRef(null);
    const email=useRef(null);
    const password=useRef(null)
   const dispatch=useDispatch()
function handleToggle(e){
    setIsSigninFrom((c)=>!c)
      email.current.value=""
  password.current.value=""
}    
function handleTestCredentials(e){
  e.preventDefault()
  email.current.value="johndoe@gmail.com"
  password.current.value="John@2000"
}
function handleButtonClick(e){
  e.preventDefault()
  // validate the form
  if(isSigninForm) 
    {
      const message= chackValidateData(null,email.current.value,password.current.value)
setErrorMessage(message);
    }
  else{
      const message= chackValidateData(fullname.current.value,email.current.value,password.current.value)
setErrorMessage(message)
    }
if(errorMessage)return;
// sign in or sign up
if(!isSigninForm){

  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // once the user is register updat ethe profiel with name
      updateProfile(user, {
        displayName: fullname.current.value
      }).then(() => {
        // Profile updated!
        // ...
        // updating store again
        const {email,displayName,uid} = auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
      }).catch((error) => {
        // An error occurred
        // ...
        setErrorMessage(error.message)
      });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+""+errorMessage);
    });
  
}else{
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+""+errorMessage)
    });
}

}
  return (
    <div className='relative h-screen w-screen'>
      <Header/>
      <img 
    className='absolute top-0 left-0 h-full w-full object-cover z-0'
    src={backgroundImage} alt='backgroundimage'
  />
      <form 
      style={{ backgroundColor: 'rgba(22, 22, 22, 0.7)' }}
      className='z-10  w-[80%] md:w-[60%] lg:w-[40%] xl:w-[34%] absolute p-4 px-6 my-28 mx-auto right-0 left-0 text-white rounded-lg'>
      
      <h1 className='font-bold text-3xl py-4'>{isSigninForm ? lang[language].signIn : "Sign Up"}</h1>
      
      {!isSigninForm && (
        <input 
          ref={fullname}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          type='text'
          placeholder='Full Name'
          className='p-4 my-4 w-full bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600'
        />
      )}
      
      <input 
        ref={email}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
        type='text'
        placeholder={lang[language].email}
        className='p-4 my-4 w-full bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600'
      />
      
      <input
        ref={password}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
        type='password'
        placeholder={lang[language].password}
        className='p-4 my-4 w-full bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600'
      />
      
      <button 
        onClick={handleButtonClick}
        className='p-4 my-6 bg-red-600 w-full rounded-lg hover:bg-red-700 transition duration-300'
      >
        {isSigninForm ? lang[language].signIn : "Sign Up"}
      </button>
      {isSigninForm &&
      <button 
      onClick={handleTestCredentials}
      className='p-4 my-6 bg-red-600 w-full rounded-lg hover:bg-red-700 transition duration-300'
    >
      Sign in with test credentials
    </button>
      }
      {errorMessage && <p className='font-bold text-lg py-2 text-red-600'>{errorMessage}</p>}
      
      <p
        onClick={handleToggle}
        className='py-4 cursor-pointer hover:underline transition duration-300'
      >
        {isSigninForm ? lang[language].newToNetflix : "Already registered? Sign in Now."}
      </p>
    </form>
      {/* <form 
       style={{ backgroundColor: 'rgba(22, 22, 22, 0.7)' }}
      className='z-10 w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>{isSigninForm?lang[language].signIn:"Sign Up"}</h1>
       {!isSigninForm &&<input 
       ref={fullname}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
        type='text'
        placeholder='Full Name'
        className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>}
        <input 
        ref={email}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
        type='text'
        placeholder={lang[language].email}
        className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
          <input
          ref={password}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          type='password'
        placeholder={lang[language].password}
        className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
        <button 
        onClick={handleButtonClick}
        className='p-4 my-6 bg-red-600 w-full rounded-lg'
        >{isSigninForm?lang[language].signIn:"Sign Up"}</button>
        {errorMessage && <p className='font-bold text-lg py-2 text-red-600'>{errorMessage}</p>}
       <p
       onClick={handleToggle}
       className='py-4 cursor-pointer'>{isSigninForm?lang[language].newToNetflix:"Already resgistered?Sing in Now."}</p>
      </form> */}
    </div>
  )
}

export default Login
