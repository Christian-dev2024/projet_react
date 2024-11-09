import React, { useState } from 'react'
import './App.css'
import SearchIcon from '@mui/icons-material/Search';

const Card = ({temperature, ville, humidité, vent, meteo, icon, handleSearch, prevision, erreur}) => {

    const[city, setCity] = useState('') ;
    const handleClick = () => {
        handleSearch(city)
    }
    
    return (
        <div className='container'>
            <div className="erreur">
                <p>{erreur}</p>
            </div>
            <div className='search' >
                <div className="logo">
                    <p>Weatther Globe</p>
                    <img src="/image/cloudy.png" alt="logo" />
                </div>
                <input type='text' value={city} placeholder='Enter city name' onChange={e => setCity(e.target.value)}/>
                <button onClick={handleClick}><SearchIcon/></button>
            </div>
            <div className={`weather ${erreur ? 'hidden' : ''}`}>
                <div className="info">
                    <img src={icon} alt="" />
                        <h1>{meteo} , {temperature}°C</h1>
                        <h2>{ville}</h2>
                </div>
                <div className="details">
                    <div className="box">
                        <img src='/image/water.png'/>
                            <div className="text">
                                <p>Humidity</p>
                                <p>{humidité} %</p>
                            </div>
                    </div>
                    <div className="box">
                        <img src='/image/wind.png'/>
                            <div className="text">
                                <p>wind</p>
                                <p>{vent} m/s</p>
                            </div>
                    </div>
                </div>
                <div className='prevision'> 
                    {prevision.map((forecast, index) => 
                        ( <div key={index} className='box-previson'> 
                            <p>{new Date(forecast.dt * 1000).toLocaleString()}
                            </p> {forecast.weather.map((weather, i) => ( 
                                <div key={i}> 
                                    <img src={`https://openweathermap.org/img/wn/${weather.icon}.png`} alt={weather.description} /> 
                                    <p>{Math.round(forecast.main.temp)}°C</p>
                                    <p>{weather.description}</p> 
                                </div> ))} 
                    </div> ))} 
                </div>
            </div>
                <div>
                </div>
                
        </div>
    )
}

export default Card ;