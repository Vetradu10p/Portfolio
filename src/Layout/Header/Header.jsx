import React from 'react';
import { Link } from 'react-router-dom';

import SignPortFolioImage from "@/Assets/Images/SignPortfolio.png"

import './header.css'

const Header = () => {
    return (
        <div className='Header'>
            <header>
                <nav>
                    <div>
                        <img className="SignPortfolio" src={SignPortFolioImage} alt="Image contenant mon logo et mon nom et prénom" />
                    </div>
                    <ul>
                        <li className='homeHeader'><Link to="/home">Acceuil</Link></li>
                        <li className='project'><Link to="/project">Projets</Link></li>
                        <li className='aboutHeader'><Link to="/about">Biographie</Link></li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header; 