import React from 'react';
import LogoService from '@/_Service/LogoService';

import '../../Assets/Css/banner.css';

const Banner = () => {
    const logosData = LogoService.GetAllLogo();

    return (
        <div className='Slider'>
            <div className="LogoContainer">
                <ul className='LogoGallery'>
                    {logosData.map((logoGroup, index) => (
                        <li className='LogoLi' key={index}>
                            {logoGroup.logo.map((url, innerIndex) => (
                                <img key={innerIndex} src={url} alt={`Logo ${index}-${innerIndex}`} />
                            ))}
                        </li>
                    ))}
                </ul>
            </div>            
        </div>
    );
};

export default Banner;
