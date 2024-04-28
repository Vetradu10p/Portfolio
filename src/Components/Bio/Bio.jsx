import React from 'react';
import PeopleWallImage from '@/Assets/Images/Background.jpg'

import '../../Assets/Css/bio.css'

const Bio = () => {
    return (
        <div className='BioContainer'>
            <div className='Background'>
                <img className="PeopleWallpaper" src={PeopleWallImage} alt="Image contenant un fond d'écran couleur or" />
            </div>
            <div className="PContainer">
                <p className='PClass'>
                    Depuis que je suis enfant, le monde du multimédia et du digital m'a toujours fasciné. Que ce soit à travers les jeux vidéos, les films captivants, les séries palpitantes, les mangas remplis d'aventures ou les animés éblouissants, j'ai toujours été intrigué par la manière dont ces médias parviennent à transporter les spectateurs dans des mondes extraordinaires. Cette passion pour le digital a guidé mes choix depuis longtemps, c'est pourquoi j'ai décidé de suivre une formation de développeur web chez Openclassroom.
                </p>
                <p>
                    Cette formation m'a permis de concrétiser ma passion en acquérant les compétences nécessaires pour créer des expériences numériques uniques. Que ce soit en concevant des sites web interactifs, en développant des applications innovantes ou en explorant de nouvelles technologies, je trouve une satisfaction immense dans la création et la manipulation de contenus digitaux. Pour moi, être développeur web va bien au-delà du simple codage: C'est une opportunité de donner vie à mes idées et de partager ma passion pour le digital avec le monde entier.
                </p>
            </div>
        </div>
    );
};

export default Bio;