import React from 'react';
import { NavLink } from 'react-router-dom';
import ProjetService from '@/_Service/ProjectService';
import Card from '@/Components/Card/Card';
import PeopleWallImage from '@/Assets/Images/Background.jpg'

import '../../../Assets/Css/project.css'


const Project = () => {
    return (
        <div className='ProjetContainer'>
            <div className='Background'>
                <img className="PeopleWallpaper" src={PeopleWallImage} alt="Image contenant un fond d'écran couleur or" />
            </div>
            <div className='UlContainer'>
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
        </div>
    );
};

export default Project;
