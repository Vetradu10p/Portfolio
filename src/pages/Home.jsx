import React, { useState } from 'react';
import Header from '../components/public/Header';
import AccueilHome from '../components/AccueilHome';
import Footer from '../components/public/Footer';

const Home = () => {  
    return (
      <div>
        <Header />
        <AccueilHome />
        <Footer />
      </div>
    );
};

export default Home;