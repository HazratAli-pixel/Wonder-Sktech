import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='container mx-auto bg-slate-100 rounded-md'>
                <Outlet/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;