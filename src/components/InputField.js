import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'

function InputField({cityStateChanger}) {

const[ userInput, setUserInput]=useState("")

function handleChange(event){
  // console.log(event.target.value)
  setUserInput(event.target.value)
}

function handleSubmit(event){
  event.preventDefault()
  // console.log(userInput)
  cityStateChanger(userInput)
  setUserInput("")
}

  return (
    <>
    <div className='flex flex-row justify-center items-center w-[70%] md:w-[50%] mx-auto mt-20'>
    <form onSubmit={handleSubmit} className='w-full flex flex-row gap-3'>
        <input onChange={handleChange} value={userInput}  className='border-2 border-black shadow-lg  p-2 shadow-slate-400 md:hover:shadow-md md:hover:shadow-slate-600 w-full text-black text-sm md:hover:text-xl text-center rounded-xl' type='text' placeholder='Search the City'></input>
        <button type='submit'> <BsSearch size={35} color='white'/></button>
    </form>
    
    </div>
    </>
  )
}

export default InputField
