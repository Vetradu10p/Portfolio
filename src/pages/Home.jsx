import React, { useState } from 'react';
import Header from '../components/public/Header';
import Footer from '../components/public/Footer';
import AccueilHome from '../components/AccueilHome';

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