import React from 'react';
import SignPortFolioImage from '../assets/Images/SignPortfolio.png'

const SignPortFolio = () => {
    return (
        <div>
            <img className="SignPortfolio" src={SignPortFolioImage} alt="Image contenant mon logo et mon nom et prénom" />
        </div>
    );
};

export default SignPortFolio;