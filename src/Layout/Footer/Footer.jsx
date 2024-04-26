import React from 'react';

import './footer.css'

import LogPortFolioImage from '@/Assets/Images/LogoPortfolio.png'
const Footer = () => {
    return (
        <div className='Footer'>
            <div>
                <img className="LogPortFolio" src={LogPortFolioImage} alt="Image contenant mon logo" />
            </div>
            <p>Tous droit réservé</p>
        </div>
    );
};

export default Footer;