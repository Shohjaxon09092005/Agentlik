import React from 'react';

import '../style/map.css'

function Map() {
    return (
        <div className='map_uzb'>

            <div className="app-container">
                <div className="map-container">
                    <img width={500} className='map_img' src="https://sirdaryagus.uz/wp-content/uploads/2024/02/Sirdaryo.png" alt="Hududiy bo’limlar" />

                </div>

                <div className="card-container">
                    <div className="header">
                        <p>HUDUDIY BOSHQARMALAR</p>
                        <p>SIRDARYO VILOYATI BOSHQARMASI</p>
                    </div>
                    <div className="person-info">
                        <h2>Turdimurodov Azizbek Maxammatqul o'g'li</h2>
                        <p><strong>Lavozim:</strong> O'zbekiston Respublikasi Yoshlar ishlari agentligi Sirdaryo viloyati boshqarmasi boshlig'i</p>
                        <p><strong>Manzil:</strong> Guliston shahar, Yangi hayot, Navoiy ko'chasi 24-uy</p>
                        <p><strong>Telefon:</strong><a href="#!">   +998672366793</a> </p>
                        <p><strong>Qabul kunlari:</strong> Dushanba - Juma 09:00 - 12:00</p>
                        <p> <a href="#!">azizbekturdimurodov10@gmail.com</a></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Map
