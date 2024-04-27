import React from 'react';
import { NavLink } from 'react-router-dom'; 
import PeopleWallImage from '@/Assets/Images/Background.png'
import ProjetService from '@/_Service/ProjectService';
import Card from '@/Components/Card/Card';
import '../../../Assets/Css/home.css'

const Home = () => {  
    return (
        <div className='ParAccueilHome'>
            <div className='PeopleWallpaperDiv'>
                <img className="PeopleWallpaper" src={PeopleWallImage} alt="Image contenant un fond d'écran noir et bleu" />
            </div>
        </div>
    );
};

export default Home;

