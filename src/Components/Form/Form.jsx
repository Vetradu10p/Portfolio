import React, { useState } from 'react';

import Wallpaper from '@/Assets/Images/Background.avif'

import '../../Assets/Css/form.css'

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='BioContainer'>
            <div className='Background'>
                <img className="PeopleWallpaper" src={Wallpaper} alt="Image contenant un fond d'écran couleur or" />
            </div>
            <div className="FormContainer">
                <h1>Contactez-moi</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">Prénom</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Nom</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
                <div className="CvDownload">
                    <a href="../../Assets/Cv/cv.pdf" download> Téléchargez mon CV </a>
                </div>
            </div>
        </div>
    );
};

export default Form;
