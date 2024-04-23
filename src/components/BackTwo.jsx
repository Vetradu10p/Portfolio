import React from 'react';
import MyselfImage from '../assets/Images/MySelfOnly.png'
import './backTwo.scss'

const MyselfWallpaper = () => {
    return (
        <div className='MyselfOnlyDiv'>
            <img className='MySelfOnly' src={MyselfImage} alt="Photo portrait de moi" />
        </div>
    );
};

export default MyselfWallpaper;