import React, { useState } from 'react'
import './App.css'
import SearchIcon from '@mui/icons-material/Search';

function Card({temperature, ville, humidité, vent, meteo, icon, handleSearch, erreur}) {

    
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
            </div>
        </div>
    )
}

export default Card