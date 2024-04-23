import React from 'react';
import ProjectPageImage from '../assets/Images/ProjectPage.jpg';
import './projectWallpaper.scss';

const ProjectWallpaper = () => {
    return (
        <div className='ProjetPageDiv'>
            <img className="ProjetPage" src={ProjectPageImage} alt="Fond d'écran bleu exagonal" />
        </div>
    );
};

export default ProjectWallpaper;
