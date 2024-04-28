import React from 'react';
import PeopleWallImage from '@/Assets/Images/Background.jpg'
import Banner from '../../../Components/Banner/Banner';
import '../../../Assets/Css/home.css'

const Home = () => {  
    return (
        <div className='ParAccueilHome'>
            <div className='PeopleWallpaperDiv'>
                <img className="PeopleWallpaper" src={PeopleWallImage} alt="Image contenant un fond d'écran noir et bleu" />
            </div>
        <Banner />
        </div>
    );
};

export default Home;

