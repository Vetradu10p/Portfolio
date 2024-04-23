import React from 'react';
import PeopleWallImage from '../assets/Images/PeopleWallpaper.png'
import './backOne.scss'

const PeopleWallpaper = () => {
    return (
        <div className='PeopleWallpaperDiv'>
            <img className="PeopleWallpaper" src={PeopleWallImage} alt="Image contenant un fond d'écran flouté" />
        </div>
    );
};

export default PeopleWallpaper;