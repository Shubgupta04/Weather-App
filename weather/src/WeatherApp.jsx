import SearchBox from "./SearchBox";
import InfoBox from './InfoBox';
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo]=useState(
        {
            city:"delhi",
            feelslike:41.37,
            humidity:11,
            temp: 43.95,
            tempMax: 44.05,
            tempMin:43.95,
            weather:"haze",
        });
        let updateInfo = (newInfo)=>{
            setWeatherInfo(newInfo);
        }
  return (
    <div style={{textAlign:'center'}}>
      <h2>Weather App by Shubham</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info = {weatherInfo}/>
    </div>
  )
}
