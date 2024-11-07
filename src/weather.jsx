import React, { useEffect, useState } from 'react'
import Card from './cardWeather';
import axios from 'axios';

const Weather = () => {

    const[celcus, setCelcus] = useState('') ;

    const[cityName, setCtityName] = useState('') ;

    const[humidity, setHumidity] = useState('') ;

    const[wind, setWind] = useState('') ;

    const[condition, setCondition] = useState('') ;

    const[image, setImage] = useState('') ;

    const[error, setError] = useState('') ;

    useEffect(()=>{
        Click('Yopougon')
    }, []);

    function Click (city){    // recupéraion des données api
        if(city !== ''){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7b76a42edcda1c5a30c28ff1377bf927&units=metric`)
            .then(res => {
                console.log(res.data) ;
                setCelcus(Math.round(res.data.main.temp)) ;
                setCtityName(res.data.name) ;
                setHumidity(Math.round(res.data.main.humidity)) ;
                setWind(Math.round(res.data.wind.speed)) ;
                setCondition(res.data.weather[0].main) ;
                setError('') ;
                let imgWeather = '' ;
                console.log(imgWeather);
                switch (res.data.weather[0].main) {  // changement d'icon en fonction de la meteo
                    case 'Clouds':
                        imgWeather = '/image/clouds.png';
                        break;
                    case 'Clear':
                        imgWeather = '/image/contrast.png';
                        break;
                    case 'Rain':
                        imgWeather = '/image/rain.png';
                        break;
                    case 'Drizzle':
                        imgWeather = '/image/drizzle.png';
                        break;
                    case 'Thunderstorm':
                        imgWeather = '/image/storm.png';
                        break;
                    case 'Snow':
                        imgWeather = '/image/snow.png';
                        break;
                    case 'Mist':
                        imgWeather = '/image/mist.png';
                        break;
                    case 'Fog':
                        imgWeather = '/image/fog.png';
                        break;
                    default:
                        imgWeather = '/image/sun.png';
                        break;
                }
                setImage(imgWeather)
            })
            .catch(err => {
                if (err.response) {
                    console.log(err.response.status);
                    if (err.response.status === 404) {
                        setError('City Not found..');
                    } else {
                        setError(''); // Réinitialise l'erreur si le statut n'est pas 404
                    }
                } else {
                    console.error('Erreur lors de la récupération des données :', err);
                }
            });
            
        }
    }    
    return (
        <div>
            <Card temperature={celcus} ville={cityName} humidité={humidity} 
            vent={wind} handleSearch={Click} meteo={condition} icon={image} erreur={error}/>
        </div>
    )
}

export default Weather