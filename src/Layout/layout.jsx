import React from 'react';

import Header from '@/Layout/Header/Header';
import Footer from '@/Layout/Footer/Footer';

import { Outlet } from 'react-router-dom';

import "./layout.css";

const Layout = () => {
    return (
        <div className='layout'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;