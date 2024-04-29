import React from 'react';
import Wallpaper from '@/Assets/Images/BackgroundText.png'
import Mickael from '@/Assets/Images/Mickael.png'
import Developpeur from '@/Assets/Images/Developpeur.png'
import Banner from '../../../Components/Banner/Banner';
import '../../../Assets/Css/home.css'

const Home = () => {  
    return (
        <div className='ParAccueilHome'>
            <div className='PeopleWallpaperDiv'>
                <img className="Wallpaper" src={Wallpaper} alt="Fond'écran tout noir" />
            </div>
            <div className='MickaelContainer'>
                <img className="Mickael" src={Mickael} alt="Titre avec mon prénom" />
            </div>
            <div className='DeveloppeurContainer'>
                <img className="Developpeur" src={Developpeur} alt="Texte avec écrit 'Developpeur en herbe" />
            </div>
        <Banner />
        </div>
    );
};

export default Home;

