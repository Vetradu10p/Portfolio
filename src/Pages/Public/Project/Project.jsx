import React from 'react';
import { NavLink } from 'react-router-dom';
import ProjetService from '@/_Service/ProjectService';
import Card from '@/Components/Card/Card';


import PeopleWallImage from '@/Assets/Images/Background.jpg'

const Project = () => {
    return (
        <div className='ProjetContainer'>
            <div className='PeopleWallpaperDiv'>
                <img className="PeopleWallpaper" src={PeopleWallImage} alt="Image contenant un fond d'écran noir et bleu" />
            </div>
            <ul className='ProjetGallery'>
                {
                    ProjetService.GetAllProjet().map((projet) =>
                      <NavLink key={projet.id} to={"/ProjetDetail/" + projet.id}>
                          <Card project={projet} />
                      </NavLink>
                    )
                } 
            </ul>
        </div>
    );
};

export default Project;
