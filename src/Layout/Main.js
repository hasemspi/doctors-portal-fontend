import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shares/Footer/Footer';
import Navbar from '../Pages/Shares/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet>

            </Outlet>
            <Footer />
        </div>
    );
};

export default Main;