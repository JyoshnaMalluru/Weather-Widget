import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "2f78aae209e0791e5fb8eda0151bd4ba"
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    let getWeatherInfo = async() => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city : city,
                temp : jsonResponse.main.temp,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }catch(err){
        throw err;
        }
    };
    let handleChange =(evt) => {
        setCity(evt.target.value);
    }
    let handleSubmit = async(evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }  
    }
    
     return(
        <div className='SearchBox'>
           <form onSubmit={handleSubmit}>
           <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required/>
           {/* <br></br><br></br> */}&nbsp;&nbsp;
           <Button variant="contained"type="submit"style={{marginTop:"8px",background:"gray"}}>Search</Button>
            {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}