import React from 'react';
import './acceuilHome.scss';
import PeopleWallpaper from './BackOne';

const AccueilHome = () => {
    return (
        <div className='ParAccueilHome'>
           <div className='Fond_1'><PeopleWallpaper /></div>
           <div className='Fond_2'></div>
           <div className='Fond_3'></div>
        </div>
    );
};

export default AccueilHome;