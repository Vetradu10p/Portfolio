import React from "react";

import '../../Assets/Css/card.css'

const Card = ({ project }) => {
    const { cover, description, title } = project;
    const link = 'https://vetradu10p.github.io/Openclassrooms-Booki/';

    return (
        <li className='Card'>
            <a href={link} target="_blank" rel="noopener noreferrer" className="Card-link">
                <div className='ImageContainer'>
                    <img className='Card-image' src={cover} alt="Card d'un projet" />
                </div>
                <p className='Description'>{description}</p>
                <h2 className="Title">{title}</h2>
            </a>
        </li>
    );
};

export default Card;
