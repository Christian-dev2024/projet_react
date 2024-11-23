import React, { useEffect } from 'react'
import './preLoader.css'
import { preLoaderAnim } from './animations';

const PreLoader = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[]);   

    return (
        <div className='preloader'>
            <div className="texte-preloader">
                <span>Weather</span>
                <span>Globle</span>
                <span><img src="/image/contrast.png" alt="logo" /></span>
            </div>
            <div className="motif">
                <div className="motifs-2"></div>
                <div className="motifs-1"></div>
            </div>
        </div>
    )
}

export default PreLoader