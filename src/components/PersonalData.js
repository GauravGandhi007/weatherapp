import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'

function PersonalData() {
  return (
    <>
    <div className='flex flex-row p-5 my-5 justify-center items-center gap-10 border-y-2 border-white'>
    <div className='flex gap-2'>
        <a href='https://github.com/GauravGandhi007'>
            <BsGithub size={28} />
        </a>
        <a href='https://www.linkedin.com/in/gaurav-gandhi-b0a797248'>
            <BsLinkedin size={28}/>
        </a>
    </div>
    <div>
        <p className='text-sm font-bold'>Design & Developed by <a className='hover:text-blue-500 hover:text-xl' href='https://www.linkedin.com/in/gaurav-gandhi-b0a797248'>Gaurav Gandhi.</a></p>
    </div>
    </div>
    <div>
    <p className='text-center font-thin font-sans text-sm'>&#169; 2023 Weather, Inc. Weather and sun design are registered trademarks of Weather, Inc. All Rights Reserved.</p>
    </div>
    </>
  )
}

export default PersonalData
