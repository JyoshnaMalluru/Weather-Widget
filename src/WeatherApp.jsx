import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo] = useState({
        city : "Delhi",
        feelsLike : 36.05,
        humidity : 94,
        temp : 29.05,
        tempMax : 29.05,
        tempMin : 29.05,
        weather : "mist"
    })
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h1 style={{color: "gray",fontFamily:"sans-serif"}}>Weather Widget</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}