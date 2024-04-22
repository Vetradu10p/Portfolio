import React from 'react';
import LogPortFolioImage from '../assets/Images/LogoPortfolio.png'

const LogPortFolio = () => {
    return (
        <div>
            <img className="LogPortFolio" src={LogPortFolioImage} alt="Image contenant mon logo" />
        </div>
    );
};

export default LogPortFolio;