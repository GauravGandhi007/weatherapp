import { useEffect, useState } from "react";
import InputField from "./components/InputField";
import Intro from "./components/Intro";
import TopBar from "./components/TopBar";
import axios from "axios";
import ForeCast from "./components/ForeCast";
import PersonalData from "./components/PersonalData";

function App() {
 
  const [Data, setData] = useState([])
  const [city, setCity] = useState('Jaunpur')
  const [bg, setBg]= useState("")


  useEffect(()=>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5e491bce70189fb614f84fc4b4463b86`

    axios.get(url).then(response => {
      handleBg(response.data.weather[0].id)
      setData(response.data)

    }).catch(err =>{
      console.log(err);
    })

  },[city])

  function handleBg(id){

    if( id>= 200 && id <300){
      setBg("bg-[url('./components/images/ThunderStorm.webp')]")
    }
    else if(id>=300 && id<600){
      setBg("bg-[url('./components/images/Drizzle.webp')]")
    }
    else if(id>=600 && id<700){
      setBg("bg-[url('./components/images/Snow.webp')]")
    }
    else if(id>=700 && id<800){
      setBg("bg-[url('./components/images/Haze.webp')]")
    }
    else if(id>=801 && id<900){
      setBg("bg-[url('./components/images/Clouds.webp')]")
    }
    else{
      setBg("bg-[url('./components/images/Clear.webp')]")
    }
  }


  return (
    <>
    
      { Data.length === 0 ? (<div>Loading...</div>) : (<div className= {`w-full pb-8 bg-cover text-white h-fit ${bg}`}>
      <TopBar cityStateChanger={setCity}/>
      <InputField cityStateChanger={setCity}/>
      <Intro name ={Data.name}  countrycode = {Data.sys.country} temperature ={Math.floor(Data.main.temp/10)} description = {Data.weather[0].description} icon={Data.weather[0].icon} sunrise = {new Date(Data.sys.sunrise * 1000).toLocaleTimeString()} sunset = {new Date(Data.sys.sunset * 1000).toLocaleTimeString()} visibility={Data.visibility/1000} wind={Data.wind.speed} maximum = {Math.floor(Data.main.temp_max / 10)} minimum = {Math.floor(Data.main.temp_min / 10)} humidity = {Data.main.humidity} cloud = {Data.clouds.all} />
      <ForeCast lat={Data.coord.lat} long={Data.coord.lon}/>
      <PersonalData/>
      </div>) }
    </>
  );
}

export default App;
