

import React from 'react'

function TopBar({cityStateChanger}) {

    const data = [
        {title : "Mumbai", id : "1"},
        {title : "Delhi", id : "2"},
        {title : "Chennai", id : "3"},
        {title : "Hyderabad", id : "4"},
        {title : "Kolkata", id : "5"},
    ]

    function handleClick(e){
      cityStateChanger(e.target.value)
    }

  return (
    <>

    <h1 className='font-thin text-center text-2xl shadow-md shadow-slate-800 py-4'>
        TOP SEARCHES
    </h1>
    <div className='flex justify-around text-sm md:text-2xl font-bold mt-5 '>
       {data.map(city=>(
        <button value={city.title} onClick={handleClick} className='hover:text-red-400 mx-auto hover:scale-75 duration-500' key={city.id}>{city.title}</button>
     ))}  
     </div>
          
    </>
  )
}

export default TopBar
