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
                <span>Weatther</span>
                <span>Globle</span>
                <span><img src="/image/contrast.png" alt="logo" /></span>
            </div>
        </div>
    )
}

export default PreLoader