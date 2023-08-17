// import React from 'react'
import {BsSunriseFill, BsSunset, BsEyeFill, BsWind, BsFillCaretUpFill, BsFillCaretDownFill, BsDropletFill, BsFillCloudsFill} from 'react-icons/bs'

function Intro({name, countrycode, temperature, description, icon, sunrise, sunset, visibility, wind, maximum, minimum, humidity, cloud}) {
  return (
    <>
    <div className='flex flex-col justify-center items-center text-center my-10'>
        <div>
            <h3 className='font-semibold text-3xl text-white mb-8'>{name}{countrycode}</h3>
            <h3 className='font-bold text-2xl mb-8'>{temperature}&deg;C</h3>
            <h3 className='font-bold text-2xl text-white'>{description}</h3>
            <img className='w-full hover:scale-75 duration-500' src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt='icon'/>
        </div>
        <div className='flex flex-col justify-center items-center text-center gap-5'>
            <div className='flex flex-row gap-5'>
                <p className='flex flex-row gap-3 hover:scale-90 duration-300'><BsSunriseFill size={25}/>Sunrise - {sunrise}</p> |
                <p className='flex flex-row gap-3 hover:scale-90 duration-300'><BsSunset size={25}/>Sunset - {sunset}</p>
            </div>
            <div className='flex flex-row gap-5'>
                <p className='flex flex-row gap-3 hover:scale-90 duration-300'><BsEyeFill size={25}/>Visibility - {visibility} km</p> |
                <p className='flex flex-row gap-3 hover:scale-90 duration-300'><BsWind size={25}/>Wind - {wind} km/hr</p>
            </div>
            <div className='flex flex-row gap-5'>
                <p className='flex flex-row gap-3 hover:scale-90 duration-300'><BsFillCaretUpFill size={25}/>Maximum - {maximum} &deg;C</p> |
                <p className='flex flex-row gap-3 hover:scale-90 duration-300'><BsFillCaretDownFill size={25}/>Minimum - {minimum} &deg;C</p>
            </div>
            <div className='flex flex-row gap-5'>
                <p className='flex flex-row gap-3 hover:scale-90 duration-300'><BsDropletFill size={25}/>Humidity - {humidity} %</p> |
                <p className='flex flex-row gap-3 hover:scale-90 duration-300'><BsFillCloudsFill size={25}/>Clouds - {cloud} %</p>
            </div>

             
        </div>

    </div>
      
    </>
  )
}

export default Intro;
