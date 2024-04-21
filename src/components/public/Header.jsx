import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss'
import SignPortFolio from '../SignaturePortFolio';

const Header = () => {
    return (
        <div className='Header'>
            <header>
                <nav>
                    < SignPortFolio />
                    <ul>
                        <li className='homeHeader'><Link to="/home">Acceuil</Link></li>
                        <li>Projets</li>
                        <li className='aboutHeader'><Link to="/about">Biographie</Link></li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header; 