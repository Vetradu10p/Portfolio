import React from 'react';
import './acceuilHome.scss';
import PeopleWallpaper from './BackOne';
import MyselfWallpaper from './BackTwo';

const AccueilHome = () => {
    return (
        <div className='ParAccueilHome'>
            <PeopleWallpaper />
            <MyselfWallpaper />
        </div>
    );
};

export default AccueilHome;