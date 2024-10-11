import React, { useState } from 'react';
import '../style/weather.css'
import rasm from '../image/weather_section.webp'
import rasm2 from '../image/mostly_clear.webp'
function Weather() {
    const [city, setCity] = useState("Guliston");

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };
    return (
        <div className='weather_section'>

            <div className="app-container">
                <div className="top-bar">
                    <div className="select">
                        <select value={city} onChange={handleCityChange} className="city-select">
                            <option value="Guliston">Guliston</option>
                            <option value="Toshkent">Toshkent</option>
                            <option value="Samarqand">Samarqand</option>
                            <option value="Buxoro">Buxoro</option>
                            <option value="Navoiy">Navoiy</option>
                            <option value="Andijon">Andijon</option>
                            <option value="Farg'ona">Farg'ona</option>
                            <option value="Qarshi">Qarshi</option>
                        </select>
                        <div className="date">26/09/2024</div>
                    </div>


                    <div className="weather">
                        <span className="temperature">+25,6</span>
                        <img src={rasm2} alt="Weather Icon" className="weather-icon" />
                    </div>
                    <div className="banner">
                        <img src={rasm} alt="2024 Banner" className="banner-image" />
                    </div>
                    <div className="exchange-rates">
                        <div className='exchange_div'> <p>26.09.2024 dan</p>
                            <h4>MB valyuta kurslari</h4>
                            <a className="cbu-link" href="https://cbu.uz/oz/arkhiv-kursov-valyut/" target="_blank" rel="noopener noreferrer">www.cbu.uz</a>
                        </div>
                        <div className="rates_money">
                            <div>1 AQSh dollari = 12757,65</div>
                            <div>1 evro = 14268,16</div>
                            <div>1 rubl = 138,05</div>
                            
                        </div>

                    </div>
                </div>




            </div>
        </div>
    )
}

export default Weather
