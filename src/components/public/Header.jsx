import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='Header'>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/home">Acceuil</Link></li>
                        <li>Mes projets</li>
                        <li>Biographie</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;