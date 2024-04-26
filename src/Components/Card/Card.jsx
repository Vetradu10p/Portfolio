import React from "react";

const Card = ({ project }) => {
    const { cover, description, title } = project;

    return (
        <li className='Card'>
            <div className='ImageContainer'>
                <img className='Card-image' src={cover} alt="Card d'un projet" />
            </div>
            <p className='Description'>{description}</p>
            <h2 className="Title">{title}</h2>
        </li>
    );
};

export default Card;