import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ForeCast({lat, long}) {
  console.log(lat , long)
  const[forCastData, setForCastData]= useState([])


useEffect(()=>{
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=5e491bce70189fb614f84fc4b4463b86`
    console.log(url)
    axios.get(url).then(response =>{
        
        setForCastData(response.data.list)
        console.log(forCastData)
      })
      .catch(err =>{
        console.log(err)
      })
},[lat, long])

  return (
    <>
    <div className='flex flex-col justify-center items-center text-center gap-5  '>
        <h2 className='text-4xl font-bold mb-3'>UPCOMING FORCAST</h2>
        
        <div className='grid grid-cols-4 w-full md:w-[90%] text-lg md:grid-cols-8 gap-2 md:gap-3 '>{
            forCastData.map(item => (
                <div className="shadow-lg md:hover:shadow-md shadow-slate-300 flex flex-col text-sm md:text-lg p-1 rounded-md justify-center text-center items-center border hover:scale-75 duration-500">
                    <p>{item.dt_txt.split(" ")[0]}</p>
                    <p>{item.dt_txt.split(" ")[1]}</p>
                    <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='forCast-icon'/>
                    <p>{item.weather[0].description}</p>
                    <p>{Math.floor(item.main.temp/10)}&deg;C</p>

                </div>
              
            ))
        }
        </div>
    </div>
</>
  )
}

export default ForeCast
