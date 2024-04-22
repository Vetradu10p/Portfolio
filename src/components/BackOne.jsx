import React from 'react';
import PeopleWallImage from '../assets/Images/PeopleWallpaper.jpg'
import './backOne.scss'

const PeopleWallpaper = () => {
    return (
        <div>
            <img className="PeopleWallpaper" src={PeopleWallImage} alt="Image contenant un fond d'écran flouté" />
        </div>
    );
};

export default PeopleWallpaper;